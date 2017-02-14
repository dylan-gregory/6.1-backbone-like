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
      var likeCount = this.get('count');
        likeCount += 1;
        this.set({'count': likeCount });
    },
    updateDisplay: function(){
      $('.btn').html((this.get('count')) + " " + (this.get('label')));
    },
    toJSON: function(){
      var likeCount = this.get('count');
        if (likeCount == 1) {
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
