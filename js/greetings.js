const loginContainer = document.querySelector("#login-container");
const mainContainer = document.querySelector("#main-container");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function handleLogout(event) {
  event.preventDefault();
  const input = confirm("Do you really want to logout? All of your tasks will be removed.");
  if (input === true) {
      localStorage.removeItem(USERNAME_KEY);
      localStorage.removeItem("todos");
      document.querySelector(".todo-list").innerHTML = "";
      loginContainer.classList.remove(HIDDEN_CLASSNAME);
      loginForm.classList.remove(HIDDEN_CLASSNAME);
      mainContainer.classList.add(HIDDEN_CLASSNAME);
  }
}

function paintGreetings(username) {
  greeting.innerText = `Hello! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  mainContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginContainer.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
logoutButton.addEventListener("click", handleLogout);