# Agent Handoff

This repository contains a local Visual Studio Code color theme that mirrors the nearby Chromium browser theme in `../browser-theme`.

## Project Goal

Create a Visual Studio Code theme that mimics the color language of classic Windows 95 applications without using Microsoft-owned logos, icons, screenshots, wallpapers, or official branding.

The theme should feel like a retro Windows 95 desktop:

- Navy title bar and focused selections: `#000080`
- Teal empty workbench / desktop-like surfaces: `#008080`
- Gray window chrome, tabs, sidebars, panels, menus, and controls: `#C0C0C0`
- Dark gray borders and inactive chrome: `#808080`
- Black editor and control text: `#000000`
- White text on navy surfaces: `#FFFFFF`

## Current State

The theme is implemented as a local VS Code theme extension:

- `package.json` contributes the `Classic 95` color theme.
- `themes/classic-95-color-theme.json` contains the workbench colors, token colors, and semantic token colors.

The implementation is intentionally color-only, matching the browser theme's current direction. There are no image assets.

## Important Files

- `package.json` - VS Code extension manifest.
- `themes/classic-95-color-theme.json` - the actual VS Code color theme.
- `README.md` - user-facing local installation instructions.
- `.gitignore` - ignores local packaged extension artifacts.

## Current Theme Decisions

The editor tabs intentionally use gray Windows 95-style tab controls rather than navy browser-style inactive tabs:

```json
"editorGroupHeader.tabsBackground": "#C0C0C0",
"tab.activeBackground": "#C0C0C0",
"tab.activeForeground": "#000000",
"tab.inactiveBackground": "#C0C0C0",
"tab.inactiveForeground": "#000000"
```

The active title bar and status bar use the classic navy title-bar color:

```json
"titleBar.activeBackground": "#000080",
"titleBar.activeForeground": "#FFFFFF",
"statusBar.background": "#000080",
"statusBar.foreground": "#FFFFFF"
```

The command center / Copilot titlebar control is gray so black product icons remain readable, matching the black glyphs on gray Windows 95 title-bar buttons:

```json
"commandCenter.background": "#C0C0C0",
"commandCenter.foreground": "#000000",
"agentStatusIndicator.background": "#C0C0C0"
```

Toolbar hover states use medium gray rather than white because title-bar navigation buttons keep their white foreground while hovered:

```json
"toolbar.hoverBackground": "#808080",
"toolbar.hoverOutline": "#FFFFFF",
"toolbar.activeBackground": "#808080"
```

The editor stays white with black text so code reads like a classic document area, while empty workbench surfaces use the teal desktop color:

```json
"editor.background": "#FFFFFF",
"editor.foreground": "#000000",
"editorGroup.emptyBackground": "#008080"
```

## How To Test Locally

1. Open this folder in Visual Studio Code.
2. Press `F5`.
3. In the Extension Development Host window, run `Preferences: Color Theme`.
4. Choose `Classic 95`.

## Validation

Use this command after editing JSON files:

```sh
node -e "JSON.parse(require('node:fs').readFileSync('package.json','utf8')); JSON.parse(require('node:fs').readFileSync('themes/classic-95-color-theme.json','utf8')); console.log('theme ok')"
```

## Notes For Future Work

- Keep the theme color-only unless there is a clear visual reason to add image assets.
- Avoid Microsoft logos, Windows logos, original Windows 95 icons, screenshots, or official wallpapers.
- Keep wording such as "inspired by classic 90s desktop colors" rather than implying an official Microsoft or Windows theme.
- If publishing later, replace the local `publisher` value with a real marketplace publisher id.
