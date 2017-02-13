var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


var Likes = Backbone.Model.extend({
    defaults: {
      count: 0,
      label: "likes"
    },
    initialize: function(){
      console.log("This button was born!");
    },
    clickCount: function(){
    var likes = this.get('count');
        likes += 1;
        this.set({'count': likes });
    },
    updateDisplay: function(){
      $('.btn').html((this.get('count')) + " " + (this.get('label')));
    },
    toJSON: function(){
    var likes = this.get('count');
      if (likes == 1) {
        $('.btn').html((this.get('count')) + " " + ("like"));
      }else{
        $('.btn').html((this.get('count')) + " " + (this.get('label')));
      }
      return Backbone.Model.prototype.toJSON.call(this);

    }
});


module.exports = {
  'Likes': Likes
};
