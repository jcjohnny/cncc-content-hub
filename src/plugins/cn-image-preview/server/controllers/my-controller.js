'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('cn-image-preview')
      .service('myService')
      .getWelcomeMessage();
  },
});
