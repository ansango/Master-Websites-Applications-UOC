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

const films = [
  {
    title: "Avengers: Endgame",
    price: "10",
    currency: "USD",
  },
  {
    title: "Joker",
    price: "8",
    currency: "USD",
  },
  {
    title: "The Lion King",
    price: "9",
    currency: "USD",
  },
  {
    title: "Toy Story",
    price: "8",
    currency: "USD",
  },
];

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const currencySelect = document.getElementById("currency");
const filmOptions = document.querySelectorAll("#movie option");
const currencyValue = document.getElementsByClassName("currency-value");
const currencyTotal = document.getElementById("currency-total-price");

let ticketPrice = +movieSelect.value; // ? Convert string into number;

generateMoviesOptions();
populateUI();

/**
 * * Save selected movie index and price Function
 * @param movieIndex
 * @param moviePrice
 * */

function setMovieData(movieIndex, moviePrice) {
  //? Local Storage
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

/**
 * * Save selected seats Function
 * @param seatsIndex
 * */

function setSeatsData(seatsIndex) {
  //? Local Storage
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
}

/**
 * * Init Currency Value
 * */

function initCurrencyValue() {
  console.log(currencyValue);
}

/**
 * * Update total and count Function
 * */

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  /**
   * ? copy selected seats into array
   * ? map through array
   * ? return a new array indexes
   * */

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  setSeatsData(seatsIndex);

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

/**
 * * GenerateMoviesOptions
 * */

function generateMoviesOptions() {
  films.forEach((film) => {
    const options = document.createElement("option");
    options.innerText = `${film.title} - ${film.price} ${film.currency}`;
    options.value = film.price;
    movieSelect.appendChild(options);
  });
  currencyTotal.innerText = films[0].currency;
}

/**
 * * Get data from localStorage and populate UI
 * */

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

/**
 * * Fetch exchange
 */

function calculate(options, currency) {
  fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
    .then((res) => res.json())
    .then((data) => {
      films.forEach((film) => {
        options.innerText = `${film.title} - ${film.price} ${currency}`;
        options.value = data.rates[currency];
        movieSelect.appendChild(options); // ! El problema está en options
      });
    });
}

/**
 * * EVENT LISTENERS
 * */

// * Movie select event

movieSelect.addEventListener("change", (event) => {
  ticketPrice = +event.target.value;
  let selectedIndex = event.target.selectedIndex;
  let selectedValue = event.target.value;
  console.log(selectedValue);
  setMovieData(selectedIndex, selectedValue);
  updateSelectedCount();
});

// * Seat click event

container.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

currency.addEventListener("change", (event) => {
  const currencySelected = event.target.value;
  currencyTotal.innerText = currencySelected;
  calculate(options, currencySelected); // ! El problema está en options
});

// * Initial count and total set

initCurrencyValue();
updateSelectedCount();
