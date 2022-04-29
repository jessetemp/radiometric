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
      const category = element.classList[2] // magic
      this.element.classList.add(category)
      const symbol = element.children[1].innerText // magic
      this.element.children[0].innerText = symbol // magic
      this.col++
    }
  }

  removeSymbol() {
    if (this.col > 0) {
      this.col--
      this.element.className = "cell"
      this.element.children[0].innerText = ""
    }
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