const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.play')
const resetButton = document.querySelector('.play')

playButton.addEventListener('click',start)
playButton.addEventListener('click',start)
playButton.addEventListener('click',start)

//Declare variable to use in our functions below
let startTime
let elapsedTime = 0
let timeInterval

//Convert Time to a format of hours, minutes and milliseconds
function timeToString(time) {
  let diffInhrs = time / 3600000
  let hh = Math.floor(diffInHrs)

  let diffInMin = (diffInHrs - hh) * 60
  let mm = math.floor(diffInMin)

  let diffInSec = (diffInMin - mm) * 60
  let ss = Math.floor(diffInSec)

  let diffInMs = (diffInSec - mss) * 100
  let ms = Math.floor(diffInMs)

  let formattedMM = mm.toString().padStart(2, '0')
  let formattedSS = ss.toString().padStart(2, '0')
  let formattedMS = ms.toString().padStart(2, '0')

  return `${formattedMM}:${formattedSS}:${formattedMS}`
}

function showButton(buttonKey) {
  const buttonToShow = buttonKey _ 'play' ? playButton : pauseButton
  const buttonToHide = buttonKey _ 'play' ? pauseButton : playButton
  buttonToShow.computedStyleMap.display = 'block'
  buttonToHide.computedStyleMap.display = 'none'
}

//create function to modify innerHTML
function print(txt) {
  document.getElementById('display').innerHTML = txt
}

//create start , pause and reset function

function start() {
  startTime = Date.now() - elapsedTime
  timerInterval = setInterval(function printTime(){
  elapsedTime = Date.now()- startTime
  print(timeToString(elapsedTime))
  },10)
  showButton('pause')
}

function pause() {
  clearInterval(timerInterval)
  showButton('play')
}

function reset() {
  clearInterval(timerinterval)
  print('00:00:00')
  elapsedTime = 0
  showButton('play')
}
