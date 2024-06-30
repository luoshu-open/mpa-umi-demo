# 开发指引
当前工程为 mpa 的开发模式. 官方文档： https://umijs.org/docs/guides/mpa

MPA 的目录结构是 src/pages/${dir}/index.tsx ，每个文件夹 ${dir} 会生成一个页面，文件夹内的 index.tsx 为页面的入口文件，文档代码示例见：https://github.com/umijs/umi/tree/master/examples/mpa

在当前工程中，有两个示列的独立页面，目录在 `src/pages`
```
src
--pages
----demo1  // 页面功能1
------index.tsx
----demo2  // 页面功能2
------index.tsx
----index // pnpm run dev 时，查看的页面
------index.tsx
```
在执行 `pnpm run build` 之后，在 `dist` 目录下，会有下面的几个文件，即每个`pages`下的文件夹，都会打包成一个独立的html页面


```
dist
--demo1.html
--demo1.js
--demo2.html
--demo2.js
```

下一步是怎么查看开发的功能页面，在`pnpm run dev` 之后，会启动 node 服务，渲染的页面为 `src/pages/index/index.tsx`。
该页面的代码如下:（即如果要预览指定的功能，那么就在该页面上，使用对应的标签）
```tsx
import Demo1 from "@/pages/demo1";

/**
 * 【重要】
 * 这个页面有很大的用处，必须保持这个目录格式 src/pages/index/index.tsx.
 * 否则在 mpa 模式下，路由无法生效，无法使用 pnpm run dev 运行node来查看页面。
 * 如果要切换查看的页面，那么就在 index 中切换组件
 * @constructor
 */
function Index(){
    return <div>
        <!-- 预览页面，使用对应的标签 -->
        <Demo1/>
    </div>
}

export default Index;

export const config = {
    title: 'index', // html 的 title 属性变量
}
```


# 环境

- nodejs v18.20.3
- 包管理器 pnpm (umijs推荐， 怕报错)

# 工程代码
github:  https://github.com/luoshu-open/mpa-umi-demo.git
gitee:   https://gitee.com/bailuoo/mpa-umi-demo.git
