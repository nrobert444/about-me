// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('check to see if isYes function accepts and evaluates inputs correctly ', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const isTrue = isYes('yes');

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(isTrue, true);
});
