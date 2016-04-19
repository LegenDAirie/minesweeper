'use strict';

(function(){
  var containers = document.getElementsByClassName('container');

  var clickedContainer = function (event){
    var targetContainer = event.currentTarget;
    var value = document.createElement('p');
    value.classList.add('element')
    targetContainer.appendChild(value)

    targetContainer.classList.add('clicked')
  }

  Array.from(containers).forEach(function(container){
    container.addEventListener('click', clickedContainer);
  })
})()
