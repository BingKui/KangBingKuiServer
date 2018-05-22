'use strict';
const { randomNum } = require('../utils');
const Controller = require('egg').Controller;

class PoemController extends Controller {
  async index() {
    const _data = await this.ctx.model.Poem.find({}).skip(10).limit(1).exec();
    console.log(_data);
    this.ctx.body = _data;
  }
  async randomPoem() {
    const _index = randomNum(20296);
    const _res = await this.ctx.model.Poem.find({}).skip(_index).limit(1);
    this.ctx.body = {
      poem: _res[0]
    };
  }
}

module.exports = PoemController;
