module.exports = {
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0]["process.env"].VUE_APP_API_KEY = JSON.stringify(
        process.env.VUE_APP_API_KEY
      );
      return args;
    });
  },
};
