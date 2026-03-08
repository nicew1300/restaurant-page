import '../styles/global.css'
import '../styles/about.css'
import { homeButton, menuButton, aboutButton } from '../index.js'

export default function loadAbout() {
    const content = document.getElementById('content')
    content.textContent = ''

    const about = document.createElement('div')
    about.classList.add('about')
    about.classList.add("page")

    const title = document.createElement('h1')
    title.textContent = 'About The Project!'
    title.classList.add('title')

    const description = document.createElement('p')
    description.textContent = "This is a website I made for a fictional seafood restaurant. I have no experience with seafood whatsoever but I really want to try it out because from what I HAVE eaten so far, it was really good! So that makes me think the rest is also very good, and I look forward to going to a restaurant that serves seafood with someone, and trying it out!"
    description.classList.add('description')

    const personalContainer = document.createElement('div')
    personalContainer.classList.add('personal-container')

    const personalParagraph1 = document.createElement('p')
    personalParagraph1.textContent = "The reason I wanted to make this project a seafood restaurant is because the first time I tried sushi, it was amazing. My friend gave it to me in school and it was so good. Oh and it was only the grocery-store bought one! So could you imagine how the real good stuff tastes??? Like damn I really wanna try it. I wanna go to a restaurant with someone and try out even more seafood."
    personalParagraph1.classList.add('about-personal')

    const personalParagraph2 = document.createElement('p')
    personalParagraph2.textContent = "This project involved the neawly learned npm concept with webpack stuff and all. And yes you might notice the svgs on the side that they have pretty advanced code behind them. Thats because it got vibe coded lol. There is no way i would be able to do that. Idk, I just felt like the space was too empty at the sides."
    personalParagraph2.classList.add('about-personal')

    const personalParagraph3 = document.createElement('p')
    personalParagraph3.textContent = "Another thing I vibe coded was the sections.forEach() loop in menu.js. I made my version of that on my own but there was a weird problem with the section titles stacking on top of each other at the top... So I just popped that into github copilot and it fixed it. I still do understand it though so no worries! It was late at night so I didn't feel like solving anything complex at that point."
    personalParagraph3.classList.add('about-personal')
    
    const personalParagraph4 = document.createElement("p")
    personalParagraph4.textContent = "Anyway, it was a really cool project and I love how webpack works. Though some things like the svg stuff and appending them can get annoying if its a lot of files. I'm sure I will get used to it though. Enjoy the website!"
    personalParagraph4.classList.add('about-personal')

    about.appendChild(title)
    about.appendChild(description)
    about.appendChild(personalContainer)
    personalContainer.appendChild(personalParagraph1)
    personalContainer.appendChild(personalParagraph2)
    personalContainer.appendChild(personalParagraph3)
    personalContainer.appendChild(personalParagraph4)

    content.appendChild(about)

    aboutButton.classList.add('active')
    menuButton.classList.remove('active')
    homeButton.classList.remove('active')
}