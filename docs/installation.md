---
title: Installation
description: Step-by-step installation guides for Equicord on Windows, MacOS, and Linux.
---

# <IconPlug/> Installation

## Installing Equicord

This guide will walk you through the installation process for Equicord across various platforms. Choose the appropriate method for your operating system.

### Windows

Equicord offers both GUI and CLI installation options for Windows users:

- **GUI Installer:** [Download Equilotl.exe](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl.exe)
- **CLI Installer:** [Download EquilotlCli.exe](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli.exe)
- **Equibop:** [Download Equibop](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-win.exe)

### MacOS

For MacOS users, we provide a GUI installer & Equibop:

- **GUI Installer:** [Download Equilotl.MacOS.zip](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl.MacOS.zip)
- **Equibop (Recommended):** [DMG](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-mac-universal.dmg), [ZIP](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-mac-universal.zip)

### Linux

Linux users have several installation options depending on their desktop environment and preferences:

- **GUI for X11:** [Download Equilotl-x11](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x11)
- **CLI:** [Download EquilotlCli-Linux](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-Linux)
- **Arch User Repository:** [Equicord on AUR](https://aur.archlinux.org/packages/equicord-installer-bin)
- **Equibop:** [Equibop on AUR](https://aur.archlinux.org/packages/equibop)
- **Equibop on amd64 / x86_64:** [AppImage](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-x86_64.AppImage), [Ubuntu/Debian (.deb)](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-amd64.deb), [Fedora/RHEL (.rpm)](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-x86_64.rpm), [tarball](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-x64.tar.gz)
- **Equibop on Flatpak/Flathub:** [Flathub/Flatpak](https://flathub.org/apps/io.github.equicord.equibop)
- **Equibop on Arm®64 / aarch64:** [AppImage](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-arm64.AppImage), [Ubuntu/Debian (.deb)](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-arm64.deb), [Fedora/RHEL (.rpm)](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-aarch64.rpm), [tarball](https://github.com/Equicord/Equibop/releases/latest/download/Equibop-linux-arm64.tar.gz)
- **Equibop on Shell Via Curl:**
  ```sh
  sh -c "$(curl -sS https://raw.githubusercontent.com/Equicord/Equicord/refs/heads/main/misc/install.sh)"
  ```
- **Equibop on NixOS:**
  ```sh
  nix-shell -p equibop
  ```
