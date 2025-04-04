const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volumeSlider = document.querySelector('.volume');
const speedSlider = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const fastForwardButton = document.querySelector('.fastforward');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Play/Pause Toggle
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚';  // Pause icon
    } else {
        video.pause();
        playButton.textContent = '►';  // Play icon
    }
}

// Update Progress Bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
}

// Seek Video by Clicking Progress Bar
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Adjust Volume
function handleVolumeChange() {
    video.volume = volumeSlider.value;
}

// Adjust Playback Speed
function handleSpeedChange() {
    video.playbackRate = speedSlider.value;
}

// Skip Forward & Backward
function skipTime(e) {
    video.currentTime += parseFloat(e.target.dataset.skip);
}

// Event Listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', scrub);
volumeSlider.addEventListener('input', handleVolumeChange);
speedSlider.addEventListener('input', handleSpeedChange);
rewindButton.addEventListener('click', skipTime);
fastForwardButton.addEventListener('click', skipTime);
