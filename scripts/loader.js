const loaderBox = document.querySelector('.loader-box')

function handleLoader() {
  setTimeout(() => {
    loaderBox.style.display = 'none'
  }, 1000)
}

window.onload = function () {
  handleLoader()
}
