document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.header__open')
  const closeButton = document.querySelector('.header__close')
  const menu = document.querySelector('.header__menu')

  openButton.addEventListener('click', () => {
    menu.classList.add('header__menu--visible')
  })

  closeButton.addEventListener('click', () => {
    menu.classList.remove('header__menu--visible')
  })

  window.addEventListener('scroll', () => {
    if (this.scrollY > 50) {
      document.querySelector('header').classList.add('header--scrolling')
    } else {
      document.querySelector('header').classList.remove('header--scrolling')
    }
  })

  const menuItems = document.querySelectorAll('.header__link')

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      removeMenuItemsActive(menuItems, 'header__link--active')
      item.classList.add('header__link--active')
      menu.classList.remove('header__menu--visible')
    })
  })

  const removeMenuItemsActive = (items, _class) => {
    items.forEach(item => {
      item.classList.remove(_class)
    })
  }

  document.getElementById('copyright').innerText = `© Jacobo Garcés. ${new Date().getFullYear().toString()}`

  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1700,
    delay: 400
  })

  scrollReveal.reveal('.banner__title')
  scrollReveal.reveal('.banner__image', { delay: 600 })
  scrollReveal.reveal('.banner__subtitle')
  scrollReveal.reveal('.banner__container-button')
  scrollReveal.reveal('.implications__item', { origin: 'left' })
  scrollReveal.reveal('.implications__item--reverse', { origin: 'right' })
})