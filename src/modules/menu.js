import '../styles/global.css'
import '../styles/menu.css'

export default function loadMenu() {
    const content = document.getElementById('content')
    content.textContent = ''

    const menu = document.createElement('div')
    menu.classList.add('menu')

    const title = document.createElement('h1')
    title.textContent = 'Our Menu'
    title.classList.add('menu-title')

    const description = document.createElement('p')
    description.textContent = 'This is our menu! We have a lot of nice seafood dishes and all that good stuff. Unfortunately I have no idea what to put here because I have no experience with seafood whatsoever, but I hope you enjoy the website anyway! :D'
    description.classList.add('menu-description')

    const subdescription = document.createElement('p')
    subdescription.textContent = 'We also have some vegetarian options for those who do not eat seafood, though idk why you would come to this restaurant if you dont eat seafood lol though I do respect that tbh.'
    subdescription.classList.add('menu-subdescription')

    menu.appendChild(title)
    menu.appendChild(description)
    menu.appendChild(subdescription)

    content.appendChild(menu)
}