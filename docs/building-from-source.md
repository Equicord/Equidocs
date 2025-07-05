---
title: Building from Source
description: Learn how to build Equicord and Equibop from source for development purposes.
---

# 🏗️ Building from Source

## Equicord

If you need to build Equicord from source for development purposes, follow these steps:

### 🧩 Prerequisites

Before starting, ensure you have the following dependencies installed:

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.dev/en/)

### 🛠️ Install pnpm

**Important:** For subsequent steps, do NOT use an admin/root terminal. Doing so could damage your Discord/Equicord installation and require a complete reinstall.

```sh
npm i -g pnpm
```

### 🛠️ Clone the Repository

### ⚠️ DO NOT CLONE IN YOUR SYSTEM FOLDER

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

### 🛠️ Install Dependencies

```sh
pnpm install --no-frozen-lockfile
```

### 🛠️ Build Equicord

```sh
pnpm build
```

**Note:** To enable Developer-only plugins inside of Equicord, you must build using:

```sh
pnpm build --dev
```

### 💉 Inject Equicord into Discord

```sh
pnpm inject
```

### 🛠️ Start Equicord

Start up Discord, and you now have Equicord! Well done, you built Equicord from source!

## Equibop

If you need to build Equibop from source for development purposes, follow these steps:

### 🧩 Prerequisites

Before starting, ensure you have the following dependencies installed:

- [Git](https://git-scm.com/download)
- [Node.js LTS](https://nodejs.dev/en/)

### 🛠️ Install pnpm

**Important:** For subsequent steps, do NOT use an admin/root terminal. Doing so could damage your Discord/Equicord installation and require a complete reinstall.

```sh
npm i -g pnpm
```

### 🛠️ Clone the Repository

```sh
git clone https://github.com/Equicord/Equibop
cd Equibop
```

### 🛠️ Install Dependencies

```sh
pnpm i
```

### 🛠️ Build Equibop

Equibop can be built in 4 ways:

#### Run it without packaging

```sh
pnpm start
```

#### Via Package Only

```sh
pnpm package
```

#### Only build the pacman target

```sh
pnpm package --linux pacman
```

#### Package to a directory only

```sh
pnpm package:dir
```
