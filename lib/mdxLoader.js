const replaceAll = require("string.prototype.replaceall");

module.exports = function (content, map, meta) {
  return replaceAll(
    content,
    /\!\[(.*)\]\((.+)\)/g,
    `<NextImage alt="$1" src={require('$2').default} />`
  );
};
