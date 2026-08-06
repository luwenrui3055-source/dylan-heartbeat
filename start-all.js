const { spawn } = require('child_process');

// 手动注入环境变量
process.env.TARGET_API_URL = 'https://ckffai.com/v1/chat/completions';
process.env.TARGET_API_KEY = 'sk-nvzSNQcmraZqOlhap7NlfJEFH9PZVav7Sf7Ba6F6BlEOOcfJ';
process.env.MODEL_NAME = 'gemini-2.5-pro';
process.env.GATEWAY_API_KEY = 'saku2026heartbeat';
process.env.ALLOW_PUBLIC_API = 'true';
process.env.PUSH_PROVIDER = 'bark';
process.env.BARK_KEY = 'a8bbb0b80c39dc486bf49fce5a8374faf8e271008fc95c8a48cb77bb5739a13e';
process.env.TIME_ZONE = 'Asia/Shanghai';
process.env.ADMIN_USER = 'admin';
process.env.ADMIN_PASSWORD = 'saku123';
process.env.PORT = '8080';

const server = spawn('node', ['server.js'], { stdio: 'inherit', env: process.env });
const wakeup = spawn('node', ['wake_up.js'], { stdio: 'inherit', env: process.env });

server.on('close', (code) => process.exit(code));
wakeup.on('close', (code) => process.exit(code));
