# site-builder

A yaml-based website generator and CMS

## Installation

```sh
npm i site-builder
```

Add site-builder to `transpilePackages` in `next.config.js`
**next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['site-builder'],
}

module.exports = nextConfig
```

## Deployment

The path at $DB_PATH needs to be copied to the build files during deployment

## Development

```sh
pnpm dev
```
