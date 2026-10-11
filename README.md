# Hello World 网站

我的第一个 AI 开发的网站 —— 基于 Node.js 的入门示例项目。

## 功能

- 浏览器访问显示 "Hello World！我是…，我的第一个AI开发的网站"
- 页面实时显示当前服务器时间（每秒刷新）
- 提供 `/api/time` 接口返回服务器时间的 JSON 数据

## 项目结构

```
helloworld-site/
├── package.json      # 项目配置文件（含启动脚本）
├── server.js         # Node.js 服务器主文件
└── public/
    └── index.html    # 网页前端页面
```

## 运行方法

前置条件：已安装 [Node.js](https://nodejs.org/)（v14 及以上）。

```bash
# 进入项目目录
cd helloworld-site

# 启动服务器
node server.js
# 或
npm start
```

然后在浏览器打开 <http://localhost:3000> 即可看到页面。

## 常用接口

| 路径 | 说明 |
| --- | --- |
| `/` | 返回首页 HTML |
| `/api/time` | 返回服务器当前时间（JSON） |
| 其他路径 | 返回 404 |

## 修改页面显示的名字

编辑 `public/index.html`，找到 `<span class="highlight" id="site-name">…</span>`，把其中的文字改成你的名字即可。
