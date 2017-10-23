const { scripts } = require('./package.json');

module.exports = {
  gitDir: "../",
  verbose: true,
  linters: {
    "**/assets/**/*.{css,scss}": [`${scripts.stylelint} --fix`, "git add"],
  },
}