const carouselBox = document.querySelector('.carousel-wrapper')

const productsData = [
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-1.png' },
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-2.png' },
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-3.png' },
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-4.png' },
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-1.png' },
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-2.png' },
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-3.png' },
  { name: 'Product Name', price: 34.0, img_src: './public/images/product-card/product-image-4.png' },
]

carouselBox.innerHTML = productsData
  .map(
    ({ name, img_src, price }) =>
      `<div class="carousel-slide">
              <div class="product-card">
                <div class="product-card-body">
                  <img alt=${name}  draggable="false" src=${img_src} />
                  <div class="product-card-tags"><p>Free Shipping</p></div>
                </div>
                <div class="product-card-texts">
                  <h5>${name}</h5>
                  <div class="product-card-stars">
                    <img src="./public/icons/star.svg" /><img src="./public/icons/star.svg" />
                    <img src="./public/icons/star.svg" /><img src="./public/icons/star.svg" /><img
                      src="./public/icons/star.svg"
                    />
                  </div>
                  <h5>${'$' + price.toFixed(2)}</h5>
                </div>
              </div>
       </div>`
  )
  .join('')
