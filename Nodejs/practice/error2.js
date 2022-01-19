const fs = require("fs");

setInterval(() => {
  fs.unlink(".abcd.js", (err) => {
    if (err) {
      console.log(err);
    }
  });
}, 1000);


