"use strict";

var nextConfig = {
  env: {
    // un comment when you run in deploy
    // API_URL: "https://cuba-nextjs.vercel.app/api",
    //  comment when you run in local below down
    API_URL: "https://cuba-next-five.vercel.app/api"
  },
  redirects: function redirects() {
    return regeneratorRuntime.async(function redirects$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", [{
              source: "/",
              destination: "/authentication/login",
              permanent: true
            }]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
module.exports = nextConfig;