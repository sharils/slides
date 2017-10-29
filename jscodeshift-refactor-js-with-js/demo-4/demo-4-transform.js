const includesSolution = path => /solution/i.test(path.value.name);

module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.Identifier)
    .filter(includesSolution)
    .forEach(path => {
      path.value.name = path.value.name.replace(/solution/g, 'application')
        .replace(/Solution/g, 'Application')
        .replace(/SOLUTION/g, 'APPLICATION');
    })
    .toSource();
}
