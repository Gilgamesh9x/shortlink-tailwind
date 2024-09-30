const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

function isUrlValid(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
}

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value === "") {
    errMsg.textContent = "Please enter something";
    input.classList.add("border-red");
  } else if (!isUrlValid(input.value)) {
    errMsg.textContent = "Please add a valid URL";
    input.classList.add("border-red");
  } else {
    errMsg.textContent = "";
    input.classList.remove("border-red");
  }
});

/////////////////////////////////////////////////////////
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  if (!hamburger.classList.contains("hidden")) {
    hamburger.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    menu.classList.remove("hidden");
  }
});
closeBtn.addEventListener("click", () => {
  if (!closeBtn.classList.contains("hidden")) {
    closeBtn.classList.add("hidden");
    hamburger.classList.remove("hidden");
    menu.classList.add("hidden");
  }
});
