module.exports = function testAttrCleanerModule(options) {
  if (!options.stripAttrs) return;

  this.options.build.loaders.vue.compilerOptions = {
    modules: [
      {
        preTransformNode(astEl) {
          const { attrsMap, attrsList } = astEl;
          const attrsToStrip = options.attrsList;

          attrsToStrip.forEach(attribute => {
            if (attrsMap[attribute]) {
              delete attrsMap[attribute];
              const index = attrsList.findIndex(
                ({ name }) => name === attribute
              );
              attrsList.splice(index, 1);
            }
          });

          return astEl;
        }
      }
    ]
  };
};
