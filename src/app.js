function adjustHeight(el) {
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
}

const inputField = document.getElementById("inputField");
inputField.addEventListener("input", function () {
  adjustHeight(this);
});
