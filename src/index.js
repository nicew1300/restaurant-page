import './styles/global.css'
import loadHome from "./modules/home.js"
import loadMenu from "./modules/menu.js"
import loadAbout from "./modules/about.js"
import lobster from './svgs/lobster.svg';
import normalfish from './svgs/normalfish.svg';
import oyster from './svgs/oyster.svg';
import oyster2 from './svgs/oyster2.svg';
import seastar from './svgs/seastar.svg';
import shrimp from './svgs/shrimp.svg';
import shrimp2 from './svgs/shrimp2.svg';
import shrimp3 from './svgs/shrimp3.svg';
import shrimp4 from './svgs/shrimp4.svg';
import sushi from './svgs/sushi.svg';
import sushi2 from './svgs/sushi2.svg';
import sushi3 from './svgs/sushi3.svg';
import sushi4 from './svgs/sushi4.svg';

const homeButton = document.getElementById('home-button')
const menuButton = document.getElementById('menu-button')
const aboutButton = document.getElementById('about-button')

homeButton.addEventListener('click', loadHome)
menuButton.addEventListener('click', loadMenu)
aboutButton.addEventListener('click', loadAbout)

loadHome()
homeButton.classList.add('active')

const decorContainer = document.createElement('div');
decorContainer.classList.add('decor-container');

const svgFiles = [
  lobster,
  normalfish,
  oyster,
  oyster2,
  seastar,
  shrimp,
  shrimp2,
  shrimp3,
  shrimp4,
  sushi,
  sushi2,
  sushi3,
  sushi4
];

const leftSlots = Array(Math.ceil(svgFiles.length / 2))
  .fill(0)
  .map((_, i) => 10 + i * 15); // 10%, 25%, 40%, ...

const rightSlots = Array(Math.floor(svgFiles.length / 2))
  .fill(0)
  .map((_, i) => 10 + i * 15);

svgFiles.forEach((file, index) => {
    const img = document.createElement('img');
    img.src = file; // ← use the imported URL directly
    img.classList.add('decor');

    // Decide side
    const side = index % 2 === 0 ? 'left' : 'right';
    img.style[side] = '2rem';

    // Assign vertical slot + small random offset
    const slotArray = side === 'left' ? leftSlots : rightSlots;
    const slotIndex = Math.floor(index / 2);
    const baseTop = slotArray[slotIndex];
    img.style.top = `${baseTop + (Math.random() * 4 - 2)}vh`;

    // Optional rotation
    img.style.transform += ` rotate(${Math.random() * 50 - 10}deg)`;

    decorContainer.appendChild(img);
});

document.body.appendChild(decorContainer);

export { homeButton, menuButton, aboutButton }