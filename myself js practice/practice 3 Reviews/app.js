const personObj = [
  {
    image: [
      "./images/image-3.jpg",
      "./images/image-2.jpg",
      "./images/image-4.jpg",
    ],
    name: ["Peter", "Nicolas", "Jonas"],
    surname: ["Jones", "smith", "Serif"],
    job: ["INTERN", "Web Developer", "Web Enginner"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores autem officiis consequatur illum delectus nam, vel eum repellat, reiciendis fugiat veniam laudantium aspernatur",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores autem officiis consequatur illum delectus nam, vel eum  laudantium aspernatur",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit asperiores autem officiis consequatur illum delectus nam, vel eum ",
    ],
  },
];

// btn
let nextBtn = document.querySelector(".nextBtn");
let backBtn = document.querySelector(".backBtn");
let image = document.querySelector(".image");
let randomBtn = document.querySelector("#randomBtn");
// appendchild
let image_container = document.querySelector(".image-container");

const newImage = document.createElement("img");
randomBtn.addEventListener("click", function () {
  newImage.setAttribute("class", "image");
  newImage.setAttribute("src", `${personObj[0].image[random()]}`);
  image_container.appendChild(newImage);
});

function random() {
  return Math.floor(Math.random() * 3);
}
