import { defineConfig } from "umi";

export default defineConfig({
  mountElementId: 'root', // MPA的页面，挂载在id为main的节点
  publicPath: './',
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
