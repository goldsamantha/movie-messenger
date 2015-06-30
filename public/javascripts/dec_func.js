vid.on('ended', function() {
  console.log('awww...over so soon?');
});

vid.addEventListener('play', function(){
  cues = vid.textTracks[0].cues;
  for (var i=0; i< cues.length; i++){
    cues[i].onenter = function(){
      // console.log(i);
      console.log(cues[i].text);
    }
  }


  cues.forEach(function(){
    this.onenter = function(){
    console.log(this.text);
  }
  });
});
console.log(cues);
