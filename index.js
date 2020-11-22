const core = require("@actions/core");
const github = require("@actions/github");

try {
  core.setOutput("repo", github.context.repo.repo);
  core.setOutput("owner", github.context.repo.owner);
} catch (error) {
  core.setFailed(error.message);
}
