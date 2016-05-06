
$(document).ready(function() {

  var counter;


  $('.generateButton').on('click', function() {
    $('.container').append('<div class="newContainer"></div>').data('id', counter);
    var $el = $('.newContainer');
    $el.append('<button class="delete-button">DELETE</button>');
    $el.append('<button class="changeColorButton">CHANGE COLOR</button>');
    $el.append('<h3>Generate click-counter: <span></span></h3>');
    genButtonCounter();
    console.log(counter);
  });

//change backgorund color
//  $('.changeColorButton').on('click', '', function() {});


//delete container







//click counter
function genButtonCounter() {
  var counter = 0;
  $('.generateButton').on('click', function() {
    counter +=1;
    return counter;
  })
}










});
