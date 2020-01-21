import isYes from '../is-yes.js';


function getPercent(points) {
    return Math.floor((points/3) * 100);
}

const grabButton = document.getElementById('myButton');
const getResults = document.getElementById('results');
const lowScoreResult = document.getElementById('tryAgain');

grabButton.addEventListener('click', () => {
    const name = prompt('what is your name?');
    const pleaseConfirm = confirm(`${name} Do you want to continue with the quiz?`);
    if (pleaseConfirm === false) return;
    const answerOne = prompt('Is there an image of a dog on the page?');
    const answerTwo = prompt('Do I enjoy skydiving?');
    const answerThree = prompt('Did I ever live in Hawaii?');
    let points= 0;
    if (isYes(answerOne)) points += 1;
    if (isYes(answerTwo)) points += 1;
    if (!isYes(answerThree)) points += 1;
    let PercentIs = getPercent(points);
    console.log(points)
    if (points === 3) {
        return getResults.textContent =`${name}, you got ${PercentIs}% out of 100!`;
    } else {
        return lowScoreResult.textContent = `Sorry ${name}, You got ${PercentIs}% out of 100.`;
    }
});
