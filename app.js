const switcher = document.querySelector('.switcher')
const controller = document.querySelector('.controller')
const platter = document.querySelector('.platter')
const switcherRed = document.querySelector('.switcher-red')
const switcherGreen = document.querySelector('.switcher-green')
const playerSong = document.querySelector('.player-song')
const volumeRange = document.querySelector('.volume-range')

switcherRed.classList.add('switcher-red_active')

switcher.addEventListener('click', ()=> {
  switcher.classList.toggle('switcher_active')
  controller.classList.toggle('controller_active')
  platter.classList.toggle('platter_active')
  if(switcher.classList.contains('switcher_active')) {
    switcherGreen.classList.add('switcher-green_active')
    switcherRed.classList.remove('switcher-red_active')
    setTimeout(()=> {
      playerSong.play()
    }, 1000)
  } else {
    switcherGreen.classList.remove('switcher-green_active')
    switcherRed.classList.add('switcher-red_active')
    playerSong.pause()
  }
})

volumeRange.addEventListener('input', (e)=> {
  playerSong.volume = Number(e.target.value)
})

const song = document.querySelectorAll('.song')
const album = document.querySelectorAll('.album')
const platterColor = document.querySelector('.color')
album.forEach( element => {
  element.addEventListener('click', ()=> {
    playerSong.src = ''
    let albumSong = element.children[1].src
    playerSong.src = albumSong
    platterColor.style.backgroundColor = randomColors()
    function randomColors() {
      return '#' + Math.floor(Math.random() * 19777215).toString(16);
    }
    playerSong.pause()
    playerSong.play()
  })
})