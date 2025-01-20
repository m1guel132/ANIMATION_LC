const box = document.querySelector('.box');
const animationend = document.querySelector('.letra--A-6');
const boxCorazon = document.querySelector('.box__corazon')

animationend.addEventListener('animationend', (event) => {

    if (event.animationName === 'shadow-neon') {

        box.classList.remove('box')
        box.classList.add('box__remove');

        boxCorazon.classList.remove('box__corazon')
        boxCorazon.classList.add('box__corazon-input')

    } 
});


boxCorazon.addEventListener('animationend', (event) => {

    if (event.animationName === 'corazon') {

        box.classList.remove('box__remove');
        box.classList.add('box')
    
        boxCorazon.classList.remove('box__corazon-input')
        boxCorazon.classList.add('box__corazon')

}});