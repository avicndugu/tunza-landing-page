import { defineConfig } from 'vite';
import { resolve } from 'path';
import {ViteEjsPlugin} from "vite-plugin-ejs";

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
    plugins: [
        ViteEjsPlugin(), // Process all HTML files using EJS
    ],
});
