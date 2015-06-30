function initVideo(){

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
    try {
      console.log(cue.text);
    } catch(e){
      //do nothing;
      //TODO: seems like there is a better solution to this.
    }
  }






  // This will give time on a click:
  // used to debug
  function getTime() {
    console.log(vid.currentTime);
    return vid.currentTime;
  }
  document.getElementById('example_video_1')
      .addEventListener('click',getTime, false);
}
