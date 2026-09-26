---
title: Installation
description: Step-by-step installation guides for Equicord on Windows, MacOS, and Linux.
---

# Installation

## Installing Equicord

This guide will walk you through the installation process for Equicord across various platforms. Choose the appropriate method for your operating system.

### Windows

Equicord offers both graphical and command-line installation options for Windows users:

| | X64 | ARM64 |
| --- | --- | --- |
| GUI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl.exe) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-arm64.exe) |
| CLI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli.exe) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-arm64.exe) |

- **Equibop:** [Releases](https://github.com/Equicord/Equibop/releases)

### MacOS

For macOS users, we provide graphical and command-line installers & Equibop:

| | Universal | X64 | ARM64 |
| --- | --- | --- | --- |
| GUI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl.dmg) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x64.dmg) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-arm64.dmg) |
| CLI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-universal) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-x64) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-arm64) |

The CLI builds are plain binaries, so run `chmod +x <file>` after downloading.

- **Equibop (Recommended):** [Releases](https://github.com/Equicord/Equibop/releases)

### Linux

Linux users have several installation options depending on their desktop environment and preferences:

| | X64 | ARM64 |
| --- | --- | --- |
| Combined GUI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-arm64) |
| X11 GUI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x11) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-x11-arm64) |
| Wayland GUI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-wayland) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/Equilotl-wayland-arm64) |
| CLI | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-linux) | [Download](https://github.com/Equicord/Equilotl/releases/latest/download/EquilotlCli-linux-arm64) |

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
