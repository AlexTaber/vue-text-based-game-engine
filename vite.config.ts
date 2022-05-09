import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from "vite-tsconfig-paths";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), tsconfigPaths()],
})
