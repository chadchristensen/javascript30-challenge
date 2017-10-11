document.body.addEventListener("keyup", function(e){
	var key = document.querySelectorAll("[data-key='"+e.keyCode+"']")
	if(key.length != 0){
		key[0].className += " playing";
		key[1].play();
		setTimeout(function(){
			key[0].classList.remove("playing");
			key[1].pause();
			key[1].currentTime = 0;
		}, 200);
	}
	
});