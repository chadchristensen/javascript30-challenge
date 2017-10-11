document.body.addEventListener("keyup", function(e){
	var audio = document.querySelector("audio[data-key='"+e.keyCode+"']");
	var key = document.querySelector(".key[data-key='"+e.keyCode+"']");

	if(!audio) return;
	audio.currentTime = 0;
	audio.play();

	key.classList.add('playing');
	
});

var keys = document.querySelectorAll(".key");

function removePlaying(e){

	if(e.propertyName !== 'transform') return;

	this.classList.remove('playing');

}

keys.forEach((key)=>{
	key.addEventListener('transitionend', removePlaying);
});