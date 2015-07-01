//This handles functionality on the home page, loading in different pages, etc.
// var io = require('socket.io')(server);

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

    socket.emit('create room');
    socket.on('room created', function(rID){
      var toPlace = document.getElementById('roomID');
      toPlace.innerHTML = rID;
      initVideo(rID);
    });

  });



  //TODO: Might be best to separate this function out
  function initVideo(rmID){

    var vid = document.getElementById('example_video_1');
    vid.height = window.innerHeight;
    vid.width = window.innerWidth;
    window.onresize = function(){
      vid.height = window.innerHeight;
      vid.width = window.innerWidth;
    }

    var cues;
    vid.textTracks[0].mode = "showing";
    vid.muted=true;
    vid.textTracks[0].oncuechange = function (){
      var cue = this.activeCues[0];
      // socket.emit('waiting', "Waiting here");
      try {
        console.log(cue.text);

        console.log(rmID);
        //io.sockets.in(joinID).emit('finished joining', joinID);
        // io.sockets.in(rmID).emit('track', cueText);
        console.log("passing after emitting track");

        var trackObj = {
          jid: rmID,
          msg: cue.text
        };

        socket.emit('track', trackObj);
      } catch(e){
      //   //do nothing;
      //   //TODO: seems like there is a better solution to this.
      }

    }
  }


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
