import '../styles/global.css'
import '../styles/home.css'
import shrimp from "../images/shrimp-bowl.png"
import sushi from "../images/sushi-platter.png"
import salmon from "../images/grilled-salmon.png"
import { homeButton, menuButton, aboutButton } from '../index.js'

export default function loadHome() {
    const content = document.getElementById('content')
    content.textContent = ''

    const home = document.createElement('div')
    home.classList.add('home')
    home.classList.add("page")

    const title = document.createElement('h1')
    title.classList.add('title')
    title.textContent = 'Welcome to my seafood-restaurant!'

    const description = document.createElement('p')
    description.classList.add('description')
    description.textContent = 'This is a website I would make if I had a seafood restaurant. Unforunately I do not lol but I hope you enjoy the website anyway!'


    const featuredDishesCont = document.createElement('div')
    featuredDishesCont.classList.add('featured-dishes-cont')

    const featuredDishesTitle = document.createElement('h2')
    featuredDishesTitle.textContent = 'Featured Dishes'
    featuredDishesTitle.classList.add('featured-dishes-title')

    // good luck reading this its a mess
    const dish1 = document.createElement("div")
    dish1.classList.add("featured-dish")
    const dish1Text = document.createElement("div")
    dish1Text.textContent = "Shrimp Bowl"
    dish1Text.classList.add("featured-dish-text")
    const dish1Img = document.createElement("img")
    dish1Img.addEventListener('click', () => menuButton.click())
    dish1Img.classList.add("featured-dish-img")
    dish1Img.src = shrimp
    
    const dish2 = document.createElement("div")
    dish2.classList.add("featured-dish")
    const dish2Text = document.createElement("div")
    dish2Text.textContent = "Sushi Platter"
    dish2Text.classList.add("featured-dish-text")
    const dish2Img = document.createElement("img")
    dish2Img.addEventListener('click', () => menuButton.click())
    dish2Img.classList.add("featured-dish-img")
    dish2Img.src = sushi

    const dish3 = document.createElement("div")
    dish3.classList.add("featured-dish")
    const dish3Text = document.createElement("div")
    dish3Text.textContent = "Grilled Salmon"
    dish3Text.classList.add("featured-dish-text")
    const dish3Img = document.createElement("img")
    dish3Img.addEventListener('click', () => menuButton.click())
    dish3Img.classList.add("featured-dish-img")
    dish3Img.src = salmon

    dish1.appendChild(dish1Text)
    dish1.appendChild(dish1Img)
    
    dish2.appendChild(dish2Text)
    dish2.appendChild(dish2Img)
    
    dish3.appendChild(dish3Text)
    dish3.appendChild(dish3Img)

    featuredDishesCont.appendChild(featuredDishesTitle)
    featuredDishesCont.appendChild(dish1)
    featuredDishesCont.appendChild(dish2)
    featuredDishesCont.appendChild(dish3)

    home.appendChild(title)
    home.appendChild(description)
    home.appendChild(featuredDishesCont)

    content.appendChild(home)

    homeButton.classList.add('active')
    menuButton.classList.remove('active')
    aboutButton.classList.remove('active')
}