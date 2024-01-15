const playBtn = document.getElementById('play')
let isPlay = true


playBtn.addEventListener('click', (e) => {
    
    // Toggle play status
    const playBtnClasses = isPlay ? 'fas fa-pause' : 'fas fa-play'
    e.target.classList = playBtnClasses
    isPlay = !isPlay
    
})