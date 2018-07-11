'use strict';
const Controller = require('egg').Controller;

class MovieController extends Controller {
  async movieList() {
    const _res = await this.ctx.model.Movie.find({});
    this.ctx.body = _res;
  }
}

module.exports = MovieController;