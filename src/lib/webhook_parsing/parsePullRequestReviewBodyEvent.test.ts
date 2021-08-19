import parsePullRequestReviewBodyEvent from "./parsePullRequestReviewBodyEvent";
import prReviewSubmitted from "./fixtures/pr-review-submitted";

describe("PR review submitted with top-level comment", () => {
  it("parses as expected", async () => {
    const response = parsePullRequestReviewBodyEvent(prReviewSubmitted);

    expect(response).toEqual({
      review: { id: 732984907, body: "PR review approval comment test" },
      repository: {
        owner: { login: "DewpointSolutions" },
        name: "github-apps",
      },
      pullRequest: { number: 4 },
      installation: { id: 18177860 },
    });
  });
});
