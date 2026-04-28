# Retro 95 VS Code Theme

Retro 95 VS Code Theme is part of the Retro 95 project: a small set of themes inspired by classic 90s desktop colors.

This project is not affiliated with or endorsed by Microsoft.

## Repositories

- VS Code theme: [a-gubskiy/retro-95-vs-code](https://github.com/a-gubskiy/retro-95-vs-code)
- Browser theme: [a-gubskiy/retro-95-browser](https://github.com/a-gubskiy/retro-95-browser)

## Palette

| Surface | RGB | Hex |
| --- | --- | --- |
| Desktop background | `0, 128, 128` | `#008080` |
| Active title bar | `0, 0, 128` | `#000080` |
| Window chrome | `192, 192, 192` | `#C0C0C0` |
| Shadow | `128, 128, 128` | `#808080` |
| Highlight | `255, 255, 255` | `#FFFFFF` |
| Text | `0, 0, 0` | `#000000` |

## Install Locally

### Extension Development Host

1. Open this folder in Visual Studio Code.
2. Press `F5`.
3. In the new Extension Development Host window, run `Preferences: Color Theme`.
4. Choose `Retro 95`.

### Direct Local Extension

1. Copy or symlink this folder into `~/.vscode/extensions/retro-95-vscode-theme-0.1.0`.
2. Reload Visual Studio Code.
3. Run `Preferences: Color Theme`.
4. Choose `Retro 95`.

## Validate

```sh
node -e "JSON.parse(require('node:fs').readFileSync('package.json','utf8')); JSON.parse(require('node:fs').readFileSync('themes/retro-95-color-theme.json','utf8')); console.log('theme ok')"
```
