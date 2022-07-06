let email = document.querySelector("#email");
let vaildMsg = document.querySelector("#validEmail");
let btn = document.querySelector("#btn");

btn.onclick = function () {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  if (!reg.test(email.value)) {
    vaildMsg.classList.add("show");
  }
};
