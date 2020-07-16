module.exports = function (pathArr, site, access, secret, bucket, folder) {
  const Jss = require("@jd/jmfe-node-jss");
  const jss = new Jss(site, access, secret, true);
  const filelist = pathArr;
  function upload() {
    if (num >= len || non == contentsLen) {
      filelist.forEach((file) => {
        console.log("开始上传" + file.fullPath);
        console.log("发布路径" + folder + file.targetPath);
        jss
          .bucket(bucket)
          .object(folder + file.targetPath)
          .put(file.fullPath)
          .then(function (res) {
            console.log("上传成功");
            // console.log(res);
          })
          .catch(function (err) {
            console.log("上传出错啦");
            console.log(err);
          });
      });
    }
  }
  let len = 0;
  let num = 0;
  let non = 0;
  let contentsLen = 0;
  jss
    .bucket(bucket)
    .listObject(undefined, undefined, "", undefined)
    .then((res) => {
      let data = JSON.parse(res);
      let contents = data.Contents;
      contentsLen = contents.length;
      if (contentsLen) {
        for (let i = 0; i < contents.length; i++) {
          if (folder) {
            if (contents[i].Key.indexOf(folder + "/") > -1) {
              len++;
              console.log("删除：", contents[i].Key);
              jss
                .bucket(bucket)
                .object(contents[i].Key)
                .delete()
                .then(function (res) {
                  console.log("删除成功");
                  console.log(res);
                  num++;
                  upload();
                })
                .catch(function (err) {
                  console.log("删除出错啦");
                  console.log(err);
                });
            } else {
              non++;
              console.log("不可删除文件,该模式下只删除配置项folder的内容");
              upload();
            }
          } else {
            len++;
            jss
              .bucket(bucket)
              .object(contents[i].Key)
              .delete()
              .then(function (res) {
                console.log("删除成功");
                console.log(res);
                num++;
                upload();
              })
              .catch(function (err) {
                console.log("删除出错啦");
                console.log(err);
              });
          }
        }
      } else {
        upload();
      }
    })
    .catch((err) => {
      console.log("连接列表" + bucket + "失败：" + err.message);
    });
};
