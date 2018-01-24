# disease-admin

> A Vue.js project

## Build Setup

``` bash
# npm 安装 chromedriver 失败的解决办法
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

|-- build                                        # 编译目录
|-- config                                       # 编译配置目录
|-- index.html                                   # 首页模板
|-- package.json                                 # 依赖库配置
|-- src                                          # 源码目录
|    |-- config                                  # 配置目录(包括线上线下IP地址切换、ajax封装)
|    |-- mock                                    # 数据模拟目录
|    |-- assets                                  # 资源目录
|    |    `-- scss                               # 全局scss文件
|    |-- components                              # 通用组件
|    |-- router                                  # 路由
|    |-- store                                   # 状态管理目录
|    |-- service                                 # 接收api接口服务(所有从后台数据都在这个文件加)
|    |-- view                                    # 业务类型组件
|    |   |-- admin                               # 与用户相关的页面(登录、注册、忘记密码、找回密码等)
|    |   |-- index                               # 所有业务页面
|    |       |-- report                          # 报表模块
|    |       |-- sample                          # 样本模块
|    |       |-- data                            # 数据模块
|    |       |-- user                            # 用户模块
|    |       |-- security                        # 安全模块
|    |       |-- leaflet                         # 营销模块
|    |       `-- index.vue                       # 导航侧边栏
|    `-- main.js                                 # 入口程序
`-- static
|  	|-- img                                     # 图片
|  	`-- lib                                     # 外部应用的js文件和css文件
```
框架是[vue](https://cn.vuejs.org/v2/guide/)
UI组件库是[Element](http://element-cn.eleme.io/#/zh-CN)
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

