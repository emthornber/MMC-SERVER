// Source - https://stackoverflow.com/a/75088753
// Posted by Mechanic, modified by community. See post 'Timeline' for change history
// Retrieved 2026-06-29, License - CC BY-SA 4.0

import webpack from 'webpack';

export default {
    entry: "./main.js",
    output: {
        // output bundle will be in `dist/built.js`
        filename: `built.js`,
    },
    target: 'node',
    mode: 'production',
    // optional: bundle everything into 1 file
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ],
};
