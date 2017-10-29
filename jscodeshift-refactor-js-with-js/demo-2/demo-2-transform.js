module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.ObjectExpression)
    .forEach(path => console.log(path.node))
    .toSource();
};
