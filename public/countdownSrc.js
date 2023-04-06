const countToDate = 1681065000000;
let previousTimeBetweenDates
setInterval(() => {
    const currentDate = new Date()
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
    flipAllCards(timeBetweenDates)
  
    previousTimeBetweenDates = timeBetweenDates
}, 1000)

function flipAllCards(time) {
  let seconds = time % 60;
  let minutes = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / 3600) % 24;
  

  flip(document.querySelector("[data-hours]"), Math.floor(hours))
  flip(document.querySelector("[data-minutes]"), Math.floor(minutes))
  flip(document.querySelector("[data-seconds]"), Math.floor(seconds))
}

function flip(flipCard, num) {
  const topHalf = flipCard.querySelector(".top")
  let startNumber = parseInt(topHalf.textContent)
  if (num === startNumber) return

  let newNumber = num;

  if(newNumber < 10) {
    newNumber = `0${newNumber}`
  }
  if(startNumber < 10) {
    startNumber = `0${startNumber}`
  }
 
  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}