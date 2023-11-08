var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener("DOMContentLoaded", function () {
	const myVideo = document.getElementById("player1");
	const playButton = document.getElementById("play");
	const pauseButton = document.getElementById("pause");
	const slider = document.getElementById("slider");
	const volumeText = document.getElementById("volume");
	const slowerButton = document.getElementById("slower");
	const fasterButton = document.getElementById("faster");
	const skipButton = document.getElementById("skip");
	const muteButton = document.getElementById("mute");
	const volumeSlider = document.getElementById("slider");
	const vintageButton = document.getElementById("vintage");
	const originalButton = document.getElementById("orig");

	// Get the video element
	const player1 = document.getElementById('player1');

	// Turn off autoplay
	player1.autoplay = false;

	// Turn off looping
	player1.loop = false;

	playButton.addEventListener("click", function () {
		myVideo.play();
	});

	pauseButton.addEventListener("click", function () {
		myVideo.pause();
	});

	slider.addEventListener("input", function () {
		myVideo.volume = slider.value / 100;
		volumeText.textContent = `${slider.value}%`;
	});
	playButton.addEventListener("click", function () {
		myVideo.play();
	});

	pauseButton.addEventListener("click", function () {
		myVideo.pause();
	});

	slowerButton.addEventListener("click", function () {
		myVideo.playbackRate -= 0.1;
		console.log(`New Speed: ${myVideo.playbackRate}`);
	});

	fasterButton.addEventListener("click", function () {
		myVideo.playbackRate += 0.1;
		console.log(`New Speed: ${myVideo.playbackRate}`);
	});

	skipButton.addEventListener("click", function () {
		if (myVideo.currentTime + 10 >= myVideo.duration) {
			myVideo.currentTime = 0;
		} else {
			myVideo.currentTime += 10;
		}
		console.log(`Current video location: ${myVideo.currentTime}`);
	});

	let isMuted = false;
	muteButton.addEventListener("click", function () {
		isMuted = !isMuted;
		myVideo.muted = isMuted;
		muteButton.textContent = isMuted ? "Unmute" : "Mute";
	});

	volumeSlider.addEventListener("input", function () {
		myVideo.volume = volumeSlider.value / 100;
		volumeText.textContent = `${volumeSlider.value}%`;
	});

	vintageButton.addEventListener("click", function () {
		myVideo.classList.add("oldSchool");
	});

	originalButton.addEventListener("click", function () {
		myVideo.classList.remove("oldSchool");
	});
});
