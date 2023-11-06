var video;


window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	var volume = document.querySelector("#volume")
	video.volume = volume;
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();

});

document.querySelector("#slowdown").addEventListener("click", function () {
	

});
