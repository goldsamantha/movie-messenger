//This handles functionality on the home page, loading in different pages, etc.

function init(){

  var socket = io();
  var indexArea = document.getElementById('init-area');
  var initialScreen = document.getElementById('home-movie').innerHTML;
  indexArea.innerHTML = initialScreen;


  // For handling starting rooms
  var startButton = document.getElementById('start_button');
  startButton.addEventListener('click', function(){
    var movieScreen = document.getElementById('play-movie').innerHTML;
    indexArea.innerHTML = movieScreen;
    initVideo();
    socket.emit('create room');

    socket.on('room created', function(rID){
      var toPlace = document.getElementById('roomID');
      toPlace.innerHTML = rID;
    });

  });


  // For handling room joins
  var joinButton = document.getElementById('join_movie');

  joinButton.addEventListener('click', function(){
    var joinID = document.getElementById('join_roomid').value;
    window.location.href = "/room/" +joinID;

    // console.log("joinID value: "+joinID);
    // socket.emit('join room', joinID);
  });


}

window.addEventListener('load', init);
