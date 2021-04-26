const inputs = document.querySelectorAll(".controls input");
const titleSpecial = document.querySelector(".specialTag");

function handleUpdate() {
  const saffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + saffix
  );
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
titleSpecial.addEventListener("change", handleUpdate);
