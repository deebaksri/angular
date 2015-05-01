'use strict';

mainAngularApp.controller('mvMemoryGame', function($scope,$log) {
  $scope.title = 'Memory Game';
  var memoryArray = ['Professeur X', 'Cyclope', 'Iceberg', 'Angel', 'Strange Girl', 'Mimic', 'Miméto', 'Polaris', 'Havok', 'Diablo', 'Wolverine', 'Hurleur', 'Tornade', 'Feu du Soleil', 'Colossus', 'Épervier', 'Shadowcat', 'Lockheed', 'Malicia', 'Rachel Summers', 'Magneto', 'Psylocke', 'Dazzler', 'Longshot', 'Forge', 'Gambit', 'Jubilé', 'Bishop', 'Revanche', 'Rocket', 'Joseph', 'Cecilia Reyes', 'Marrow', 'Maggott', 'Professeur X', 'Cyclope', 'Iceberg', 'Angel', 'Strange Girl', 'Mimic', 'Miméto', 'Polaris', 'Havok', 'Diablo', 'Wolverine', 'Hurleur', 'Tornade', 'Feu du Soleil', 'Colossus', 'Épervier', 'Shadowcat', 'Lockheed', 'Malicia', 'Rachel Summers', 'Magneto', 'Psylocke', 'Dazzler', 'Longshot', 'Forge', 'Gambit', 'Jubilé', 'Bishop', 'Revanche', 'Rocket', 'Joseph', 'Cecilia Reyes', 'Marrow', 'Maggott'];
  $scope.memoryValues = [];
  $scope.memoryTileIds = [];
  $scope.tilesFlipped = 0;

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
  $scope.tiles = memoryArray;
  $scope.newBoard = function() {
    $scope.tilesFlipped = 0;
    memoryArray.memoryTileShuffle();
    //document.getElementById('memory_board').innerHTML = $scope.output;
  };

  $scope.clicked = function(){
    $log.log('clicked');
  };
  $scope.memoryFlipTile = function(tile, val) {
    $log.log(tile);

    if (tile === '' &&     $scope.memoryValues.length < 2) {
      $(this).style.background = '#FFF';
      tile.innerHTML = val;
      if (    $scope.memoryValues.length === 0) {
            $scope.memoryValues.push(val);
            $scope.memoryTileIds.push(tile.id);
      } else if (    $scope.memoryValues.length === 1) {
            $scope.memoryValues.push(val);
            $scope.memoryTileIds.push(tile.id);
        if (tile[0] === tile[1]) {
              $scope.tilesFlipped += 2;
          // Clear both arrays
              $scope.memoryValues = [];
              $scope.memoryTileIds = [];
          // Check to see if the whole board is cleared
          if (    $scope.tilesFlipped === memoryArray.length) {

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
