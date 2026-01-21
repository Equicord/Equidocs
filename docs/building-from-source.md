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

### Start Discord

## Equibop

Instructions for building **Equibop** from source have moved to the [Equibop Docs](https://equibop.org/wiki/linux/building-from-source).

> [!NOTE]
> Unless you're a developer, there's no reason to build from source. To use **user plugins** or **dev builds**, simply clone **Equicord** instead. More details [here](https://equibop.org/wiki/linux/dev-build/).