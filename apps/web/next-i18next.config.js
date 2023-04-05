const path = require('path');

const localePath = path.resolve('./public/locales');
/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  i18n: {
    locales: ['en', 'km'],
    defaultLocale: 'en',
  },
  localePath,
};
