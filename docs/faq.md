---
title: FAQ
description: Find answers to frequently asked questions and troubleshooting tips for Equicord.
---

# ❔ FAQ

## 1. "A JavaScript error occurred in the main process"

This could be many things to do with the installer or Discord's JavaScript files. If your installer is out of date, **PLEASE UPDATE!**

## 2. "Patching C:\Users\user\AppData\Local\Discord. ERROR Didn't find desktop.asar"

Your Discord install is likely messed up. Please follow this:

1. Press `Windows+R`.
2. Type `%AppData%` and delete the Discord folder.
3. Repeat for `%LocalAppData%`.
4. Install Discord.

OR do a clean reinstall using the guide [here](https://support.discord.com/hc/en-us/articles/115004307527--Windows-Corrupt-Installation).

### Simplified Steps:

1. Hold the Windows Key and press `R`. Type `%AppData%` and click OK.
2. Delete the Discord folder.
3. Repeat the same steps for `%LocalAppData%` and delete the Discord folder.
4. Install Discord again. Quick download links:

- [Main Branch (Discord)](https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x64)
- [PTB Branch (Discord PTB)](https://ptb.discord.com/api/downloads/distributions/app/installers/latest?channel=ptb&platform=win&arch=x64)
- [Canary Branch (Discord Canary)](https://canary.discord.com/api/downloads/distributions/app/installers/latest?channel=canary&platform=win&arch=x64)

## 3. "Something went wrong. Please check the logs above."

This could be Windows Defender blocking Equicord's CLI installer. Please disable or add an exclusion. Learn how to add an exclusion [here](https://www.howtogeek.com/671233/how-to-add-exclusions-in-windows-defender-on-windows-10/).

## 4. "Discord Activities aren't working!"

This could be because of OpenASAR. Simply uninject OpenASAR from Discord. This can be done by opening the Equicord installer.

- **CLI:**
  ![CLI Example](/cli.png)
- **GUI:**
  ![GUI Example](/gui.png)

## 5. "I'm using Equibop and it's not detecting my game(s) or programs!"

This is because of how Equibop detects games and programs using ARRPC. Learn more about ARRPC [here](https://github.com/OpenAsar/arrpc).

## 6. "I have a different issue!"

For any other issues, please check the ]Equicord Discord server](https://discord.gg/equicord-1173279886065029291) for support.
