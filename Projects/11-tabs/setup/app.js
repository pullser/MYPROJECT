const btns = document.querySelectorAll(".tab-btn"); // 3 buttons
const about = document.querySelector(".about"); // button container parent
const articles = document.querySelectorAll(".content"); // container content

// when i click about
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id; // call the buttons data id all is 3

  if (id) {
    // if id is true then
    btns.forEach(function (btn) {
      // remove active from other buttons
      btn.classList.remove("active"); // only give a color
      e.target.classList.add("active"); // add when this deleted
    });
    // hide other articles
    articles.forEach(function (article) {
      // all in articles
      article.classList.remove("active"); // remove when this deleted
    });

    const element = document.getElementById(id); // element
    console.log(id);
    element.classList.add("active");
  }
});
