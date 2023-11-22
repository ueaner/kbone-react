# 1. 当前项目中安装 miniprogram-element 和 miniprogram-render
# pnpm i -D miniprogram-render miniprogram-element
# 2. 构建结束后, 拷贝 miniprogram-element 和 miniprogram-render 的 dist 文件到 ./dist/mp/miniprogram_npm
# https://developers.weixin.qq.com/miniprogram/kbone/docs/config/#generate-autobuildnpm
mkdir -p ./dist/mp/miniprogram_npm/
cp -r ./node_modules/miniprogram-element/dist ./dist/mp/miniprogram_npm/miniprogram-element
cp -r ./node_modules/miniprogram-render/dist ./dist/mp/miniprogram_npm/miniprogram-render

