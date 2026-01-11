---
title: Plugins & Development
description: Learn how Equicord plugins work, how to install user plugins, and how to start developing your own.
---

# Plugins & Development

Equicord uses the same plugin system as Vencord. Users can make use of existing Vencord plugins, use their private plugins, or develop entirely new plugins from scratch.

This page covers:
- Installing user plugins
- Understanding the plugin structure
- Getting started with plugin development

## Installing User Plugins

Equicord supports any plugin to be built into your Discord (including 3rd-party plugins from Vencord). To install a user plugin, follow these steps:

> [!WARNING]
> To install user plugins, Equicord must be [built from source](https://docs.equicord.org/building-from-source).

Before continuing, make sure this folder exists:

```plaintext
src/userplugins/
``` 
> If the directory is not present in your project structure, **you will need to create it manually**.

### 1. Download the Plugin

Each plugin **must have it's own folder**, and the entry file must be named `index.ts` or `index.tsx`.

> [!TIP] Correct structure
> ```plaintext
> src/userplugins/myMagicPlugin/index.ts
> src/userplugins/myMagicPlugin/index.tsx
> ```

> [!DANGER] Incorrect structures
> ```plaintext
> src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.ts
> src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.tsx
>
> src/userplugins/index.ts
> src/userplugins/index.tsx
>
> src/userplugins/MyMagicPlugin/MyMagicPlugin.ts
> src/userplugins/MyMagicPlugin/MyMagicPlugin.tsx
> ```

### 2. Place the Plugin in the User Plugins Folder

Move the plugin folder into `src/userplugins/` in your cloned Equicord repository.

### 3. Build Equicord

After adding the plugin, rebuild Equicord so it gets bundled:

```sh
pnpm build
```

> [!NOTE]
> **If you want to enable Developer-only plugins, use:**

```sh
pnpm build --dev
```

### 4. Restart Discord

## Understanding Plugins in Equicord

Equicord supports multiple plugin sources to keep development flexible while maintaining a clean separation between **personal plugins**, **Vencord-based plugins**, and **Equicord plugins**.

Which folder you use depends on **who the plugin is for** and **where it should belong long-term**.

### Plugin Types and Locations

| Type            | Folder              | Description                                                |
| --------------- | ------------------- | ---------------------------------------------------------- |
| Equicord Plugin | src/equicordplugins | Equicord plugins intended to ship with the project.        |
| Vencord Plugin  | src/plugins         | Plugins sourced from or based on Vencord.                  |
| User Plugin     | src/userplugins     | Private plugins meant only for you. Not tracked or shared. |

### Which one should I use?

- Use **`equicordplugins/`** if:
  - The plugin is meant for Equicord users
  - It should be maintained and versioned
  - You will contribute to Equicord

- Use **`plugins/`** if:
  - The plugin originates from Vencord
  - You are adapting or reusing Vencord plugins
  - You will contribute to Vencord
  
- Use **`userplugins/`** if:
  - The plugin is just for you
  - You’re experimenting or prototyping
  - You don’t plan to share or maintain it long-term

> If a plugin is only for personal use, keep it in **userplugins**.  
> Anything meant to be shared or shipped should go into **equicordplugins**.

## Creating Your First Plugin

### 1. Choose the correct folder

| Path                | Purpose                  |
|---------------------|--------------------------|
| equicordplugins/    | For Equicord plugins     |
| userplugins/        | For personal plugins     |

### 2. Create a new folder using camelCase

| Example | Valid |
|---------|-------|
| `myFirstPlugin` | Yes |
| `MyFirstPlugin` | No |
| `my first plugin` | No |

### 3. Add an `index.ts` file

### Plugin Boilerplate

Inside `index.ts`, define your plugin using `definePlugin`.

### Equicord Plugin

If this is your first time contributing an Equicord plugin, you must first add yourself to the **`EquicordDevs`** object.
Go to `/src/utils/constants.ts`, add your entry, and then reference it in the `authors` field.

```ts
import { EquicordDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cool!",
    authors: [EquicordDevs.YourName],
});
```

Use this format for plugins inside `equicordplugins`.

### User Plugin

For user plugins, you don’t need to register yourself in `EquicordDevs`. Just provide your information directly as a plain object.

```ts
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cool!",
    authors: [{ name: "Your Name", id: 1234567890n }],
});
```

Use this format for plugins inside `userplugins`.

### Notes

Guidelines:

- `name` should be short, clear, and unique
- `description` should clearly explain what the plugin does
- Use `EquicordDevs.YourName` only for Equicord plugins
- Use a plain object for personal or private plugins

## Extras & Help

> [!NOTE]
> Want to help improve these docs? Open a PR [here](https://github.com/Equicord/Equidocs/pulls).

### “My plugin isn’t working”

Common issues:
- Wrong folder (`equicordplugins`, `plugins`, or `userplugins`)
- `index.ts` or `index.tsx` doesn't exist
- Folder name is not camelCase
- Equicord was not rebuilt after adding the plugin

If it still doesn’t work, check the build logs for errors.

### Where to get help

For plugin development suggestions/support, you can ask in the Equicord Discord. You may not get a reply if the user or person is not knowledgeable on the topic.
