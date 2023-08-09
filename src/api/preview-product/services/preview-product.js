'use strict';

/**
 * preview-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::preview-product.preview-product');
