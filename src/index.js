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
    if (sectionElement.id != 'up') {
        const upArrow = document.createElement('span');
        upArrow.classList.add('navigatorButtons');
        const img1 = document.createElement('img');
        img1.src = arrow;
        upArrow.appendChild(img1);
        upArrow.id = 'upArrowNavigator';
        setTimeout(() => {
            upArrow.addEventListener('click', goUp);
        }, 2000)
        sectionElement.appendChild(upArrow);
    }

    if (sectionElement.id != 'down') {
        const downArrow = document.createElement('span');
        downArrow.classList.add('navigatorButtons');
        const img2 = document.createElement('img');
        img2.src = arrow;
        downArrow.appendChild(img2);
        downArrow.id = 'downArrowNavigator';
        setTimeout(() => {
            downArrow.addEventListener('click', goDown);
        }, 2000)
        sectionElement.appendChild(downArrow);
    }

    if (sectionElement.id != 'left') {
        const leftArrow = document.createElement('span');
        leftArrow.classList.add('navigatorButtons');
        const img3 = document.createElement('img');
        img3.src = arrow;
        leftArrow.appendChild(img3);
        leftArrow.id = 'leftArrowNavigator';
        setTimeout(() => {
            leftArrow.addEventListener('click', goLeft);
        }, 2000)
        sectionElement.appendChild(leftArrow);
    }

    if (sectionElement.id != 'right') {
        const rightArrow = document.createElement('span');
        rightArrow.classList.add('navigatorButtons');
        const img4 = document.createElement('img');
        img4.src = arrow;
        rightArrow.appendChild(img4);
        rightArrow.id = 'rightArrowNavigator';
        setTimeout(() => {
            rightArrow.addEventListener('click', goRight);
        }, 2000)
        sectionElement.appendChild(rightArrow);
    }
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
front.classList.add('clickable');
addNavigators(front);


function displaySection(sectionElement, action) {
    // previous element ko invisible karo, remove falana dhimkana
    element.classList.remove('visible');
    const temp = element;
    setTimeout(() => {
        temp.classList.remove('clickable');
    }, 1000);
    removeNavigators(element);

    // cube ko rotate karo
    cube.classList = action;

    // new element visible karo, add falana dhimkana
    sectionElement.classList.add('visible');
    sectionElement.classList.add('clickable');
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

setTimeout(() => {
    const gridContainer = document.querySelector('.gridContainer');
    const projectScrollBar = document.querySelector('.projectScrollBar');

    gridContainer.addEventListener('scroll', () => {
        const scrollableHeight = gridContainer.scrollHeight - gridContainer.clientHeight; // isolate the length of the scroll
        const scrollPercentage = gridContainer.scrollTop / scrollableHeight; // total scrolled / length of scroll

    // Update the width of the custom scrollbar
        projectScrollBar.style.width = `${scrollPercentage * 100}%`;
    });
}, 0);

setTimeout(() => {
    loadLeetcodeInfo()
}, 500);