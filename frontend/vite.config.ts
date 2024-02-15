import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_DEV_BASE_URL': JSON.stringify(env.REACT_APP_DEV_BASE_URL),
      'process.env.REACT_APP_PROD_BASE_URL': JSON.stringify(env.REACT_APP_PROD_BASE_URL),
    },
    plugins: [
      react(),
      eslint({
        failOnWarning: false,
      }),
      checker({
        typescript: true,
      }),
    ],
    server: {
      open: true,
      port: 3000,
    },
  };
});
