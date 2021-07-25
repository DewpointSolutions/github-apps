import parsePullRequestEvent from "./parsePullRequestEvent";
import pullRequestCreatedRequestPayload from "./fixtures/pr-created-no-loom-url";

describe("parsePROpenedAction", () => {
  it("parses as expected", async () => {
    const response = parsePullRequestEvent(pullRequestCreatedRequestPayload);

    expect(response).toEqual({
      pullRequest: { number: 1, body: "" },
      repository: { owner: { login: "DewpointSolutions" }, name: "test-prs" },
      installation: { id: 18177860 },
    });
  });
});
