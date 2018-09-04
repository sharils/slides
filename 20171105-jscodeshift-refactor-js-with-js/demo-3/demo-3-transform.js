module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.Property, { value: { type:"Literal", raw: "0x62" } })
    .forEach(path => console.log(path.node))
    .toSource();
};
