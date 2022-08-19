function formatDate(date) {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    return `${month.padStart(2, '0')}-${day.padStart(2, '0')}-${year.padStart(2, '0')}`;
}

module.exports = {
    formatDate,
};