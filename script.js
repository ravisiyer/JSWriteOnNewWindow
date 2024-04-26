const mainElm = document.getElementById("main");
const formEl = document.getElementById("form");
const showBlogBookBtn = document.getElementById("show-blog-book");
const formAlertElm = document.getElementById("form-alert");

let newWindow;
console.log(`window.name = ${window.name}`);
window.name = "BBIndex";
console.log(`set window.name to ${window.name}`);

function writeBB() {
  console.log("writeBB function called");
  if (!newWindow) {
    console.log("Blogbook window not defined");
    return false;
  }

  if (!newWindow.document) {
    console.log("Blogbook window defined but its document not defined");
    return false;
  }

  if (!newWindow.document.body) {
    console.log(
      "Blogbook window and its document defined but its document.body not defined"
    );
    return false;
  }

  const now = new Date();
  let html = `<div style="font-size:30px">Welcome!<br/>${now.toString()}</div>`;
  newWindow.document.body.insertAdjacentHTML("afterbegin", html);
  return true;
}

function handleFeed() {
  newWindow = window.open("bb.html", "BBWin");
}

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  formAlertElm.innerHTML = "";

  formAlertElm.innerHTML = "Calling handleFeed()";
  handleFeed();
});
