---
title: Plugin Development
description: Learn how Equicord plugins work, how to install user plugins, and how to start developing your own.
---

# 🧩 Plugin Development

Equicord has a powerful and flexible plugin system, heavily inspired by Vencord.  
You can **use existing Vencord plugins**, **create private user plugins**, or **even develop new plugins**!

This page covers:
- Installing user plugins
- Understanding the plugin structure
- Getting started with plugin development

## 🏭 Installing User Plugins

Equicord supports any plugin to be built into your Discord (including 3rd-party plugins from Vencord). To install a user plugin, follow these steps:

> [!WARNING]
> To install user plugins, **Equicord MUST be built from source**. See [here](https://docs.equicord.org/building-from-source) for more info.

Before continuing, make sure this folder exists:

```plaintext
src/userplugins/
````

### 1. ⏬ Download the Plugin

Each plugin **must have it's own folder**, and the entry file must be named `index.ts` or `index.tsx`.

#### ✅ Correct structure

```plaintext
src/userplugins/MyMagicPlugin/index.ts
src/userplugins/MyMagicPlugin/index.tsx
```

#### ❌ Incorrect structures

```plaintext
src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.ts
src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.tsx

src/userplugins/index.ts
src/userplugins/index.tsx

src/userplugins/MyMagicPlugin/MyMagicPlugin.ts
src/userplugins/MyMagicPlugin/MyMagicPlugin.tsx
```

### 2. 📥 Place the Plugin in the User Plugins Folder

Move the plugin folder to the correct location:

* **Windows:** `Equicord\src\userplugins\`
* **macOS:** `~/Library/Application Support/Equicord/src/userplugins/`
* **Linux:** `~/.config/Equicord/src/userplugins/`

### 3. 🛠️ Build Equicord

After adding the plugin, rebuild Equicord so it gets bundled:

```sh
pnpm build
```

> [!NOTE]
> **If you want to enable Developer-only plugins, use:**

```sh
pnpm build --dev
```

### 4. 🔃 Restart Discord

## 🧠 Understanding Plugins in Equicord

Equicord supports multiple plugin sources to keep development flexible while maintaining a clean separation between **personal plugins**, **Vencord-based plugins**, and **official Equicord plugins**.

Which folder you use depends on **who the plugin is for** and **where it should be long-term**.

### Plugin Types and Locations

| Type | Folder | Description |
|----|------|------------|
| **User Plugin** | `userplugins/` | Private plugins meant only for you. Not tracked or shared. |
| **Vencord Plugin** | `vencordplugins/` | Plugins sourced from or based on Vencord. |
| **Equicord Plugin** | `equicordplugins/` | Official Equicord plugins intended to ship with the project. |

### Which one should I use?

- Use **`userplugins/`** if:
  - The plugin is just for you
  - You’re experimenting or prototyping
  - You don’t plan to share or maintain it long-term

- Use **`equicordplugins/`** if:
  - The plugin is meant for Equicord users
  - It should be maintained and versioned
  - You will contribute to Equicord

- Use **`vencordplugins/`** if:
  - The plugin originates from Vencord
  - You are adapting or reusing Vencord plugins
  - You will contribute to Vencord

> If a plugin is only for personal use, keep it in **userplugins**.  
Anything meant to be shared or shipped should go into **equicordplugins**.

## 🧪 Creating Your First Plugin

### 1. Choose the correct folder

| Path                | Purpose                  |
|---------------------|--------------------------|
| `userplugins/`      | For personal plugins     |
| `equicordplugins/`  | For Equicord plugins     |

### 2. Create a new folder using **camelCase**

> [!CAUTION]
> * `myFirstPlugin` ✅
> * `MyFirstPlugin` ❌
> * `my first plugin` ❌

### 3. Add an `index.ts` file

### Plugin Boilerplate

Inside `index.ts`, define your plugin using `definePlugin`.

### 🔹 Equicord Plugin

> [!NOTE]
> If this is your first time contributing an Equicord plugin, you must first add yourself to the **`Devs`** object.
> 
> Go to `/src/utils/constants.ts`, add your entry, and then reference it in the `authors` field.

```ts
export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cool!",
    authors: [Devs.YourName],
});

```

> Use this format for plugins inside **`equicordplugins/`**.

### 🔹 User Plugin

For user plugins, you don’t need to register yourself in `Devs`. Just provide your information directly as a plain object.

```ts
export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cute!",
    authors: [{ name: "Your Name", id: 1234567890n }],
});

```

> Use this format for plugins inside **`userplugins/`**.

### Notes

::: tip Guidelines

* **`name`** should be short, clear, and unique
* **`description`** should clearly explain what the plugin does
* Use **`Devs.YourName`** only for Equicord plugins
* Use a **plain object** for personal or private plugins
:::

## 🧩 Extras & Help

This documentation is still evolving.
If you’d like to help improve it, feel free to open a PR [here](https://github.com/Equicord/EquiDocs/pulls/)!

### ❓ “My plugin isn’t working”

* Correct folder (`userplugins`, `equicordplugins`, or `plugins`)
* `index.ts` or `index.tsx` exists
* Folder name is camelCase
* Equicord was rebuilt after adding the plugin

If it still doesn’t work, check the build logs for errors.

### 💬 Where to get help

For plugin development suggestions/support, you can ask in the Equicord Discord. You may not get a reply if the user or person is not knowledgeable on the topic.