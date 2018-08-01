'use strict';
const Controller = require('egg').Controller;
const qiniu = require('qiniu');

const accessKey = '5jI9Vhnfz7SiVeyzvBH82E5sDqden9aieqZHEzd8-n';
const secretKey = 'F_RJfQCqEqs7TQ721AuzTNT0I6QtU497_03smNqO';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

class QiniuController extends Controller {
  async uptoken() {
    const options = {
        scope: 'kangbingkui-wx'
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uptoken = putPolicy.uploadToken(mac);
    console.log(uptoken);
    this.ctx.body = {
        uptoken, 
    };
  }
}

module.exports = QiniuController;