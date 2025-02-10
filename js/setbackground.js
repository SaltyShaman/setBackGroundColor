let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Tryk mig for set color";

let bdy = document.querySelector("body");
console.log(bdy);

let inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);

let inpColorPicker = document.getElementById("inpColorPicker");
console.log(inpColorPicker);

const pTags = document.getElementsByTagName("p");
const pArray = Array.from(pTags);
console.log(pArray);

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

pbCol.addEventListener("click", setBackgroundColor);
document.addEventListener("keyup", setBackgroundColor);

function useColorPicker() {
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbCol.style.color = col;
}

inpColorPicker.addEventListener("input", useColorPicker);

// New Code: Font Size Adjustment
let increaseBtn = document.querySelector(".increaseFont");
let decreaseBtn = document.querySelector(".decreaseFont");

// Function to increase font size
function changeFontSize(change) {
    pArray.forEach((p) => {
        let currentSize = window.getComputedStyle(p).fontSize; // Get current size
        let newSize = parseInt(currentSize) + change; // Adjust size
        p.style.fontSize = newSize + "px"; // Apply new size
    });
}

increaseBtn.addEventListener("click", () => changeFontSize(1));
decreaseBtn.addEventListener("click", () => changeFontSize(-1));
