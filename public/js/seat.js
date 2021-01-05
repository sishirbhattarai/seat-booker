const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

const selectedSeats = document.getElementsByClassName('selected-seats');
const seat = document.querySelector('.container .seat');


// const movieSelect = document.getElementById('movie');

// let ticketPrice = +movieSelect.value;

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  // total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie Select Event
// movieSelect.addEventListener('change', e => {
//   ticketPrice = +e.target.value;
//   updateSelectedCount();
// });

//Seat click event
container.addEventListener('click', e => {
  e.stopPropagation();
  e.preventDefault();

  if (e.target.classList.contains('seat') &&
     !e.target.classList.contains('occupied')) {
      e.target.classList.toggle('selected');
  }
  updateSelectedCount();
});


$(".seat").on('click', e => {
  e.preventDefault();

  console.log("test test")
})

seat.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();

  console.log("test test") 
  // const seat  
  // const price 
  
  // const stub 
// `<div class="row">
//   <article class="card ticket fl-left seat-selection">
//      <section class="date-showing">
//       <time>
//         <span class="seat-info-bold">A7</span>
//       </time>
//     </section>
//     <section class="card-cont">
//       <small>SeatBooker Theaters Seating Info</small>
//     <div class="even-seat">
//         <i class="fa fa-star" style="padding-right: 15px"></i>
//         <span class="seat-info">Seat: A7</span>
//     </div>
//       <div class="even-info">
//         <i class="fa fa-dollar"></i>
//         <span class="price-info">$70.00</span>
//       </div>
//     </section>
//   </article>
//   </div>`



});


if (!selectedSeats) {
  // don't generate the button
} else {
  // initiate-checkout div.append
  // <button class="btn btn-primary btn-block">Proceed to Checkout</button>

}


// const purchaseTickets = async(event) => {
//   event.preventDefault();

  // const email = document.getElementById('email-login').value.trim();
  // const password = document.getElementById('password-login').value.trim();

//   const response = await fetch('/api/seat/', {
//       method: 'POST',
//       body: JSON.stringify({user_id, showing_id, seat_id, in_cart, purchased}), 
//       headers: {'Content-Type': 'application/json'}
//   })

//   if (response.ok) {
//       document.location.replace('/profile')
      
//   } else {
//       alert(response.statusText)
//   }

// };

// document
//   .getElementById('login-btn')
//   .addEventListener('click', loginFormHandler)





// <div class="row">
// <article class="card ticket fl-left seat-selection">
//    <section class="date-showing">
//     <time>
//       <span class="seat-info-bold">A7</span>
//     </time>
//   </section>
//   <section class="card-cont">
//     <small>SeatBooker Theaters Seating Info</small>
//   <div class="even-seat">
//       <i class="fa fa-star" style="padding-right: 15px"></i>
//       <span class="seat-info">Seat: A7</span>
//   </div>
//     <div class="even-info">
//       <i class="fa fa-dollar"></i>
//       <span class="price-info">$70.00</span>
//     </div>
//   </section>
// </article>
// </div>