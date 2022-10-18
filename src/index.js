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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const addCard= document.createElement ("div")
  addCard.className = "card";
  const toyName = document.createElement("h2")
  const toyImg = document.creatElement("img")
  Image.src= imgUrl
  const toyReviews = document.createElement("p")
  const likeBtn = document.createElement("button")
  button.className = "like-btn"
  button.id = "id"

  addCard.textContent=
  // <h2> </h2>
  // <img src =imgUrl />
  // <p> ${number} likes </p>
  // <button></button>
  // button.className = "like-btn"
  // button.id = "id"


  document.querySelectorAll("div")[2].append(addCard)

  form.reset();

})

})
