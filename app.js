// import functions and grab DOM elements
import { checkOnFishHealth } from "./utils.js";

const button = document.getElementById('feed-button');
const div = document.getElementById('health');
const image = document.getElementById('fish-image');
const input = document.getElementById('user-input');




button.addEventListener('click', () => {
    console.log(input)

    const number = input.valueAsNumber;
    console.log(number)
    const results = checkOnFishHealth(number);
    console.log(results)
});

// initialize state

// set event listeners to update state and DOM