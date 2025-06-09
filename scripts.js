const coffeMenu = [
  {
    name: 'Café Espresso Clássico',
    img: './assets/menu-1.png',
    originalPrice: 12.9,
    discountPrice: 9.9,
  },
  {
    name: 'Café Latte Cremoso',
    img: './assets/menu-2.png',
    originalPrice: 15.9,
    discountPrice: 12.5,
  },
  {
    name: 'Café Cappuccino Italiano',
    img: './assets/menu-3.png',
    originalPrice: 16.9,
    discountPrice: 13.9,
  },
  {
    name: 'Café Mocha com Chocolate',
    img: './assets/menu-4.png',
    originalPrice: 18.5,
    discountPrice: 14.99,
  },
  {
    name: 'Café Americano Suave',
    img: './assets/menu-5.png',
    originalPrice: 10.0,
    discountPrice: 7.5,
  },
  {
    name: 'Café Gelado Vanilla',
    img: './assets/menu-6.png',
    originalPrice: 19.9,
    discountPrice: 15.9,
  },
]

function showCoffe() {
  const container = document.getElementById('listCoffes')

  coffeMenu.forEach(cafe => {
    const card = document.createElement('div')
    card.className = 'cardCoffe'

    card.innerHTML = `
      <img src="${cafe.img}" alt="${cafe.name}">
      <h3>${cafe.name}</h3>
      <p class="originalPrice">R$ ${cafe.originalPrice.toFixed(2)}</p>
      <p class="discountPrice">R$ ${cafe.discountPrice.toFixed(2)}</p>
      <div class="buttonContainer">
      <a href="#" class="buttonCard">Adicionar</a>
      </div>
      `

    container.appendChild(card)
  })
}

window.addEventListener('DOMContentLoaded', showCoffe)

const starsImages = {
  full: './assets/stars.png',
  half: './assets/half-Star.png',
}

function renderStars(container, rating) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  container.innerHTML = ''

  for (let i = 0; i < fullStars; i++) {
    container.innerHTML += `<img src="${starsImages.full}" class="starsImg" alt="Estrela cheia">`
  }

  if (hasHalf) {
    container.innerHTML += `<img src="${starsImages.half}" class="HalfstasImg" alt="Meia estrela">`
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box')

  boxes.forEach(box => {
    const rating = parseFloat(box.getAttribute('data-stars'))
    const starsContainer = box.querySelector('.stars')
    if (!isNaN(rating) && starsContainer) {
      renderStars(starsContainer, rating)
    }
  })
})
