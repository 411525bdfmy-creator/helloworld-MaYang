/**
 * server.js —— Node.js Hello World 网站服务器
 *
 * 功能：
 *   1. 访问根路径 "/" 时返回首页（public/index.html）
 *   2. 访问 "/api/time" 时以 JSON 返回服务器当前时间
 *   3. 其他路径返回 404
 *
 * 启动方式：node server.js  或  npm start
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '0.0.0.0'; // 监听所有网卡，局域网内也可访问；仅本机访问可改为 '127.0.0.1'
const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  // 1. 首页：返回 public/index.html
  if (url === '/' || url === '/index.html') {
    const filePath = path.join(__dirname, 'public', 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('服务器内部错误：无法读取 index.html，请确认 public 目录存在。');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
    return;
  }

  // 2. 服务器时间接口：返回当前时间（JSON）
  if (url === '/api/time') {
    const now = new Date();
    const serverTime = now.toLocaleString('zh-CN', { hour12: false });
    const responseBody = JSON.stringify({
      serverTime,                 // 服务器本地格式化时间，如 2026-10-12 00:05:30
      timestamp: now.getTime(),   // 毫秒级时间戳
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown'
    });
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(responseBody);
    return;
  }

  // 3. 其他路径：404
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found —— 页面不存在');
});

server.listen(PORT, HOST, () => {
  console.log(`✅ 服务器已启动：http://localhost:${PORT}`);
  console.log(`   本机访问：http://127.0.0.1:${PORT}`);
  console.log('   按 Ctrl + C 停止服务器');
});
