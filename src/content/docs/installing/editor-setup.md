---
title: Setting up Your Editor
description: Set up VS Code or Zed for Equicord plugin development.
sidebar:
    order: 3
---

**VS Code is the preferred editor for Equicord development.** The project maintains workspace settings and extension recommendations for it, making it the easiest place to start.

If you do not have it yet, [download VS Code](https://code.visualstudio.com/download). Then open the Equicord source folder you created in the [Building from Source guide](/installing/#building-from-source).

## Installing the Recommended Extensions

When you open the Equicord folder in VS Code, accept the prompt to install the recommended extensions.

If the prompt does not appear, open the Extensions view and search for `@recommended` to find the workspace recommendations. They are also listed in the repository's [`.vscode/extensions.json`](https://github.com/Equicord/Equicord/blob/main/.vscode/extensions.json).

Equicord currently recommends:

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) to apply the project's indentation and whitespace settings.
- [JSON to TS](https://marketplace.visualstudio.com/items?itemName=GregorBiswanger.json2ts) to generate TypeScript interfaces from JSON objects.
- [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) to integrate the project's Oxc tooling with the editor.
- [Vencord User Companion](https://marketplace.visualstudio.com/items?itemName=sadan.vencord-user-companion) for plugin development helpers.

Use the repository's recommendations if this list changes. Once your editor is ready, continue with [Basic Plugin Setup](/plugins/).
