const { formatDate } = require('./utils');

function generateDateTwoYearsFromNow() {
	const today = new Date();
	const year = today.getFullYear();
	today.setFullYear(year + 2);
	return formatDate(today);
}

module.exports = {
	generateDateTwoYearsFromNow,
};