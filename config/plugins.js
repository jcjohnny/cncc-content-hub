module.exports = {
  // ...
  "cn-image-preview": {
    enabled: true,
    resolve: "./src/plugins/cn-image-preview",
  },
  "preview-button": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::product.product",
          published: {
            url: "http://localhost:3000",
          },
        },
        {
          uid: "api::preview-product.preview-product",
          published: {
            url: "https://interactive.glamour.com/preview-mode-example/preview/index.html",
          },
        },
      ],
    },
  },
  // ...
};
