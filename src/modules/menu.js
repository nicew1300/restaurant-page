import '../styles/global.css'
import '../styles/menu.css'
import shrimp from "../images/shrimp-bowl.png"
import sushi from "../images/sushi-platter.png"
import salmon from "../images/grilled-salmon.png"
import nigiri from "../images/nigiri.jpg"
import sashimi from "../images/sashimi.png"
import maki from "../images/maki-rolls.png"
import lobster from "../images/lobster.png"
import crab from "../images/crab.png"
import oysters from "../images/oysters.png"
import seaUrchin from "../images/sea-urchin.png"
import geoduck from "../images/geoduck.png"
import monkfishLiver from "../images/monkfish-liver.png"
import { homeButton, menuButton, aboutButton } from '../index.js'

export default function loadMenu() {
    console.log('Loading menu page...')
    const content = document.getElementById('content')
    content.textContent = ''

    const menu = document.createElement('div')
    menu.classList.add('menu')
    menu.classList.add("page")

    const title = document.createElement('h1')
    title.textContent = 'Our Menu!'
    title.classList.add('title')

    const description = document.createElement('p')
    description.textContent = 'This is our menu! We have a lot of nice seafood dishes and all that good stuff. Unfortunately I have no idea what to put here because I have no experience with seafood whatsoever, but I hope you enjoy the website anyway! :D'
    description.classList.add('description')

    // this is an even bigger mess holy moly
    // here are the sections defined
    // entire wrapper of all the dishes
    const dishesCont = document.createElement('div')
    dishesCont.classList.add('dishes-cont')

    // first section, the "Currently Popular Dishes"
    const featuredDishesTitle = document.createElement('h2')
    featuredDishesTitle.textContent = 'Currently Popular Dishes'
    featuredDishesTitle.classList.add('dishes-title')

    const dishes = [
        {
            text: "Shrimp Bowl",
            imgSrc: shrimp,
        },
        {
            text: "Sushi Platter",
            imgSrc: sushi
        },
        {
            text: "Grilled Salmon",
            imgSrc: salmon
        },


        {
            text: "Nigiri Sushi",
            imgSrc: nigiri
        },
        {
            text: "Sashimi Sushi",
            imgSrc: sashimi
        },
        {
            text: "Maki Rolls",
            imgSrc: maki
        },


        {
            text: "Lobster Serving",
            imgSrc: lobster
        },
        {
            text: "Crab Serving",
            imgSrc: crab
        },
        {
            text: "Oysters Platter",
            imgSrc: oysters
        },


        {
            text: "Sea Urchin Platter",
            imgSrc: seaUrchin
        },
        {
            text: "Geoduck Serving",
            imgSrc: geoduck
        },
        {
            text: "Monkfish Liver Serving",
            imgSrc: monkfishLiver
        }
    ]

    dishes.forEach(dish => {
        const dishDiv = document.createElement("div")
        dishDiv.classList.add("dish")
        const dishText = document.createElement("div")
        dishText.textContent = dish.text
        dishText.classList.add("dish-text")
        const dishImg = document.createElement("img")
        dishImg.classList.add("dish-img")
        dishImg.src = dish.imgSrc
        dishDiv.appendChild(dishText)
        dishDiv.appendChild(dishImg)
        dishesCont.appendChild(dishDiv)
    });

    const sushiSelections = document.createElement("h2")
    sushiSelections.textContent = "Sushi Selections"
    sushiSelections.classList.add("dishes-title")
        
    const shellfishSelections = document.createElement("h2")
    shellfishSelections.textContent = "Shellfish Selections"
    shellfishSelections.classList.add("dishes-title")

    const nicheSelections = document.createElement("h2")
    nicheSelections.textContent = "Unique/Niche Selections"
    nicheSelections.classList.add("dishes-title")

    dishesCont.appendChild(featuredDishesTitle)
    
    menu.appendChild(title)
    menu.appendChild(description)
    menu.appendChild(dishesCont)

    content.appendChild(menu)

    menuButton.classList.add('active')
    aboutButton.classList.remove('active')
    homeButton.classList.remove('active')
}