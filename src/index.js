import './typography.css'
import "./style.css"
import { loadLeetcodeInfo } from './fetch_coding_rating';

const front = document.querySelector('#front');
const cube = document.querySelector('#cube');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

let element = front;
let currentFace = [0, 0];
front.classList.add('visible');


function displaySection(sectionElement, action) {
    element.classList.remove('visible');
    cube.classList = action;
    sectionElement.classList.add('visible');
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
        if (currentFace[0] == 0) currentFace = [1, 0];
        else if (currentFace[0] == 1) currentFace = [-1, 0];
        else currentFace = [0, 0];
    }
    else if (event.key == 'ArrowDown') {
        if (currentFace[0] == 0) currentFace = [-1, 0];
        else if (currentFace[0] == -1) currentFace = [1, 0];
        else currentFace = [0, 0];
    }
    else if (event.key == 'ArrowLeft') {
        if (currentFace[1] == 0) currentFace = [0, -1];
        else if (currentFace[1] == -1) currentFace = [0, 1];
        else currentFace = [0, 0];
    }
    else if (event.key == 'ArrowRight') {
        if (currentFace[1] == 0) currentFace = [0, 1];
        else if (currentFace[1] == 1) currentFace = [0, -1];
        else currentFace = [0, 0];
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

// Event listener for scrolling
gridContainer.addEventListener('scroll', () => {
    // Calculate the percentage of content scrolled
    const scrollableHeight = gridContainer.scrollHeight - gridContainer.clientHeight; // isolate the length of the scroll
    const scrollPercentage = gridContainer.scrollTop / scrollableHeight; // total scrolled / length of scroll

    // Update the width of the custom scrollbar
    projectScrollBar.style.width = `${scrollPercentage * 100}%`;
});

loadLeetcodeInfo();