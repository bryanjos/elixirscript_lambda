# Elixirscript Lambda Node Example

This project shows a simple AWS lambda using Elixirscript. Entry point is `main.js` because Lambda does not like names with dots in them.

Lambda Settings:

  Runtime: Node.js 4.3

  Handler: main.handler

## Requirements

Must have [elixirscript](https://github.com/bryanjos/elixirscript) installed.

## Comands

Build: `npm run build` - Build result will be in the `dist` folder

Package: `npm run package` - Builds, and creates zip file to be uploaded to Lambda
