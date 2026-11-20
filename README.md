<div align="center">

<img src="src/assets/logo.png" alt="Equicord logo" width="96" />

# Equidocs

Community documentation for **Equicord**. Install the client, build plugins, and explore Discord's code.

[Read the docs](https://docs.equicord.org) · [Equicord](https://github.com/Equicord/Equicord) · [Join the community](https://equicord.org/discord)

[![Discord](https://img.shields.io/discord/1207691698386501634.svg?color=768AD4&label=Community&logo=discord&logoColor=white)](https://equicord.org/discord)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

</div>

## Find your starting point

| I want to…                | Start here                                                         |
| ------------------------- | ------------------------------------------------------------------ |
| Install Equicord          | [Installation guide](https://docs.equicord.org/installing/)        |
| Build a plugin            | [Plugin development](https://docs.equicord.org/plugins/)           |
| Configure my editor       | [Editor setup](https://docs.equicord.org/installing/editor-setup/) |
| Understand Discord's code | [Code navigation](https://docs.equicord.org/discord-code/)         |
| Troubleshoot a problem    | [FAQ](https://docs.equicord.org/faq/)                              |

## Run locally

If you use nvm, run `nvm install` and `nvm use` to select the version in `.nvmrc`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Astro. Changes to documentation and components update while the server is running.

## Useful commands

| Command             | Purpose                                                        |
| ------------------- | -------------------------------------------------------------- |
| `pnpm dev`          | Start the development server.                                  |
| `pnpm build`        | Check types and internal links, then generate the static site. |
| `pnpm preview`      | Preview the production build locally.                          |
| `pnpm format`       | Format supported files with Prettier.                          |
| `pnpm format:check` | Check formatting without changing files.                       |
