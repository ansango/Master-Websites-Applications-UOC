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

let ticketPrice = +movieSelect.value; // ? Convert string into number;

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
 * * EVENT LISTENERS
 * */

// * Movie select event

movieSelect.addEventListener("change", (event) => {
  ticketPrice = +event.target.value;
  let selectedIndex = event.target.selectedIndex;
  let selectedValue = event.target.value;
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

// * Initial count and total set

updateSelectedCount();
