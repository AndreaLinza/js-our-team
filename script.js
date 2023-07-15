const containerCard = document.querySelector(".container-card")
const btnAdd = document.getElementById("btn-add")


const mainDiv = document.createElement("div")
mainDiv.classList.add("card")
mainDiv.style.width = "30.3%"


let random = Math.floor(Math.random() * 100)
mainDiv.innerHTML = `<img src="https://picsum.photos/350/350?random=${random}" alt="student"></img>`

const bodyCard = document.createElement("div")
bodyCard.classList.add("card-body")

const textTeam = document.createElement("p") ///// mi da come input solo uno risolvere
textTeam.classList.add("card-text")
let inputText = "valdvadov"
textTeam.append(inputText)

mainDiv.append(bodyCard)
bodyCard.append(textTeam)
containerCard.append(mainDiv)


const newMember = {}///////





//console.log(memberTeam)
//console.log(memberTeam.first_name)


//console.log(memberTeam.first_name[0])


const allMemberTeam =
    [
        // MEMBER 0
        {
            first_name: "Wayne",
            last_name: "Barnett",
            work: "Founder & CEO",
            img: "wayne-barnett-founder-ceo.jpg"
        },    
        // MEMBER 1
        {
            first_name: "Angela",
            last_name: "Caroll",
            work: "Chief Editor",
            img: "angela - caroll - chief - editor.jpg"
        },    
        //MEMBER 2
        {
            first_name: "Walter",
            last_name: "Gordon",
            work: "Office Manager",
            img: "walter - gordon - office - manager.jpg"
        },    
        //MEMBER 3
        {
            first_name: "Angela",
            last_name: "Lopez",
            work: "Social Media Manager",
            img: "angela - lopez - social - media - manager.jpg"
        },    
        //MEMBER 4
        {
            first_name: "Scott",
            last_name: "Estrada",
            work: "Developer",
            img: "scott - estrada - developer.jpg"
        },    
        //MEMBER 5
        {
            first_name: "Barbara",
            last_name: "Ramos",
            work: "Graphic Designer",
            img: "barbara - ramos - graphic - designer.jpg"
        },    
        
        
    ]    
    
    
    for (let key in allMemberTeam) {
        
        
        console.log(allMemberTeam[key])
        
    }    
    
    












btnAdd.addEventListener("click", function () {
    const addCard = divCard(inputMember)

    if (divCard(inputMember()) === "undefined") {
        return
    }
    console.log(inputMember())

})

function divCard() {

    const addMemberCard = {
        first_name: document.getElementById("inputFirstName"),
        last_name: document.getElementById("inputLastName"),
        work: document.getElementById("inputWork"),
        img: `<img src="https://picsum.photos/350/350?random=${random}" alt="student"></img>`,
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
    if (inputText.value === "" || inputText.value === "undefined") {
        alert("Inserire Nome Valido")
        return
    }
    const textTeam = document.createElement("p") ///// mi da come input solo uno risolvere
    textTeam.classList.add("card-text")
    textTeam.append(inputText.value)

    console.log(inputText.value)

    return textTeam
}


