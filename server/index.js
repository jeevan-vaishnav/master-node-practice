const express = require("express");
const Router = require("../router");
class Server {
  constructor(port) {
    this.app = express();
    this.port = port;
  }

  start() {
    this._setupRoutes();
    this._listen();
  }
  _setupRoutes() {
    Router.create(this.app);
    // this.app.get("/", (req, res) => {
    //   res.send("Home Page");
    // });
    // this.app.get("/about", (req, res) => {
    //   res.send("About Page");
    // });
  }
  /** This (-) symbol means only invoked the inside of the class not offside of the class */
  _listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
