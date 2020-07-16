const UploadJssPlugin = require('./index');
const path = require('path');
new UploadJssPlugin({
  path: path.resolve(__dirname, '../../doc-site/'),
  access: '',
  secret: '',
  bucket: 'jdplus',
  folder: 'reactUI',
  ignoreRegexp: /node_modules/
});
