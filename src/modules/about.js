import '../styles/global.css'
import '../styles/about.css'

export default function loadAbout() {
    const content = document.getElementById('content')
    content.textContent = ''

    const about = document.createElement('div')
    about.classList.add('about')

    const title = document.createElement('h1')
    title.textContent = 'About Me!'
    title.classList.add('about-title')

    const description = document.createElement('p')
    description.textContent = "This is a website I made for a fictional seafood restaurant. I have no experience with seafood whatsoever but I really want to try it out because from what I HAVE eaten so far, it was really good! So that makes me think the rest is also very good, and I look forward to going to a restaurant that serves seafood with someone, and trying it out!"
    description.classList.add('about-description')

    const personalParagraph1 = document.createElement('p')
    personalParagraph1.textContent = "So uhh, the reason I wanted to make this project a seafood restaurant is because the first time I tried sushi, it was amazing. My friend gave it to me in school and it was so good. Oh and it was only the grocery-store bought one! So could you imagine how the real good stuff tastes??? Like damn I really wanna try it. I wanna go to a restaurant with someone and try out even more seafood."
    personalParagraph1.classList.add('about-personal')

    const personalParagraph2 = document.createElement('p')
    personalParagraph2.textContent = "Come to think of it, now when I imported that shrimp image, that looks so fire like do you see that? Go back to the home-page and see how good that plate looks, holyyy... Bro like give me that right now. Eli showed me how good shrimp looks multiple times. Now that I think of her, she is a pretty cool person ngl."
    personalParagraph2.classList.add('about-personal')

    const personalParagraph3 = document.createElement('p')
    personalParagraph3.textContent = "Eli is fun to talk to and all, but for some reason I dont like how she usually needs 1h+ to respond. Like obviously life can get busy and Im not really anybody who can demand that she responds faster but idk. Same thing with homeboy. Like damn bro, do yall just throw your phones away every time you go do something? I personally get busy too, but I dont explode my phone when It's time to get busy..."
    personalParagraph3.classList.add('about-personal')
    
    const personalParagraph4 = document.createElement("p")
    personalParagraph4.textContent = "I love how I can just put whatever I want here because it's MY website and most likely nobody will ever read this. If for some reason someone is actually reading this, Hello, Hi!!! I'm just writing stuff here now because it's so late, almost 11pm and I'm so unbelievably tired... Idk i just like writing what comes to mind. Idk why im doing this but oh well. I hope you enjoyed reading this if you actually read it, and if you didnt, I hope you enjoyed the website anyway! :D"
    personalParagraph4.classList.add('about-personal')

    about.appendChild(title)
    about.appendChild(description)
    about.appendChild(personalParagraph1)
    about.appendChild(personalParagraph2)
    about.appendChild(personalParagraph3)
    about.appendChild(personalParagraph4)

    content.appendChild(about)
}