const containerCard = document.querySelector(".container-card")
const btnAdd = document.getElementById("btn-add")





//const newMember = {}///////



//console.log(memberTeam)
//console.log(memberTeam.first_name)


//console.log(memberTeam.first_name[0])


    
    const allMemberTeam =
    {

        // MEMBER 0
        
        myMember: [{
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
            img: "angela-caroll-chief-editor.jpg"
        },
        //MEMBER 2
        {
            first_name: "Walter",
            last_name: "Gordon",
            work: "Office Manager",
            img: "walter-gordon-office-manager.jpg"
        },
        //MEMBER 3
        {
            first_name: "Angela",
            last_name: "Lopez",
            work: "Social Media Manager",
            img: "angela-lopez-social-media-manager.jpg"
        },
        //MEMBER 4
        {
            first_name: "Scott",
            last_name: "Estrada",
            work: "Developer",
            img: "scott-estrada-developer.jpg"
        },
        //MEMBER 5
        {
            first_name: "Barbara",
            last_name: "Ramos",
            work: "Graphic Designer",
            img: "barbara-ramos-graphic-designer.jpg"
        },]

        
        
    }
    
    //console.log(allMemberTeam)
    
    
    // Utilizzo un ciclo for... in per creare ogni singola scheda dei membri del team
    for (let key in allMemberTeam.myMember) {
        
        // Creazione della scheda del membro del team
        // Creo il div principale dove inserirò l'immagine, la card-body e la card-text del membro
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("card")
    mainDiv.style.width = "30.3%"
    mainDiv.style.margin = "1rem"

    // Inserisco l'immagine del membro 
    mainDiv.innerHTML = `<img src="./img/${allMemberTeam.myMember[key].img}" alt="memberTeam"></img>`

    // Creo la body-card del mainDiv  
    const bodyCard = document.createElement("div")
    bodyCard.classList.add("card-body")

    // Creo le card-text da inserire nel body-card con i dati dei membri
    const textNameTeam = document.createElement("p")
    textNameTeam.classList.add("card-text", "text-secondary", "fw-bold", "fst-italic", "fs-5", "mb-1")
    const textWorkTeam = document.createElement("p")
    textWorkTeam.classList.add("card-text")

    // Creo le variabile che verranno appese dentro le card i vari nomi, cognomi e lavori dei membri
    let inputNameText = `${allMemberTeam.myMember[key].first_name} ${allMemberTeam.myMember[key].last_name}`
    let inputWorkText = `${allMemberTeam.myMember[key].work}`

    // Appendo dentro 
    textNameTeam.append(inputNameText)
    textWorkTeam.append(inputWorkText)

    mainDiv.append(bodyCard)
    bodyCard.append(textNameTeam, textWorkTeam)
    containerCard.append(mainDiv)

    console.log(allMemberTeam.myMember[key])

}




btnAdd.addEventListener("click", function(){


    const newMainDiv = document.createElement("div")
    newMainDiv.classList.add("card")
    newMainDiv.style.width = "30.3%"
    newMainDiv.style.margin = "1rem"

    
    let random = Math.floor(Math.random() * 100)

    
    const newBodyCard = document.createElement("div")
    newBodyCard.classList.add("card-body")
    const newTextNameTeam = document.createElement("p")
    newTextNameTeam.classList.add("card-text", "text-secondary", "fw-bold", "fst-italic", "fs-5", "mb-1")
    const newTextWorkTeam = document.createElement("p")
    newTextWorkTeam.classList.add("card-text")
    newMainDiv.append(newBodyCard)
    newBodyCard.append(newTextNameTeam, newTextWorkTeam)
    containerCard.append(newMainDiv)
    
    const newMember = 
    {
        newMemberTeam: [
            {
            first_name: document.getElementById('inputFirstName').value,
            last_name: document.getElementById("inputLastName").value,
            work: document.getElementById("inputWork").value,
            img: `https://picsum.photos/350/350?random=${random}`,
        }
        ]
    }
    
    allMemberTeam.myMember.push(newMember.newMemberTeam)
    console.log(newMember)
    console.log(allMemberTeam.myMember)
    return newMember
    
})


// function newDivCard() {
    

//     const newMainDiv = document.createElement("div")
//     newMainDiv.classList.add("card")
//     newMainDiv.style.width = "30.3%"
//     let random = Math.floor(Math.random() * 100)
//     newMainDiv.innerHTML = `<img src="https://picsum.photos/350/350?random=${random}" alt="student"></img>`
    
//     const newBodyCard = document.createElement("div")
//     newBodyCard.classList.add("card-body")
//     // if (inputText.value === "" || inputText.value === "undefined") {
//         //         alert("Inserire Nome Valido")
//         //         return
//         // }
    
//     let newInputNameText = document.querySelector("[type='text']")
//     let newInputWorkText = `${allMemberTeam[key].work}`
//     const newTextNameTeam = document.createElement("p")
//     newTextNameTeam.classList.add("card-text", "text-secondary", "fw-bold", "fst-italic", "fs-5", "mb-1")
//     const newTextWorkTeam = document.createElement("p")
//     newTextWorkTeam.classList.add("card-text")
        
//         console.log(newInputNameText.value)
//         console.log(newInputWorkText.value)
    
    
//     newMainDiv.append(newBodyCard)
//     newBodyCard.append(newTextNameTeam, newTextWorkTeam)
//     containerCard.append(newMainDiv)
    
//     const addMemberCard = {
//         first_name: document.getElementById("inputFirstName"),
//         last_name: document.getElementById("inputLastName"),
//         work: document.getElementById("inputWork"),
//         img: `<img src="https://picsum.photos/350/350?random=${random}" alt="student"></img>`,
//     }

    
    
// }


// function inputMember() {
    

 //return textTeam
// }


