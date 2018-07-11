'use strict';
const Controller = require('egg').Controller;

class MusicController extends Controller {
  async musicList() {
    const _res = await this.ctx.model.Music.find({show: true});
    this.ctx.body = _res;
  }
}

module.exports = MusicController;