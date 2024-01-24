const playerContainer = document.getElementById('player')
const playBtn = document.getElementById('play')
const playIcon = playBtn.querySelector('i')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')
const discEl = document.getElementById('disc')
const audioEl = document.getElementById('audio')





playBtn.addEventListener('click', () => {
    // Check the audio play status
    const isPlay = !audioEl.paused && audioEl.currentTime > 0

    // Toggle play class for player
    playerContainer.classList.toggle('play')
    
    // Toggle play icon
    playIcon.classList.toggle('fa-play')
    playIcon.classList.toggle('fa-pause')

    // Play audio
    if (isPlay) {
        audioEl.pause()
    } else {
        audioEl.play()
    }
})

// Click next button
nextBtn.addEventListener('click', () => {

})

// Click previous button
prevBtn.addEventListener('click', () => {
    
})
