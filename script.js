// Navbar functionality
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

function setUsername() {
  let usernameInput = document.getElementById('username').value;
  sessionStorage.setItem('username', usernameInput);
  window.location.href="index.html";
}

function checkUsername() {
  let username = sessionStorage.getItem("username");
  if (username) {
    document.getElementById('welcome-message').innerHTML = "Welcome, " + username;
  }
}

function questionSubmit() {
  let question = document.getElementById('question').value;
  sessionStorage.setItem('question', question);
  window.location.href="../index.html";
}

function addQuestion() {
  let question = sessionStorage.getItem("question");
  let username = sessionStorage.getItem("username");
  if (question) {
    document.getElementById("questions").insertAdjacentHTML("afterbegin",
      '<div class="tile notification is-info">' +
      '<p class="title">' + question +'</p>' +
      '<p class="subtitle">Today at 12:10 pm - ' + username + ' - no answers</p>' +
      '<a href="./questions/q4.html">Click to add an answer</a>' +
      '</div>');
  }
}