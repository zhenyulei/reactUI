const paths = require('../paths');
const inquirer = require('inquirer');
const fs = require('fs');

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
		createDir(answers);
	});
}
function mkdirPath(newPath){
	return new Promise((resolve,reject)=>{
		fs.exists(paths.ROOT_SRC_PATH(newPath),(exists)=>{
			if(exists){
				reject('已经存在');
			}else{
				fs.mkdir(paths.ROOT_SRC_PATH(newPath),function(error){
					if(error){
						reject(error);
					}
					resolve();
				});
			}
		})
	})
}
function writeFile(files,content){
	return new Promise((resolve,reject)=>{
		fs.writeFile(paths.ROOT_SRC_PATH(files), content, function(err){
			if(err){
				reject(err);
			}else{
				resolve();
			}
		});
	})
}
function appendFile(files,content){
	return new Promise((resolve,reject)=>{
		fs.appendFile(paths.ROOT_SRC_PATH(files), content, function(err){
			if(err){
				reject(err);
			}else{
				resolve();
			}
		});
	})
}

function initMdx(answers){
const lowerName = answers.name.toLowerCase();
//生成mdx文件
return `---
name: ${answers.name}
route: /${lowerName}
menu: 业务组件
---
> ${answers.desc}`
}

function initTsx(answers){
return `import React, { FC } from 'react';
import classNames from 'classnames';
interface BaseProps{
    className?:string,//自定义类名
}

const ${answers.name}:FC<BaseProps> = (props)=>{
  const {
    className
  } = props;
  const classes = classNames('wrapper',className);

  return (
    <div className={classes}>
    </div>
  )
}
${answers.name}.defaultProps = {
}
export default ${answers.name};
`
}
function initIndex(answers){
const lowerName = answers.name.toLowerCase();
return `import ${answers.name} from './${lowerName}';
import './style/index.scss';
export default ${answers.name};`
}

function initTest(){
return `import React from 'react';
import { render } from '@testing-library/react';

describe('test测试', () => {
	it('should render the correct', () => {
		expect(add(1, 2)).toBe(3)
	})
})`
}

function addConf(answers){
	var newPackages = conf.packages;
	const newData = {
		"name":answers.name,
		"chnName":answers.chnName,
		"desc":answers.desc,
		"author":answers.author
	}
	newPackages.push(newData);
	return {
		"packages":newPackages
	}
}

function createDir(answers){
	const lowerName = answers.name.toLowerCase();
	const filePath = `components/${answers.name}`;
	mkdirPath(filePath).then(()=>{
		mkdirPath(`${filePath}/style`).then(()=>{
			writeFile(`${filePath}/style/index.scss`,`@import '../../../styles/index.scss';`)
		})
		writeFile(`${filePath}/${lowerName}.mdx`,initMdx(answers));
		writeFile(`${filePath}/${lowerName}.tsx`,initTsx(answers));
		writeFile(`${filePath}/${lowerName}.test.tsx`,initTest());
		writeFile(`${filePath}/index.tsx`,initIndex(answers));
		appendFile(`index.tsx`,`\r\nexport { default as ${answers.name} } from './components/${answers.name}';`);
		writeFile(`config.json`,JSON.stringify(addConf(answers), null, 2));
		console.log('添加成功，请开始你的表演～');
	},(error)=>{
		console.log(error);
	})
}
init();