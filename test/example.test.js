// IMPORT MODULES under test here:
import isYes from '../is-yes.js';

const test = QUnit.test;

test('check to see if isYes function returns false', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const isFalse = 'no';
    const expected = false;

    const result = isYes(isFalse);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('check to see if isYes function returns true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const isTrue = 'yes';
    const expected = true;

    const result = isYes(isTrue);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('check to see if isYes function takes alternate yes input', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const isOtherYes = 'y';
    const expected = true;

    const result = isYes(isOtherYes);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

});

test('check to see if isYes function takes alternate yes input', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const isOtherYes = 'y';
    const expected = true;

    const result = isYes(isOtherYes);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);

});