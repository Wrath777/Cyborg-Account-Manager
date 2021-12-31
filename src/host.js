/*

- A Hosting script
- Ray on Top | Contributed by Vishal.
- Friday • October | 8th | 2021 • 8:00 AM
- Use at your own risk!
- Made in JS • Eris.

*/



/*
- Importing Modules
*/



const fs = require('fs');
const eris = require('eris');
// const { green } = require("chalk");



/*
- Creating & Running Funcions
*/



let arr = [];
fs.readFileSync('tokens.txt').toString().split('\n').forEach(kon => {
    arr.push(new eris(kon))
})



for (let i = 0; i < arr.length; i++) {
  
  const Api = arr[i];
  Api.on('hello', function () { 
    console.log(`[+] Token : ${i+1} Logged!`)
    Api.editStatus("online", { name: "Hosted by Cyborg", type: 1, url: "https://twitch.tv/discord"})
  })
  
  Api.on('error', function (h) { 
    console.log(h)
    Api.disconnect() 
  })
  Api.connect()
}
