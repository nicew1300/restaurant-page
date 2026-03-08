import '../styles/global.css'
import '../styles/menu.css'
import { homeButton, menuButton, aboutButton } from '../index.js'

export default function loadMenu() {
    console.log('Loading menu page...')
    const content = document.getElementById('content')
    content.textContent = ''

    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.classList.add("page")

    const title = document.createElement('h1')
    title.textContent = 'Our Menu'
    title.classList.add('title')

    const description = document.createElement('p')
    description.textContent = 'This is our menu! We have a lot of nice seafood dishes and all that good stuff. Unfortunately I have no idea what to put here because I have no experience with seafood whatsoever, but I hope you enjoy the website anyway! :D'
    description.classList.add('description')

    menu.appendChild(title)
    menu.appendChild(description)

    content.appendChild(menu)

    menuButton.classList.add('active')
    aboutButton.classList.remove('active')
    homeButton.classList.remove('active')
}