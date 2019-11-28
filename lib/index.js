module.exports = function axiosPerfModule(options) {
  this.options.build.loaders.vue.compilerOptions = {
    modules: [
      {
        preTransformNode(astEl) {
          if (options.stripAttrs) {
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
      }
    ]
  };
};
