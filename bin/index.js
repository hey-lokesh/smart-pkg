#!/usr/bin/env node


const path = require("path");
const { watchFiles } = require("../src/watcher");
const { getUsedAndImportedPackages } = require("../src/parser");

const projectDir = path.resolve(__dirname, "../src");

watchFiles(projectDir, (filePath) => {
    console.log(`[main] Detected change in: ${filePath}`);
    const result = getUsedAndImportedPackages(filePath);
    console.log("Imported packages:", result.imported);
    console.log("Used identifiers:", result.used);
});
