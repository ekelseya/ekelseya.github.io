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
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let question = document.getElementById('question').value;
      sessionStorage.setItem('question', question);
      window.location.href="../../qa/index.html";
  }
}

function addQuestion() {
  let question = sessionStorage.getItem("question");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (question) {
    document.getElementById("questions").insertAdjacentHTML("afterbegin",
      `<div class="tile notification is-info"><p class="title">${question}</p><p class="subtitle">Today at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${username} - no answers</p><a href="./questions/q4.html">Click to add an answer</a></div>`);
  }
}

function dummyQuestion() {
  let question = sessionStorage.getItem("question");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (question) {
    document.getElementById("new-question").insertAdjacentHTML("afterbegin",
      `<h1 class="title">${question}</h1><p id="new-question-details" class="subtitle">${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${username} - no answers</p>`);
  }
}


function answer1Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let answer1 = document.getElementById('answer1').value;
      sessionStorage.setItem('answer1', answer1);
      window.location.href="../../qa/questions/q1.html";
  }
}

function answer1Add() {
  let answer = sessionStorage.getItem("answer1");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (answer) {
    document.getElementById("answers").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${answer}</p><p>${username}answered today at${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function answer2Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let answer2 = document.getElementById('answer2').value;
      sessionStorage.setItem('answer2', answer2);
      window.location.href="../../qa/questions/q2.html";
  }
}

function answer2Add() {
  let answer = sessionStorage.getItem("answer2");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (answer) {
    document.getElementById("answers").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${answer}</p><p>${username}answered today at${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function answer3Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let answer3 = document.getElementById('answer3').value;
      sessionStorage.setItem('answer3', answer3);
      window.location.href="../../qa/questions/q3.html";
  }
}

function answer3Add() {
  let answer = sessionStorage.getItem("answer3");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (answer) {
    document.getElementById("answers").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${answer}</p><p>${username}answered today at${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function answer4Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let answer4 = document.getElementById('answer4').value;
      sessionStorage.setItem('answer4', answer4);
      window.location.href="../../qa/questions/q4.html";
  }
}

function answer4Add() {
  let answer = sessionStorage.getItem("answer4");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (answer) {
    document.getElementById("answers").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${answer}</p><p>${username}answered today at${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function note1Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let note1 = document.getElementById('note1').value;
      sessionStorage.setItem('note1', note1);
      window.location.href="../../kennel-notes/notes/kennel-01.html";
  }
}

function note1Add() {
  let note = sessionStorage.getItem("note1");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (note) {
    document.getElementById("notes").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${note}</p><p>${username} - today at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function note2Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let note2 = document.getElementById('note2').value;
      sessionStorage.setItem('note2', note2);
      window.location.href="../../kennel-notes/notes/kennel-02.html";
  }
}

function note2Add() {
  let note = sessionStorage.getItem("note2");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (note) {
    document.getElementById("notes").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${note}</p><p>${username} - today at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function note3Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let note3 = document.getElementById('note3').value;
      sessionStorage.setItem('note3', note3);
      window.location.href="../../kennel-notes/notes/kennel-03.html";
  }
}

function note3Add() {
  let note = sessionStorage.getItem("note3");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (note) {
    document.getElementById("notes").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${note}</p><p>${username} - today at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function note4Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let note4 = document.getElementById('note4').value;
      sessionStorage.setItem('note4', note4);
      window.location.href="../../kennel-notes/notes/kennel-04.html";
  }
}

function note4Add() {
  let note = sessionStorage.getItem("note4");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (note) {
    document.getElementById("notes").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${note}</p><p>${username} - today at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function note5Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let note5 = document.getElementById('note5').value;
      sessionStorage.setItem('note5', note5);
      window.location.href="../../kennel-notes/notes/kennel-05.html";
  }
}

function note5Add() {
  let note = sessionStorage.getItem("note5");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (note) {
    document.getElementById("notes").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${note}</p><p>${username} - today at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}

function note6Submit() {
  let username = sessionStorage.getItem("username");
  if (!username) {
    window.alert("Please sign in first");
  } else {
      let note6 = document.getElementById('note6').value;
      sessionStorage.setItem('note6', note6);
      window.location.href="../../kennel-notes/notes/kennel-06.html";
  }
}

function note6Add() {
  let note = sessionStorage.getItem("note6");
  let username = sessionStorage.getItem("username");
  const date = new Date(Date.now());
  if (note) {
    document.getElementById("notes").insertAdjacentHTML("afterbegin",
      `<div class="tile"><div class="tile notification"><p>${note}</p><p>${username} - today at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>`);
  }
}