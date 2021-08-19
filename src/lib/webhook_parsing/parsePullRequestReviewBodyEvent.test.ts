// import parseIssueOrPullRequestCommentEvent from "./parseIssueOrPullRequestCommentEvent";
// import prReviewSubmitted from "./fixtures/pr-review-submitted";

// describe("PR review submitted with top-level comment", () => {
//   it("parses as expected", async () => {
//     const response = parseIssueOrPullRequestCommentEvent(prReviewSubmitted);

//     expect(response).toEqual({
//       comment: { id: 691311527, body: "PR review approval comment test" },
//       repository: {
//         owner: { login: "DewpointSolutions" },
//         name: "github-apps",
//       },
//       installation: { id: 18177860 },
//     });
//   });
// });
