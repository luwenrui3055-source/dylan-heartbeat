const { spawn } = require('child_process');

// 手动注入环境变量

const server = spawn('node', ['server.js'], { stdio: 'inherit', env: process.env });
const wakeup = spawn('node', ['wake_up.js'], { stdio: 'inherit', env: process.env });

server.on('close', (code) => process.exit(code));
wakeup.on('close', (code) => process.exit(code));
