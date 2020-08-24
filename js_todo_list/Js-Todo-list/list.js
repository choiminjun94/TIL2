let button = document.getElementById("button");
let input = document.getElementById("input");
let list = document.getElementById("list");

button.addEventListener("click", clickButton);

let cnt = 1;

function clickButton() {
  let temp = document.createElement("li");
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li" + cnt);
  temp.innerHTML = input.value;
  temp.innerHTML +=
    "<button style='float: right width=auto;'  type='button' onclick='remove(" + cnt + ")'>삭제</button>";

  list.appendChild(temp);
  cnt++;
}

function remove(cnt) {
  var li = document.getElementById("li" + cnt);
  list.removeChild(li);
}
