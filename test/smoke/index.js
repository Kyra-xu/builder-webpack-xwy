const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});

// 进入到template目录进行运行后续操作
process.chdir(path.join(__dirname, 'template'));

// 运行前删除上一次构建dist目录
rimraf('./dist', () => {
  // 引入构建打包配置
  const prodConfig = require('../../lib/webpack.prod.js');
  // 执行构建配置
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.error('error', err);
      process.exit(2);
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }));

    console.log('Webpack build success, begin run test.');

    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
