// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { checkOnFishHealth } from '../utils.js';
const test = QUnit.test;

test('if food level is correct', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const foodLevel = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkOnFishHealth(foodLevel);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if food level too high', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    const foodLevel = 18;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkOnFishHealth(foodLevel);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('if food level too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;
    const foodLevel = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkOnFishHealth(foodLevel);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



