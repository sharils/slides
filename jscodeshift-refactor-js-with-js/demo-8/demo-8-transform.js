const INIT = Symbol("INIT");
function reduce(callback, initialValue = undefined) {
  let accumulator = INIT;

  this.forEach((nodePath, nodePathIdx) => {
    if (accumulator === INIT) {
      if (initialValue === undefined) {
        accumulator = nodePath;
        return;
      }
      accumulator = initialValue;
    }

    accumulator = callback.call(this, accumulator, nodePath, nodePathIdx);
  });

  return accumulator;
}

module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  j.registerMethods({
    reduce
  });

  console.log(
    j(fileInfo.source).find(j.Identifier).reduce(count => count + 1, 0)
  );

  return j(fileInfo.source).toSource();
};
