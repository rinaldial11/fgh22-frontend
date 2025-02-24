import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#1E3E62", // Warna utama (primary)
          "@link-color": "#1D4ED8", // Warna link
          "@success-color": "#52c41a", // Warna sukses
          "@warning-color": "#faad14", // Warna peringatan
          "@error-color": "#ff4d4f", // Warna kesalahan
          "@font-size-base": "14px", // Ukuran font default
          "@border-radius-base": "6px", // Radius border
        },
      },
    },
  },
});
