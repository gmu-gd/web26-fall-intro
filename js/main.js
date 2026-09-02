$(document).ready(function() {
    // run function on initial page load
    randomList();
    
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomList(){
  var studentsM = ["alana", "alexandra", "amalia", "ayana", "bavon", "grace", "iffet", "joseph", "katya", "mickey", "miles", "que", "ray", "richard", "sami", "sidney", "sophia", "vivian"];
  var studentsW = ["binglei", "daniel", "ellen", "ethan", "hafsa", "hayden", "janelle", "jennah", "joshua", "kaiya", "madi", "marcus", "marlyn", "meredith", "raven", "ryan", "sam", "xavier"];
  var y;
  $('#m-generate').click( function(){
    $('ol').empty()
    shuffle(studentsM);
    for (y = 0; y < studentsM.length; y++) {
      var html = '<li>' + (y + 1) + '. ' + studentsM[y] + '</li>';
      $('#m-list').append(html);
    };
  });
  $('#w-generate').click( function(){
    $('ol').empty()
    shuffle(studentsW);
    for (y = 0; y < studentsW.length; y++) {
      var html = '<li>' + (y + 1) + '. ' + studentsW[y] + '</li>';
      $('#w-list').append(html);
    };
  });
}