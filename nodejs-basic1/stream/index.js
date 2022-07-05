const fs = require("fs");
const Fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(path.resolve(__dirname, "input.txt"), {
  highWaterMark: 25,
});
const writableStream = Fs.createWriteStream(path.resolve(__dirname, "output.txt"));

readableStream.on("readable", () => {
  try {
    writableStream.write(`[${readableStream.read()}]\n`);
  } catch (error) {
    console.log("gagal");
  }
});

readableStream.on("end", () => {
  console.log("Done");
});
