var page = window.location.pathname.split('/')
page = page[page.length - 1]

var nav = document.querySelector('a[href="' + page + '"]')
if (nav) {
  nav.classList.add('active')
}
