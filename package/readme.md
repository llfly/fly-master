1. grunt基于配置，io操作
2. gulp基于代码，基于流操作，API简单
3. npm scripts
4. fis
5. webpack
webpack是一个模块打包器。任何静态资源都可以视为模块，模块之间可以相互依赖，通过webpack对模块进行处理后，可以打包成我们想要的静态资源。
所有js,图片,css等都打包成一个文件。
可以自动处理依赖关系，方便组件化。
特点：
- 支持CommonJs和AMD规范，意思也就是我们基本可以无痛迁移旧项目。
- 支持模块加载器和插件机制，可对模块灵活定制。比如babel-loader，有效支持ES6
- 可以通过配置，打包多个文件。有效利用浏览器的缓存功能提升性能
- 将样式文件和图片等静态资源也视为模块进行打包，配合loader加载器，可以支持sass,less等css预处理器。
- 内置source map，即使打包在一起依旧方便调试。
全局安装
`npm install webpack -g`

```
webpack -w 提供watch方法，实时进行打包更新
webpack -p 对打包后的文件进行压缩
webpack -d 提供sourcemap，方便调试
webpack --config 以某个config作为打包
webpack --help 更多命令
```

本地安装
`npm install webpack --save-dev`

