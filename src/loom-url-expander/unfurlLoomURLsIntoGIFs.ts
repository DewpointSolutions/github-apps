export const unfurlLoomURLsIntoGIFs = (
  input: string
): {
  didMakeLoomPreviewChange: boolean;
  stringWithUnfurledLoomURLs: string;
} => {
  let didMakeLoomPreviewChange = false;
  const lines = input
    .split("\r\n")
    .flatMap((line) => line.split("\n"))
    .flatMap((line) => {
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
      const embeddedPreview = `[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/${loomID}-00001.gif)](https://www.loom.com/share/${loomID})`;

      if (line.trim().toLowerCase() === embeddedPreview.trim().toLowerCase()) {
        // No change
        return [line];
      } else if (line.trim().includes(loomID.toLowerCase())) {
        const parts = line.trim().split("https");
        if (parts.length > 1) {
          // Preserve the first part of the line
          didMakeLoomPreviewChange = true;
          return [parts[0].trim(), embeddedPreview].filter((line) => !!line);
        } else {
          // Replace line directly with the preview
          didMakeLoomPreviewChange = true;
          return [embeddedPreview];
        }
      } else {
        // Append the preview
        didMakeLoomPreviewChange = true;
        return [line, "\n", embeddedPreview];
      }
    });

  return {
    didMakeLoomPreviewChange,
    stringWithUnfurledLoomURLs: lines.join("\n"),
  };
};

export default unfurlLoomURLsIntoGIFs;
