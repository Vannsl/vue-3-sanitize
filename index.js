const sanitizeHtml = require("sanitize-html");

export default {
  install: (app, options) => {
    const defaultOptions = options;
    app.config.globalProperties.$sanitize = (dirty, opts = null) =>
      sanitizeHtml(dirty, opts || defaultOptions);
  },

  defaults: sanitizeHtml.defaults,
};
