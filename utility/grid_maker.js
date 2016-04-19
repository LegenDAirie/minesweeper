'use strict';

(function(){
  var GLB = window.GLB = window.GLB || {};

  GLB.makeGrid = function(){
    var grid = document.getElementById('grid');

    var makeRow = function(){
      var row = document.createElement('div');

      row.classList.add('row');

      return row;
    }

    var makeContainer = function(){
      var container = document.createElement('li');

      container.classList.add('container');

      return container;
    }

    var makeElement = function(row, col){
      var element = document.createElement('div')

      element.classList.add('element');
      element.classList.add('row' + row)
      element.classList.add('col' + col)

      return element;
    }

    for (var rowIdx = 0; rowIdx < 8; rowIdx++){
      var row = makeRow();

      for (var colIdx = 0; colIdx < 8; colIdx++){
        var container = makeContainer();
        var element = makeElement(rowIdx, colIdx);

        container.appendChild(element);
        row.appendChild(container);
      }
      grid.appendChild(row);
    }
  }
})()
