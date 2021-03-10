// const { mod } = require("prelude-ls");
const net = require('net');

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

  conn.on('data', (data) => {
    console.log(data.toString());
  });


  return conn;
}

module.exports = {connect};