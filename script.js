document.addEventListener("DOMContentLoaded", function(){

    const video = document.getElementById("myVideo");

    document.getElementById("playButton").addEventListener("click", function(){
        const playButton = document.getElementById("playButton").querySelector("i");
        if(!video.paused){
            video.pause();
            playButton.classList.remove("fa-pause");
            playButton.classList.add("fa-play");
        }
        else{
            video.play();
            playButton.classList.remove("fa-play");
            playButton.classList.add("fa-pause");
        } 
    });

    document.getElementById("replayButton").addEventListener("click", function(){
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener("click", function(){
        const playButton = document.getElementById("playButton").querySelector("i");
        if(video.paused) {
            video.play();
            playButton.classList.remove("fa-play");
            playButton.classList.add("fa-pause");
        } else {
            video.pause();
            playButton.classList.remove("fa-pause");
            playButton.classList.add("fa-play");
        }
    });

    document.getElementById("muteButton").addEventListener("click", function() {
        video.muted = !video.muted;
        const muteIcon = muteButton.querySelector("i");

        if (!video.muted) {
            muteIcon.classList.remove("fa-volume-high");
            muteIcon.classList.add("fa-volume-xmark"); // Muted icon

        } else {
            muteIcon.classList.remove("fa-volume-xmark");
            muteIcon.classList.add("fa-volume-high"); // Unmuted icon
        }
    });

});