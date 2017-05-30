var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.selectAll("burgers", function(data){
			cb(data);
		})
	},
	create: function(cb, inputValue){
		orm.insertOne("burgers", inputValue, function(data){
			cb(data);
		})

	},
	update: function(columnName, inputValue, valueID, cb){
		orm.updateOne("burgers", columnName, inputValue, valueId, function(data){
			cb(data)
		})
	}
}

module.exports = burger;