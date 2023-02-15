const input = document.getElementsByTagName("input");
const addBtn = document.getElementsByClassName("btn-add");
const ul = document.getElementsByTagName("ul");
const empty = document.getElementsByClassName("empty");

addBtn[0].addEventListener("click", (e) => {
  e.preventDefault();

  const text = input[0].value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul[0].appendChild(li);

    input[0].value = "";
    empty[0].style.display = "none";
  }
});

addBtn[1].addEventListener("click", (e) => {
  e.preventDefault();

  const text = input[1].value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul[1].appendChild(li);

    input[1].value = "";
    empty[1].style.display = "none";
  }
});
addBtn[2].addEventListener("click", (e) => {
  e.preventDefault();

  const text = input[2].value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul[2].appendChild(li);

    input[2].value = "";
    empty[2].style.display = "none";
  }
});
addBtn[3].addEventListener("click", (e) => {
  e.preventDefault();

  const text = input[3].value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul[3].appendChild(li);

    input[3].value = "";
    empty[3].style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    item.parentElement.removeChild(item);

    const items = document.querySelectorAll("li");

   
  });

  return deleteBtn;
}

function addMoveBtn() {
  const moveBtn = document.createElement("button");

  moveBtn.textContent = ">";
  moveBtn.className = "btn-move-right";

  moveBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    item.parentElement.removeChild(item);

    const items = document.querySelectorAll("li");

   
  });

  return moveBtn;
}