'use strict';

const Controller = require('egg').Controller;

class FileuploadController extends Controller {
  async uploadImg() {
    console.log(this.ctx);
  }
}

module.exports = FileuploadController;
