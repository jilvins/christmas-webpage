let mainContainer = document.querySelector('.main')
const header = document.getElementById('header')


async function getFood() {
    let response = await fetch('/galds/galds.json')
    let food = await response.json()
    return food
}
//style="display: none;"

function getFoodHtml(afood) {
    return `<div class="food-card">
    <img id="foodimg" class="food-img" src="${afood.bilde}" alt="${afood.ēdiens}">
    <p class="food-name">${afood.ēdiens}</p>
    <p class="food-saying"> To ēd: <span class="saying hidden" >${afood.ticējums}</span></p>
    </div>`
    }

    getFood().then(allFood => {
        mainContainer.innerHTML = `<div class=food-galery>
        ${allFood.map(getFoodHtml).join("")}
        </div>`

        let spanElement = Array.from(document.getElementsByClassName("saying"))
        let foodImages = Array.from(document.getElementsByClassName("food-saying"))
        let hiddenAnswer = Array.from(document.getElementsByTagName('span'))
        foodImages.forEach(fdImg => {  
            
            /*const onClick = event => {
                const clickedItem = event.target}
                console.log("you clicked on" + clickedItem)}*/
        
            

            fdImg.addEventListener("click", event => {
                
                    const clickedItem = event.target
                spanElement.forEach(span => {
                    console.log(clickedItem)
                    span.classList.toggle("hidden")})
            })
        })
    
    })


  



