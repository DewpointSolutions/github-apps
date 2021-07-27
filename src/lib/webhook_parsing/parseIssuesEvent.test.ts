import issueCreatedPayload from "./fixtures/issue-created";
import issueEditedWithSkipLabel from "./fixtures/issue-edited-with-skip-label";
import parseIssuesEvent from "./parseIssuesEvent";

describe("parseIssuesEvent", () => {
  it("parses as expected", async () => {
    const response = parseIssuesEvent(issueCreatedPayload);

    expect(response).toEqual({
      issue: { number: 8, body: "some body" },
      repository: { owner: { login: "DewpointSolutions" }, name: "test-prs" },
      installation: { id: 18177860 },
    });
  });
  it("skips issues with the 'skip' label", async () => {
    const response = parseIssuesEvent(issueEditedWithSkipLabel);

    expect(response).toEqual(null);
  });
});
