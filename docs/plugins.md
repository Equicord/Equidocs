---
title: Installing User Plugins
description: How to install third-party and private plugins in Equicord.
---

# Installing User Plugins

Equicord supports any plugin to be built into your Discord, whether they are plugins made by the community, adapted from Vencord, or ones you wrote yourself.

> [!WARNING]
> Equicord does not provide support for user plugins or dev builds.
> If you run into issues you cannot resolve on your own, you may ask in developer channels(**NOT SUPPORT**), but a response is not guaranteed.

## Before You Start

User plugins require building Equicord from source. If you have not done this yet, follow the [Building from Source](/building-from-source) guide first.

You will also need to understand where plugins live in the project, since putting a plugin in the wrong folder is the most common cause of issues.

### Where plugins live

Equicord separates plugins into three folders depending on their purpose:

| Folder                  | What goes here                                              |
| ----------------------- | ----------------------------------------------------------- |
| `src/equicordplugins/`  | Official Equicord plugins, shipped with the project.        |
| `src/plugins/`          | Plugins sourced from or based on Vencord.                   |
| `src/userplugins/`      | Your private plugins. Not tracked, not shared.              |

**Unless you are contributing to Equicord or Vencord, always use `src/userplugins/`.**

## Installing a Plugin

### 1. Create the `userplugins` folder

This folder does not exist by default. Navigate to `src/` inside your Equicord folder and create a new folder named `userplugins`.

```text
src/userplugins/
```

### 2. Add the plugin

Place the plugin inside `src/userplugins/`. **Each plugin must have it's own folder**, and the entry file must be named `index.ts` or `index.tsx`.

> [!TIP] Valid structures
>
> ```text
> src/userplugins/myMagicPlugin/index.ts
> src/userplugins/myMagicPlugin/index.tsx
> ```

> [!DANGER] Invalid structures
>
> ```text
> src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.ts
> src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.tsx
>
> src/userplugins/index.ts
> src/userplugins/index.tsx
>
> src/userplugins/MyMagicPlugin/MyMagicPlugin.ts
> src/userplugins/MyMagicPlugin/MyMagicPlugin.tsx
> ```

### 3. Rebuild Equicord

After adding the plugin, rebuild so it gets bundled into Discord:

```sh
pnpm build
```

If you want to also include developer-only plugins, use:

```sh
pnpm build --dev
```

### 4. Restart Discord

Once the build finishes, restart Discord. Your plugin should now appear in the plugins tab.

## Troubleshooting

If your plugin isn't showing up, check these first:

- Wrong folder (`equicordplugins`, `plugins`, or `userplugins`)
- The entry file is named `index.ts` or `index.tsx`.
- Folder name is not camelCase
- Equicord was not rebuilt after adding the plugin

If none of the above helps, check the build output for errors — they usually point directly to the problem.

> [!NOTE]
> Want to help improve these docs? Open a PR [on GitHub](https://github.com/Equicord/Equidocs/pulls).
