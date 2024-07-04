/**
 * 这是一个 umijs 的插件,配置在 .umirc.ts 中.
 *
 * 整理打包后的 dist 文件, 将相同的文件前缀,全部打包到一个目录
 * 如 hello.html , hello.js , hello.css 全部移动到 dist/hello 的目录下
 */
// @ts-ignore
const fs = require('fs-extra'); // 使用 fs-extra 来简化文件操作
// @ts-ignore
const path = require('path');

export default (api) => {
    api.onBuildHtmlComplete(() => {
        // 定义源目录
        // @ts-ignore
        const sourceDir = path.resolve(process.cwd(), 'dist');

        // 读取 dist 目录下的所有文件和文件夹
        fs.readdir(sourceDir, (err, files) => {
            if (err) {
                console.error('Error reading dist directory:', err);
                return;
            }

            // 遍历文件和文件夹
            console.log('-------------------------整理dist目录.开始-------------------------------------')
            files.forEach((file) => {
                // 构建完整路径
                const sourcePath = path.join(sourceDir, file);
                const targetDir = path.join(sourceDir, path.basename(file, path.extname(file)));

                // 确保目标目录存在
                fs.ensureDirSync(targetDir);

                // 构建目标路径
                const targetPath = path.join(targetDir, file);

                // 移动文件
                fs.move(sourcePath, targetPath, { overwrite: true }, (err) => {
                    if (err) {
                        console.error('Error moving file:', err);
                    } else {
                        console.log(`Moved ${file} to${targetPath}`);
                    }
                });
            });
        });
    });
};
