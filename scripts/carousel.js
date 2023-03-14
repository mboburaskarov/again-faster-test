const carouselWrapper = document.querySelector('.carousel-wrapper')
const carouselSlides = document.querySelectorAll('.carousel-slide')
const prevButton = document.querySelector('.carousel-prev')
const nextButton = document.querySelector('.carousel-next')

let slidePosition = 0
let isDragging = false
let startPosition = 0
let currentTranslate = 0
let prevTranslate = 0
const slidesToShow = 4
const slidesToScroll = 1
const slideWidth = carouselSlides[0].offsetWidth

function moveToSlide(position) {
  carouselWrapper.style.transform = `translateX(-${position * slideWidth}px)`
}

function updateButtons() {
  if (slidePosition === 0) {
    prevButton.disabled = true
  } else {
    prevButton.disabled = false
  }

  if (slidePosition === carouselSlides.length - slidesToShow) {
    nextButton.disabled = true
  } else {
    nextButton.disabled = false
  }
}

prevButton.addEventListener('click', () => {
  if (slidePosition > 0) {
    slidePosition -= slidesToScroll
    moveToSlide(slidePosition)
    updateButtons()
  }
})

nextButton.addEventListener('click', () => {
  if (slidePosition < carouselSlides.length - slidesToShow) {
    slidePosition += slidesToScroll
    moveToSlide(slidePosition)
    updateButtons()
  }
})

function dragStart(event) {
  if (event.type === 'touchstart') {
    startPosition = event.touches[0].clientX
  } else {
    startPosition = event.clientX
  }

  isDragging = true
  carouselWrapper.classList.add('grabbing')

  document.addEventListener('mousemove', drag)
  document.addEventListener('mouseup', dragEnd)

  document.addEventListener('touchmove', drag)
  document.addEventListener('touchend', dragEnd)
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX
    currentTranslate = slidePosition * -slideWidth + (currentPosition - startPosition)
    carouselWrapper.style.transform = `translateX(${currentTranslate}px)`
  }
}

function dragEnd() {
  isDragging = false
  carouselWrapper.classList.remove('grabbing')

  const dragDistance = currentTranslate - prevTranslate

  if (dragDistance < -5 && slidePosition < carouselSlides.length - slidesToShow) {
    slidePosition += slidesToScroll
  } else if (dragDistance > 5 && slidePosition > 0) {
    slidePosition -= slidesToScroll
  }

  moveToSlide(slidePosition)
  updateButtons()

  prevTranslate = currentTranslate
}

carouselWrapper.addEventListener('mousedown', dragStart)
carouselWrapper.addEventListener('touchstart', dragStart)

document.addEventListener('mouseup', dragEnd)
document.addEventListener('touchend', dragEnd)
