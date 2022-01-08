// 单元测试入口文件
const path = require('path');
// 进入到template目录进行运行后续操作
process.chdir(path.join(__dirname, './smoke/template'));
describe('builder-webpack test case', () => {
  require('./unit/webpack-base-test');
});
