const fs = require("fs");
const path = require("path");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile(path.resolve("../notes.txt"), "utf-8", fileReadCallback);
