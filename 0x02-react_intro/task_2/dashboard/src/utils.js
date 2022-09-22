const getFullYear = () => {
	return new Date().getFullYear();;
}

const getFooterCopy = (isIndex) => {

    let msg = "";
    isIndex ? msg = "Holberton School" : msg = "Holberton School main dashboard"
    return msg

}

module.exports = {
	getFooterCopy,
	getFullYear,
};
