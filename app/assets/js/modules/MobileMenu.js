class MobileMenu {
  constructor() {
    this.navbarIcon = document.querySelector('.site-header__navbar-icon')
    this.navbarContent = document.querySelector('.site-header__navbar-nav')
    this.siteHeader = document.querySelector('.site-header')
    this.events()
  }

  events() {
    this.navbarIcon.addEventListener('click', () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    this.navbarContent.classList.toggle('site-header__navbar-nav--is-visible')
    this.siteHeader.classList.toggle('site-header--is-expanded')
    this.navbarIcon.classList.toggle('site-header__navbar-icon--close-x')
  }

}

export default MobileMenu;