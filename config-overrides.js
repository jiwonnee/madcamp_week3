const { override, overrideDevServer } = require('customize-cra');

const devServerConfig = () => config => {
  config.allowedHosts = ['localhost'];
  return config;
};

module.exports = {
  webpack: override(),
  devServer: overrideDevServer(devServerConfig())
};
 