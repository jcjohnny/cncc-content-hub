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
          uid: "api::dynamic-block.dynamic-block",
          published: {
            url: "https://copilot-app.condenast.io/glm/preview/article/6414a63cb80f2edfbccc8e51",
          },
        },
        {
          uid: "api::preview-product.preview-product",
          published: {
            url: "https://copilot-app.condenast.io/glm/preview/article/6414a63cb80f2edfbccc8e51",
          },
        },
      ],
    },
  },
  // ...
};
