**License: Custom Developer License – non-commercial use only.**

# ⚡ pkgenie

> A pkg casting magic just like genie.
> The end of manual installs.  
> Just code. Save. Keep flowing. We handle the rest.

---

## 🧠 Why pkgenie?

-At the beginning of your coding journey it helps the frustation of seeing error and to open separate terminal and run command .
-Modern development moves fast — so why are you still manually installing packages?

With `pkgenie`, just write your imports and keep building.  
No more context switching. No more `npm install`.  
The moment you save your file, we detect what you need and install it for you.

---

### 🪄 Example

```js
import express from "express"; // no need to install it manually
```

Just write code. Save. Watch it get installed — automatically.  
Stay in flow.

---

## ⚙️ Features

- ✅ Automatically detects missing packages from `import` or `require()`
- ✅ Auto-installs them the moment you save
- ✅ Supports `.js`, `.jsx`, `.ts`, `.tsx`
- ✅ Works alongside any dev server (React, Vite, etc.)
- ✅ Built for your productivity

---

## 📦 Installation

Install locally in your project:

```bash
npm i -D pkgenie
```

---

## 🚀 Usage

### 🟢 Quick Start

```
npx pkgenie
```

Then write code like:

```js
import lodash from "lodash";
```

Just save your file — and `lodash` will be installed automatically.

---

### ⚙️ Use with Dev Server

To run `pkgenie` alongside your dev server, install `concurrently`:

```
npm i -D concurrently
```

Then add this to your `package.json`:

```json
"scripts": {
  "dev": "concurrently \"pkgenie\" \"react-scripts start\""
}
```

Or with Vite:

```json
"scripts": {
  "dev": "concurrently \"pkgenie\" \"vite\""
}
```

Then run your app as usual:

```
npm run dev
```

---

## 🔍 How It Works

1. Watches your `src/` folder for changes
2. Parses files with `babel` to extract `import` / `require`
3. Compares used packages to what's installed
4. Runs `npm install <missing-pkg>` when needed

---

LICENSE

- © 2025 LOKESH SINGH DANU. All rights reserved.
- Licensed under Custom Developer License. See LICENSE file.

## 🔐 Safe by Design

- Skips built-in modules (`fs`, `path`, etc.)
- Ignores duplicates and existing packages
- Never installs anything unless it's used

---

## ❤️ Philosophy

> Don’t fix forgetting — eliminate the need to remember.  
> pkgenie lets you stay in code mode — without ever leaving the editor.

---

## 🤝 Contributing

We welcome feedback, ideas, and PRs!  
Open an issue or pull request on GitHub.

---

## 📄 License

- © 2025 LOKESH SINGH DANU. All rights reserved.
- Licensed under Custom Developer License. See LICENSE file.
