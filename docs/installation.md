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
- **Command-Line Installer:** [Download EquilotlCli.exe](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli.exe)
- **Equibop:** [Releases](https://github.com/Equicord/Equibop/releases)

### MacOS

For macOS users, we provide a graphical installer & Equibop:

- **Graphical Installer:** [Download Equilotl.MacOS.zip](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl.MacOS.zip)
- **Equibop (Recommended):** [Releases](https://github.com/Equicord/Equibop/releases)

### Linux

Linux users have several installation options depending on their desktop environment and preferences:

- **Graphical Installer (X11):** [Download Equilotl-x11](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x11)
- **Command-Line Installer:** [Download EquilotlCli-Linux](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-Linux)
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
