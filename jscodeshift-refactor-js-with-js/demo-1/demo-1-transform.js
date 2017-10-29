const callingBindActionCreators = {
  type: "FunctionDeclaration",
  id: {
    type: "Identifier",
    name: "mapDispatchToProps"
  },
  params: {
    0: {
      type: "Identifier",
      name: "dispatch"
    },
    length: 1
  },
  body: {
    type: "BlockStatement",
    body: {
      0: {
        type: "ReturnStatement",
        argument: {
          type: "CallExpression",
          callee: {
            type: "Identifier",
            name: "bindActionCreators"
          },
          arguments: {
            0: {
              type: "ObjectExpression"
            },
            1: {
              type: "Identifier",
              name: "dispatch"
            },
            length: 2
          }
        }
      },
      length: 1
    }
  }
};

const importingBindActionCreators = {
  type: "ImportDeclaration",
  specifiers: {
    0: {
      type: "ImportSpecifier",
      local: {
        type: "Identifier",
        name: "bindActionCreators"
      },
      imported: {
        type: "Identifier",
        name: "bindActionCreators"
      }
    },
    length: 0
  },
  source: {
    type: "Literal",
    value: "redux",
    raw: "'redux'"
  }
};

const objectArgument = j => path =>
  j.variableDeclaration("const", [
    j.variableDeclarator(
      j.identifier("mapDispatchToProps"),
      path.node.body.body[0].argument.arguments[0]
    )
  ]);

module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  const scope = j(fileInfo.source);

  scope
    .find(j.FunctionDeclaration, callingBindActionCreators)
    .replaceWith(objectArgument(j))
    .closestScope();

  const bindActionCreatorsCount = scope.find(j.Identifier, {
    name: "bindActionCreators"
  }).length;
  scope.closestScope();

  if (bindActionCreatorsCount === 2) {
    scope
      .find(j.ImportDeclaration, importingBindActionCreators)
      .remove();
  }

  return scope.toSource();
};
