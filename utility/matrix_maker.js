'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.makeMatrix = function(){
    var matrix = []

    for (var rowIdx = 0; rowIdx < 8; rowIdx++){
      matrix[rowIdx] = []
      for (var colIdx = 0; colIdx < 8; colIdx++){
        matrix[rowIdx][colIdx] = null;
      }
    }

    return matrix
  }
})()
