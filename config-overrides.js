module.exports = {
  webpack: config => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false
      }
    };

    // config.output.filename = "static/js/[name].js";
    // // config.output.publicPath = "/assets/csa/";

    // config.plugins[5].options.filename = "static/css/[name].css";
    // config.plugins[5].options.moduleFilename = () => "static/css/main.css";
    return config;
  }
};
