(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['vue-3-sanitize'] = factory());
}(this, (function () { 'use strict';

  var sanitizeHtml = require("sanitize-html");

  var index = {
    install: function install(app, options) {
      app.config.globalProperties.$sanitize = function (dirty) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return sanitizeHtml(dirty, opts || options);
      };
    },
    defaults: sanitizeHtml.defaults
  };

  return index;

})));
//# sourceMappingURL=vue-3-sanitize.js.map
