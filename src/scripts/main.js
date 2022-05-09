const elements = document.getElementsByClassName('element')
const backspace = document.getElementById('backspace')
const enter = document.getElementById('enter')

class Cell {
  constructor() {
    this.row = 0
    this.col = 0
  }

  get id() { return `cell-${this.row}-${this.col}` }
  get cell() { return document.getElementById(this.id) }
  get cellBack() { return this.cell.children[0] }
  get cellFront() { return this.cell.children[1] }

  addSymbol(element) {
    if (this.col < 4) {
      this.cell.classList.add(element.id)
      const symbol = element.children[1].innerText
      this.cellFront.children[0].innerText = symbol
      this.col++
      enable('backspace')
    }
    if (this.col == 4) enable('enter')
  }

  removeSymbol() {
    if (this.col > 0) {
      this.col--
      this.cell.className = "cell"
      this.cellFront.children[0].innerText = ""
      disable('enter')
    }
    if (this.col == 0) disable('backspace')
  }

}

const cell = new Cell();

function disable(id) {
  document.getElementById(id).classList.add("disabled")
}

function enable(id) {
  document.getElementById(id).classList.remove("disabled")
}

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
    return word.replace(/(\r\n|\n|\r)/gm, "")
  } catch (error) {
    return console.log('ERROR:', error)
  }
}

function checkWord(symbols) {
  const cells = document.getElementById(`row-${cell.row}`).children

  // loop through symbols and add 'right' class
  for (let n = 0; n < 4; n++) {
    let element = document.getElementById(cells[n].classList[1])
    let category = element.classList[1]
    let cellFront = cells[n].children[1]
    if (symbols[n] == cellFront.children[0].innerText) {
      cells[n].classList.add(category)
      cells[n].classList.add('right')
      cells[n].classList.remove('misplaced')
      element.classList.add('right')
    }
  }
  // loop through symbols and add 'misplaced' or 'wrong' if never 'right'
  for (let n = 0; n < 4; n++) {
    let element = document.getElementById(cells[n].classList[1])
    let category = element.classList[1]
    let cellFront = cells[n].children[1]
    if (symbols.includes(cellFront.children[0].innerText)) {
      if (symbols[n] != cellFront.children[0].innerText) {
        cells[n].classList.add(category)
        cells[n].classList.add('misplaced')
        if (!element.classList.value.includes('right')) {
          element.classList.add('misplaced')
        }
      }
    } else {
      element.classList.add('wrong')
      cells[n].classList.add('wrong')
    }
  }
  cell.row++
  cell.col = 0
  disable('backspace')
  disable('enter')
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