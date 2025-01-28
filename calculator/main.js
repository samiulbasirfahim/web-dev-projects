document.title = "Calculator";
document.body.style.backgroundColor = "wheat";

let calculator = document.createElement("div");
document.body.appendChild(calculator);
calculator.id = "calculator";
let calcstyle = calculator.style;
calcstyle.height = "40dvh";
calcstyle.height = "40vh";
calcstyle.width = "25vw";

calcstyle.backgroundColor = "whitesmoke";

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100dvh";
document.body.style.height = "100vh";

let display = document.createElement("div");
let displaySpan = document.createElement("span");
display.style.display = "flex";
display.style.alignItems = "center";
display.style.justifyContent = "right";
display.style.padding = "8px";
displaySpan.innerText = "";
display.appendChild(displaySpan);
display.style.backgroundColor = "gray";
let controlls = document.createElement("div");

calcstyle.display = "flex";
calcstyle.flexDirection = "column";
display.style.height = "20%";
controlls.style.height = "80%";

calculator.appendChild(display);
calculator.appendChild(controlls);

let numArea = document.createElement("div");
let otherArea = document.createElement("div");
let controLLArea = document.createElement("div");

controlls.style.display = "grid";
controlls.style.gridTemplateColumns = "4fr 2fr 1fr";

controlls.appendChild(numArea);
controlls.appendChild(otherArea);
numArea.style.display = "grid";
numArea.style.gridTemplateColumns = "1fr 1fr 1fr";

controLLArea.style.display = "grid";

otherArea.style.display = "grid";
otherArea.style.gridTemplateColumns = "1fr 1fr";

let numKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numKeys.forEach((k) => {
  let key = document.createElement("button");
  key.innerText = k;
  key.addEventListener("click", () => {
    displaySpan.innerText += k;
  });
  numArea.appendChild(key);
});

let otherKeys = ["+", "-", "*", "/", 0, "00"];
otherKeys.forEach((k) => {
  let key = document.createElement("button");
  key.innerText = k;
  key.addEventListener("click", () => {
    displaySpan.innerText += k;
  });
  otherArea.appendChild(key);
});

let clearButton = document.createElement("button");
clearButton.innerText = "C";
clearButton.addEventListener("click", () => {
  displaySpan.innerText = "";
});
controLLArea.appendChild(clearButton);

let equal = document.createElement("button");
equal.innerText = "=";
equal.addEventListener("click", () => {
  displaySpan.innerText = eval(displaySpan.innerText);
});
controLLArea.appendChild(equal);
controlls.appendChild(controLLArea);
