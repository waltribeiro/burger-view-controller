var express = require("express");

var router = express.Router();

// Import the model (burgerModel.js) to use its database functions.
var burger = require("../models/burgerModel.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(
    
    function(data) { // (data) is what comes back from mysql
    res.render("index", { burgers: data });
  }
  
  );
});

router.post("/api/burger", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  console.log("put works!!!!!!!!")
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.update(
    req.params.id, function() {
      res.sendStatus(200);
      console.log(res);
      // result
    }
    // this should match the database column 
    // this will be the boolean true false
    // devour: req.body.devour
  // }, condition, function(result)
  // {
  //   if (result.changedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  
  );
});

// CONSSSSSS
// router.put("/api/burgers/:id", function (req, res) {
//   var condition = "id = " + req.params.id;
//   burger.updateBurger({
//       devoured: req.body.devoured
//   }, condition, function (result) {
//       if (result.changedRows == 0) {

//           return res.status(404).end();
//       } else {
//           res.status(200).end();
//       }
//   });
// });

router.delete("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
