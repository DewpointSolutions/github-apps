// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { PullRequestReviewCreatedEvent } from "@octokit/webhooks-types";

const payload: PullRequestReviewCreatedEvent = {
  action: "submitted",
  review: {
    id: 732984907,
    node_id: "MDE3OlB1bGxSZXF1ZXN0UmV2aWV3NzMyOTg0OTA3",
    user: {
      login: "sibljon",
      id: 442307,
      node_id: "MDQ6VXNlcjQ0MjMwNw==",
      avatar_url: "https://avatars.githubusercontent.com/u/442307?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sibljon",
      html_url: "https://github.com/sibljon",
      followers_url: "https://api.github.com/users/sibljon/followers",
      following_url:
        "https://api.github.com/users/sibljon/following{/other_user}",
      gists_url: "https://api.github.com/users/sibljon/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sibljon/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/sibljon/subscriptions",
      organizations_url: "https://api.github.com/users/sibljon/orgs",
      repos_url: "https://api.github.com/users/sibljon/repos",
      events_url: "https://api.github.com/users/sibljon/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sibljon/received_events",
      type: "User",
      site_admin: false,
    },
    body: "PR review approval comment test",
    commit_id: "eab29c41d0e744dac0239e20e3915d701bff3f76",
    submitted_at: "2021-08-18T15:01:13Z",
    state: "approved",
    html_url:
      "https://github.com/DewpointSolutions/github-apps/pull/4#pullrequestreview-732984907",
    pull_request_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/pulls/4",
    author_association: "CONTRIBUTOR",
    _links: { html: {}, pull_request: {} },
  },
  pull_request: {
    url: "https://api.github.com/repos/DewpointSolutions/github-apps/pulls/4",
    id: 711943480,
    node_id: "MDExOlB1bGxSZXF1ZXN0NzExOTQzNDgw",
    html_url: "https://github.com/DewpointSolutions/github-apps/pull/4",
    diff_url: "https://github.com/DewpointSolutions/github-apps/pull/4.diff",
    patch_url: "https://github.com/DewpointSolutions/github-apps/pull/4.patch",
    issue_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/issues/4",
    number: 4,
    state: "open",
    locked: false,
    title: "Bump path-parse from 1.0.6 to 1.0.7",
    user: {
      login: "dependabot[bot]",
      id: 49699333,
      node_id: "MDM6Qm90NDk2OTkzMzM=",
      avatar_url: "https://avatars.githubusercontent.com/in/29110?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dependabot%5Bbot%5D",
      html_url: "https://github.com/apps/dependabot",
      followers_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/dependabot%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    body:
      "Bumps [path-parse](https://github.com/jbgutierrez/path-parse) from 1.0.6 to 1.0.7.\n" +
      "<details>\n" +
      "<summary>Commits</summary>\n" +
      "<ul>\n" +
      '<li>See full diff in <a href="https://github.com/jbgutierrez/path-parse/commits/v1.0.7">compare view</a></li>\n' +
      "</ul>\n" +
      "</details>\n" +
      "<br />\n" +
      "\n" +
      "\n" +
      "[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=path-parse&package-manager=npm_and_yarn&previous-version=1.0.6&new-version=1.0.7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n" +
      "\n" +
      "Dependabot will resolve any conflicts with this PR as long as you don't alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n" +
      "\n" +
      "[//]: # (dependabot-automerge-start)\n" +
      "[//]: # (dependabot-automerge-end)\n" +
      "\n" +
      "---\n" +
      "\n" +
      "<details>\n" +
      "<summary>Dependabot commands and options</summary>\n" +
      "<br />\n" +
      "\n" +
      "You can trigger Dependabot actions by commenting on this PR:\n" +
      "- `@dependabot rebase` will rebase this PR\n" +
      "- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n" +
      "- `@dependabot merge` will merge this PR after your CI passes on it\n" +
      "- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n" +
      "- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n" +
      "- `@dependabot reopen` will reopen this PR if it is closed\n" +
      "- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n" +
      "- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n" +
      "- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n" +
      "- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n" +
      "- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n" +
      "- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n" +
      "- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n" +
      "- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n" +
      "\n" +
      "You can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/DewpointSolutions/github-apps/network/alerts).\n" +
      "\n" +
      "</details>",
    created_at: "2021-08-13T02:04:01Z",
    updated_at: "2021-08-18T15:01:13Z",
    closed_at: null,
    merged_at: null,
    merge_commit_sha: "a73f019dd96238a52c977cd9ec4e4972666d1ea5",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [{}],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/pulls/4/commits",
    review_comments_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/pulls/4/comments",
    review_comment_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/issues/4/comments",
    statuses_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/statuses/eab29c41d0e744dac0239e20e3915d701bff3f76",
    head: {
      label: "DewpointSolutions:dependabot/npm_and_yarn/path-parse-1.0.7",
      ref: "dependabot/npm_and_yarn/path-parse-1.0.7",
      sha: "eab29c41d0e744dac0239e20e3915d701bff3f76",
      user: {},
      repo: {},
    },
    base: {
      label: "DewpointSolutions:main",
      ref: "main",
      sha: "307553d47e975e5a14f467b035fd260d65dc9839",
      user: {},
      repo: {},
    },
    _links: {
      self: {},
      html: {},
      issue: {},
      comments: {},
      review_comments: {},
      review_comment: {},
      commits: {},
      statuses: {},
    },
    author_association: "NONE",
    auto_merge: null,
    active_lock_reason: null,
  },
  repository: {
    id: 389351306,
    node_id: "MDEwOlJlcG9zaXRvcnkzODkzNTEzMDY=",
    name: "github-apps",
    full_name: "DewpointSolutions/github-apps",
    private: false,
    owner: {
      login: "DewpointSolutions",
      id: 87096637,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjg3MDk2NjM3",
      avatar_url: "https://avatars.githubusercontent.com/u/87096637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/DewpointSolutions",
      html_url: "https://github.com/DewpointSolutions",
      followers_url: "https://api.github.com/users/DewpointSolutions/followers",
      following_url:
        "https://api.github.com/users/DewpointSolutions/following{/other_user}",
      gists_url:
        "https://api.github.com/users/DewpointSolutions/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/DewpointSolutions/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/DewpointSolutions/subscriptions",
      organizations_url: "https://api.github.com/users/DewpointSolutions/orgs",
      repos_url: "https://api.github.com/users/DewpointSolutions/repos",
      events_url:
        "https://api.github.com/users/DewpointSolutions/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/DewpointSolutions/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/DewpointSolutions/github-apps",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/DewpointSolutions/github-apps",
    forks_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/forks",
    keys_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/teams",
    hooks_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/hooks",
    issue_events_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/events",
    assignees_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/branches{/branch}",
    tags_url: "https://api.github.com/repos/DewpointSolutions/github-apps/tags",
    blobs_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/languages",
    stargazers_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/stargazers",
    contributors_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/contributors",
    subscribers_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/subscribers",
    subscription_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/subscription",
    commits_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/merges",
    archive_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/downloads",
    issues_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/labels{/name}",
    releases_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/DewpointSolutions/github-apps/deployments",
    created_at: "2021-07-25T13:15:07Z",
    updated_at: "2021-08-08T05:56:23Z",
    pushed_at: "2021-08-13T02:04:02Z",
    git_url: "git://github.com/DewpointSolutions/github-apps.git",
    ssh_url: "git@github.com:DewpointSolutions/github-apps.git",
    clone_url: "https://github.com/DewpointSolutions/github-apps.git",
    svn_url: "https://github.com/DewpointSolutions/github-apps",
    homepage: null,
    size: 590,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: "main",
  },
  organization: {
    login: "DewpointSolutions",
    id: 87096637,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjg3MDk2NjM3",
    url: "https://api.github.com/orgs/DewpointSolutions",
    repos_url: "https://api.github.com/orgs/DewpointSolutions/repos",
    events_url: "https://api.github.com/orgs/DewpointSolutions/events",
    hooks_url: "https://api.github.com/orgs/DewpointSolutions/hooks",
    issues_url: "https://api.github.com/orgs/DewpointSolutions/issues",
    members_url:
      "https://api.github.com/orgs/DewpointSolutions/members{/member}",
    public_members_url:
      "https://api.github.com/orgs/DewpointSolutions/public_members{/member}",
    avatar_url: "https://avatars.githubusercontent.com/u/87096637?v=4",
    description: "",
  },
  sender: {
    login: "sibljon",
    id: 442307,
    node_id: "MDQ6VXNlcjQ0MjMwNw==",
    avatar_url: "https://avatars.githubusercontent.com/u/442307?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/sibljon",
    html_url: "https://github.com/sibljon",
    followers_url: "https://api.github.com/users/sibljon/followers",
    following_url:
      "https://api.github.com/users/sibljon/following{/other_user}",
    gists_url: "https://api.github.com/users/sibljon/gists{/gist_id}",
    starred_url: "https://api.github.com/users/sibljon/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/sibljon/subscriptions",
    organizations_url: "https://api.github.com/users/sibljon/orgs",
    repos_url: "https://api.github.com/users/sibljon/repos",
    events_url: "https://api.github.com/users/sibljon/events{/privacy}",
    received_events_url: "https://api.github.com/users/sibljon/received_events",
    type: "User",
    site_admin: false,
  },
  installation: {
    id: 18177860,
    node_id: "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMTgxNzc4NjA=",
  },
};

export default payload;
