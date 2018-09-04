// Press ctrl+space for code completion
module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.ClassDeclaration)
    .replaceWith(path => j.template.statement`
      function ${path.node.id.name}() {
        ${path.node.body.body[0].value.body.body};
      }`
    )
    .toSource();
}
