function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6byrYNQC0EQ":
        Script1();
        break;
      case "6fZApIuGSEB":
        Script2();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document

function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.src="story_content/external_files/game-music-loop-7-145285.mp3";
audio.load();
audio.play();
}

