import fetch from 'node-fetch';

fetch('https://api.github.com/users/dayook')
  .then(response => response.json())
  .then(console.log)
  .catch(console.error)