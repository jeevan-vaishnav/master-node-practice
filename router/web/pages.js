const PageController = require('../../app/controllers/web/page-controller')

module.exports = {
  group: {
    prefix: "/pages",
  },
  routes: [
    {
      method: "get",
      path: "",
      callback: PageController.home
    },
    {
      method: "get",
      path: "/about",
      callback:PageController.about
    },
    {
      method: "get",
      path: "/contact",
      callback: PageController.contact
    },
    {
      method: "get",
      path: "/product",
      callback:PageController.product
    },
  ],
};
