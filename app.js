const menuOptions = document.querySelectorAll('.menu');
const sections = document.querySelectorAll('section');
const section0 = document.querySelector('.section0');

function correctResult() {
    result.style.border = '3px solid green';
    result.style.display = 'block';
}

for (let i = 0; i < menuOptions.length; i++) {

    menuOptions[i].addEventListener('click', () => {
        section0.style.display = 'none';
        sections[i + 1].style.display = 'block';
        console.log(`listening... ${i}`)
        console.log(sections)

    })
}

const angles = document.querySelectorAll('.section2-input');
const section2Form = document.querySelector('.section2-form');
const result = document.querySelector('.section-result');

section2Form.addEventListener('submit', (event) => {
    event.preventDefault();

    let sum = 0;
    angles.forEach(angle => {
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
    console.log(sum)
})

const section3Form = document.querySelector('.section3-form');
const base = document.querySelector('#section3-base');
const height = document.querySelector('#section3-height');

section3Form.addEventListener('submit', (event) => {
    event.preventDefault();

    const hypo = Math.sqrt(Math.pow(Number(base.value), 2) + Math.pow(Number(height.value), 2));

    result.innerText = `hypotenuse is = ${hypo} cm`
    correctResult();

})

const radioBtn = document.querySelectorAll('input[name="area-method-choice"]');
const articles = document.querySelectorAll('.section4-article')

console.log(radioBtn)

radioBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.checked === true) {
            result.style.display = 'none';
            articles.forEach(article => {
                article.style.display = "none";
            })
            articles[btn.value].style.display = "block";
        }
    })
})

const section4Form1 = document.querySelector('.section4-form1');
const section4Form2 = document.querySelector('.section4-form2');
const section4Form3 = document.querySelector('.section4-form3');


section4Form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const base = document.querySelector('#section4-base');
    const height = document.querySelector('#section4-height');

    result.innerText = `Area is = ${0.5 * Number(base.value) * Number(height.value)} sq cm`
    correctResult();

})


section4Form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const sideA = Number(document.querySelector('#section4-a').value);
    const sideB = Number(document.querySelector('#section4-b').value);
    const sideC = Number(document.querySelector('#section4-c').value);

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

section4Form3.addEventListener('submit', (event) => {
    event.preventDefault();

    const sideB = Number(document.querySelector('#section4-sideB').value);
    const sideC = Number(document.querySelector('#section4-sideC').value);
    const angleA = Number(document.querySelector('#section4-angleA').value);


    result.innerText = `Area is = ${0.5 * sideB * sideC * Math.sin(angleA)} sq cm`
    correctResult();
})