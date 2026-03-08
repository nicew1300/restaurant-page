import './styles/global.css'
import loadHome from "./modules/home.js"
import loadMenu from "./modules/menu.js"
import loadAbout from "./modules/about.js"

const homeButton = document.getElementById('home-button')
const menuButton = document.getElementById('menu-button')
const aboutButton = document.getElementById('about-button')

homeButton.addEventListener('click', loadHome)
menuButton.addEventListener('click', loadMenu)
aboutButton.addEventListener('click', loadAbout)

loadHome()
homeButton.classList.add('active')


export { homeButton, menuButton, aboutButton }