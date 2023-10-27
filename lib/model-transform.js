// toModelRegion
function toModel(obj) {
	return Object.keys(obj)
		.filter(p => p.startsWith('_'))
		.reduce((acc, p) => {
			acc[p.substring(1)] = obj[p];
			return acc;
		}, {});
}

exports.toModel = toModel;