const hypernova = require('hypernova/server');
const path = require('path');
var serversideOutputPath = path.resolve('../app/assets/javascripts/serverside');

const isDev = process.env.NODE_ENV !== 'production' ? true : false;

hypernova({
  devMode: isDev,

   getComponent(name) {
    var filePath = serversideOutputPath + '/' + name + '.js';
    if (filePath) {
      // 開発のときは毎回キャッシュクリアする
      if (isDev) {
        delete require.cache[filePath];
      }
      return require(filePath).default;
    }
    return null;
  },

   port: 3030,
});