var Kahoot = require("kahoot.js-updated");
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var e = 0;
var clients = [];
for (var i = 0; i <= 800; ++i) {
      clients[i] = new Kahoot;
}
console.log("Joining kahoot...");



rl.question('Enter Game ID: ', (answer) => {
    var splits = answer.split(",")
    gameID = splits[0]

for (var n in clients) {
    e++;
    clients[n].setMaxListeners(Number.POSITIVE_INFINITY)
    clients[n].join(gameID , "Ghost" + e);
    clients[n].on("joined", () => {
        console.log("Time to Spook these bois!");
    });
    clients[n].on("questionStart", question => {
        question.answer(0);
    });
  }  
    rl.close()
})
