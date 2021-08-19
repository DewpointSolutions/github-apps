import parsePullRequestReviewCommentEvent from "./parsePullRequestReviewCommentEvent";
import pullRequestReviewCommentCreatedPayload from "./fixtures/pr-review-comment";

describe("parsePullRequestReviewCommentEvent", () => {
  it("parses as expected", async () => {
    const response = parsePullRequestReviewCommentEvent(
      pullRequestReviewCommentCreatedPayload
    );

    expect(response).toEqual({
      comment: {
        id: 692415992,
        body:
          "This is a review line comment\r\n" +
          "\r\n" +
          "https://www.loom.com/share/1534eef778074753b39bb7e032d23cc5",
      },
      repository: {
        owner: { login: "DewpointSolutions" },
        name: "github-apps",
      },
      installation: { id: 18177860 },
    });
  });
});
