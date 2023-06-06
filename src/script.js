const radio = document.querySelector(".manual-btn");
const cont = 1;

document.querySelector("#radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  if (cont > 3) {
    cont = 1;
  }

  document.querySelector("#radio" + cont).checked = true;
}
