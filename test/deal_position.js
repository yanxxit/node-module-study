const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: fs.createReadStream(__dirname + '/position.txt')
});
var myjson = {};
var mylist = [];
rl.on('line', (line) => {
  let list = line.replace(/[北纬,东经]/g, "").split(" ")
  myjson[list[1]] = { province: list[0], city: list[1], latitude: list[2], longitude: list[3] }
  mylist.push({ province: list[0], city: list[1], latitude: list[2], longitude: list[3] });
});

setTimeout(function () {
  let file_obj = path.join(__dirname, "position_obj.json")
  let file_list = path.join(__dirname, "position_list.json")
  fs.writeFile(file_obj, JSON.stringify(myjson), (err, data) => {
    if (err) return console.error(err)
    console.log("success")
  })
  fs.writeFile(file_list, JSON.stringify(mylist), (err, data) => {
    if (err) return console.error(err)
    console.log("success")
  })
}, 5000);