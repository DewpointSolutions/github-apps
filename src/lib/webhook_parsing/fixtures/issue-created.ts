import { IssuesOpenedEvent } from "@octokit/webhooks-types";

const payload: IssuesOpenedEvent = {
  action: "opened",
  issue: {
    url: "https://api.github.com/repos/DewpointSolutions/test-prs/issues/8",
    repository_url: "https://api.github.com/repos/DewpointSolutions/test-prs",
    labels_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues/8/labels{/name}",
    comments_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues/8/comments",
    events_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues/8/events",
    html_url: "https://github.com/DewpointSolutions/test-prs/issues/8",
    id: 954243526,
    node_id: "MDU6SXNzdWU5NTQyNDM1MjY=",
    number: 8,
    title: "issue #2",
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
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: "2021-07-27T20:31:25Z",
    updated_at: "2021-07-27T20:31:25Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    active_lock_reason: null,
    body: "some body",
    performed_via_github_app: null,
  },
  repository: {
    id: 385264888,
    node_id: "MDEwOlJlcG9zaXRvcnkzODUyNjQ4ODg=",
    name: "test-prs",
    full_name: "DewpointSolutions/test-prs",
    private: true,
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
    html_url: "https://github.com/DewpointSolutions/test-prs",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/DewpointSolutions/test-prs",
    forks_url: "https://api.github.com/repos/DewpointSolutions/test-prs/forks",
    keys_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/DewpointSolutions/test-prs/teams",
    hooks_url: "https://api.github.com/repos/DewpointSolutions/test-prs/hooks",
    issue_events_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/events",
    assignees_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/branches{/branch}",
    tags_url: "https://api.github.com/repos/DewpointSolutions/test-prs/tags",
    blobs_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/languages",
    stargazers_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/stargazers",
    contributors_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/contributors",
    subscribers_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/subscribers",
    subscription_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/subscription",
    commits_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/merges",
    archive_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/downloads",
    issues_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/labels{/name}",
    releases_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/deployments",
    created_at: "2021-07-12T13:53:52Z",
    updated_at: "2021-07-12T13:55:36Z",
    pushed_at: "2021-07-26T22:47:33Z",
    git_url: "git://github.com/DewpointSolutions/test-prs.git",
    ssh_url: "git@github.com:DewpointSolutions/test-prs.git",
    clone_url: "https://github.com/DewpointSolutions/test-prs.git",
    svn_url: "https://github.com/DewpointSolutions/test-prs",
    homepage: null,
    size: 5,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 8,
    license: null,
    forks: 0,
    open_issues: 8,
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
