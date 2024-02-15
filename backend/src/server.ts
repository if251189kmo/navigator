import http from 'http';
import app from './app';
import config from './config';

const { port } = config;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`⚡️ 🇺🇦 [server]: ☢ Server is running at ✍  http://localhost:${port} ☢`);
});
