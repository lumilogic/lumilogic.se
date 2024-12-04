import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-plugin-pages-sitemap';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@scss', replacement: resolve(__dirname, 'src/scss') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '~bootstrap', replacement: resolve(__dirname, 'node_modules/bootstrap') },
    ],
  },
  build: {
    target: 'es2015',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@scss/main";`
      }
    }
  },
  plugins: [
    react(),
    Pages({
      dirs: [{ dir: 'src/views', baseRoute: '' }],
      async onRoutesGenerated(routes) {
        const getAllPaths = (route) => {

          const paths = [];
          if (route.path !== undefined) paths.push(route.path);
          if (route.children) {
            route.children.forEach(child => {
              paths.push(...getAllPaths(child).map(p => `${route.path}/${p}`));
            });
          }
          return paths;
        };

        const formattedRoutes = routes
          .flatMap(getAllPaths)
          .map(path => {
            if (path === '/') return '/';  // Handle root path
            return '/#/' + path.toLowerCase();  // Handle all other paths
          })
          .filter(path => path === '/' || (!path.endsWith('/') && path !== '/#/products'));


        await generateSitemap({
          hostname: 'https://lumilogic.se',
          routes: formattedRoutes,
          readable: true,
          changefreq: 'weekly',
          priority: 1.0,
        });
      },
    }),
  ],
});