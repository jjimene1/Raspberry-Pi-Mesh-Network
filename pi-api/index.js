const express = require("express");
const Gpio = require("onoff").Gpio;

const app = express();
const port = 3000;

// Set the Raspberry Pi GPIO pin that the diode is connected to
const diodePin = 17;
const diode = new Gpio(diodePin, "out");

app.use(express.json());

app.post("/on", (req, res) => {
  diode.writeSync(1);
  res.status(200).send("Diode turned on");
});

app.post("/off", (req, res) => {
  diode.writeSync(0);
  res.status(200).send("Diode turned off");
});

app.get("/status", (req, res) => {
  const diodeStatus = diode.readSync() ? "on" : "off";
  res.status(200).send(`Diode is ${diodeStatus}`);
});

const server = app.listen(port, () => {
  console.log(
    `Raspberry Pi diode control server listening at http://localhost:${port}`
  );
});

process.on("SIGINT", () => {
  diode.writeSync(0); // Turn off the diode
  diode.unexport(); // Unexport GPIO and free resources
  server.close(() => {
    console.log("Server closed, GPIO resources released");
    process.exit(0);
  });
});
