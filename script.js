const divMae = document.createElement("div-mae")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const coin = {
  state: 0,

  flip: function () {
    this.state = getRandomInt(0,2);
    return this.state
  },

  toString: function () {
    if (this.flip() === 0 ) {
        return "Heads"
    } else {
        return "Tails"
    }
  },

  toHTML: function () {
    const body = document.querySelector("body")
    const div = document.createElement("div")
    const image = document.createElement("img");
    image.src = `images/${this.toString()}.png`
    div.append(image)
    divMae.appendChild(div)
    body.appendChild(divMae)
    return div
  },
};




function display20Flips() {
    const results = [];
    let body = document.querySelector("body")
    body.innerText=""
    for (let i = 0; i < 20; i++) {
        results.push(coin.toString())
    }
    body.innerText = `display20Flips: ${results.join(", ").toString()}`
    return results
}

function display20Images() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        results.push(coin.toHTML())
    }
    return results
}
