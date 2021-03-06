## @lbwa/eslint-plugin

An opinionated eslint plugin.

### Installation

```bash
pnpm i @lbwa/eslint-plugin eslint@^8.6.0 -D
```

### Usage

#### Recommended

```js
module.exports = {
  plugins: ['@lbwa'],
  extends: ['plugin:@lbwa/recommended']
}
```

#### Only JavaScript rules

```js
module.exports = {
  plugins: ['@lbwa'],
  extends: ['plugin:@lbwa/javascript']
}
```

#### TypeScript + JavaScript rules

Alternative to [recommended](#Recommended)

```js
module.exports = {
  plugins: ['@lbwa'],
  // ensure orders
  extends: ['plugin:@lbwa/javascript', 'plugin:@lbwa/typescript']
}
```

### License

[MIT](./LICENSE) © [Liu Bowen](https://github.com/lbwa)
