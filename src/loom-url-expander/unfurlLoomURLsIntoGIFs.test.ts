import unfurlLoomURLsIntoGIFs from "./unfurlLoomURLsIntoGIFs";

describe("unfurlLoomURLsIntoGIFs", () => {
  it("works with a single Loom link", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      "https://www.loom.com/share/3739163d58bb419ba51ac893412b5774"
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 1,
      didMakeLoomPreviewChange: true,
      stringWithUnfurledLoomURLs:
        "[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)",
    });
  });

  it("works when the URL is appended to other text", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      "Check out this change: https://www.loom.com/share/3739163d58bb419ba51ac893412b5774"
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 1,
      didMakeLoomPreviewChange: true,
      stringWithUnfurledLoomURLs: `Check out this change:
[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)`,
    });
  });

  it("works with multiple Loom links, one on each line", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      `https://www.loom.com/share/3739163d58bb419ba51ac893412b5774
https://www.loom.com/share/c973ee1b21044179877a08e299d56c12`
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 2,
      didMakeLoomPreviewChange: true,
      stringWithUnfurledLoomURLs: `[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)
[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/c973ee1b21044179877a08e299d56c12-00001.gif)](https://www.loom.com/share/c973ee1b21044179877a08e299d56c12)`,
    });
  });

  it("works with multiple Loom links, separated by newlines", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      `https://www.loom.com/share/3739163d58bb419ba51ac893412b5774

https://www.loom.com/share/c973ee1b21044179877a08e299d56c12`
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 2,
      didMakeLoomPreviewChange: true,
      stringWithUnfurledLoomURLs: `[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)

[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/c973ee1b21044179877a08e299d56c12-00001.gif)](https://www.loom.com/share/c973ee1b21044179877a08e299d56c12)`,
    });
  });

  it("works with multiple Loom links, separated by newlines, with more text", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      `The change in this PR is very important to me. I put a lot of effort into it.

See the following video for a demo of this change:
https://www.loom.com/share/3739163d58bb419ba51ac893412b5774`
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 1,
      didMakeLoomPreviewChange: true,
      stringWithUnfurledLoomURLs: `The change in this PR is very important to me. I put a lot of effort into it.

See the following video for a demo of this change:
[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)`,
    });
  });

  it("doesn't touch already-unfurled links", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      `The change in this PR is very important to me. I put a lot of effort into it.

See the following video for a demo of this change:
[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)`
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 0,
      didMakeLoomPreviewChange: false,
      stringWithUnfurledLoomURLs: `The change in this PR is very important to me. I put a lot of effort into it.

See the following video for a demo of this change:
[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)`,
    });
  });

  it("doesn't touch inline already-unfurled links", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      `The change in this PR is very important to me. I put a lot of effort into it. See the following video for a demo of this change: [![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)`
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 0,
      didMakeLoomPreviewChange: false,
      stringWithUnfurledLoomURLs: `The change in this PR is very important to me. I put a lot of effort into it. See the following video for a demo of this change: [![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)`,
    });
  });

  it("it'll unfurl links as needed, but still doesn't touch inline already-unfurled links", async () => {
    const response = unfurlLoomURLsIntoGIFs(
      `The change in this PR is very important to me. I put a lot of effort into it. See the following video for a demo of this change: [![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)

https://www.loom.com/share/c973ee1b21044179877a08e299d56c12`
    );
    expect(response).toEqual({
      numLoomURLsUnfurled: 1,
      didMakeLoomPreviewChange: true,
      stringWithUnfurledLoomURLs: `The change in this PR is very important to me. I put a lot of effort into it. See the following video for a demo of this change: [![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/3739163d58bb419ba51ac893412b5774-00001.gif)](https://www.loom.com/share/3739163d58bb419ba51ac893412b5774)

[![LOOM DEMO](http://cdn.loom.com/sessions/thumbnails/c973ee1b21044179877a08e299d56c12-00001.gif)](https://www.loom.com/share/c973ee1b21044179877a08e299d56c12)`,
    });
  });
});
