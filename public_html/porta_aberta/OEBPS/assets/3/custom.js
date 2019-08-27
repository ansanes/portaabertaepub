$(document).ready(function(){

$('#finding_act,#listening_act').bind('touchstart click',function(e){
//        e.preventDefault();
	pause_all();
	play_audio('menu_continue');
});

});

/*function play_audio(audio) {
var aud = document.getElementById(audio);
if(aud.paused) {
aud.play();
} else {
aud.play();
}
}

function pause_all() {
$('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
});
}*/