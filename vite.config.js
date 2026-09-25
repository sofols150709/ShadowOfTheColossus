import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // OneDrive does not always emit reliable file-change events on Windows.
      usePolling: true,
      interval: 300,
    },
  },
})
