let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


  const toyCollectionDiv= document.getElementById("toy-collection")

// GET the toys from JSON-server/toys
fetch ("http://localhost:3000/toys")
.then (r => r.json())
.then (  data => {

  const toyObj = data
//Render / display all of the toys in the created card
  toyObj.map(
    (eachToy)=>{
    //console.log (eachToy)
    //createElements
    const divForCard= document.createElement ("div")
    divForCard.className = "card";
    const h2ForCard = document.createElement("h2")
    h2ForCard.textContent = eachToy.name
    const imgForCard = document.createElement("img")
    imgForCard.className = "toy-avatar"
    imgForCard.src = eachToy.image
    const pForCard = document.createElement("p")
    pForCard.textContent = `${eachToy.likes} likes`
    const btnForCard = document.createElement("button")
    btnForCard.className = "like-btn"
    btnForCard.id = eachToy.id
    btnForCard.innerText = "Like ❤️"

    divForCard.append (h2ForCard, imgForCard, pForCard, btnForCard)
    toyCollectionDiv.append (divForCard)
    }
  )

})



//make the form take value and push info to the card

// increment likes on the card


//

})
