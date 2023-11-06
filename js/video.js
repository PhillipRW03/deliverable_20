var video;
var isMuted = false;


window.addEventListener("load", function () {
	console.log("Good job opening the window")
});

document.addEventListener("DOMContentLoaded", function () {
	const play = document.getElementById("play");
	const pause = document.getElementById("pause");
	const slider = document.getElementById("slider");
	const vol = document.getElementById("volume");
	const slower = document.getElementById("slower");
	const faster = document.getElementById("faster");
	const skip = document.getElementById("skip");
	const mute = document.getElementById("mute");
	const vintage = document.getElementById("vintage");
	const original = document.getElementById("orig");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

	play.addEventListener("click", function () {
		console.log("Play Video");
		video.play();
	});

	pause.addEventListener("click", function () {
		console.log("Pause Video");
		video.pause();

	});

	slower.addEventListener("click", function () {
		video.playbackRate -= 0.1;
		console.log("New video speed: " + video.playbackRate);

	});

	faster.addEventListener("click", function () {
		video.playbackRate += 0.1;
		console.log("New video speed: " + video.playbackRate);
	});

	skip.addEventListener("click", function () {
		var newTime = video.currentTime + 10;

		if (newTime < video.duration) {
			video.currentTime = newTime;
		} else {
			video.currentTime = 0;
		}

		console.log("Current video location: " + video.currentTime);
	});

	mute.addEventListener("click", function () {
		if (isMuted) {
			video.muted = false;
			mute.textContent = "Mute";
			isMuted = false;
		} else {
			// Mute the video
			video.muted = true;
			mute.textContent = "Unmute";
			isMuted = true;
		}
	});

	slider.addEventListener("input", function () {
		// Update the video's volume based on the slider value
		var volumeValue = slider.value / 100; // Convert the slider value to a range between 0 and 1
		video.volume = volumeValue;
		vol.textContent = `${slider.value}%`;;
	});

	vintage.addEventListener("click", function () {
		video.classList.add("oldSchool");
		//video.classList.toggle("oldSchool");
	});

	original.addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});

