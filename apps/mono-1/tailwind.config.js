const baseConfig = require('../../tailwind.config.base');
module.exports = {
  ...baseConfig,
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}', // scan all app files for Tailwind classes
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}', // exclude test and story files
    '../../libs/shared-ui/src/**/*.{ts,tsx,js,jsx,html}', // to build ui library styles
  ],
};
