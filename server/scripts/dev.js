const concurrently = require("concurrently");

const commands = [
  { command: "cd ./functions && tsc -w", name: "tsc" },
  { command: "firebase emulators:start", name: "ems" },
];

const options = {
  killOthers: ["failure", "success"],
  prefix: "[{time}] {name} ",
  timestampFormat: "HH:mm:ss.SSS",
};

concurrently(commands, options);
