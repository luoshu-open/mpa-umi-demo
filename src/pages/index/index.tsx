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
        {/*预览页面，使用对应的标签*/}
        <Demo1/>
    </div>
}

export default Index;

export const config = {
    title: 'index', // html 的 title 属性变量
}