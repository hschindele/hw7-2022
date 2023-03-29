var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Autoplay is set to false");
	video.loop = false;
	console.log("Loop is set to false");
});

document.getElementById("play").addEventListener("click", function() {
    console.log("Play Video");
	video.play();
})

document.getElementById("pause").addEventListener("click", function() {
    console.log("Pause Video");
	video.pause();
})

document.getElementById("slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate -= 0.1;
	console.log("Speed is " + video.playbackRate);
})

document.getElementById("faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate += 0.1;
	console.log("Speed is " + video.playbackRate);
})

document.getElementById("skip").addEventListener("click", function() {
	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
})

document.getElementById("mute").addEventListener("click", function() {
	var text = document.getElementById("mute")
	if(text.innerHTML == 'Mute')  {
		console.log("Muted");
		video.muted = true;
		text.innerHTML = 'Unmute'
	}
	else {
		console.log("Unmuted");
		video.muted = false;
		text.innerHTML = 'Mute'
	}
})

var slider = document.getElementById("slider")
slider.addEventListener('change', function() {
	console.log('The current value is ' + slider.value/100)
	video.volume = slider.value/100;
	document.getElementById("volume").innerHTML = slider.value  +  "%";
	console.log(document.getElementById("volume"));
})	

document.getElementById("vintage").addEventListener("click", function() {
	video.className = "oldSchool";
})

document.getElementById("orig").addEventListener("click", function() {
	video.className = "video";
})
