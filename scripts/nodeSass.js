const configs = require('../src/config.json');
const path = require('path')
const sass = require('node-sass');
const fs = require('fs');

configs.packages.forEach(item => {
    createCss(item.name);
});

function currPath(paths){
    return path.resolve(__dirname,paths)
}
function createCss(name){
    sass.render({
        file: currPath(`../src/components/${name}/style/index.scss`),
        outputStyle: 'compressed',
        sourceMap: true,
    },(err,result)=>{
        if(err){
            console.log(err);
        }
        const stylePath = `../dist/components/${name}/style`;
        fs.mkdir(currPath(stylePath),function(error){
            if(error){
                console.log(error);
            }
            fs.writeFile(currPath(stylePath+'/index.scss'), result.css, function(err){
                if(err){
                    console.log(err);
                }
            });
        });
    });
}

