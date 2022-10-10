let display = document.querySelector(".display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "=":
        const output = eval(display.innerText);
        display.innerText = output;
        break;
      case "AC":
        display.innerText = "";
        break;
      case "X":
        display.innerText += "*";
        break;
      case "+/-":
        display.innerText /= -1;
        break;
      default:
        if (display.innerText !== "0") {
          display.innerText += e.target.innerText;
        } else display.innerText = e.target.innerText;
    }
  });
});

//adding keyboard functionality
document.addEventListener("keydown", function (event) {
  console.log(event);
  const key_press = event.key;
  console.log(key_press);
  console.log(typeof key_press);

  const allowedKeys = [
    "+",
    "-",
    "*",
    "/",
    "%",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
    "Enter",
    "Backspace",
  ];

  if (allowedKeys.includes(key_press)) {
    if (key_press === "=" || key_press === "Enter") {
      const output = eval(display.innerText);
      display.innerText = output;
    } else if (key_press === "Backspace") {
      const out = display.innerText.slice(0, -1);
      display.innerText = out;
    } else
      display.innerText =
        display.innerText === "0" ? key_press : display.innerText + key_press;
  }
});
