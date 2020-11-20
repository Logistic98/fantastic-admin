---
lang: zh-CN
---

# Mock 与联调（专业版）

框架使用 [Mockjs](https://github.com/nuysoft/Mock) 做为模拟数据生成，mock 数据编写规则请阅读官方文档。

框架提供两套 mock 解决方案，请对比下述的介绍后自行选择。两套方案共用一套 mock 数据，通过简单的配置可无缝切换。

> 以下两套方案均在 `.env.development` 中设置 `VUE_APP_API_ROOT` 为真实接口地址，例如 `VUE_APP_API_ROOT = http://baidu.com/api/`

Mockjs 虽然很好用，但是在大型项目中其实并不合适，正规的测试应该是搭建专门的测试服务器进行测试，只是在一些中小型公司，没有这样的资源，使用 Mockjs 是一个折中的办法。

## 方案一 mockjs

### 使用说明

这是最常见的使用方式，你只需在 `./src/main.js` 中找到 `import './mock'` 并将其注释去掉，然后到 `./src/mock/modules/` 目录下新增 js 文件，然后在里面编写 mock 数据代码即可，例如：

```js
// ./src/mock/modules/test.js
module.exports = [
    {
        url: 'test',
        type: 'get',
        result: {
            error: '',
            state: 1,
            data: {
                title: '测试',
                images: '@image(\'200x200\',\'red\',\'#fff\',\'avatar\')'
            }
        }
    }
]
```

当你配置好 mock 数据后，在页面中就可以通过 `this.$api` 进行测试了

```js
this.$api.get('mock/test').then(res => {
    console.log(res)
})
```

这时候可以在控制台看到 mock 数据正常打印出来了。

![](/fantastic-admin/mock1.png)

你可能会问，我在 `test.js` 里定义的 `url` 是 `test` ，为什么在调用接口的时候，需要写成 `mock/test` ，这其实是框架的 mock 约定，在 `./src/mock/index.js` 里可以看到这句代码：

```js
Mock.mock(new RegExp(`${process.env.VUE_APP_API_ROOT}mock/${mock.url}`), mock.type || 'get', mock.result)
```

其中需要拦截的 URL 是拼接出来的，中间强制带上了 `mock/` ，这么做的目的是为了方便开发中进行 mock 和真实接口进行切换。例如还是同样的 `test` 接口，当后端开发完毕，只需将调用接口的地方把 `mock/` 删掉即可。

```js
this.$api.get('test').then(res => {
    console.log(res)
})
```

因为请求 URL 改变了，mock 拦截不到，所以这个请求就会切换为真实接口。

:::tip 扩展
如果你不喜欢框架的这个 mock 约定，你也可以将 `./src/mock/index.js` 里改为：

```js
Mock.mock(new RegExp(`${process.env.VUE_APP_API_ROOT}${mock.url}`), mock.type || 'get', mock.result)
```

这样调用的时候直接这样就可以：

```js
this.$api.get('test').then(res => {
    console.log(res)
})
```

如果要切换为真实接口，到 `./src/mock/modules/test.js` 里注释或删除对应的 mock 数据即可。
:::

:::warning 注意
mock 数据一般仅存在于开发环境，打包的时候注意将 `./src/main.js` 中的 `import './mock'` 删除或注释掉
:::

### 弊端

它的最大的问题是就是它的实现机制。它会重写浏览器的 `XMLHttpRequest` 对象，从而才能拦截所有请求，代理到本地。大部分情况下用起来还是蛮方便的，但就因为它重写了 `XMLHttpRequest` 对象，所以比如 `progress` 方法，或者一些底层依赖 `XMLHttpRequest` 的库都会和它发生不兼容。

其次因为它本地模拟的数据，实际上不会走任何网络请求，开发过程中，只能通过 `console.log` 进行调试。

## 方案二 mock-server

这个方案主要目的是解决方案一的几个开发弊端，因为是一个真正的 server ，所以你可以通过浏览器开发者工具中的 network ，清楚的看到接口返回的数据结构，并且同时解决了之前 `mockjs` 会重写 `XMLHttpRequest` 对象，导致很多第三方库失效的问题。

### 实现思路

该方案大致实现思路参考[此方案](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/mock-api.html#%E6%96%B0%E6%96%B9%E6%A1%88)，基于 `webpack-dev-serve` 实现，因为 `webpack-dev-serve` 主要是启动了一个使用 `express` 的 HTTP 服务器，所以就可以通过它启动一个我们自定义的 `mock-server` ，同时通过 [chokidar](https://github.com/paulmillr/chokidar) 监听 `./src/mock/modules/` 目录下文件夹的变化，一旦发生文件新增、修改、删除操作时，会清除之前注册的接口（实际就是 express 的路由），重新动态挂载新的接口，从而支持热更新。

### 使用说明

首先将 `./src/api/index.js` 的 `baseURL` 注释或设为空

```js {2}
const api = axios.create({
    // baseURL: process.env.VUE_APP_API_ROOT,
    timeout: 10000,
    responseType: 'json'
    // withCredentials: true
})
```

然后打开 `vue.config.js` 修改并设置成

```js {5-11}
module.exports = {
    ...
    devServer: {
        open: true,
        proxy: {
            '/': {
                target: process.env.VUE_APP_API_ROOT,
                changeOrigin: true
            }
        },
        before: require('./src/mock/server.js')
	},
	...
}
```

因为这个方案的实现实际是通过 express 的路由进行拦截，所以不能去请求真实的接口，通过设置代理，将真实接口代理到本地地址，这样 express 就可以拦截并做处理了。

剩下的操作和方案一一样，在 `./src/mock/modules/` 目录下新增 js 文件，然后在里面编写 mock 数据代码即可，mock 和真实接口切换调试也和方案一一样。

### 弊端

这个方案也不是万金油，它的弊端在于需要将 `baseURL` 设置空或者一个相对地址，例如 `baseURL: '/mock-api/'`，绝对不能设置 http 地址，然后通过开启本地代理去请求 mock 或者真实接口。

这就导致打包生产环境代码的时候，需要将代码调整回来，当然你也可以修改成下面这样子，打包的时候自动切换为真实的接口：

```js {2}
const api = axios.create({
    baseURL: process.env.NODE_ENV == 'production' ? process.env.VUE_APP_API_ROOT : '',
    timeout: 10000,
    responseType: 'json'
    // withCredentials: true
})
```

## 扩展

如果生产(线上)环境也需要使用 mock ，那只有方案一可以实现，方案二仅仅是优化本地开发的效率。