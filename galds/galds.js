let mainContainer = document.querySelector('.main')
const header = document.getElementById('header')

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

async function getFood() {
    let response = await fetch('/galds/galds.json')
    let food = await response.json()
    return food
}

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

        let saying = Array.from(document.getElementsByClassName("saying"))
        let foodImages = Array.from(document.getElementsByClassName("food-saying"))
        
        foodImages.forEach(fdImg => {  
            fdImg.addEventListener("click", event => {
                
                    const clickedItem = event.target.querySelector('span')
                    clickedItem.classList.toggle("hidden")})
            
        })
    
    })


  



