const path = require("path");

function isInstalled(pkg) {
    try {
        require.resolve(pkg, { paths: [process.cwd()] });
        return true;
    } catch (e) {
        return false;
    }
}

function findMissingPackages(imported) {
    return imported.filter(pkg => !isInstalled(pkg));
}

module.exports = { findMissingPackages };

/**
 * © 2025 LOKESH SINGH DANU. All rights reserved.
 * Licensed under Custom Developer License. See LICENSE file.
 */

