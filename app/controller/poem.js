'use strict';
const { randomNum } = require('../utils');
const Controller = require('egg').Controller;

class PoemController extends Controller {
  async randomPoem() {
    const _index = randomNum(98808);
    const _res = await this.ctx.model.Poem.find({}).skip(_index).limit(1);
    this.ctx.body = {
      poem: _res[0]
    };
  }
}

module.exports = PoemController;
