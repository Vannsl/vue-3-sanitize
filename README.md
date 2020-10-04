# vue-3-sanitize

HTML sanitizer for Vue.js 3 apps.

[![vue-next](https://img.shields.io/badge/vue-next-brightgreen.svg)](https://github.com/vuejs/vue-next) [![npm](https://img.shields.io/npm/v/vue-3-sanitize.svg?style=flat-square)](https://npmjs.org/package/vue-3-sanitize)

You want to use `v-html`? You might need to sanitize the code. This plugin is built for Vue 3 apps. It is built upon on [sanitize-html](https://github.com/punkave/sanitize-html).

## Install

```bash
yarn add vue-3-sanitize
# or
npm install --save vue-3-sanitize
```

## Usage

### Registration

Register the plugin

``` js
import Vue3Sanitize from "vue-3-sanitize";

// const app = createApp(YourVue3App);
app.use(Vue3Sanitize);
```

To override the default options of [sanitize-html](https://www.npmjs.com/package/sanitize-html), pass them as an argument. It is not supported to merge them.

``` js
const overridenOptions = {
    allowedTags: ['img']
};
app.use(VueSanitize, overridenOptions);
```

### Template

```html
<template>
  <p v-html="$sanitize(dirty)" />
</template>
```

## Issues

If you find any bugs, please open an issue.

## Contributing

1. Fork it
1. Create your feature branch: `git checkout -b feature-or-bugfix`
1. Add your changes: `git add files`
1. Commit your changes: `git commit -m "Add some feature"`
1. Push to the branch: `git push origin feature-or-bugfix`
1. Submit a forked pull request

## License

See [License File](LICENSE.md).
