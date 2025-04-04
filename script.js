const inputs = document.querySelectorAll('.controls input');
 const video = document.querySelector(".player__video");
 const playButton = document.querySelector(".toggle");
 const volumeControl = document.querySelector(".volume");
 const speedControl = document.querySelector(".playbackSpeed");
 const rewindButton = document.querySelector(".rewind");
 const forwardButton = document.querySelector(".forward");
 const progress = document.querySelector(".progress");
 const progressFilled = document.querySelector(".progress__filled");
 
     function handleUpdate() {
       const suffix = this.dataset.sizing || '';
       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
 // Toggle Play/Pause
 function togglePlay() {
     if (video.paused) {
         video.play();
         playButton.textContent = "❚ ❚";
     } else {
         video.pause();
         playButton.textContent = "►";
     }
 }
 
     inputs.forEach(input => input.addEventListener('change', handleUpdate));
     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
 // Update Progress Bar
 function updateProgress() {
     const percent = (video.currentTime / video.duration) * 100;
     progressFilled.style.width = `${percent}%`;
 }
 
 // Set Volume
 function handleVolumeChange() {
     video.volume = volumeControl.value;
 }
 
 // Set Playback Speed
 function handleSpeedChange() {
     video.playbackRate = speedControl.value;
 }
 
 // Rewind 10s
 function rewind() {
     video.currentTime -= 10;
 }
 
 // Forward 25s
 function forward() {
     video.currentTime += 25;
 }
 
 // Seek Video
 function seek(e) {
     const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
     video.currentTime = seekTime;
 }
 
 // Event Listeners
 playButton.addEventListener("click", togglePlay);
 video.addEventListener("click", togglePlay);
 video.addEventListener("timeupdate", updateProgress);
 volumeControl.addEventListener("input", handleVolumeChange);
 speedControl.addEventListener("input", handleSpeedChange);
 rewindButton.addEventListener("click", rewind);
 forwardButton.addEventListener("click", forward);
 progress.addEventListener("click", seek);