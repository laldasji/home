import './typography.css'
import "./style.css"
import arrow from './double_arrow.svg';
import { loadLeetcodeInfo } from './fetch_coding_rating';

const front = document.querySelector('#front');
const cube = document.querySelector('#cube');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

function goUp() {
    if (currentFace[0] == 0) currentFace = [1, 0];
    else if (currentFace[0] == 1) currentFace = [-1, 0];
    else currentFace = [0, 0];
    transformDisplay();
}

function goDown() {
    if (currentFace[0] == 0) currentFace = [-1, 0];
    else if (currentFace[0] == -1) currentFace = [1, 0];
    else currentFace = [0, 0];
    transformDisplay();
}

function goLeft() {
    if (currentFace[1] == 0) currentFace = [0, -1];
    else if (currentFace[1] == -1) currentFace = [0, 1];
    else currentFace = [0, 0];
    transformDisplay();
}

function goRight() {
    if (currentFace[1] == 0) currentFace = [0, 1];
    else if (currentFace[1] == 1) currentFace = [0, -1];
    else currentFace = [0, 0];
    transformDisplay();
}

function addNavigators(sectionElement) {
    const upArrow = document.createElement('span');
    const downArrow = document.createElement('span');
    const leftArrow = document.createElement('span');
    const rightArrow = document.createElement('span');

    upArrow.classList.add('navigatorButtons');
    downArrow.classList.add('navigatorButtons');
    leftArrow.classList.add('navigatorButtons');
    rightArrow.classList.add('navigatorButtons');

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');

    img1.src = arrow;
    img2.src = arrow;
    img3.src = arrow;
    img4.src = arrow;

    upArrow.appendChild(img1);
    downArrow.appendChild(img2);
    leftArrow.appendChild(img3);
    rightArrow.appendChild(img4);

    upArrow.id = 'upArrowNavigator';
    downArrow.id = 'downArrowNavigator';
    leftArrow.id = 'leftArrowNavigator';
    rightArrow.id = 'rightArrowNavigator';

    upArrow.addEventListener('click', goUp);
    downArrow.addEventListener('click', goDown);
    leftArrow.addEventListener('click', goLeft);
    rightArrow.addEventListener('click', goRight);

    sectionElement.appendChild(upArrow);
    sectionElement.appendChild(downArrow);
    sectionElement.appendChild(leftArrow);
    sectionElement.appendChild(rightArrow);
}

function removeNavigators(sectionElement) {
    const navigators = sectionElement.querySelectorAll('.navigatorButtons');
        setTimeout(() => {
            for (let i = 0; i < navigators.length; i++) {
            sectionElement.removeChild(navigators[i]);
        }
    }, 500);
}

let element = front;
let currentFace = [0, 0];
front.classList.add('visible');
addNavigators(front);


function displaySection(sectionElement, action) {
    // previous element ko invisible karo, remove falana dhimkana
    element.classList.remove('visible');
    removeNavigators(element);

    // cube ko rotate karo
    cube.classList = action;

    // new element visible karo, add falana dhimkana
    sectionElement.classList.add('visible');
    addNavigators(sectionElement);
    element = sectionElement;
}

function transformDisplay() {
    if (currentFace[0] == 0) {
        if (currentFace[1] == 0) displaySection(front, '');
        else if (currentFace[1] == 1) displaySection(right, 'rotate-right');
        else displaySection(left, 'rotate-left');
    } else if (currentFace[0] == 1) {
        displaySection(up, 'rotate-up');
    } else {
        displaySection(down, 'rotate-down');
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        goUp();
    }
    else if (event.key == 'ArrowDown') {
        goDown();
    }
    else if (event.key == 'ArrowLeft') {
        goLeft();
    }
    else if (event.key == 'ArrowRight') {
        goRight();
    }
    transformDisplay();
})

const copyEmail = document.querySelector('#copyEmail');
copyEmail.addEventListener('click', async () => {
    const text = "abhinavashutoshlaldas@gmail.com"
    try {
        await navigator.clipboard.writeText(text);
        alert('Text copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
})

const gridContainer = document.querySelector('.gridContainer');
const projectScrollBar = document.querySelector('.projectScrollBar');

gridContainer.addEventListener('scroll', () => {
    const scrollableHeight = gridContainer.scrollHeight - gridContainer.clientHeight; // isolate the length of the scroll
    const scrollPercentage = gridContainer.scrollTop / scrollableHeight; // total scrolled / length of scroll

    // Update the width of the custom scrollbar
    projectScrollBar.style.width = `${scrollPercentage * 100}%`;
});

loadLeetcodeInfo();