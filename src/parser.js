const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function getUsedAndImportedPackages(filePath) {
    const code = fs.readFileSync(filePath, "utf-8");
    const ast = parser.parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"]
    });

    const used = new Set();
    const imported = new Set();

    traverse(ast, {
        ImportDeclaration({ node }) {
            imported.add(node.source.value);
        },
        CallExpression({ node }) {
            if (
                node.callee.name === "require" &&
                node.arguments.length &&
                node.arguments[0].type === "StringLiteral"
            ) {
                imported.add(node.arguments[0].value);
            }
        },
        Identifier({ node }) {
            used.add(node.name);
        }
    });

    return {
        imported: Array.from(imported),
        used: Array.from(used)
    };
}

module.exports = { getUsedAndImportedPackages };
