const callingConnect = {
  expression: {
    type: 'CallExpression',
    callee: {
      type: 'CallExpression',
      callee: {
        type: 'Identifier',
        name: 'connect',
      },
      arguments: {
        0: {
          type: 'ArrowFunctionExpression',
        },
        1: {
          type: 'ArrowFunctionExpression',
        },
        length: 2,
      },
    },
    arguments: {
      length: 1,
    },
  },
};

// Press ctrl+space for code completion
module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.ExpressionStatement, callingConnect)
    .insertBefore(path => [
      j.variableDeclaration('const', [
        j.variableDeclarator(
          j.identifier('mapStateToProps'),
          path.value.expression.callee.arguments[0],
        ),
      ]),
      j.variableDeclaration('const', [
        j.variableDeclarator(
          j.identifier('mapDispatchToProps'),
          path.value.expression.callee.arguments[1],
        ),
      ]),
    ])
    .forEach(path => {
      path.value.expression.callee.arguments[0] = j.identifier('mapStateToProps');
      path.value.expression.callee.arguments[1] = j.identifier('mapDispatchToProps');
    })
    .toSource();
};
