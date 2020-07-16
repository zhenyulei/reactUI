const path=  require('path');
// cli 目录
const paths = {
	ROOT_PATH : function (dir) {
		return path.resolve(__dirname, '../', dir);
	},
	// nutui src 目录
	ROOT_SRC_PATH: function (dir) {
		return path.resolve(__dirname, '../src/', dir);
	}
};

module.exports = paths;