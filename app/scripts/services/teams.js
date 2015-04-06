'use strict';
mainAngularApp.service('teamsA', function() {
  var self = this;
  this.name = 'John Doe';
  this.namelength = function() {
    return self.name.length;
  };

});
