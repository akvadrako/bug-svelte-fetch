import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [
        sveltekit(),
    ],
    logLevel: 'info',
    clearScreen: false,
    publicDir: 'static',
    server: {
        host: true,
        fs: {
            allow: ['tag', '.yarn'],
        },
    },
};

export default config;
