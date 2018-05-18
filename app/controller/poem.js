'use strict';

const Controller = require('egg').Controller;

class PoemController extends Controller {
  async index() {
    const _data = await this.ctx.model.Poem.find({title:'MongoDB 教程'});
    console.log(_data);
    this.ctx.body = _data;
  }
}

module.exports = PoemController;
