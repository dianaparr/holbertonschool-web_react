const getFullYear = () => {
	return new Date().getFullYear();;
}

const getFooterCopy = (isIndex) => {

    let msg = "";
    isIndex ? msg = "Holberton School" : msg = "Holberton School main dashboard"
    return msg

}

const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}

module.exports = {
	getFooterCopy,
	getFullYear,
    getLatestNotification
};
