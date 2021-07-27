import issueCommentCreatedPayload from "./fixtures/issue-comment-created";
import issueCommentEditedWithSkipLabel from "./fixtures/issue-comment-edited-with-skip-label";
import parseIssueCommentEvent from "./parseIssueCommentEvent";

describe("issueCommentCreated", () => {
  it("parses as expected", async () => {
    const response = parseIssueCommentEvent(issueCommentCreatedPayload);

    expect(response).toEqual({
      issue: { number: 1 },
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
