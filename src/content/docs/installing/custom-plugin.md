---
title: Installing Custom Plugins
description: How to install third-party and private plugins in Equicord.
---

Equicord supports any plugin to be built into your Discord, whether they are plugins made by the community, adapted from Vencord or ones you wrote yourself.

:::caution
Equicord does not provide support for user plugins or dev builds.
If you run into issues you cannot resolve on your own, you may ask in developer channels (**NOT SUPPORT**), but a response is not guaranteed.
:::

## Before You Start

User plugins require building Equicord from source. If you have not done this yet, follow the [Building from Source](/installing/#building-from-source) guide first.

You will also need to understand where plugins live in the project, since putting a plugin in the wrong folder is the most common cause of issues.

### Where plugins live

Equicord separates plugins into three folders depending on their purpose:

| Folder                 | What goes here                                         |
| ---------------------- | ------------------------------------------------------ |
| `src/equicordplugins/` | Official Equicord plugins, shipped with the project.   |
| `src/plugins/`         | Plugins sourced from or based on Vencord.              |
| `src/userplugins/`     | Your private plugins. Not tracked, not shared.         |

**Unless you are contributing to Equicord or Vencord, always use `src/userplugins/`.**

## Installing a Plugin

### 1. Create the `userplugins` folder

This folder does not exist by default. Navigate to `src/` inside your Equicord folder and create a new folder named `userplugins`.

```text
src/userplugins/
```

### 2. Add the plugin

Place the plugin inside `src/userplugins/`. **Each plugin must have its own folder**, and the entry file must be named `index.ts` or `index.tsx`.

:::tip[Valid structures]
```text
src/userplugins/myMagicPlugin/index.ts
src/userplugins/myMagicPlugin/index.tsx
```
:::

:::danger[Invalid structures]
```text
src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.ts
src/userplugins/MyMagicPlugin/MyMagicPlugin/MyMagicPlugin.tsx

src/userplugins/index.ts
src/userplugins/index.tsx

src/userplugins/MyMagicPlugin/MyMagicPlugin.ts
src/userplugins/MyMagicPlugin/MyMagicPlugin.tsx
```
:::

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

## Installing Plugins via UserPluginInstaller

You can install user plugins straight from Discord with the **UserPluginInstaller** plugin, no manual cloning or rebuilding required.

:::tip
UserPluginInstaller is only available on **dev builds**. Make sure you build Equicord with:

```sh
pnpm build --dev
```
:::

Once enabled, any message containing a link to a plugin's Git repository will show an **Install Plugin** button underneath it. Clicking it opens a popup with the plugin's metadata and a few warnings. Review them, and the plugin will be installed.

:::caution
- **Do not install** plugins from untrusted people until you have reviewed them yourself. Neither Equicord nor Vencord are responsible for anything that happens to your system as a result.
- UserPluginInstaller only works on platforms where native plugin helpers run, i.e. **Discord Desktop** or **Vesktop**.
:::

## Updating Equicord & official plugins

Run these three commands inside your Equicord folder:

```sh
git fetch
git pull
pnpm build
```

:::note
`git fetch` and `git pull` only update **Equicord itself and its official plugins**. They do **not** update your user plugins automatically.
:::

After building, you only need to run `pnpm inject` again if Discord is not already injected. If it was already running, a simple restart of Discord is enough.

## Updating user plugins

Git does **not** manage your user plugins. To update a user plugin, you need to:

:::tip
If you're experienced enough, you can look it up or figure out how to make git manage it, but let's focus on simplicity.
:::

1. Download the new version of the plugin manually from its repository or source.
2. Replace the old file(s) inside `src/userplugins/` with the new ones.
3. Rebuild Equicord:

```sh
pnpm build
```

:::tip
If you are not familiar with Git yet, the [GitHub Git guide](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository) and the [Git for beginners](https://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide) are great places to start. They will teach you how Git works and how to use it, which will help you both here and in many other situations.
:::

## Troubleshooting

If your plugin isn't showing up, check these first:

- Wrong folder (`equicordplugins`, `plugins`, or `userplugins`).
- The entry file is not named `index.ts` or `index.tsx`.
- Folder name is not camelCase.
- Equicord was not rebuilt after adding the plugin.

### Missing dependencies

If `pnpm build` complains about missing packages, run:

```sh
pnpm install
```

Then try building again.

### Discord not reflecting your build

If Discord still shows the old version after building, try rebuilding:

```sh
pnpm build
```

If the issue persists, make sure Discord was fully restarted after the build completed.

### Something in your user plugin broke

Errors that persist after running `pnpm install` are almost always caused by the plugin itself. A syntax error, a missing file, a broken import or whatever. Read the error message carefully and check the plugin's source manually.