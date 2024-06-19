let contentRating = document.getElementById("content-rating");
let thankState = document.getElementById("thank-state");

let rates = document.querySelectorAll(".rates");
let rating = document.querySelector(".rating");

function submitRate() {
  contentRating.classList.add("hidden");
  thankState.classList.remove("hidden");
}
function rateAgain() {
  contentRating.classList.remove("hidden");
  thankState.classList.add("hidden");
}

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
