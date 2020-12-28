var CronJob = require('cron').CronJob;
var job = new CronJob('0 * * * * *', function() {
  console.log('You will see this message every minute');






}, null, true, 'America/Los_Angeles');

job.start();

// console.log("test")