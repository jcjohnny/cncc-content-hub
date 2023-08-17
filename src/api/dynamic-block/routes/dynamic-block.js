'use strict';

/**
 * dynamic-block router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dynamic-block.dynamic-block');
