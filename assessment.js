$(document).ready(function() {
  var counter = 0;

  $('body').append('<h5 class=clickCounter>"Generate" click counter: <span></span></h5>')

//update counter function
  function updateCounter () {
    $('span').text(counter);
  }

//generate new div container with 2 buttons and increase counter
  $('.generateButton').on('click', function() {
    $('body').append('<div class="smallerContainer">' +
    '<button class="delete">delete</button>' +
    '<button class="changeColor">change color</button></div>');
    $('.smallerContainer');
    counter++;
    console.log(counter);
    updateCounter();
  });

//delete container with "delete" button click and decrement counter
  $('body').on('click', '.delete', function() {
    $(this).parent().remove();
    counter--;
    updateCounter();
  });

//change background-color of container
  $('body').on('click', '.changeColor', function() {
    $(this).parent().toggleClass('smallerContainerRed');
  });



});
