
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
import liveReload from 'vite-plugin-live-reload'

export default ({ command, mode }) => ({
  root: 'src',
  base: mode === 'development' ? '/' : '/dist/',
  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,
    manifest: true,
    target: 'es2018',
    rollupOptions: {
      input: '/index.js'
    },
  },
  server: {
    cors: true,
    strictPort: true,
    port: 3000,
    // hmr: { host: 'localhost' },
  },
  plugins: [
    liveReload([
      '../content/**/*',
      '../site/(templates|snippets|controllers|models)/**/*.php'
    ]),
    WindiCSS(),
  ],
})

