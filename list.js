const input = document.getElementById("input");
const list = document.getElementById("list");
function task() {
  if (input.value === "") {
    alert("Write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  Savedata();
}
list.addEventListener(
  "click",
  function (l) {
    if (l.target.tagName === "LI") {
      l.target.classList.toggle("checked");
      Savedata();
    } else if (l.target.tagName === "SPAN") {
      l.target.parentElement.remove();
      Savedata();
    }
  },
  false
);

function Savedata() {
  localStorage.setItem("data", list.innerHTML);
}
function showtask() {
  list.innerHTML = localStorage.getItem("data");
}
showtask();

