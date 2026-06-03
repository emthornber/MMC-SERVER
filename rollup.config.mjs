import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: './main.js',
    output: {
        file: 'distribution/app/bundle.js',
        format: 'cjs', // CommonJS format for Node.js
        dynamicImportInCjs: 'false',
        sourcemap: true
    },
    // rollupOptions: {
    //     external: ['winston'] // Exclude winston from the bundle
    // },
    plugins: [
        resolve({ preferBuiltins: true }), // tells Rollup how to find stuff in node_modules
        commonjs({
            dynamicRequireTargets: [
                './config/winston.js'
            ]
        }), // converts date-fns to ES modules
        json(), // allows Rollup to import JSON files
        // production && terser() // minify, but only in production
    ]
};