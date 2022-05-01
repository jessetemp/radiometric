const elements = document.getElementsByClassName('element')
const backspace = document.getElementById('backspace')
const enter = document.getElementById('enter')

class Cell {
  constructor() {
    this.row = 0
    this.col = 0
  }

  get id() { return `cell-${this.row}-${this.col}` }
  get element() { return document.getElementById(this.id) }

  addSymbol(element) {
    if (this.col < 4) {
      console.log('add')
      const category = element.classList[2] // magic
      this.element.classList.add(category)
      const symbol = element.children[1].innerText // magic
      this.element.children[0].innerText = symbol // magic
      this.col++
      this.enable('backspace')
    }
    if (this.col == 4) this.enable('enter')
  }

  removeSymbol() {
    if (this.col > 0) {
      console.log('remove')
      this.col--
      this.clearSymbol(this.element)
      this.disable('enter')
    }
    if (this.col == 0) this.disable('backspace')
  }

  clearSymbol(element) {
    element.className = "cell"
    element.children[0].innerText = ""
  }

  disable(id) {
    document.getElementById(id).className = "cell disabled"
  }

  enable(id) {
    document.getElementById(id).className = "cell"
  }
}

const cell = new Cell();

Array.from(elements).forEach(element => {
  element.addEventListener('click', () => {
    cell.addSymbol(element);
  });
});

backspace.addEventListener('click', () => {
  cell.removeSymbol();
})



async function wordOfTheDay() {
  let words = []
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const startDate = new Date(2022, 3, 29).setHours(0,0,0,0)
  const today = new Date(Date.now()).setHours(0,0,0,0)
  const index = Math.round(Math.abs((startDate - today) / oneDay));
  
  try {
    const response = await fetch('./data/words.txt')
    const data = await response.text()
    words = data.split('\n'); let word = words[index]
    console.log(word)
    return word.replace(/(\r\n|\n|\r)/gm, "")
  } catch (error) {
    return console.log('ERROR:', error)
  }
}

function checkWord(symbols) {
  const cells = document.getElementById(`row-${cell.row}`).children
  for (let n = 0; n < 4; n++) {
    console.log(`${symbols[n]} - ${cells[n].children[0].innerText}`)
    if (symbols[n] != cells[n].children[0].innerText) {
      cells[n].classList.add('wrong')
    }
  }
  cell.row++
  cell.col = 0
  cell.disable('backspace')
  cell.disable('enter')
}

function getSymbols(word) {
  const symbols = []
  let symbol = []
  for (letter of word) {
    if (isUpper(letter) && symbol.length > 0) {
      symbols.push(symbol.join(''))
      symbol = []
    }
    symbol.push(letter)
  }
  if (symbol.length > 0) {
    symbols.push(symbol.join(''))
  }
  return symbols
}

function isUpper(letter) {
  return (/[A-Z]/.test(letter));
}

async function main() {

  const word = await wordOfTheDay()
  console.log(word)
  const symbols = getSymbols(word)
  console.log(symbols)
  
  enter.addEventListener('click', () => {
    checkWord(symbols)
  })

}

main()