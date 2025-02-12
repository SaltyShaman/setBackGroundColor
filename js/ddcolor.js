console.log("ddcolor.js er med");

const colArray = ["red", "green", "yellow", "blue", "orange"]
//#204ca3;

const ddColor = document.getElementById("ddColor")
let bdy = document.querySelector("body")

function fillDropdown(item) {
    const el = document.createElement("option")
    el.textContent = item
    ddColor.appendChild(el)
}

function addColors(btn) {
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown);
}

function setBackgroundColor(el) {
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    const color = selectedOption.innerText;
    bdy.style.backgroundColor = color
}


const pbFillDropdown = document.getElementById("pbFillDropdown")

ddColor.addEventListener('change', setBackgroundColor)

pbFillDropdown.addEventListener('click', addColors)