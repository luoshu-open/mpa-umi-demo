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
  },
  plugins: [
    './script/plugins/ArrangeDistFilePlugin.ts' // 对 dist 目录的文件进行整理,相同的文件名(不包含后缀), 全部移到同一个文件夹
  ]
});
