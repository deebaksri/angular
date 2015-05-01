(function($) {
  'use strict';
  //Mutant base class / Constructor
  function Mutant() {
    this.name = name || 'Unknown';
    this.powers = '';
    this.health = 100;
    this.exp = '';
  }

  Mutant.prototype.manifestPowers = function() {
    this.powers = arguments;
  };

  Mutant.prototype.damage = function(damage) {
    this.health -= damage;
    this.exp += 2;
  };

  Mutant.prototype.attack = function(target, damage) {
    this.damage.call(target, damage);
    this.exp += 20;
  };

  Mutant.prototype.heal = function(){
    var powers = Array().slice.call(this.powers);
    for (var i = 0; i < powers.length; i++) {
      if (powers[i] === 'healing') {
        this.health = 100;
        break;
      }
    }
  };

  //XMan Constructor
  function XMan() {}
    //BrotherhoodMutant Constructor
  function BrotherhoodMutant() {}

  //Two new instancecs of Mutant Classs that inherits all the properties
  XMan.prototype = new Mutant();
  BrotherhoodMutant.prototype = new Mutant();

  //Wolverine
  var Wolverine = new XMan();
  Wolverine.name = 'Logan';
  Wolverine.manifestPowers('healing', 'claws', 'senses');

  //Cyclops
  var Cyclops = new XMan();
  Cyclops.manifestPowers('eye beams');

  $(document).ready(function() {
    console.log(Wolverine);
    console.log(Cyclops);
    Cyclops.attack(Wolverine, 50);
    console.log(Wolverine);
    Wolverine.heal();
    console.log(Wolverine);
    console.log(Cyclops);

  });


})(jQuery);
