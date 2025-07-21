const chokidar = require("chokidar");
const path = require("path");

function watchFiles(directory, onFileChange) {
    const watcher = chokidar.watch(directory, {
        ignored: /node_modules|\.git/,
        persistent: true,
        ignoreInitial: true,
        usePolling: true,
        interval: 500
    });

    watcher.on("change", (filePath) => {
        const ext = path.extname(filePath);
        if ([".js", ".jsx", ".ts", ".tsx"].includes(ext)) {
            onFileChange(filePath);
        }
    });
}

module.exports = { watchFiles };

/**
 * © 2025 LOKESH SINGH DANU. All rights reserved.
 * Licensed under Custom Developer License. See LICENSE file.
 */

