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
        if (ext === ".js" || ext === ".ts") {
            console.log(`[watcher] File changed: ${filePath}`);
            onFileChange(filePath);
        }
    });

    console.log(`[watcher] Watching ${directory} for changes...`);
}

module.exports = { watchFiles };
