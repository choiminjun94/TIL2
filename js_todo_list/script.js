let button = document.getElementById("button")
let input = document.getElementById("input")
let list = document.getElementById("list")

button.addEventListener('click', clickButton);

let cnt = 1;

function clickButton(){
    let temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);
}

