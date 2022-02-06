const nav = document.querySelector('#header nav')
const links = document.querySelectorAll('nav ul li a')
const toggle = document.querySelectorAll('nav .toggle')

let clickToggle = function () {
  nav.classList.toggle('show')
}

// qunado clicar em um item do menu, esconder o menu
const clickLinks = function () {
  nav.classList.remove('show')
}

for (const element of toggle) {
  element.addEventListener('click', clickToggle)
}

for (const link of links) {
  link.addEventListener('click', clickLinks)
}

// mudar a cor do  header da pagina quando der o scroll
const header = document.querySelector('header')
const navHeight = header.offsetHeight

let changeHeaderWhenScroll = function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// gerando imagem automaticamente
const setPeopleImg = results => {
  const peopleImg = document.querySelectorAll('img.image')

  for (element of peopleImg) {
    const [
      {
        picture: { medium: url }
      }
    ] = results.results

    element.setAttribute('src', url)
  }
}

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(setPeopleImg)

// tetimonials carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scrollReveal: mostrar elemento quando der scroll na pagina

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #services header, #servies .card, #testimonials .testimonials, #contact .text, #contact .links,  footer .brand, footer .social`,
  {
    interval: 100
  }
)

// back-to-top
const backToTopButtom = document.querySelector('.back-to-top')

const backToTop = () => {
  if (window.scrollY >= 560) {
    backToTopButtom.classList.add('show')
  } else {
    backToTopButtom.classList.remove('show')
  }
}

// Menu activo conforme a seção visivel na página
// const sections = document.querySelectorAll('section[id]')
// const activateMenuAtcurrentSection = () => {
//   const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

//   for (const section of sections) {
//     const sectionTop = section.offsetTop
//     const sectionHeight = section.offsetHeight
//     const sectionId = section.getAttribute('id')

//     const checkpointStart = checkpoint >= sectionTop
//     const checkpointEnd = checkpoint <= section + sectionHeight

//     if (checkpointStart && checkpointEnd) {
//       document
//         .querySelector('navul li a[href*=' + sectionId + ']')
//         .classList.add('active')
//     } else {
//       document
//         .querySelector('navul li a[href*=' + sectionId + ']')
//         .classList.remove('active')
//     }
//   }
// }

// when scrool
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtcurrentSection()
})
