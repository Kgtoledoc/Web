//Variables declaration
var timesVisited =0;
var lastVisit = 'never';
var clicks = 0;

//Show the lastVisit and the times that you have visited
if(localStorage.lastVisit){
  var lastVisit = JSON.parse(localStorage.getItem('lastVisit'));
  timesVisited = lastVisit.numVisits;
  lastVisitDate = lastVisit.date;
}
document.getElementById('lastVisitDate').innerHTML = lastVisitDate;

timesVisited++;
document.getElementById('report').innerHTML = timesVisited;

var myLastVisit = {};
myLastVisit.date = new Date();
myLastVisit.numVisits = timesVisited;

localStorage.lastVisit = JSON.stringify(myLastVisit);

//Show the count of clicks numbers!
function clickHandler(){
  clicks++;
  var numClicksSpan = document.getElementById('numClicks');
  if(clicks == 1){
    numClicksSpan.innerHTML = 'once';
  }
  else {
    numClicksSpan.innerHTML = clicks + ' times';
  }
}
var button = document.getElementById('clickMe');
button.addEventListener('click', clickHandler);

//Change the color of text when mouse put on a text

function makeBold(){
  var divs = document.getElementsByClassName('highlighText');
  for(var i = 0; i < divs.length; i++){
    divs[i].style.color = 'red';
    divs[i].style.fontWeight = 'bold';
  }
}

function restore(){
  var divs = document.getElementsByClassName('highlighText');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.color = 'black';
    divs[i].style.fontWeight = 'normal';

  }
}

var mouseOverMeDiv = document.getElementById('mouseOverMe');
mouseOverMeDiv.addEventListener('mouseover',makeBold);
mouseOverMeDiv.addEventListener('mouseout',restore);

//Change the name of the text


function nameHandler(e){
  if (e.keyCode == 13){
    var nameInput = document.getElementById('nameInput');
    var nameField = document.getElementById('nameField');
    nameField.innerHTML = nameInput.value;
    nameField.style.backgroundColor = 'cyan';
    nameField.style.textTransform = 'capitalize';
  }
}
document.addEventListener('keyup',nameHandler);
