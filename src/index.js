let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addCard = document.querySelector(".submit");
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
addCard.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("I've been submitted.")
})});
