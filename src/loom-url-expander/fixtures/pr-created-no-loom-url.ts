import { PullRequestOpenedEvent } from "@octokit/webhooks-types";

const payload: PullRequestOpenedEvent = {
  action: "opened",
  number: 1,
  pull_request: {
    url: "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/1",
    id: 687867972,
    node_id: "MDExOlB1bGxSZXF1ZXN0Njg3ODY3OTcy",
    html_url: "https://github.com/DewpointSolutions/test-prs/pull/1",
    diff_url: "https://github.com/DewpointSolutions/test-prs/pull/1.diff",
    patch_url: "https://github.com/DewpointSolutions/test-prs/pull/1.patch",
    issue_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues/1",
    number: 1,
    state: "open",
    locked: false,
    title: "PR 2",
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
    body: "",
    created_at: "2021-07-12T13:55:47Z",
    updated_at: "2021-07-12T13:55:47Z",
    closed_at: null,
    merged_at: null,
    merge_commit_sha: null,
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/1/commits",
    review_comments_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/1/comments",
    review_comment_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/issues/1/comments",
    statuses_url:
      "https://api.github.com/repos/DewpointSolutions/test-prs/statuses/2bca6cb984251e1fbb23d06d31104ccaa49c9e86",
    head: {
      label: "DewpointSolutions:sibljon-patch-1",
      ref: "sibljon-patch-1",
      sha: "2bca6cb984251e1fbb23d06d31104ccaa49c9e86",
      user: {
        login: "DewpointSolutions",
        id: 87096637,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjg3MDk2NjM3",
        avatar_url: "https://avatars.githubusercontent.com/u/87096637?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/DewpointSolutions",
        html_url: "https://github.com/DewpointSolutions",
        followers_url:
          "https://api.github.com/users/DewpointSolutions/followers",
        following_url:
          "https://api.github.com/users/DewpointSolutions/following{/other_user}",
        gists_url:
          "https://api.github.com/users/DewpointSolutions/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/DewpointSolutions/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/DewpointSolutions/subscriptions",
        organizations_url:
          "https://api.github.com/users/DewpointSolutions/orgs",
        repos_url: "https://api.github.com/users/DewpointSolutions/repos",
        events_url:
          "https://api.github.com/users/DewpointSolutions/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/DewpointSolutions/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
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
          followers_url:
            "https://api.github.com/users/DewpointSolutions/followers",
          following_url:
            "https://api.github.com/users/DewpointSolutions/following{/other_user}",
          gists_url:
            "https://api.github.com/users/DewpointSolutions/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/DewpointSolutions/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/DewpointSolutions/subscriptions",
          organizations_url:
            "https://api.github.com/users/DewpointSolutions/orgs",
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
        forks_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/forks",
        keys_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/teams",
        hooks_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/hooks",
        issue_events_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/events",
        assignees_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/tags",
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
        pushed_at: "2021-07-12T13:55:47Z",
        git_url: "git://github.com/DewpointSolutions/test-prs.git",
        ssh_url: "git@github.com:DewpointSolutions/test-prs.git",
        clone_url: "https://github.com/DewpointSolutions/test-prs.git",
        svn_url: "https://github.com/DewpointSolutions/test-prs",
        homepage: null,
        size: 0,
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
        open_issues_count: 1,
        license: null,
        forks: 0,
        open_issues: 1,
        watchers: 0,
        default_branch: "main",
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false,
      },
    },
    base: {
      label: "DewpointSolutions:main",
      ref: "main",
      sha: "c523659b6e211003bd0c26982c16adc09c7c12d0",
      user: {
        login: "DewpointSolutions",
        id: 87096637,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjg3MDk2NjM3",
        avatar_url: "https://avatars.githubusercontent.com/u/87096637?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/DewpointSolutions",
        html_url: "https://github.com/DewpointSolutions",
        followers_url:
          "https://api.github.com/users/DewpointSolutions/followers",
        following_url:
          "https://api.github.com/users/DewpointSolutions/following{/other_user}",
        gists_url:
          "https://api.github.com/users/DewpointSolutions/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/DewpointSolutions/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/DewpointSolutions/subscriptions",
        organizations_url:
          "https://api.github.com/users/DewpointSolutions/orgs",
        repos_url: "https://api.github.com/users/DewpointSolutions/repos",
        events_url:
          "https://api.github.com/users/DewpointSolutions/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/DewpointSolutions/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
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
          followers_url:
            "https://api.github.com/users/DewpointSolutions/followers",
          following_url:
            "https://api.github.com/users/DewpointSolutions/following{/other_user}",
          gists_url:
            "https://api.github.com/users/DewpointSolutions/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/DewpointSolutions/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/DewpointSolutions/subscriptions",
          organizations_url:
            "https://api.github.com/users/DewpointSolutions/orgs",
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
        forks_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/forks",
        keys_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/teams",
        hooks_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/hooks",
        issue_events_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/events",
        assignees_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/DewpointSolutions/test-prs/tags",
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
        pushed_at: "2021-07-12T13:55:47Z",
        git_url: "git://github.com/DewpointSolutions/test-prs.git",
        ssh_url: "git@github.com:DewpointSolutions/test-prs.git",
        clone_url: "https://github.com/DewpointSolutions/test-prs.git",
        svn_url: "https://github.com/DewpointSolutions/test-prs",
        homepage: null,
        size: 0,
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
        open_issues_count: 1,
        license: null,
        forks: 0,
        open_issues: 1,
        watchers: 0,
        default_branch: "main",
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: true,
        delete_branch_on_merge: false,
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/1",
      },
      html: {
        href: "https://github.com/DewpointSolutions/test-prs/pull/1",
      },
      issue: {
        href:
          "https://api.github.com/repos/DewpointSolutions/test-prs/issues/1",
      },
      comments: {
        href:
          "https://api.github.com/repos/DewpointSolutions/test-prs/issues/1/comments",
      },
      review_comments: {
        href:
          "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/1/comments",
      },
      review_comment: {
        href:
          "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/comments{/number}",
      },
      commits: {
        href:
          "https://api.github.com/repos/DewpointSolutions/test-prs/pulls/1/commits",
      },
      statuses: {
        href:
          "https://api.github.com/repos/DewpointSolutions/test-prs/statuses/2bca6cb984251e1fbb23d06d31104ccaa49c9e86",
      },
    },
    author_association: "CONTRIBUTOR",
    auto_merge: null,
    active_lock_reason: null,
    merged: false,
    mergeable: null,
    rebaseable: null,
    mergeable_state: "unknown",
    merged_by: null,
    comments: 0,
    review_comments: 0,
    maintainer_can_modify: false,
    commits: 1,
    additions: 2,
    deletions: 0,
    changed_files: 1,
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
    pushed_at: "2021-07-12T13:55:47Z",
    git_url: "git://github.com/DewpointSolutions/test-prs.git",
    ssh_url: "git@github.com:DewpointSolutions/test-prs.git",
    clone_url: "https://github.com/DewpointSolutions/test-prs.git",
    svn_url: "https://github.com/DewpointSolutions/test-prs",
    homepage: null,
    size: 0,
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
