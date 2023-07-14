
// const yearMember






































const containerCard = document.querySelector(".container-card")
const btnAdd = document.getElementById("btn-add")



btnAdd.addEventListener("click", function () {
    const addCard = divCard(inputMember)

})

function divCard(memberTeam) {

    if (memberTeam.value === "" || memberTeam.value === "undefined"){
        return
    }

        const mainDiv = document.createElement("div")
    mainDiv.classList.add("card")
    mainDiv.style.width = "30.3%"
    let random = Math.floor(Math.random() * 100)
    mainDiv.innerHTML = `<img src="https://picsum.photos/350/350?random=${random}" alt="student"></img>`

    const bodyCard = document.createElement("div")
    bodyCard.classList.add("card-body")


    mainDiv.append(bodyCard)
    bodyCard.append(inputMember())
    containerCard.append(mainDiv)

    return mainDiv


}


function inputMember() {

    let inputText = document.querySelector("[type='text']")
    const newMember = {}///////
    if(inputText.value === "" || inputText.value === "undefined"){
        alert("Inserire Nome Valido")
        window.location.reload()
    }
    const textTeam = document.createElement("p") ///// mi da come input solo uno risolvere
    textTeam.classList.add("card-text")
    textTeam.append(inputText.value)

    console.log(inputText.value)

    return textTeam
}


