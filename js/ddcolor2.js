console.log("ddcolor2.js er med");


const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]
const colorObjects = [{"name":"red","id":"#ff0000"}, {"name":"green","id":"#00ff00"}, {"name":"yellow","id":"#ffff00"}, {"name":"purple","id":"#1f35a9"}]

const pbFillDropdown2 = document.getElementById("pbFillDropdown2")

const ddColor2 = document.getElementById("ddColor2");


function fillDropdown2(item) {
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item[1]
    ddColor2.appendChild(el)
}

function fillDropdownObj (item) {
    const el = document.createElement("option")
    console.log(item)
    el.textContent = item.Name
    el.value = item.id


}

function addColors2(btn) {
    ddColor2.innerHTML = ""
    colArray2.forEach(fillDropdown2);
    colorObjects.forEach(fillDropdownObj);
}

function setBackgroundColor2(el) {
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    const color = selectedOption.innerText;
    bdy.style.backgroundColor = color
}

function setBackgroundColorObj(el) {
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    const color = selectedOption.value;  //value.id
    bdy.style.backgroundColor = color
}

ddColor2.addEventListener('change', setBackgroundColor2)

ddColor2.addEventListener('change', setBackgroundColorObj) //obj listener

pbFillDropdown2.addEventListener('click', addColors2)





