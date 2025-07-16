# 🔧 smart-pkg

> ✨ Automatically installs missing npm packages when you import them. No more "forgot to install" errors!

---

## 🚀 Why smart-pkg?

You know the drill:

```js
import express from "express"; // oh wait... forgot to `npm install express`
```

`smart-pkg` watches your project, detects imported packages, and **auto-installs** them the moment you save a file.

Just **write code** — let `smart-pkg` handle the rest.

---

## 📦 Installation

Install it locally in your project:

```bash
npm i -D smart-pkg
```

---

## ⚙️ Usage

### 📍 Option 1: Run directly

```bash
npx smart-pkg
```

This starts the watcher. Save any `.js`, `.jsx`, `.ts`, or `.tsx` file — and it’ll auto-install missing packages listed in `import` or `require`.

---

### 📍 Option 2: Run alongside your dev server

To use `smart-pkg` with React, Vite, Next.js, etc., run it **together** with your app.

#### 1. Install `concurrently`

```bash
npm i -D concurrently
```

#### 2. Add a script to your `package.json`

For React (CRA):

```json
"scripts": {
  "dev": "concurrently \"smart-pkg\" \"react-scripts start\""
}
```

For Vite:

```json
"scripts": {
  "dev": "concurrently \"smart-pkg\" \"vite\""
}
```

#### 3. Start your app

```bash
npm run dev
```

✅ `smart-pkg` runs in the background  
✅ Your app runs normally  
✅ Missing packages are auto-installed as you go

---

## 🔍 How It Works

1. Watches your `src/` folder (by default)
2. Parses each changed file
3. Extracts all `import` and `require()` statements
4. Checks if those packages are installed
5. Installs missing ones automatically using `npm install`

Supports:

- ✅ `import ... from "pkg"`
- ✅ `const x = require("pkg")`
- ✅ `.js`, `.jsx`, `.ts`, `.tsx`

---

## 🛡️ Safety

- Ignores built-in modules like `fs`, `path`, etc.
- Only installs packages that are actually imported
- Uses `npm install` under the hood

---

## 🔮 Roadmap (Post MVP)

- [ ] Auto-import used variables (like VS Code)
- [ ] Add global ignore config (e.g. `.smart-pkg-ignore`)
- [ ] Prompt before installing (optional)
- [ ] Better logging + stats
- [ ] Support for monorepos / workspaces

---

## 🤝 Contributing

Got ideas? Found bugs?  
Feel free to [open an issue](https://github.com/your-username/smart-pkg/issues) or [submit a PR](https://github.com/your-username/smart-pkg/pulls)!

---

## 📄 License

MIT © 2025 — Built with 💛 for forgetful developers.
