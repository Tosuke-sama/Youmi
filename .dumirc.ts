import { defineConfig } from 'dumi';

const repo = 'Youmi.github.io';
export default defineConfig({
   title: 'Youmi.github.io',
  mode: 'site',
  devServer: {
    port: 1998 // 自定义端口号
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  themeConfig: {
    name: 'Youmi',
  },
});
