
var addTwoNumber = 2+5;

document.getElementById('number').innerHTML = document.write(addTwoNumber);

function initMap (){

var options = {
  zoom:8,
  center:{lat:48.2081743, lng:16.3738189}
              }
var map = new google.maps.Map(document.getElementById('map'), options)
}
