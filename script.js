/*const mainDiv = document.createElement("div")
mainDiv.classList.add("card")
mainDiv.style.width = "18rem"

const insideDiv = document.createElement("div")
insideDiv.classList.add("card-body")

const textTeam = document.createElement("p")
textTeam.classList.add("card-text")*/


const containerCard = document.querySelector(".container-card")
const card = divCard(divBody(textCard()))



console.log(card)

function divCard(body,text){
    
        const mainDiv = document.createElement("div")
        mainDiv.classList.add("card")
        mainDiv.style.width = "18rem"
        containerCard.append(mainDiv)

        //console.log(mainDiv)
        return mainDiv
    }

    console.log(divCard())

    function divBody(text){

        const insideDiv = document.createElement("div")
        insideDiv.classList.add("card-body")
        divCard().append(insideDiv)

        //console.log(insideDiv)
    
        return insideDiv
    }

    function textCard(){

        const textTeam = document.createElement("p")
        textTeam.classList.add("card-text")
        divBody().append(textTeam)

        //console.log(textTeam)
    
        return textTeam
        
    }