import issueCommentCreatedPayload from "./fixtures/issue-comment-created";
import issueCommentEditedWithSkipLabel from "./fixtures/issue-comment-edited-with-skip-label";
import parseIssueCommentEvent from "./parseIssueCommentEvent";

describe("issue comment created", () => {
  it("parses as expected when it's in an issue", async () => {
    const response = parseIssueCommentEvent(issueCommentCreatedPayload);

    expect(response).toEqual({
      comment: { id: 887817153, body: "some comment!" },
      repository: { owner: { login: "DewpointSolutions" }, name: "test-prs" },
      installation: { id: 18177860 },
    });
  });

  it("skips issues with the 'skip' label", async () => {
    const response = parseIssueCommentEvent(issueCommentEditedWithSkipLabel);

    expect(response).toEqual(null);
  });
});
