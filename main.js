const form = document.querySelector("#form");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

let todoArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.random() * 1000000;
  console.log(id);
  const todo = new Todo(id, input.value);
  todoArr = [...todoArr, todo];
  UI.displayData();
});

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

class UI {
  static displayData() {
    let displayData = todoArr.map((item) => {
      return `
        <div class="todo">
          <p>${item.todo}</p>
          <button class="delete">Delete</button>
        </div>
        `;
    });
    list.innerHTML = displayData.join(" ");
  }
}
