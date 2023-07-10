// toModelRegion
function toModel() {
    return Object.keys(this)
      .filter(p => p.startsWith("_"))
    .reduce((acc, p) => {
        acc[p.substring(1)] = this[p];
        return acc;
    }, {});
};

exports.toModel = this.toModel;