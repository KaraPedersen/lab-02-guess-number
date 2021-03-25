// import functions and grab DOM elements
import { checkOnFishHealth } from './utils.js';

const button = document.getElementById('feed-button');
const div = document.getElementById('health');
const image = document.getElementById('fish-image');
const input = document.getElementById('user-input');
const span = document.getElementById('results');

const rightAnswer = 10;

let counter = 4;
button.addEventListener('click', () => {
    counter--;
    const number = input.valueAsNumber;
    const results = checkOnFishHealth(number, rightAnswer);
    if (counter > 0) {
        if (results === 0) {
            span.textContent = 'Winner'; 
        } else if (results === -1) {
            span.textContent = 'Dead Fish';
        } else {
            span.textContent = 'fish gonna grow to big';
        }
        
       
    } else {
        span.textContent = 'out of tries';
    }
       
});


// initialize state

// set event listeners to update state and DOM