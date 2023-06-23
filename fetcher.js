const request = require('request');
const fs = require('fs');
const url = process.argv.slice(2)[0];
const path = process.argv.slice(2)[1];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  fs.writeFile(path, body, (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
});