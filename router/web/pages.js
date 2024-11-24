module.exports = {
  group: {
    prefix: "/pages",
  },
  routes: [
    {
      method: "get",
      path: "",
      callback: (req, res) => {
        res.send("HomePage");
      },
    },
    {
      method: "get",
      path: "/about",
      callback: (req, res) => {
        res.send("AboutPage");
      },
    },
    {
      method: "get",
      path: "/contact",
      callback: (req, res) => {
        res.send("ContactPage");
      },
    },
    {
      method: "get",
      path: "/product",
      callback: (req, res) => {
        res.send("ProductPage");
      },
    },
  ],
};
