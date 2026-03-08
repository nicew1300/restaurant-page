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
    description.textContent = 'This is our menu! We have a lot of nice seafood dishes, from the classical shrimp bowl and sushi platter, to the more niche sea urchin platter and geoduck serving. We have a lot of different dishes, and I hope you find something you like!'
    description.classList.add('description')

    const dishesCont = document.createElement('div')
    dishesCont.classList.add('dishes-cont')

    // Define sections with their own dishes
    const sections = [
        {
            title: 'Currently Popular Dishes',
            dishes: [
                { text: "Shrimp Bowl", imgSrc: shrimp },
                { text: "Sushi Platter", imgSrc: sushi },
                { text: "Grilled Salmon", imgSrc: salmon }
            ]
        },
        {
            title: 'Sushi Selections',
            dishes: [
                { text: "Nigiri Sushi", imgSrc: nigiri },
                { text: "Sashimi Sushi", imgSrc: sashimi },
                { text: "Maki Rolls", imgSrc: maki }
            ]
        },
        {
            title: 'Shellfish Selections',
            dishes: [
                { text: "Lobster Serving", imgSrc: lobster },
                { text: "Crab Serving", imgSrc: crab },
                { text: "Oysters Platter", imgSrc: oysters }
            ]
        },
        {
            title: 'Unique/Niche Selections',
            dishes: [
                { text: "Sea Urchin Platter", imgSrc: seaUrchin },
                { text: "Geoduck Serving", imgSrc: geoduck },
                { text: "Monkfish Liver Serving", imgSrc: monkfishLiver }
            ]
        }
    ]

    // Loop through each section
    sections.forEach(section => {
        const sectionTitle = document.createElement('h2')
        sectionTitle.textContent = section.title
        sectionTitle.classList.add('dishes-title')
        dishesCont.appendChild(sectionTitle)

        // Add each dish in this section
        section.dishes.forEach(dish => {
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
        })
    })

    menu.appendChild(title)
    menu.appendChild(description)
    menu.appendChild(dishesCont)

    content.appendChild(menu)

    menuButton.classList.add('active')
    aboutButton.classList.remove('active')
    homeButton.classList.remove('active')
}