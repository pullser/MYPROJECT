const personObj = [
  {
    image: "./images/image-3.jpg",
    name: "Peter",
    surname: "Jones",
    job: "INTERN",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores autem officiis consequatur illum delectus nam, vel eum repellat, reiciendis fugiat veniam laudantium aspernatur",
  },
  {
    image: "./images/image-2.jpg",
    name: "Jonas",
    surname: "smith",
    job: "INTERN",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores autem officiis consequatur illum delectus nam, vel eum  laudantium aspernatur",
  },
  {
    image: "./images/image-4.jpg",
    name: "Nicolas",
    surname: "Serif",
    job: "INTERN",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores autem officiis consequatur illum delectus nam, vel eum ",
  },
];
console.log(personObj.length);

// btn
let nextBtn = document.querySelector(".nextBtn");
let backBtn = document.querySelector(".backBtn");
// appendchild
let image_container = document.querySelector(".image-container");
