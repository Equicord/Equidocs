---
title: Building from Source
description: Learn how to build Equicord and Equibop from source for development purposes.
---

# Building from Source

## Equicord

If you need to build Equicord from source for development purposes, follow these steps:

### Prerequisites

Before starting, ensure you have the following dependencies installed:

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.dev/en/)

### Install pnpm

> [!WARNING]
> **Windows users:** Do not run the following commands in an administrator terminal. This can break your Discord installation.

```sh
npm i -g pnpm
```

### Clone the Repository

> [!WARNING]
> Do not clone in your system folder. Clone in a folder you will remember, like your Documents folder.

Windows:

```sh
cd "%USERPROFILE%/Documents"
```

Linux or MacOS:

```sh
cd "$HOME/Documents"
```

```sh
git clone https://github.com/Equicord/Equicord
cd Equicord
```

### Install Dependencies

```sh
pnpm install --no-frozen-lockfile
```

## Discord Desktop

### Build

```sh
pnpm build
```

> [!TIP]
> To enable Developer-only plugins and access debugging tools like **PatchHelper**, build in Development Mode using the `--dev` flag:

```sh
pnpm build --dev
```

> [!TIP]
> If you are actively making changes to the source code, use **Watch Mode**. This automatically triggers a rebuild every time you save a file:

```sh
pnpm build --watch
# Or for dev mode with watch:
pnpm build --dev --watch
```

### Inject and Start

Run the injector to patch your Discord installation, then start Discord normally:

```sh
pnpm inject
```

## Equibop

Instructions for building **Equibop** from source have moved to the [Equibop Docs](https://equibop.org/wiki/linux/building-from-source).

> [!NOTE]
> Unless you're a developer, there's no reason to build from source. To use **user plugins** or **dev builds**, simply clone **Equicord** instead. More details [on Equibop's wiki](https://equibop.org/wiki/linux/dev-build/).

## Web Browser

### Build

```sh
pnpm buildWeb
```

> [!TIP]
> To enable Developer-only plugins and access debugging tools like **PatchHelper**, build in Development Mode using the `--dev` flag:

```sh
pnpm buildWeb --dev
```

### Install

After building, you will find the output files inside the `dist/` folder. Pick the one that matches your browser:

- **extension-chrome.zip** — For Chrome and Chromium-based browsers. Go to `chrome://extensions`, enable Developer Mode, and drag the zip file into the window.
- **extension-firefox.zip** — For Firefox. Go to `about:addons`, click the gear icon, and select `Install Add-on From File...`.
- **Equicord.user.js** — Userscript for Tampermonkey, Greasemonkey, or any other userscript manager. Open the file in your browser and your userscript manager will prompt you to install it.