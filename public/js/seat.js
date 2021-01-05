const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

const selectedSeats = document.getElementsByClassName('selected-seats');
const seat = document.querySelector('.container .seat');

//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  checkoutBtn();
}

function checkoutBtn() {
  const checkout = $('.initiate-checkout')
  const btn = `<button id="checkout-btn" class="btn btn-primary btn-block">Proceed to Checkout</button>`
  checkout.text("")
  const seatCount = $('#count').text()
  console.log("seatCount", seatCount)

  if (seatCount === '0') {
    checkout.text("") 
  } else {
    checkout.append(btn)
  }
}

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


$(".seat").on('click', function (e) {
  e.preventDefault();

  const id = $(this).attr('id');
  const row = $(this).attr('data-row');
  const seat = $(this).attr('data-seat');
  const price = $(this).attr('data-price');
  const stubs = $('.selected-seats')

  x = $(this).attr('class')

  if (x === "seat selected") {
    $('#stub-'+id).remove();
  } else if (x === "seat") {


  const info = 
  `<div id='stub-${id}'>
  <div class="row">
  <article class="card ticket fl-left seat-selection">
     <section class="date-showing">
      <time>
        <span class="row-info">${row}</span><span class="seat-info">${seat}</span>
      </time>
    </section>
    <section class="card-cont">
      <small>SeatBooker Theaters Seating Info</small>
    <div class="even-seat">
        <i class="fa fa-star" style="padding-right: 15px"></i>
        <span class="seat-info">Seat: ${row}${seat}</span>
    </div>
      <div class="even-info">
        <i class="fa fa-dollar"></i>
        <span class="price-info">${price}</span>
      </div>
    </section>
  </article>
  </div>
  </div>`

  stubs.append(info)
  } else {
    return;
  }
});

var rowArr
var seatArr
var priceArr

$(".initiate-checkout").on('click', '#checkout-btn', function (e) {
  e.preventDefault();

  const children = $('.selected-seats').children().length
  rowArr = []
  seatArr = []
  priceArr = []

  const row = $('.selected-seats').find('span.seat-info-bold').each(function () {  
    rowArr.push($(this).text())
    console.log(rowArr)
  })

  const seat = $('.selected-seats').find('span.seat-info').each(function () {  
    seatArr.push($(this).text())
    console.log(seatArr)
  })

  const price = $('.selected-seats').find('span.price-info').each(function () {  
    priceArr.push($(this).text())
    console.log(priceArr)
  })



});


// const startCheckout = async(e) => {
//   e.preventDefault();



//   var row = 
//   var number = 
//   var price = 
//   var showing_id = 

//   const email = document.getElementById('email-login').value.trim();
//   const password = document.getElementById('password-login').value.trim();


//       const response = await fetch('/api/seat', {
//           method: 'POST',
//           body: JSON.stringify({row, number, price, showing_id}), 
//           headers: {'Content-Type': 'application/json'}
//       })




//       // if (response.ok) {
//       //     document.location.replace('/profile')
//       // }
// };

// document
//   .getElementById('login-btn')
//   .addEventListener('click', loginFormHandler)

