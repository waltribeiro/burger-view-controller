// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb2) {
    // the (res) on line 7 is line 58 of the orm.js
    orm.all(

      "burgers", 
      function(res) { // this cb1 on line 44
      cb2(res);
      
    }
    
    
    
    );
  },
  // The variables cols and vals are arrays
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    var condition = "id = " + id;
    orm.update("burgers", {devoured: true}, condition, cb);
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
