class PageController {
  home(req, res) {
    res.send("Home Page | Page Controller");
  }
  contact(req, res) {
    res.send("Contact Page | Page Controller");
  }
  about(req, res) {
    res.send("About Page | Page Controller");
  }
  product(req, res) {
    res.send("Product Page | Page Controller");
  }
}

module.exports = new PageController(); // only single instance
