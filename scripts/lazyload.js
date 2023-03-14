const lazyClassName = 'lazy'

document.addEventListener('DOMContentLoaded', function () {
  var lazyImages = [].slice.call(document.querySelectorAll('.lazy'))
  console.log('lazyImages', lazyImages)
  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          console.log('entry', entry)
          let lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.srcset = lazyImage.dataset.srcset
          lazyImage.classList.remove(lazyClassName)
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage)
    })
  }
})
