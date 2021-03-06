export const svgWidth = 1240
export const svgHeight = 302
export const svgPad = 12
export const svgTicTop = 25
export const svgTicBottom = 18
export const bins = 12

class Radiometric {
  constructor(halflife, fromElement, fromSymbol, fromClass, toElement, toSymbol, toClass){
    this.halflife = halflife
    this.fromElement = fromElement
    this.fromSymbol = fromSymbol
    this.fromClass = fromClass
    this.toElement = toElement
    this.toSymbol = toSymbol
    this.toClass = toClass
    this.name = `${fromElement}-${toElement}`
    this.width = 2*(svgWidth - 2*svgPad)/bins
    this.height = 19
    this.space = 23
    this.radius = 12
    this.leftOffset = svgWidth*0.01171875
    this.arrowOffset = svgWidth*0.03125
    this.rightOffset = svgWidth*0.1328125
    this.x = svgWidth - svgPad - Math.log10(halflife)*(svgWidth - 2*svgPad)/bins - this.width/2
  }
}

export const methods = [
  new Radiometric(
    1.1e11,
    "samarium",
    "Sm",
    "lanthanide",
    "neodymium",
    "Nd",
    "lanthanide",
    ),
  new Radiometric(
    5e10,
    "rubidium",
    "Rb",
    "alkali-metal",
    "strontium",
    "Sr",
    "alkaline-earth",
    ),
  new Radiometric(
    3.7e10,
    "lutetium",
    "Lu",
    "lanthanide",
    "hafnium",
    "Ha",
    "transition-metal",
    ),
  new Radiometric(
    4.5e9,
    "uranium",
    "U",
    "actinide",
    "lead",
    "Pb",
    "post-transition-metal",
    ),
  new Radiometric(
    1.3e9,
    "potassium",
    "K",
    "alkali-metal",
    "argon",
    "Ar",
    "noble-gas",
    ),
  new Radiometric(
    7e8,
    "uranium",
    "U",
    "actinide", 
    "lead",
    "Pb",
    "post-transition-metal",
    ),
  new Radiometric(
    1.6e7,
    "iodine",
    "I",
    "nonmetal",
    "xenon",
    "Xe",
    "noble-gas",
    ),
  new Radiometric(
    8.9e6,
    "hafnium",
    "Hf",
    "transition-metal",
    "tungsten",
    "W",
    "transition-metal",
    ),
  new Radiometric(
    2.5e5,
    "uranium",
    "U",
    "actinide",
    "uranium",
    "U",
    "actinide",
    ),
  new Radiometric(
    8e4,
    "uranium",
    "U",
    "actinide",
    "thorium",
    "Th",
    "actinide",
    ),
  new Radiometric(
    3.3e4,
    "uranium",
    "U",
    "actinide",
    "protactinium",
    "Pa",
    "actinide",
    ),
  new Radiometric(
    5730,
    "carbon",
    "C",
    "polyatomic-nonmetal",
    "nitrogen",
    "N",
    "nonmetal",
    ),
]

export const tics = [...Array(bins + 1).keys()]
  .map((n) => n * (svgWidth - 2*svgPad)/(bins) + svgPad)