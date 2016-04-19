'use strict';

(function(){
  // var GLB = window.GLB = window.GLB || {};

  var containers = document.getElementsByClassName('container');

  var clickedContainer = function (event){
    var targetContainer = event.currentTarget;

    targetContainer.classList.add('clicked')
  }

  Array.from(containers).forEach(function(container){
    container.addEventListener('click', clickedContainer);
  })
})()
