---
lang: zh-CN
---

# 开始

本框架需要你本地安装 [Node.js](https://nodejs.org/zh-cn/) 和 [Git](https://git-scm.com/) ，同时我们强烈建议你安装并使用 [Yarn](https://classic.yarnpkg.com/zh-Hans/) 做为包管理工具。

做好准备工作后，依次执行下面的命令：

```bash
# 克隆项目（如果本地已有源码，可跳过这步）
# 可选择从 github 或 gitee 克隆项目
git clone https://github.com/hooray/fantastic-admin.git
# 或者
git clone https://gitee.com/hooray/fantastic-admin.git

# 进入项目目录
cd fantastic-admin
# 专业版
cd fantastic-admin-pro

# 安装项目依赖（框架使用 yarn 进行依赖包的版本锁定，建议使用 yarn 进行安装）
yarn
# 或者
npm install

# 运行项目
yarn run serve
# 或者
npm run serve
```

运行成功后，会自动访问页面，默认情况下，地址为 `http://localhost:8080`