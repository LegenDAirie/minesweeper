'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {}

  var GAME_PROTOTYPE = {
    start: function(){
      this.populateMatrix()
    },

    populateMatrix: function(){
      var rowLength = this.matrix.length;
      var colLength = this.matrix[0].length;

      this.placeBombs(rowLength, colLength);
      this.placeNumbers(rowLength, colLength);
    },

    placeBombs: function(rowLength, colLength) {
      var bombs = []

      while (bombs.length < 10){
        var row = Math.floor(Math.random() * rowLength);
        var col = Math.floor(Math.random() * colLength);

        bombs.push([row, col]);
        bombs = _.uniqWith(bombs, _.isEqual)
      }

      for (var rowIdx = 0; rowIdx < rowLength; rowIdx++){
        for (var colIdx = 0; colIdx < rowLength; colIdx++){
          for (var bombIdx = 0; bombIdx < bombs.length; bombIdx++){
            if (bombs[bombIdx][0] == rowIdx && bombs[bombIdx][1] == colIdx){
              this.matrix[rowIdx][colIdx] = true;
            }
          }
        }
      }
    },

    placeNumbers: function(rowLength, colLength){
      var self = this
      for (var rowIdx = 0; rowIdx < rowLength; rowIdx++){
        for (var colIdx = 0; colIdx < rowLength; colIdx++){
          if (this.matrix[rowIdx][colIdx] != true){
            this.matrix[rowIdx][colIdx] = this.numberOfBombNeighbors(rowIdx, colIdx, self);
          }
        }
      }
      console.log(this.matrix)
    },

    numberOfBombNeighbors: function(rowIdx, colIdx, self){
      var neighbors = 0;

      [-1, 0, 1].forEach(function(rowOffSet){
        [-1, 0, 1].forEach(function(columnOffSet){
          var isCurrentCell = rowOffSet === 0 && columnOffSet === 0;

          var row = self.matrix[rowIdx + rowOffSet];
          var zone = row && row[colIdx + columnOffSet];

          if (!isCurrentCell && zone === true){
            neighbors++;
          }
        })
      })
      return neighbors
    }

  }

  GLB.Game = {
    create: function(){
      var game = Object.create(GAME_PROTOTYPE);

      game.matrix = GLB.makeMatrix();
      game.grid = GLB.makeGrid();

      return game
    }
  }
})()
