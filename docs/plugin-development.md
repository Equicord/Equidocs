---
title: Plugin Development
description: Learn how to start developing your own Equicord plugins from scratch.
---

# Plugin Development

Equicord uses the same plugin system as Vencord, which means you can develop entirely new plugins from scratch or adapt existing ones.

This page covers:

- Creating your first plugin
- Understanding the plugin boilerplate
- Development tips and resources

## Creating Your First Plugin

### 1. Choose the correct folder

| Path                  | Purpose                  |
| --------------------- | ------------------------ |
| `equicordplugins/`    | For Equicord plugins     |
| `userplugins/`        | For personal plugins     |

### 2. Create a new folder using camelCase

| Example             | Valid |
| ------------------- | ----- |
| `myFirstPlugin`     | Yes   |
| `MyFirstPlugin`     | No    |
| `my first plugin`   | No    |

### 3. Add an `index.ts` file

Each plugin must have its own folder and the entry file must be named `index.ts` or `index.tsx`.

```text
src/userplugins/myFirstPlugin/index.ts
```

## Plugin Boilerplate

Inside `index.ts`, define your plugin using `definePlugin`.

### Equicord Plugin

If this is your first time contributing an Equicord plugin, you must first add yourself to the **`EquicordDevs`** object. Go to `/src/utils/constants.ts`, add your entry, and then reference it in the `authors` field.

```ts
import { EquicordDevs } from "@utils/constants";
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cool!",
    authors: [EquicordDevs.YourName],
});
```

Use this format for plugins inside `equicordplugins/`.

### User Plugin

For user plugins, you don't need to register yourself in `EquicordDevs`. Just provide your information directly as a plain object.

```ts
import definePlugin from "@utils/types";

export default definePlugin({
    name: "MyCoolPlugin",
    description: "I am very cool!",
    authors: [{ name: "Your Name", id: 1234567890n }],
});
```

Use this format for plugins inside `userplugins/`.

## Guidelines

- `name` should be short, clear, and unique
- `description` should clearly explain what the plugin does
- Use `EquicordDevs.YourName` only for Equicord plugins
- Use a plain object for personal or private plugins

## Further Resources

To learn more about how plugins work, check out the [Equicord GitHub repository](https://github.com/Equicord/Equicord) and explore the existing plugins in:

- `src/equicordplugins` — Equicord plugins
- `src/plugins` — Vencord plugins

For more in-depth plugin development information, visit the [DeepWiki](https://deepwiki.com/Equicord/Equicord).

> [!NOTE]
> **DeepWiki is AI driven and may contain inaccuracies. Always verify information from the official docs or source code.**

### Where to get help

For plugin development suggestions and support, you can ask in the Equicord Discord. You may not get a reply if the user or person is not knowledgeable on the topic.

> [!NOTE]
> Want to help improve these docs? Open a PR [on GitHub](https://github.com/Equicord/Equidocs/pulls).