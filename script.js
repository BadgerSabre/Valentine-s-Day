let buttonOne = document.querySelector('#buttonOne')
let buttonTwo = document.querySelector('#buttonTwo')
let buttonThree = document.querySelector('#buttonThree')
let buttonFour = document.querySelector('#buttonFour')
let buttonFive = document.querySelector('#buttonFive')

let messageOne = document.querySelector('#messageOne')
let messageTwo = document.querySelector('#messageTwo')
let messageThree = document.querySelector('#messageThree')
let messageFour = document.querySelector('#messageFour')
let messageFive = document.querySelector('#messageFive')

let image = document.querySelector('#image')

buttonOne.addEventListener("click",function(){
    messageOne.textContent = 'You are Garret the master thief and my Age IV practice partner.'
})

buttonTwo.addEventListener("click",function(){
    messageTwo.textContent = 'Tu est mon partenaire pour parler francais.'
})

buttonThree.addEventListener("click",function(){
    messageThree.textContent = 'You are my cooking/baking partner.'
})

buttonFour.addEventListener("click",function(){
    messageFour.textContent = 'You are the smartest scientist I know.'
})

buttonFive.addEventListener("click",function(){
    messageFive.textContent = 'And most importantly, you are my best friend and the love of my life!'
    image.style.display = 'block';
})