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
})