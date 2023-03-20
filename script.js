const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  const input = document.getElementById("input");
  const list = document.getElementById("list");
  e.preventDefault();
  let newTodo = `
              <div class="todo">
                  <p id="check">
                    ${input.value}
                  </p>
                  <input type="checkbox" class="check done" onclick="checkList()" />
                  <button class="delete" id="btn">Delete</button>
              </div>
            `;

  if (input.value === "") {
    alert("data input tidak boleh kosong");
  } else {
    list.insertAdjacentHTML("afterbegin", newTodo);
  }

  input.value = "";
});

const checkList = () => {
  const check = document.getElementById("check");
  const checkBox = document.querySelector(".check");

  if (checkBox.checked) {
    check.style.textDecoration = "line-through";
  } else {
    check.style.textDecoration = "none";
  }
};
