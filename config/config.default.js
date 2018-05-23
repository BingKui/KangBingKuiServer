'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526629218135_4350';

  // add your config here
  config.middleware = ['gzip'];

  config.gzip = {
    threshold: 1024 // 小于 1k 的相应体不压缩
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/wechat',
    options: {},
  };

  return config;
};
