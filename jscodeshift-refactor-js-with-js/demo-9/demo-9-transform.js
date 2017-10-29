const redundantTemplateLiteral = {
  type: "TemplateLiteral",
  quasis: {
    length: 2,
    0: {
      type: "TemplateElement",
      value: {
        raw: "",
        cooked: ""
      },
      tail: false
    },
    1: {
      type: "TemplateElement",
      value: {
        raw: "",
        cooked: ""
      },
      tail: true
    }
  },
  expressions: {
    length: 1,
    0: {
      type: "Identifier",
    }
  }
};

const methods = {
  refactor(expression) {
    return this.replaceWith(path => expression`String(${path.value.expressions})`);
  }
};

module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  j.registerMethods(methods, j.TemplateLiteral);

  return j(fileInfo.source)
    .find(j.TemplateLiteral, redundantTemplateLiteral)
    .refactor(j.template.expression)
    .toSource();
};
