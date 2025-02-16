import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    host: '0.0.0.0', // این خط اجازه می‌دهد سرور روی شبکه محلی در دسترس باشد
    port: 5173, // پورتی که می‌خواهید سرور روی آن اجرا شود
  },
});



// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint()],
// });