let poetryButton = document.getElementById("poetry-btn")
let mainContainer = document.querySelector('.poetry-container')
let defaultText = document.getElementById('default-text')

poetryButton.addEventListener("click", getPoetry)

async function getPoetry() {
    let response = await fetch('/sanemot/pantini.json')
    let poetry = await response.json()
    let num = Math.floor(Math.random() * poetry.length)
    document.getElementById('santaPic').classList.add('hidden')
    defaultText.innerText = poetry[num].dzejolis
   
}




