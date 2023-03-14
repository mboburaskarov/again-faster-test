window.onscroll = function () {
  myFunction()
}

const header = document.getElementById('header')
const content = document.querySelector('.black-background-container')
const sticky = header.offsetTop

function myFunction() {
  if (window.pageYOffset > sticky) {
    content.style.paddingTop = '52px'
    header.style.position = 'fixed'
  } else {
    content.style.paddingTop = 0
    header.style.position = 'static'
  }
}