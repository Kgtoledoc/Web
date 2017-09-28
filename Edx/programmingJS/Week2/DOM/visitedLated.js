
var timesVisited =0;
var lastVisit = 'never';

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
