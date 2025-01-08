import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                '2': '/2/index.html',
                '3': '/3/index.html',
                '4': '/4/index.html',
            },
        },
    },
    plugins: [],
});
