const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");

const sendButton = document.getElementById("sendButton");

const form = {
    user: user,
    email: email,
    pass: password,
}

input.addEventListener("const", () => {
    // Check if the input field has any text
    if (form.value.length > 0) {
      // If there's text, enable the button
      button.disabled = false;
    } else {
      // If there's no text, disable the button
      button.disabled = true;
    }
  });