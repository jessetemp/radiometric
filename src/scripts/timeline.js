export const svgWidth = 1024
export const svgHeight = 224
export const svgPad = 12
export const svgTicTop = 26
export const svgTicBottom = 18
export const bins = 12

class Radiometric {
  constructor(name, halflife, fromClass, toClass){
    this.name = name
    this.halflife = halflife
    this.fromClass = fromClass
    this.toClass = toClass
    this.x = svgWidth - svgPad - Math.log10(halflife)*(svgWidth - 2*svgPad)/svgPad
  }
}

export const methods = [
  new Radiometric("rubidium-strontium", 5e11, "alkali-metal", "alkaline-earth"),
  new Radiometric("samarium-neodymium", 1.1e11, "lanthanide", "lanthanide"),
  new Radiometric("lutetium-hafnium", 3.7e10, "lanthanide", "transition-metal"),
  new Radiometric("uranium-lead", 4.5e9, "actinide",  "post-transition-metal"),
  new Radiometric("potassium-argon", 1.3e9, "alkali-metal", "noble-gas"),
  new Radiometric("uranium-lead", 7e8, "actinide",  "post-transition-metal"),
  new Radiometric("hafnium-tungsten", 8.9e6, "transition-metal", "transition-metal"),
  new Radiometric("iodine-xenon", 1.6e6, "nonmetal", "noble-gas"),
  new Radiometric("uranium-thorium", 8e4, "actinide", "actinide"),
  new Radiometric("uranium-protactinium", 3.3e4, "actinide", "actinide"),
  new Radiometric("carbon-nitrogen", 5730, "polyatomic-nonmetal", "nonmetal"),
]

export const tics = [...Array(bins + 1).keys()]
  .map((n) => n * (svgWidth - 2*svgPad)/(bins) + svgPad)