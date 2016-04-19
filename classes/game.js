'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {}

  var GAME_PROTOTYPE = {
    start: function(){
      this.populateMatrix()
      // this.populateMatrix.bind(this);
    },

    populateMatrix: function(){
      // var rowLength = this.matrix.length;
      // var colLength = this.matrix[0].length;
      // console.log(rowLength)
      // console.log(colLength)

      // this.placeBombs();
      // this.placeNumbers();

      // for (var rowIdx = 0; rowIdx < rowLength; rowIdx++){
      //   for (var colIdx = 0; colIdx < colLength; colIdx++){
      //
      //   }
      // }
    },





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
