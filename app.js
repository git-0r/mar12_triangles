const menuOptions = document.querySelectorAll('.menu');
const sections = document.querySelectorAll('section');
const section0 = document.querySelector('.section0');
const result = document.querySelector('.section-result');


// this makes border green for results and correct answers

function correctResult() {
    result.style.border = '3px solid green';
    result.style.display = 'block';
}

// this hides all menu options which is section0 and shows corresponding section according to option clicked

for (let i = 0; i < menuOptions.length; i++) {

    menuOptions[i].addEventListener('click', () => {

        section0.style.display = 'none';
        sections[i + 1].style.display = 'block';
    })
}

//  section2 checks if angles make a triangle or not i.e sum of three angles should be 180deg for a triangle

const angles = document.querySelectorAll('.section2-input');
const section2Form = document.querySelector('.section2-form');

section2Form.addEventListener('submit', (event) => {

    // prevent default prevents normal behaviour(submit) of form
    event.preventDefault();

    let sum = 0;
    angles.forEach(angle => {
        // Number() converts string to number(typecasting)
        sum += Number(angle.value);
    });

    if (sum === 180) {
        result.innerText = "yay! these angles make a triangle."
        correctResult();
    }
    else {
        result.innerText = "oops... these angles do not make a triangle."
        result.style.border = '3px solid red';
        result.style.display = 'block';
    }
    // console.log(sum)
})

// section3 calculates hypotenuse using pythagoras theorem

const section3Form = document.querySelector('.section3-form');
const base = document.querySelector('#section3-base');
const height = document.querySelector('#section3-height');

section3Form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Math.sqrt(to get square root), Math.pow(value, power)- to find square
    const hypo = Math.sqrt(Math.pow(Number(base.value), 2) + Math.pow(Number(height.value), 2));

    result.innerText = `hypotenuse is = ${hypo} cm`
    correctResult();

})

// section4 calculates area of triangle using different methods

const radioBtn = document.querySelectorAll('input[name="area-method-choice"]');
const articles = document.querySelectorAll('.section4-article')


radioBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // check if button is checked or not
        if (btn.checked === true) {
            // hide result when other method is clicked
            result.style.display = 'none';
            // hide other articles and show one which was clicked, otherwise all of them will be visible all the time
            articles.forEach(article => {
                article.style.display = "none";
            })
            articles[btn.value].style.display = "block";
        }
    })
})

// three forms for three different methods
const section4Form1 = document.querySelector('.section4-form1');
const section4Form2 = document.querySelector('.section4-form2');
const section4Form3 = document.querySelector('.section4-form3');

// method 1 to find area using base and height, Formula = 1/2 * base * height
section4Form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const base = document.querySelector('#section4-base');
    const height = document.querySelector('#section4-height');

    result.innerText = `Area is = ${0.5 * Number(base.value) * Number(height.value)} sq cm`
    correctResult();

})

// method 2 to find area using lengths of three sides, Heron's Formula area = sqrt(s(a-s)(b-s)(c-s))
section4Form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const sideA = Number(document.querySelector('#section4-a').value);
    const sideB = Number(document.querySelector('#section4-b').value);
    const sideC = Number(document.querySelector('#section4-c').value);

    // checking if sum of two sides is greater than third side, otherwise it's not a triangle, also called The triangle inequality theorem
    if (sideA < (sideB + sideC) && sideB < (sideA + sideC) && sideC < (sideA + sideB)) {
        const s = (sideA + sideB + sideC) / 2;
        result.innerText = `Area is = ${Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC))} sq cm`
        correctResult();
    }
    else {
        result.innerText = 'Enter valid side lengths such that each side length should be less than sum of other two sides'
        result.style.border = '3px solid red';
        result.style.display = 'block';
    }
})

// Method 3 to find area of triangle using length of two sides and included angle, formula = 1/2 * sideA * sideB * sin(angle)
section4Form3.addEventListener('submit', (event) => {
    event.preventDefault();

    const sideB = Number(document.querySelector('#section4-sideB').value);
    const sideC = Number(document.querySelector('#section4-sideC').value);
    const angleA = Number(document.querySelector('#section4-angleA').value);

    // multiply with 0.0174533 to convert degree to radians because Math.sin(takes angle in radians) and 1 deg = 0.0174533 rad
    // 1Deg × π/180 = 0.01745 Rad and 180deg = pi rad and pi = 3.14

    result.innerText = `Area is = ${0.5 * sideB * sideC * Math.sin(angleA * 0.0174533)} sq cm`;
    correctResult();
})


// section 5 Quiz
const correctAnswer = ["yes", "no", "yes", "yes", "yes"];
const questions = document.querySelectorAll('.question');
const section5Form = document.querySelector('.section5-form');

section5Form.addEventListener('submit', (event) => {
    event.preventDefault();

    let score = 0;
    const userAnswer = []; //array of answers submitted by player
    // .quiz-answer class is used on input radio buttons
    const answers = document.querySelectorAll('.quiz-answer');

    answers.forEach(answer => {
        // push the value of checked radio buttons to userAnser array
        if (answer.checked) {
            userAnswer.push(answer.value)
        }
    })

    for (let i = 0; i < userAnswer.length; i++) {
        // check if answer is correct by comparing corresponding strings of userAnswer and correctAnswer array
        if (userAnswer[i] === correctAnswer[i]) {
            score += 1;
            questions[i].style.border = '3px solid green';

        }
        else {
            questions[i].style.border = '3px solid red';
        }
    }
    result.innerText = `You scored = ${score} points`
    correctResult();
})