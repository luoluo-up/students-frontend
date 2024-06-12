module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        // target: "http://192.168.56.1:5000/", //对应自己的接口
        target: "http://8.134.92.247:5000/", //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
