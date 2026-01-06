---
title: Building from Source
description: Learn how to build Equicord and Equibop from source for development purposes.
---

# <IconConstruction /> Building from Source

## Equicord

If you need to build Equicord from source for development purposes, follow these steps:

### Prerequisites

Before starting, ensure you have the following dependencies installed:

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.dev/en/)

### Install pnpm

**Important:** For subsequent steps, do NOT use an admin/root terminal. Doing so could damage your Discord/Equicord installation and require a complete reinstall.

```sh
npm i -g pnpm
```

### Clone the Repository

### <IconAlert/> DO NOT CLONE IN YOUR SYSTEM FOLDER

Clone in a folder you will remember where like your documents folder

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

### Build Equicord

```sh
pnpm build
```

> [!TIP]
> To enable Developer-only plugins and access debugging tools like **PatchHelper**, you should build Equicord in Development Mode using the `--dev` flag:

```sh
pnpm build --dev
```

> [!TIP]
> If you are actively making changes to the source code, use **Watch Mode**. This automatically triggers a rebuild every time you save a file, saving you from running the build command manually:

```sh
pnpm build --watch
# Or for dev mode with watch:
pnpm build --dev --watch
```

### Inject Equicord into Discord

```sh
pnpm inject
```

### Start Equicord

Start up Discord, and you now have Equicord! Well done, you built Equicord from source!