const todoInput = document.querySelector("#add_todo");
const todoButton = document.querySelector("#todo_button");
const listWrapper = document.querySelector(".todo_items");
const validationError = document.querySelector(".validation-error");

todoButton.addEventListener("click", function () {
  //Valideerime enne, et meie input ei oleks tühi
  if (todoInput.value.length === 0) {
    validationError.style.display = "block";
  } else {
    // Juhuks kui enne oli valideerimise error, siis eemaldame veateate
    validationError.style.display = "none";
    // Lisa uus element listi
    const newItem = document.createElement("li");
    newItem.innerText = todoInput.value;
    newItem.classList.add("item");
    listWrapper.appendChild(newItem);
    todoInput.value = "";

    // Lisa ka kohe kustuta nupp igale listi elemendile.
    const deleteItem = document.createElement("p");
    deleteItem.classList.add("delete");
    deleteItem.innerText = "❌";
    newItem.appendChild(deleteItem);

    // Paigalda eventListener X nupule, et saaks kustutada antud listi elementi.
    // Selleks, et X-iga listi elementi kustutada, saame kasutada parentElementi.
    // Kuna antud juhul newItem on deleteItem parentElement
    deleteItem.addEventListener("click", function () {
      deleteItem.parentElement.remove();
    });

    console.log(newItemCount);
  }
});
