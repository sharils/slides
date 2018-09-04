// Press ctrl+space for code completion
export function transformer(fileInfo, api) {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.FunctionDeclaration)
    .replaceWith(path =>
      j.arrowFunctionExpression(
        path.value.params,
        path.value.body,
        false
      )
    )
    .toSource();
}
