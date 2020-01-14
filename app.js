import isYes from './is-yes.js';


//function getPercent(points) {
    //return Math.floor((points/3) * 100);
//}

const grabButton = document.getElementById('quizbutton');
const getResults = document.getElementById('results');

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
    if (isYes(answerThree)) points += 1;
    getResults.textContent =`${name}, you got ${points} answers correct!`;
});
