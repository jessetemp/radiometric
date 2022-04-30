const elements = document.getElementsByClassName('element')
const backspace = document.getElementById('backspace')
const enter = document.getElementById('enter')
// const words = 

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
      this.element.className = "cell"
      this.element.children[0].innerText = ""
      this.disable('enter')
    }
    if (this.col == 0) this.disable('backspace')
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