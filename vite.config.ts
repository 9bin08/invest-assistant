import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      timers: 'rollup-plugin-node-polyfills/polyfills/timers',
    },
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      external: ['lodash-es', 'http', 'msw'],
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    tsconfigPaths(),
    visualizer({
      template: 'treemap',
      // open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'analyse.html',
    }) as PluginOption,
  ],
});
