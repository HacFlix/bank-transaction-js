const oneBalance = document.getElementById("one-balance");
const twoBalance = document.getElementById("two-balance");
const user1 = document.getElementById("user1");
const user2 = document.getElementById("user2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const useronetransaction = document.getElementById("useronetransaction");
const usertwotransaction = document.getElementById("usertwotransaction");
useronetransaction.style.display = "none";
usertwotransaction.style.display = "none";
let user1Balance = 1200;
let user2Balance = 1700;
function FirstLoad(user1, user2) {
  oneBalance.innerText = `$${user1}`;
  twoBalance.innerText = `$${user2}`;
}
FirstLoad(user1Balance, user2Balance);

btn1.addEventListener("click", () => {
  let value = Number(user1.value);
  if (user1Balance < value) {
    alert("Over Amount Cannot be send..");
  } else if (!value) {
    alert("Please enter some amount to Transfer");
  } else {
    user1Balance -= value;
    user2Balance += value;
    FirstLoad(user1Balance, user2Balance);
    userOneSent(value);
    userOneDecrease(value);
    useronetransaction.style.display = "flex";
    usertwotransaction.style.display = "flex";
  }
  user1.value = "";
});
btn2.addEventListener("click", () => {
  let value = Number(user2.value);
  if (user2Balance < value) {
    alert("Over Amount Cannot be send..");
  } else if (!value) {
    alert("Please enter some amount to Transfer");
  } else {
    user1Balance += value;
    user2Balance -= value;
    FirstLoad(user1Balance, user2Balance);
    userTwoSent(value);
    userTwoDecrease(value);
    useronetransaction.style.display = "flex";
    usertwotransaction.style.display = "flex";
  }
  user2.value = "";
});

function userOneSent(value) {
  let li = document.createElement("li");
  li.innerText = `+${value}`;
  li.classList.add("increase");
  usertwotransaction.appendChild(li);
}
function userOneDecrease(value) {
  let li = document.createElement("li");
  li.innerText = `-${value}`;
  li.classList.add("decrease");
  useronetransaction.appendChild(li);
}
function userTwoSent(value) {
  let li = document.createElement("li");
  li.innerText = `+${value}`;
  li.classList.add("increase");
  useronetransaction.appendChild(li);
}
function userTwoDecrease(value) {
  let li = document.createElement("li");
  li.innerText = `-${value}`;
  li.classList.add("decrease");
  usertwotransaction.appendChild(li);
}
