---
title: Plugin Development
description: Guide on installing user plugins for Equicord and info about plugin development.
---

# 🏭/🏗️ Plugin Development

## 🏭/🏗️ Installing Userplugins

Equicord supports any plugin to be built into your Discord (including 3rd-party plugins from Vencord). To install a user plugin, follow these steps:

### ⚠️ IMPORTANT

To install userplugins, Equicord needs to be built from source. See [here](https://docs.equicord.org/building-from-source) for more info.

Make a userplugins folder in src/ so it should be src/userplugins/

### 1. ⏬ Download the Plugin

#### ✅ Correct:

```plaintext
src/userplugins/MyMagicPlugin/index.ts
src/userplugins/MyMagicPlugin/index.tsx
```

#### ❌ Incorrect:

```plaintext
src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.ts
src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.tsx

src/userplugins/index.ts
src/userplugins/index.tsx

src/userplugins/MyMagicPlugin/MyMagicPlugin.ts
src/userplugins/MyMagicPlugin/MyMagicPlugin.tsx
```

### 2. 📥 Place Plugin in Userplugins Folder

After downloading, place the plugin file in one of these locations:

- **Windows:** `Equicord\src\userplugins\`
- **macOS:** `~/Library/Application Support/Equicord/src/userplugins/`
- **Linux:** `~/.config/Equicord/src/userplugins/`

### 3. 🛠️ Build Equicord

After placing the plugin, you need to rebuild Equicord to include the new plugin:

```sh
pnpm build
```

**Note:** If you want to enable Developer-only plugins, use:

```sh
pnpm build --dev
```

### 4. 🔃 Restart Discord

Restart Discord completely for the plugin to take effect. You can then enable it in Equicord settings.

## 🏗️🏭 Extras

This documentation is currently unfinished. If you would like to contribute to Equicord, open a PR [here](https://github.com/Equicord/EquiDocs/pulls/).

### 1. "My Plugin isn't working!"

Make sure the plugin is in the correct folder and has the correct file structure. If you're still having issues, check the Equicord build logs for more information.

### 2. Where do I get support about Plugin Development?

For plugin development suggestions/support, you can ask in the Equicord Discord. You may not get a reply if the user or person is not knowledgeable on the topic.
