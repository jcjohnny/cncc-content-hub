'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'image-preview',
    plugin: 'cn-image-preview',
    type: 'string',
  });
};
