import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

const jsxInJavaScriptFiles = () => ({
  name: 'green-drive-thru:jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    const filename = id.split('?')[0];
    if (!/\/src\/.*\.js$/.test(filename)) {
      return null;
    }

    return transformWithOxc(code, filename, {
      lang: 'jsx',
      jsx: {
        runtime: 'automatic',
      },
      sourcemap: true,
    });
  },
});

export default defineConfig({
  plugins: [
    jsxInJavaScriptFiles(),
    react({
      include: /\.[jt]sx?$/,
    }),
  ],
  build: {
    outDir: 'build',
  },
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
