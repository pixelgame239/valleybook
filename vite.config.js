// filepath: c:\Users\Admin\Desktop\my-app\vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
// Không cần import path ở đây nếu chỉ dùng alias string

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Giữ trống include để polyfill tất cả, hoặc xóa dòng include nếu bạn đã có
      // include: ['util'], // <-- Có thể xóa hoặc comment dòng này
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      // <-- THÊM MỤC resolve.alias NÀY
      // Ánh xạ module 'node:util' và 'util' sang polyfill
      "node:util": "vite-plugin-node-polyfills/polyfills/util",
      util: "vite-plugin-node-polyfills/polyfills/util", // Ánh xạ cả 'util' (không có tiền tố node:)
      // Giữ lại các alias khác của bạn nếu có (ví dụ: '@': ...)
    },
  },
  // Các cấu hình khác nếu có
});
