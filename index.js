const sanitizeHtml = require("sanitize-html");

export default {
  install: (app, options) => {
    app.config.globalProperties.$sanitize = (dirty, opts = null) =>
      sanitizeHtml(dirty, opts || options);
  },

  defaults: sanitizeHtml.defaults,
};
