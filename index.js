const {
  spawn
} = require("child_process");
const path = require("path");
function start() {
  let _0x4860b5 = [path.join(__dirname, "main.js"), ...process.argv.slice(2)];
  console.log([process.argv[0], ..._0x4860b5].join("\n"));
  let _0x1c4f15 = spawn(process.argv[0], _0x4860b5, {
    stdio: ["inherit", "inherit", "inherit", "ipc"]
  }).on("message", _0x1b6203 => {
    if (_0x1b6203 == "reset") {
      console.log("Restarting MAKINO-MD-V2...");
      _0x1c4f15.kill();
      start();
      delete _0x1c4f15;
    }
  }).on("exit", _0x27f360 => {
    console.error("Exited with code:", _0x27f360);
    if (_0x27f360 == "." || _0x27f360 == 1 || _0x27f360 == 0) {
      start();
    }
  });
}
start();