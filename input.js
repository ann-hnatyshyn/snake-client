const connect = require("./client.js");

let connection = connect();

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "q") {
    connection.write("Say: Yum");
  }
  if (key === "z") {
    connection.write("Say: gluten free?");
  }
  if (key === "x") {
    connection.write("Say: lets go!");
  }
};

setupInput(connection);

module.exports = setupInput;