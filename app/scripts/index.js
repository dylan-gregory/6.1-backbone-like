var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var models = require('./models/like.js');

var likeButton = new models.Likes();

likeButton.updateDisplay();
// 
// likeButton.on('event', function(){
//   console.log('I have changed');
// })

$('.btn').on('click', function(){
    likeButton.clickCount();
    likeButton.updateDisplay();
    likeButton.toJSON();

    console.log("index", likeButton.get('count'));
});
