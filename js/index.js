import {Router}  from "./router.js"

const body = document.querySelector('body')
const home = document.querySelector('.homeLink')
const universe = document.querySelector('.universeLink')
const explore = document.querySelector('.exploreLink')

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/universe', "/pages/universe.html")
router.add('/explore', "/pages/explore.html")
router.add('/home', "/pages/home.html")

home.addEventListener('click', () => {
  home.classList.add('active')
  universe.classList.remove('active')
  explore.classList.remove('active')
  body.classList.add('bodyHome')
  body.classList.remove('bodyUniverse')
  body.classList.remove('bodyExplore')

})
universe.addEventListener('click', () => {
  home.classList.remove('active')
  universe.classList.add('active')
  explore.classList.remove('active')
  body.classList.remove('bodyHome')
  body.classList.add('bodyUniverse')
  body.classList.remove('bodyExplore')
})
explore.addEventListener('click', () => {
  home.classList.remove('active')
  universe.classList.remove('active')
  explore.classList.add('active')
  body.classList.remove('bodyHome')
  body.classList.remove('bodyUniverse')
  body.classList.add('bodyExplore')
})

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route() 