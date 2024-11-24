 const express = require('express')
 const webRoutes = require('./web')

class Router {
  constructor() {
    this.router = express.Router();
    this.webRoutes = webRoutes
  }

  create(app){
      //TODO attach middleware
      //TODO attach routes
      //TODO handle 404 pages
      //TODO handle exceptions
      //TODO Register Router
    app.use(this.router)    
      
  }
}

module.exports = new Router();
