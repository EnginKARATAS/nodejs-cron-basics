const cron = require('node-cron');
const express = require('express');
app = express();


app = express();

cron.schedule('* * * * 0', () => {
    let date = Date().now();
    console.log(date.parse)
    sql = "insert into reports "
  console.log('running a task every minute');
});


app.listen(3000);

