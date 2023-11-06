var video;
var isMuted = false;


window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	video.load();

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

	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New video speed: " + video.playbackRate);

	});

	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("New video speed: " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function () {
		var newTime = video.currentTime + 10;

		if (newTime <= video.duration) {
			video.currentTime = newTime;
		} else {
			video.currentTime = 0;
		}

		console.log("Current video location: " + video.currentTime);
	});

	document.querySelector("#mute").addEventListener("click", function () {
		if (isMuted) {
			video.muted = false;
			document.querySelector("#mute").textContent = "Mute";
			isMuted = false;
		} else {
			// Mute the video
			video.muted = true;
			document.querySelector("#mute").textContent = "Unmute";
			isMuted = true;
		}
	});

	document.querySelector("#slider").addEventListener("input", function () {
		// Update the video's volume based on the slider value
		var volumeValue = document.querySelector("#slider").value / 100; // Convert the slider value to a range between 0 and 1
		video.volume = volumeValue;
		document.querySelector("#volume").textContent = Math.round(volumeValue * 100) + "%";
	});

	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});

});