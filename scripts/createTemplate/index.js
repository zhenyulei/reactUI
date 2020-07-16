const paths = require('../paths');
const inquirer = require('inquirer');
const conf = require(paths.ROOT_SRC_PATH('config.json'));
function init() {
	inquirer.prompt([
			{
				type: 'input',
				name: 'name',
				message: '组件英文名(每个单词的首字母都大写，如TextBox)：',
				validate(value) {
					const repeat = conf.packages.find(function (item) {
						return item.name === value;
					});
					if (repeat) {
						return '该组件名已存在！';
					}
					const pass = value && value.match(/^[A-Z]/);
					if (pass) {
						return true;
					}
					return '不能为空，且每个单词的首字母都要大写，如TextBox';
				},
			},
			{
				type: 'input',
				name: 'chnName',
				message: '组件中文名(十个字以内)：',
				validate(value) {
					const pass = value && value.length <= 10;
					if (pass) {
						return true;
					}
					return '不能为空，且不能超过十个字符';
				},
			},
			{
				type: 'input',
				name: 'desc',
				message: '组件描述(五十个字以内)：',
			},
			{
				type: 'input',
				name: 'author',
				message: '组件作者(可署化名):',
			},
		])
		.then(function (answers) {
            console.log(answers);
            // { name: 'TextBox',
            // chnName: '测试组件',
            // desc: '测试组件的描述',
            // author: 'zhenyulei' }
			createDir(answers);
		});
}
function createDir(answers){

}
init();