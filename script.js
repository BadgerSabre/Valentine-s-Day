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

let image1 = document.querySelector('#image1')
let image2 = document.querySelector('#image2')
let image3 = document.querySelector('#image3')
let image4 = document.querySelector('#image4')
let image5 = document.querySelector('#image5')

buttonOne.addEventListener("click",function(){
    messageOne.textContent = 'You are Garret the master thief and my Age IV practice partner.'
    image1.style.display = 'block'
})

buttonTwo.addEventListener("click",function(){
    messageTwo.textContent = 'Tu est mon partenaire pour parler francais.'
    image2.style.display = 'block'
})

buttonThree.addEventListener("click",function(){
    messageThree.textContent = 'You are my cooking/baking partner.'
    image3.style.display = 'block'
})

buttonFour.addEventListener("click",function(){
    messageFour.textContent = 'You are the smartest scientist I know.'
    image4.style.display = 'block'
})

buttonFive.addEventListener("click",function(){
    messageFive.textContent = 'And most importantly, you are my best friend and the love of my life!'
    image5.style.display = 'block'
})