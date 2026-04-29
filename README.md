# Retro 95 VS Code Theme

Retro 95 is a local Visual Studio Code theme extension for the Retro 95 project.

It mirrors the nearby browser theme's classic 90s desktop palette with a navy title bar, teal desktop-like empty workbench, gray chrome, and black-on-white editor text.

This project is not affiliated with or endorsed by Microsoft.

## Local Testing

1. Open this folder in VS Code.
2. Press `F5`.
3. In the Extension Development Host window, run `Preferences: Color Theme`.
4. Choose `Retro 95`.

## Validation

```sh
npm run validate
```

## Packaging And Publishing

The Marketplace listing can use a different README than GitHub.

- `README.md` is the repository README.
- `README.marketplace.md` is temporarily copied into `README.md` only while packaging or publishing.

Commands:

```sh
npm run package:vsix
npm run publish:marketplace
```

`publish:marketplace` already includes a fixed `--baseImagesUrl` that points Marketplace screenshots to the public GitHub repository on `main`.

Extra `vsce` arguments can be passed through npm, for example:

```sh
npm run package:vsix -- --out retro-95.vsix
npm run publish:marketplace -- --pat YOUR_TOKEN
```

## Palette

| Surface | RGB | Hex |
| --- | --- | --- |
| Desktop background | `0, 128, 128` | `#008080` |
| Active title bar | `0, 0, 128` | `#000080` |
| Window chrome | `192, 192, 192` | `#C0C0C0` |
| Shadow | `128, 128, 128` | `#808080` |
| Highlight | `255, 255, 255` | `#FFFFFF` |
| Text | `0, 0, 0` | `#000000` |

## Related Repositories

- VS Code theme: [a-gubskiy/retro-95-vs-code](https://github.com/a-gubskiy/retro-95-vs-code)
- Browser theme: [a-gubskiy/retro-95-browser](https://github.com/a-gubskiy/retro-95-browser)
