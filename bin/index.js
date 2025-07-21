#!/usr/bin/env node

const path = require("path");
const { watchFiles } = require("../src/watcher");
const { getImportedPackages } = require("../src/parse");
const { findMissingPackages } = require("../src/resolver");
const { execSync } = require("child_process");

const targetDir = process.cwd();

watchFiles(targetDir, (filePath) => {
    const imported = getImportedPackages(filePath);
    const missing = findMissingPackages(imported);
    if (missing.length > 0) {
        console.log("Missing packages:", missing);

        missing.forEach(pkg => {
            try {
                execSync(`npm install ${pkg}`, { stdio: "inherit" });
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

