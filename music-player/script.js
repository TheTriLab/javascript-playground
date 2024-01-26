const playerContainer = document.getElementById('player')
const playBtn = document.getElementById('play')
const playIcon = playBtn.querySelector('i')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('previous')
const discEl = document.getElementById('disc')
const audioEl = document.getElementById('audio')
const progressEl = document.getElementById('progress')

const audioPlayList = [
    {
        name: 'ukulele',
        audioUrl: './assets/music/ukulele.mp3',
        avatarUrl: './assets/img/ukulele.jpg',
    },
    {
        name: 'summer',
        audioUrl: './assets/music/summer.mp3',
        avatarUrl: './assets/img/summer.jpg',
    },
    {
        name: 'hey',
        audioUrl: './assets/music/hey.mp3',
        avatarUrl: './assets/img/hey.jpg',
    },
]

let currentAudio = audioPlayList[0]


function loadAudio() {
    // Check the audio play status
    const isPlay = !audioEl.paused && audioEl.currentTime > 0

    // Load audio info
    audioEl.setAttribute('src', currentAudio.audioUrl)
    discEl.setAttribute('src', currentAudio.avatarUrl)
    discEl.setAttribute('alt', currentAudio.name)

    // Play audio
    if (isPlay) {
        audioEl.play()
    } else {
        audioEl.pause()
    }
}

// Set video time to progress
function updateProgress() {
    progressEl.style.width = `${(audioEl.currentTime / audioEl.duration) * 100}%`
}

// Play and pause
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
    const currentAudioIndex = audioPlayList.findIndex(e => e.name === currentAudio.name)
    const nextAudioIndex = currentAudioIndex < audioPlayList.length - 1 ? currentAudioIndex + 1 : 0
    currentAudio = audioPlayList[nextAudioIndex]

    loadAudio()
})

// Click previous button
prevBtn.addEventListener('click', () => {
    const currentAudioIndex = audioPlayList.findIndex(e => e.name === currentAudio.name)
    const previousAudioIndex = currentAudioIndex > 0 ? currentAudioIndex - 1 : audioPlayList.length - 1
    currentAudio = audioPlayList[previousAudioIndex]
    
    loadAudio()
})

// Time update
audioEl.addEventListener('timeupdate', updateProgress)
