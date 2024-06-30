import { defineConfig } from "umi";

export default defineConfig({
  mountElementId: 'root', // MPA的页面，挂载在id为main的节点
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 这里好像必须这样写，不能直接写 ./ ，否则会报错
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: 'pnpm',
  mpa: {
    getConfigFromEntryFile: true, // 使用每个 mpa的配置
    template: 'templates/mpa_default.html',
    layout: '@/layouts/emptyLayout', //使用父的布局文件
  }
});
