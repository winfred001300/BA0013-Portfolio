const siteName = "My Cool Website";

function greetUser() {
alert("Welcome to " + siteName + "!");
}

const dynamicButton = document.querySelector("#action-btn");
if (dynamicButton) {
dynamicButton.addEventListener("click", greetUser);
}