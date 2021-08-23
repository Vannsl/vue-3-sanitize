const sanitizeHtml = require("sanitize-html");

const Vue3Sanitize = {
    install: (app, options) => {
        app.config.globalProperties.$sanitize = (dirty, opts = null) =>
            sanitizeHtml(dirty, opts || options);
    },

    defaults: sanitizeHtml.defaults,
};

export default Vue3Sanitize;
