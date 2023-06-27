let inputBox = document.querySelector(".input-box"),
  textarea = document.querySelector("textarea"),
  signalNum = document.querySelector(".signal_num");

textarea.addEventListener("keyup", () => {
  let valLenght = textarea.value.length;

  signalNum.innerText = valLenght;
  valLenght > 0
    ? inputBox.classList.add("active")
    : inputBox.classList.remove("active");
  valLenght > 100
    ? inputBox.classList.add("error")
    : inputBox.classList.remove("error");

  console.log(valLenght);
});
