/**
 * BETTER COMMENTS TEMPLATE
 * * Titles
 * @param myParam
 * ! Review code
 * ? Questions
 * TODO: "tasks to todo"
 * // Deprecated
 */

/**
 * * PEC1_Ej2_4
 */

//* Document selectors & Variables

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const currency = document.getElementById("currency");
const currencyTotal = document.getElementById("currency-total-price");

let currencyValue = currency.value;
let ticketPrice = +movieSelect.value; // ? Convert string into number;

populateUI();

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function setSeatsData(seatsIndex) {
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
}

function updateSelectedCount(rate) {
  console.log(rate);
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  setSeatsData(seatsIndex);

  count.innerText = selectedSeatsCount;
  if (rate !== undefined) {
    console.log(selectedSeatsCount * ticketPrice * rate);
    total.innerText = (selectedSeatsCount * ticketPrice * rate).toFixed(1);
  } else {
    total.innerText = selectedSeatsCount * ticketPrice;
  }
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

async function calculate(currencyOld, currencyNew) {
  let response = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${currencyOld}`
  );
  let data = await response.json();

  const dataRate = data.rates;
  const rate = dataRate[currencyNew];
  const movies = movieSelect.options;
  console.log(movies);

  for (const movie of movies) {
    movie.value = (movie.value * rate).toFixed(2);
    const title = movie.text;
    const price = (movie.value * rate).toFixed(2);
    movie.text = "";
    
    movie.text = `${title} ${price}`;
    //movie.text = `${title} ${price}`
  }

  console.log("rate new", rate);
  updateSelectedCount(rate);
}

currency.addEventListener("change", (event) => {
  const currencyOld = currencyValue;
  const currencyNew = event.target.value;
  calculate(currencyOld, currencyNew);
  currencyValue = event.target.value;
  currencyTotal.innerText = event.target.value;
});

movieSelect.addEventListener("change", (event) => {
  ticketPrice = +event.target.value;
  let selectedIndex = event.target.selectedIndex;
  let selectedValue = event.target.value;
  setMovieData(selectedIndex, selectedValue);
  updateSelectedCount();
});

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

updateSelectedCount();
