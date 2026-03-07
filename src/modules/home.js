import '../styles/global.css'
import '../styles/home.css'
import shrimpImage from "../images/home-shrimp.jpg"

export default function loadHome() {
    const content = document.getElementById('content')
    content.textContent = ''

    const home = document.createElement('div')
    home.classList.add('home')

    const title = document.createElement('h1')
    title.textContent = 'Welcome to our seafood-restaurant!'

    const description = document.createElement('p')
    description.textContent = 'This is a website I would make if I had a seafood restaurant. Unforunately I do not lol but I hope you enjoy the website anyway!'

    const image = document.createElement('img')
    image.src = shrimpImage
    image.alt = 'A delicious shrimp dish'
    image.classList.add('home-image')

    home.appendChild(title)
    home.appendChild(description)
    home.appendChild(image)

    content.appendChild(home)
}