var Nightmare = require('nightmare');
var vo = require('vo');

vo(function* () {
  var nightmare = Nightmare({ show: true });
  var link = yield nightmare
    .goto('http:localhost:8888')

      
     // .click('div[id="1"]')
     // .wait(1000)
     // .click('input[id="1"]')
     // .wait(1000)
     // .type('input[id="1"]', '2')
     
     // .wait(1000)
     //  .click('button[class="btn btn-info"]')

      .wait(1000)
      // .mousedown('button[class="3"]')
      .click('button[class="btn btn-warning 3"]')
      .wait(1000)
      .click('ul li[class="drink"]')
      .wait(1000)
      .click('button[class="btn btn-info 21"]')
      .wait(1000)

      .refresh()
      .click('button[class="btn btn-warning 3"]')
      .wait(1000)
      .click('button[class="btn btn-warning 4"]')
      .wait(1000)
      .click('button[class="btn btn-warning 5"]')
      .wait(1000)
      .click('ul li[class="drink"]')
      .wait(1000)
      .click('button[class="btn btn-info 21"]')
      .wait(1000)

      .refresh()
      .click('button[class="btn btn-warning 3"]')
      .wait(1000)
      .click('button[class="btn btn-warning 4"]')
      .wait(1000)
      .click('button[class="btn btn-warning 5"]')
      .wait(1000)
      .click('button[class="btn btn-warning 6"]')
      .wait(1000)
      .click('ul li[class="drink"]')
      .wait(1000)
      .click('button[class="btn btn-info 21"]')
      .wait(1000)
      .click('button[class="btn btn-info 22"]')
      .wait(1000)
      .click('button[class="btn btn-info 23"]')
      .wait(1000)





})(function (err, result) {
  if (err) return console.log(err);
  console.log("Complete");
});



