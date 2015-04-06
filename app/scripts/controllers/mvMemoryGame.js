'use strict';
mainAngularApp.controller('mvMemoryGame', function($scope,$log) {
  $scope.title = 'Memory Game';
  var memoryArray = ['Professeur X', 'Cyclope', 'Iceberg', 'Angel', 'Strange Girl', 'Mimic', 'Miméto', 'Polaris', 'Havok', 'Diablo', 'Wolverine', 'Hurleur', 'Tornade', 'Feu du Soleil', 'Colossus', 'Épervier', 'Shadowcat', 'Lockheed', 'Malicia', 'Rachel Summers', 'Magneto', 'Psylocke', 'Dazzler', 'Longshot', 'Forge', 'Gambit', 'Jubilé', 'Bishop', 'Revanche', 'Rocket', 'Joseph', 'Cecilia Reyes', 'Marrow', 'Maggott', 'Professeur X', 'Cyclope', 'Iceberg', 'Angel', 'Strange Girl', 'Mimic', 'Miméto', 'Polaris', 'Havok', 'Diablo', 'Wolverine', 'Hurleur', 'Tornade', 'Feu du Soleil', 'Colossus', 'Épervier', 'Shadowcat', 'Lockheed', 'Malicia', 'Rachel Summers', 'Magneto', 'Psylocke', 'Dazzler', 'Longshot', 'Forge', 'Gambit', 'Jubilé', 'Bishop', 'Revanche', 'Rocket', 'Joseph', 'Cecilia Reyes', 'Marrow', 'Maggott'];
  var memoryValues = [];
  var memoryTileIds = [];
  var tilesFlipped = 0;

  Array.prototype.memoryTileShuffle = function() {
    var i = this.length,
      j, temp;
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this[j];
      this[j] = this[i];
      this[i] = temp;
    }
  };

  $scope.newBoard = function() {
    tilesFlipped = 0;
    var output = '';
    memoryArray.memoryTileShuffle();
    for (var i = 0; i < memoryArray.length; i++) {
      output += '<div id="title_' + i + '" ng-click="mvMemoryGame.memoryFlipTile(this,\'' + memoryArray[i] + '\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
  };

  $scope.clicked = function(){
    $log.log('clicked');
  };
  $scope.memoryFlipTile = function(tile, val) {
    $log.log('clicked');
    if (tile.innerHTML === '' && memoryValues.length < 2) {
      tile.style.background = '#FFF';
      tile.innerHTML = val;
      if (memoryValues.length === 0) {
        memoryValues.push(val);
        memoryTileIds.push(tile.id);
      } else if (memoryValues.length === 1) {
        memoryValues.push(val);
        memoryTileIds.push(tile.id);
        if (memoryValues[0] === memoryValues[1]) {
          tilesFlipped += 2;
          // Clear both arrays
          memoryValues = [];
          memoryTileIds = [];
          // Check to see if the whole board is cleared
          if (tilesFlipped === memoryArray.length) {

            document.getElementById('memory_board').innerHTML = '';
            newBoard();
          }
        } else {
          function flip2Back() {
            // Flip the 2 tiles back over
            var tile1 = document.getElementById(memoryTileIds[0]);
            var tile2 = document.getElementById(memoryTileIds[1]);
            tile1.style.background = 'url(tile_bg.jpg) no-repeat';
            tile1.innerHTML = '';
            tile2.style.background = 'url(tile_bg.jpg) no-repeat';
            tile2.innerHTML = '';
            // Clear both arrays
            memoryValues = [];
            memoryTileIds = [];
          }
          setTimeout(flip2Back, 700);
        }
      }
    }
  };

  return {
    memoryFlipTile : $scope.memoryFlipTile,
    newBoard : $scope.newBoard()
  };


});
