var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



router.get("/api", function(req, res){
	burger.all(function(data){
		res.json(data);
	})
});


router.post("/", function(req, res){
	console.log(req.body.input);
	burger.create(req.body.input, function(){
		res.redirect("/");
	})
});


router.put("/:id", function(req, res) {
  var id = req.params.id;

  console.log(id);

  burger.update("devoured",true, id, function(){
  	res.redirect("/");
  })
});

module.exports = router;