import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const pkg = require('./package.json')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: { port: 3000 }
  // base: process.env.NODE_ENV === 'development' ? '' : `https://static.codefuture.top/${pkg.keke.prefix}/`
})
