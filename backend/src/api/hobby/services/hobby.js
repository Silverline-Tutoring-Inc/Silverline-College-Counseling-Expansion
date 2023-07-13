'use strict';

/**
 * hobby service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hobby.hobby');
