// const CronJob = require('cron').CronJob;
// const ticket = document.querySelector('.ticket')
// const inCart = document.querySelectorAll('.ticket .in_cart');
// const updatedAt = document.querySelectorAll('.ticket .updated_at')


// var job = new CronJob('0 * * * * *', function() {
//   console.log('You will see this message every minute');
//   if (inCart <= 1) {
//     const response = await Ticket.fetch('api/ticket', {
//       method: 'DELETE',
//       body: JSON.stringify({ticket}),
//       headers: {'Content-Type': 'application/json'}
//     })
//     if(response.ok) {
//       document.location.replace('/')
//     }

  

//   }

// Write code here 
//  DELETE from Ticket where in_cart = 1 and updated_at < DATE_ADD(NOW(), INTERVAL -15 DAY_MINUTE);


// }, null, true, 'America/Los_Angeles');

// job.start();

// console.log("test")
