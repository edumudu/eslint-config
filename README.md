# Eslint config

My common eslint config rules to speed up personal projects setup

## Vite + Vue + typescript

Install peer dependencies
```bash
pnpm add -D \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint \
    eslint-config-airbnb-base \
    eslint-config-airbnb-typescript \
    eslint-config-prettier \
    eslint-import-resolver-typescript \
    eslint-plugin-eslint-comments \
    eslint-plugin-import \
    eslint-plugin-jest-dom \
    eslint-plugin-prettier \
    eslint-plugin-testing-library \
    eslint-plugin-vue \
    prettier \
    typescript
```

Extend config and set the project `tsconfig`
```js
extends: '@edumudu/eslint-config/vue-ts',
parserOptions: {
  project: './tsconfig.json'
}
```
