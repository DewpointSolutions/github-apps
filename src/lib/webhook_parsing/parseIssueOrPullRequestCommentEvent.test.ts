import issueCommentCreatedPayload from "./fixtures/issue-comment-created";
import issueCommentEditedWithSkipLabel from "./fixtures/issue-comment-edited-with-skip-label";
import parseIssueOrPullRequestCommentEvent from "./parseIssueOrPullRequestCommentEvent";
import prReviewCodeCommentEvent from "./fixtures/pr-review-code-comment-created";

describe("issue comment created", () => {
  it("parses as expected when it's in an issue", async () => {
    const response = parseIssueOrPullRequestCommentEvent(
      issueCommentCreatedPayload
    );

    expect(response).toEqual({
      comment: { id: 887817153, body: "some comment!" },
      repository: { owner: { login: "DewpointSolutions" }, name: "test-prs" },
      installation: { id: 18177860 },
    });
  });

  it("skips issues with the 'skip' label", async () => {
    const response = parseIssueOrPullRequestCommentEvent(
      issueCommentEditedWithSkipLabel
    );

    expect(response).toEqual(null);
  });
});

describe("PR code comment submitted", () => {
  it("parses as expected when it's in a pull request review code comment", async () => {
    const response = parseIssueOrPullRequestCommentEvent(
      prReviewCodeCommentEvent
    );

    expect(response).toEqual({
      comment: { id: 691311527, body: "This is a code comment" },
      repository: {
        owner: { login: "DewpointSolutions" },
        name: "github-apps",
      },
      installation: { id: 18177860 },
    });
  });
});
