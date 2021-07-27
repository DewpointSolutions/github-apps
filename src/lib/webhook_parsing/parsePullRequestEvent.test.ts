import parsePullRequestEvent from "./parsePullRequestEvent";
import pullRequestCreatedPayload from "./fixtures/pr-created";
import pullRequestEditedWithSkipLabelPayload from "./fixtures/pr-edited-with-skip-label";

describe("parsePROpenedAction", () => {
  it("parses as expected", async () => {
    const response = parsePullRequestEvent(pullRequestCreatedPayload);

    expect(response).toEqual({
      pullRequest: { number: 1, body: "" },
      repository: { owner: { login: "DewpointSolutions" }, name: "test-prs" },
      installation: { id: 18177860 },
    });
  });
  it("skips issues with the 'skip' label", async () => {
    const response = parsePullRequestEvent(
      pullRequestEditedWithSkipLabelPayload
    );

    expect(response).toEqual(null);
  });
});
