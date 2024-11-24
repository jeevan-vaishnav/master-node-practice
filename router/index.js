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
      this._attachWebRoutes();
      //TODO handle 404 pages
      //TODO handle exceptions
      //TODO Register Router
    app.use(this.router)    
  }

  _attachWebRoutes(){
    this._attachRoutes(this.webRoutes);
  }

  _attachApiRoutes(){
    // this._attachRoutes(this._attachApiRoutes,"/api")
  }

  _attachRoutes(routeGroups,prefix = ''){
    routeGroups.forEach(({group,routes})=>{
        routes.forEach(({method,path,callback})=>{
            // console.log(this.router[method])
            // console.log(prefix + group.prefix + path)
            // console.log(callback)
            this.router[method]( prefix + group.prefix + path,callback)
        })
    })

  }
}

module.exports = new Router();
