import fetch from "node-fetch";

export const unfurlLoomURLsIntoGIFs = async (
  input: string
): Promise<{
  didMakeLoomPreviewChange: boolean;
  stringWithUnfurledLoomURLs: string;
  numLoomURLsUnfurled: number;
}> => {
  let didMakeLoomPreviewChange = false;
  let numLoomURLsUnfurled = 0;
  const lines = await Promise.all(
    input
      .split("\r\n")
      .flatMap((line) => line.split("\n"))
      .map(async (line) => {
        const loomMatch = line.match(
          /https:\/\/www.loom.com\/share\/([A-Za-z0-9]+)/
        );
        const existingLoomPreviewMatch = line.match(
          /\)\]\(https:\/\/www.loom.com\/share\/([A-Za-z0-9]+)\)/
        );
        if (existingLoomPreviewMatch) {
          return line;
        }
        if (!loomMatch) {
          return line;
        }
        const loomID = loomMatch[1];
        if (!loomID) {
          console.error("strange: found one of url OR loomID, but not both");
          return line;
        }

        // Fetch the actual GIF URL from Loom API
        const apiUrl = `https://www.loom.com/v1/oembed?url=https://www.loom.com/share/${loomID}&gif=true`;
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          const gifUrl = data.thumbnail_url;

          const embeddedPreview = `[![LOOM DEMO](${gifUrl})](https://www.loom.com/share/${loomID})`;

          if (
            line.trim().toLowerCase() === embeddedPreview.trim().toLowerCase()
          ) {
            // No change
            return line;
          } else if (line.trim().includes(loomID.toLowerCase())) {
            const parts = line.trim().split("https");
            if (parts.length > 1) {
              // Preserve the first part of the line
              didMakeLoomPreviewChange = true;
              numLoomURLsUnfurled += 1;
              return [parts[0].trim(), embeddedPreview]
                .filter((l) => !!l)
                .join("\n");
            } else {
              // Replace line directly with the preview
              didMakeLoomPreviewChange = true;
              numLoomURLsUnfurled += 1;
              return embeddedPreview;
            }
          } else {
            // Append the preview
            didMakeLoomPreviewChange = true;
            numLoomURLsUnfurled += 1;
            return `${line}\n${embeddedPreview}`;
          }
        } catch (error) {
          console.error("Error fetching Loom data:", error);
          return line;
        }
      })
  );

  return {
    didMakeLoomPreviewChange,
    stringWithUnfurledLoomURLs: lines.join("\n"),
    numLoomURLsUnfurled,
  };
};

export default unfurlLoomURLsIntoGIFs;
