#!/usr/bin/env node


const path = require("path");
const { watchFiles } = require("../src/watcher");

const projectDir = path.resolve(__dirname, "../src");

watchFiles(projectDir, (filePath) => {
    console.log(`[main] Detected change in: ${filePath}`);
});
