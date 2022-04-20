/*
// color
let colors = ["#77FF94", "#613A3A", "#BAFFDF", "#00A7E1", "#CA5310"];
// randomNumber

// button
const btn = document.getElementById("btn");

// container
const color = document.querySelector(".color");

// click
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(getRandomNumber());
  document.body.style.backgroundColor = `${colors[randomNumber]}`;
  color.textContent = colors[randomNumber];
});

// randomNumber
function getRandomNumber() {
  return Math.floor(Math.random() * 5);
}
*/
/*
const weapons = ["candlestick", "lead pipe", "recolver"];
const makeBroken = function (item) {
  return `broken ${item}`;
};
typeof map(weapons, makeBroken);
Array.isArray(map(weapons, makeBroken));
*/
/*
const d = {};
d.filter = function (arr, cb) {
  // create a new array
  const storage = [];
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // check if cb returns true
    if (cb(arr[i], i, arr) === true) {
      storage.push(arr[i]);
    }
  }
  return storage;
};
console.log(d);
*/
/* ფუნქციის ორზე გამრავლებით გამოტანა
function multiplayBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
const num = 50;
const output = multiplayBy2(num);
const newOutput = multiplayBy2(10);
console.log(output);
*/
/*
function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);

console.log("Me first!");
*/
/*
var teacher = "Kyle";

var myTeacher = function () {
  console.log(teacher);
};

teacher = "Suzy";

myTeacher();

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`);
  }, i * 1000);
}

const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one

var msg = "Hello World";

console.log(msg.match(/(?<=e)(l..)/g));
console.log(msg.match(/(?<!e)(l..)/g));
*/
/*
function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}
const returnNextElement = createFlow();
const element1 = returnNextElement.next();
const element2 = returnNextElement.next(2);
console.log(returnNextElement);
console.log(element1);
console.log(element2);
*/
/*
let obj = {
  name: "nika",
  surname: "futkaradze",
  age: 21,
  years: 2000,
  girlfriend: "nini",
  funcname: function (param) {
    console.log(param);
  },

  funcname: function () {
    return (this.width * this.height).toFixed(); // გამრავლება
  },
};

let value = Object.values(obj); // აბრუნებს ობიექტის  ყველა მნიშვნელობას მასივის სახით (დაგვიბრუნა მარჯვენა ჩამონათვალი)

let allval = Object.entries(obj); // აბრუნებს ობიექტის    ყველა თვისებას და მათ მნიშვნელობას (დაგვიბრუნა ყველა ჩამონათვალი) ანაწევრებს. მასივის მასივებში
console.log(allval);
*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
console.log(average);
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
}
*/
