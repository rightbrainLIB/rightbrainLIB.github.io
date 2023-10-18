import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@imgs", replacement: path.resolve(__dirname, "src/assets/images") },
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@slices", replacement: path.resolve(__dirname, "src/slices") }
    ]
  }
})
