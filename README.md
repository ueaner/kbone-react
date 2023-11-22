# kbone react demo

当前 demo 的目标是: 拉下来就可运行.

拉下来运行不了的[提 issue].

当前 demo 基于 [kbone demo16] 制作.

由于核心的 [mp-webpack-plugin] 插件基于 webpack, 这里也通过 webpack 打包构建.

## 使用

```sh
# 默认 js 分支
git clone https://github.com/ueaner/kbone-react.git
# 亦可使用 ts 分支
git clone https://github.com/ueaner/kbone-react.git -b ts
cd kbone-react
npm run mp
```

使用 [微信开发者工具] 打开 `kbone-react/dist/mp` 目录即可.

## 支持情况

- react v18
- react-router v5, (注: v6 ~~好像不支持应用内嵌入浏览器/Webview/etc...~~ 更新上来报了不少错)
- babel v7
- webpack v5
- css modules
- 相关 css-loader file-loader 等插件也已更新到最新

如果项目中使用 react-router, 可以考虑独立出 router 部分, Web 端使用 v6, 小程序中使用 v5.

想要支持 typescript 可使用 [ts 分支].


## 其他

1. 执行 `npm run mp` 时提示

```
 10% building 0/1 entries 0/0 dependencies 0/0 modules(node:61230) [DEP_WEBPACK_COMPILATION_OPTIMIZE_CHUNK_ASSETS] DeprecationWarning: optimizeChunkAssets is deprecated (use Compilation.hooks.processAssets instead and use one of Compilation.PROCESS_ASSETS_STAGE_* as stage option)
(Use `node --trace-deprecation ...` to show where the warning was created)
95% emitting emit(node:61230) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
        Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
        Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
```

由于 [mp-webpack-plugin/src/index.js:573] 中使用了 `compilation.hooks.optimizeChunkAssets.tapAsync(PluginName, (chunks, callback)` 引起的.

2. 更新到 react v18 后, 微信开发者工具控制台一处错误提示, 使用当前 demo 执行后也可以看到:

```
TypeError: Cannot read property 'top' of null
    at wx-component.js:106
(env: macOS,mp,1.06.2310080; lib: 2.25.3)
```

目前看好像不影响操作.

[kbone demo16]: https://github.com/Tencent/kbone/tree/develop/examples/demo16
[mp-webpack-plugin]: https://github.com/Tencent/kbone/tree/develop/packages/mp-webpack-plugin
[mp-webpack-plugin/src/index.js:573](https://github.com/Tencent/kbone/blob/develop/packages/mp-webpack-plugin/src/index.js#L573)
[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
[ts 分支]: https://github.com/ueaner/kbone-react/tree/ts
[提 issue]: https://github.com/ueaner/kbone-react/issues/new
