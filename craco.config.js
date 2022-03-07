module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
                @import "src/Styles/_variables.scss";
                @import "src/Styles/_mixins.scss";
                `,
      },
    },
  },
};
