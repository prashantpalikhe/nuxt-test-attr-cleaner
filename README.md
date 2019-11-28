# Nuxt test attr cleaner

While writing your tests, it's one of the best practices is to use `data-*` attributes to provide context to your selectors and insulate them from CSS or JS changes. However, they are not necessary in your production code and add bloat to your HTML.

This module strips all those attributes (user defined) when building the app for production.

## Usage

Include the module in your `nuxt.config.js`

```js
module.exports = {
  buildModules: [
    [
      "nuxt-test-attr-cleaner",
      {
        stripAttrs: process.env.STAGE === "production",
        attrsList: ["data-test", "data-test-id"]
      }
    ]
  ]
};
```

## 📑 License

[MIT License](./LICENSE)
