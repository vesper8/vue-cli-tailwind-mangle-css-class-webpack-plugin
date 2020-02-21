const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');

const plugins = [];

const cssObfuscatorPlugin = new MangleCssClassPlugin({
  classNameRegExp: '(xs:|md:|sm:|lg:|xl:)?tw-[a-zA-Z0-9_-]*',
  ignorePrefix: ['xs:', 'md:', 'sm:', 'lg:', 'xl:'],
  log: true,
});

plugins.push(cssObfuscatorPlugin);

module.exports = {
  configureWebpack: {
    plugins,
  },
};
