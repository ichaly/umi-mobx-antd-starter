const CDN_HOST = '';
const BASE_PATH = '/';
const PUBLIC_PATH = `${CDN_HOST}${BASE_PATH}`;

const define = {
  BASE_HOST: 'https://api.baidu.com',
  // BASE_HOST: 'http://127.0.0.1:8080',
};

// https://umijs.org/config/
export default {
  base: BASE_PATH,
  publicPath: PUBLIC_PATH,
  cssPublicPath: PUBLIC_PATH,

  define,
  extraBabelPlugins: ['transform-remove-console', 'transform-remove-debugger'],
  manifest: {
    basePath: PUBLIC_PATH,
  },
};
