"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var url = "http://localhost:5000/api/login";

var login = function login(credentials) {
  var response;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(
            _axios["default"].post(url, credentials)
          );

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = {
  login: login,
};
exports["default"] = _default;
