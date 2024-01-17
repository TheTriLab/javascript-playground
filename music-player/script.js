const playerContainer = document.getElementById('player')
const playBtn = document.getElementById('play')
const playIcon = playBtn.querySelector('i')
const discEl = document.getElementById('disc')


let isPlay = true


playBtn.addEventListener('click', (e) => {
    // Toggle play class for player
    playerContainer.classList.toggle('play')
    
    // Toggle play icon
    playIcon.classList.toggle('fa-play')
    playIcon.classList.toggle('fa-pause')

    // Toggle play status
    // isPlay = !isPlay
})