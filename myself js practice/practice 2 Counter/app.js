/* ჩემი დაწერილი
// initial count
let i = 0;
// Domain Number
const number = document.querySelector("#Number");

// Operator btn
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let reset = document.querySelector("#reset");
let resets = document.querySelector(".resets");

minus.addEventListener("click", function () {
  number.textContent = --i;
});
plus.addEventListener("click", function () {
  number.textContent = ++i;
});
reset.addEventListener("click", function () {
  i = 0;
  number.textContent = i;
});
*/

/* სხვისი დაწერილი
let count = 0;
let value = document.querySelector("#Number");
let btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("minus")) {
      count--;
    } else if (styles.contains("plus")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
*/
