const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const time = date.getHours();
  let msg = "";
  if (time <= 5) {
    msg = "What are you doing?";
  } else if (time < 9) {
    msg = "Early bird,";
  } else if (time < 12) {
    msg = "Good morning,";
  } else if (time < 18) {
    msg = "Good afternoon,";
  } else if (time < 24) {
    msg = "Good evening,";
  }

  greeting.innerHTML = `${msg} ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
