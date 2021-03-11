// const { mod } = require("prelude-ls");
const net = require('net');
// const { stdin } = require('node:process');

// const client = require('client');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 


  // conn.on("connect", () => {
  // console.log("Successfully connected to the game server. connectHandlerCallback");
  // });

  var readline = require('readline');

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

  });

  conn.on('connect', () => {
    console.log("Successfully connected to the game server. connectHandlerCallback");
    rl.question(">>What's your name?  ", function(answer) {
      console.log("Name: " + answer);
      conn.write(answer);
      rl.close();
   });
  });

  // conn.on('connect', () => {
  //   conn.write('Hello from client!');
  //   conn.setEncoding('utf8'); // interpret data as text
  //   conn.on('data', (data) => {
  //     console.log('Message from client: ', data)
  //   });
  // });

  conn.on('data', (data) => {
    console.log(data.toString());
  });


  return conn;
}

module.exports = {connect};