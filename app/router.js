'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/poem', controller.poem.randomPoem);
  router.post('/uploadimg', controller.fileupload.uploadImg);
  //获取电影列表
  router.get('/api/movielist', controller.movie.movieList);
  // 获取歌单列表
  router.get('/api/playlist', controller.music.musicList);
  // 获取七牛云存储 uptoken
  router.get('/api/uptoken', controller.qiniu.uptoken);
};
