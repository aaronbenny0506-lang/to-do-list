# Field Notes — A React To-Do List

A simple, interactive to-do list built with React. No build tools or npm
install required — React and Babel are loaded directly via CDN inside a
single HTML file, so it runs immediately in any browser.

## ✨ Features

- **Add tasks** — type in the input and press Enter or click "Add"
- **Mark tasks as done** — click the checkbox; completed tasks get a
  strikethrough
- **Delete tasks** — hover over a task and click "Remove"
- Live tally of how many tasks are completed vs. total

## 🗂️ Project Structure

```
├── index.html   # The entire app (HTML + CSS + React, all in one file)
└── README.md
```

## 🚀 Run Locally

No installation needed:
1. Download or clone this repository
2. Double-click `index.html` (or right-click → Open with → your browser)
3. That's it — the app loads and runs immediately (requires an internet
   connection, since React/Babel load from a CDN)

## 🌐 Host it Live with GitHub Pages

1. Push this repository to GitHub (if not already done)
2. Go to your repo → **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment" → **Source**, select **"Deploy from a branch"**
4. Under "Branch", select **main** and folder **/ (root)** → **Save**
5. Wait ~1 minute, then refresh the page — GitHub will show your live URL,
   typically:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
6. Share that hosted URL as your submission link

## 🧠 How It Works (Quick Overview)

- React is loaded via `<script>` tags from a CDN (`unpkg.com`) — no
  `npm install` or bundler needed
- Babel Standalone compiles the JSX (the HTML-like syntax inside
  `<script type="text/babel">`) directly in the browser
- Task state is managed with React's `useState` hook — no backend or
  database, so tasks reset if you refresh the page
