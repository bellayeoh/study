import { defineConfig } from 'umi';
import HostConfig from './hostConfig';
import Routes from './routes';

const { ENVIRONMENT } = process.env;

const IS_PROD = ENVIRONMENT === 'production';

export default defineConfig({
  define: {
    'process.env.HOST': IS_PROD ? HostConfig.PROD : HostConfig.DEV,
  },
  layout: {
    name: 'frontEnd.fans',
    navTheme: 'light',
    layout: 'side',
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    pwa: false,
    iconfontUrl: '',
    headerHeight: 48,
    splitMenus: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: Routes,
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
  },
  dva: {},
  ignoreMomentLocale: true,
});
