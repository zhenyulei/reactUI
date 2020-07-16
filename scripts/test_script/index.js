const path = require("path");
const upload = require("./upload2jss");
const glob = require("glob");
const fs = require("fs");

function getAgrType(agr) {
  return Object.prototype.toString
    .call(agr)
    .split(/\s/)[1]
    .slice(0, -1)
    .toLowerCase();
}
function makeAssetsMap(dir, ignoreRegexp) {
  if (!dir || !dir.replace(/^\//, "").length)
    console.log("invalid params of directory name", "exit");

  return new Promise((rs, rj) => {
    try {
      console.log("making assets map\n");
      const folders = [];
      const assetsMap = glob
        .sync(`${dir}/**`, {
          dot: true,
        })
        .filter((file) => {
          let test = true;
          if (getAgrType(ignoreRegexp) === "regexp")
            test = !ignoreRegexp.test(file);
          const stat = fs.statSync(file);
          if (stat.isDirectory()) {
            folders.push(file.replace(dir, ""));
          }
          return test && stat.isFile();
        })
        .map((file) => {
          return {
            targetPath: file
              .replace(/\\/g, "/")
              .replace(dir.replace(/\\/g, "/"), ""),
            fullPath: file,
            assetSource: fs.readFileSync(file),
          };
        });
      rs({ assetsMap, folders });
    } catch (e) {
      rj(e);
    }
  });
}

function UploadJssPlugin(options) {
  this.path = options.path;
  this.site = "storage.jd.com";
  this.access = options.access || "ZoiivHG7A4HWhTou";
  this.secret = options.secret || "FD5YLA8LIZH4knS27CkK9VQDRCEfILTDWShO0UaL";
  this.bucket = options.bucket;
  this.folder = options.folder;
  this.ignoreRegexp = options.ignoreRegexp;

  makeAssetsMap(this.path, this.ignoreRegexp)
  .then(({ assetsMap }) => {
    upload(
      assetsMap,
      this.site,
      this.access,
      this.secret,
      this.bucket,
      this.folder
    );
  })
  .catch((e) => console.log(e));
}

module.exports = UploadJssPlugin;
