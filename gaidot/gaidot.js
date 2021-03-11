let letterSender = document.getElementById("letter-To-Santa")

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

letterSender.addEventListener("submit", click => {
    click.preventDefault()
    

    let letterInfo = new FormData(click.target)

    let sendersName = letterInfo.get("firstName")
    let sendersAdress = letterInfo.get("adress")
    let sendersGift = letterInfo.get("gift")

    let answerHTMLUpdate = `
    <h3>Paldies par vēstuli ${sendersName}!</h3>
    <p>Santa pārbaudīs tavu labo darbu sarakstu
    un ja būsi uzvedies kārtīgi ${sendersGift}
    līdz vakara stundai būs atrodams zem egles - 
    ${sendersAdress}</p>
    <img class="santa-img" src="/gaidot/bildes/santa-claus-1866616_640.png" alt="Attēls ar Ziemassvēktu vecīti">
    <p class="from">- Tavs Ziemassvētku vecītis -</p>
    `

let quickAnswer = document.getElementById("answer")
quickAnswer.innerHTML = answerHTMLUpdate
})