class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.log("grrrrr! Harimau memenangkan pertandingan!");
  }
}

module.exports = new Tiger();
