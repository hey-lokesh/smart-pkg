#!/usr/bin/env node

const path = require("path");
const { watchFiles } = require("../src/watcher");
const { getImportedPackages } = require("../src/parse");
const { findMissingPackages } = require("../src/resolver");
const { execSync } = require("child_process");

const projectDir = path.resolve(__dirname, "../src");

watchFiles(projectDir, (filePath) => {
    console.log(`[main] Detected change in: ${filePath}`);

    const imported = getImportedPackages(filePath);
    console.log("Imported packages:", imported);

    const missing = findMissingPackages(imported);

    if (missing.length > 0) {
        console.log("Missing packages:", missing);

        missing.forEach(pkg => {
            console.log(`Installing: ${pkg}...`);
            try {
                execSync(`npm install ${pkg}`, { stdio: "inherit" });
                console.log(`Installed: ${pkg}`);
            } catch (err) {
                console.error(`Failed to install ${pkg}:`, err.message);
            }
        });
    } else {
        console.log("All packages are installed.");
    }
});

/**
 * © 2025 LOKESH SINGH DANU. All rights reserved.
 * Licensed under Custom Developer License. See LICENSE file.
 */

