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
  `<div id='stub-${id}' class='stub-info' data-chair='${id}' data-row='${row}' data-seat='${seat}'>
  <div class="row">
  <article class="card ticket fl-left seat-selection">
     <section class="date-showing">
      <time>
        <span class="row-info">${row}${seat}</span>
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

// Checkout Button Click
$(".initiate-checkout").on('click', '#checkout-btn', function (e) {
  e.preventDefault();

  chairArr = []
  rowArr = []
  seatArr = []
  priceArr = []

  const chair = $('.selected-seats').find('.stub-info').each(function () {
    chairArr.push($(this).attr('data-chair'))
    console.log("chair id", chairArr)
  })

  const row = $('.selected-seats').find('.stub-info').each(function () {
    rowArr.push($(this).attr('data-row'))
    console.log("row data", rowArr)
  })

  const seat = $('.selected-seats').find('.stub-info').each(function () {
    seatArr.push($(this).attr('data-seat'))
    console.log("seat data", seatArr)
  })

  const price = $('.selected-seats').find('span.price-info').each(function () {  
    priceArr.push($(this).text())
    console.log("price data", priceArr)
  })

  startCheckout();

});




const startCheckout = async(e) => {
  // e.preventDefault();

for (var i = 0; i < rowArr.length; i++) {

  var chair_num = chairArr[i]
  var row = rowArr[i]
  var number = seatArr[i]
  var price = priceArr[i]
  var showing_id = $('.showing-info').attr('data-id')
  var user_id = $('.showing-info').attr('data-user')
  var in_cart = true
  var purchased = false
  
      const response = await fetch('/api/ticket', {
          method: 'POST',
          body: JSON.stringify({chair_num, row, number, price, showing_id, user_id, in_cart, purchased}), 
          headers: {'Content-Type': 'application/json'}
      });

      // console.log("response id", response.id)

      if (response.ok) {
          document.location.replace('/cart')
      }
    }
};


// AJAX QUERY
occupiedSeats();

function occupiedSeats() {

  var queryURL = "localhost:3001/api/ticket"

  $.ajax({
      url : queryURL,
      method : "GET"
  }).then(function(response){

    showing_id = $('.showing-info').attr('data-id')

    for (var i = 0; i < response.length; i++) {
      var res_id = response[i].showing_id

      if (res_id == showing_id) {

      console.log("showing id test", response[i].chair_num)

        var chair = response[i].chair_num;
        $("#"+chair).attr('class', 'seat occupied')

      }

    }
    });

};

// seatId();

// function seatId() {

//   var queryURL = "http://localhost:3001/api/ticket"

//   $.ajax({
//       url : queryURL,
//       method : "GET"
//   }).then(function(response){

//     console.log(response)
//     showing_id = $('.showing-info').attr('data-id')

//     for (var i = 0; i < response.length; i++) {
//       var res_id = response[i].showing_id

//       if (res_id == showing_id) {

//       console.log("showing id test", response[i].chair_num)

//         var chair = response[i].chair_num;
//         $("#"+chair).attr('class', 'seat occupied')

//       }

//     }
//     });

// };

