const { spawn } = require('child_process');

const server = spawn('node', ['server.js'], { stdio: 'inherit' });
const wakeup = spawn('node', ['wake_up.js'], { stdio: 'inherit' });

server.on('close', (code) => process.exit(code));
wakeup.on('close', (code) => process.exit(code));
