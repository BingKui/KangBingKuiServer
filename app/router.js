'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/poem', controller.poem.randomPoem);
  router.post('/uploadimg', controller.fileupload.uploadImg);
};
