---
title: Installation
description: Step-by-step installation guides for Equicord on Windows, MacOS, and Linux.
---

# Installation

## Installing Equicord

This guide will walk you through the installation process for Equicord across various platforms. Choose the appropriate method for your operating system.

### Windows

Equicord offers both graphical and command-line installation options for Windows users:

- **Graphical Installer:** [Download Equilotl.exe](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl.exe)
- **Graphical ARM64 Installer:** [Download Equilotl-arm64.exe](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-arm64.exe)
- **Command-Line Installer:** [Download EquilotlCli.exe](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli.exe)
- **Command-Line ARM64 Installer:** [Download EquilotlCli-arm64.exe](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-arm64.exe)
- **Equibop:** [Releases](https://github.com/Equicord/Equibop/releases)

### MacOS

For macOS users, we provide a graphical installer & Equibop:

- **Graphical X64 Installer:** [Download Equilotl-x64.dmg](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x64.dmg)
- **Graphical ARM64 Installer:** [Download Equilotl-arm64.dmg](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-arm64.dmg)
- **Equibop (Recommended):** [Releases](https://github.com/Equicord/Equibop/releases)

### Linux

Linux users have several installation options depending on their desktop environment and preferences:

- [X11 GUI](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x11)
- [Wayland GUI](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-wayland)
- [Combined GUI](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl)
- [ARM64 X11 GUI](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x11-arm64)
- [ARM64 Wayland GUI](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-wayland-arm64)
- [ARM64 Combined GUI](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-arm64)
- [CLI](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-Linux)
- [ARM64 CLI](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-linux-arm64)
- **Arch User Repository:** [Equicord on AUR](https://aur.archlinux.org/packages/equicord-installer-bin)
- **Equibop:** [Releases](https://github.com/Equicord/Equibop/releases), [AUR](https://aur.archlinux.org/packages?K=equibop), [Flathub](https://flathub.org/apps/io.github.equicord.equibop)
- **Equicord via Shell:**

  ```sh
  sh -c "$(curl -sS https://raw.githubusercontent.com/Equicord/Equicord/refs/heads/main/misc/install.sh)"
  ```

- **Equibop on NixOS:** (currently outdated, waiting for PR merge)

  ```sh
  nix-shell -p equibop
  ```
