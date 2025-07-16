const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

function getImportedPackages(filePath) {
    const code = fs.readFileSync(filePath, "utf-8");

    const ast = parser.parse(code, {
        sourceType: "unambiguous",
        plugins: ["jsx", "typescript"]
    });

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
        }
    });

    return Array.from(imported);
}

module.exports = { getImportedPackages };
