const replaceAll = require("string.prototype.replaceall");

module.exports = function (content, map, meta) {
  return replaceAll(
    content,
    /\!\[(.*)\]\((\.\/.+)\)/g, // caprtures only images with relative src, like "![](./zoom-breakout-rooms2.png)""
    `<NextImage alt="$1" src={require('$2').default} />`
  );
};
