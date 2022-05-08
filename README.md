# Radiometric

This began as a diagram that mapped elements in the periodic table to a radiometric dating timeline. Now the timeline has been replaced with a Wordle-like game.

## TODO:
### Table and Timeline
- [x] Add radiometric examples from Wikipedia. Start and end ranges are approximated to one order of magnitude from half-life
- [x] Add element labels to timeline
- [x] Compile CSS with Less
- [x] Add color ~~[noise]~~(https://stackoverflow.com/questions/4011113/can-you-add-noise-to-a-css3-gradient) stripes for highlighting
- [x] Fork PeriodicTableJSON.json
- [ ] Create separate page for radiometric timeline

### Word game
- [x] Find list of words composed of element symbols
- [x] Filter list to 4 symbols
- [x] Make symbol placeholders for word
- [x] Add backspace and enter buttons
- [x] Clicking an element adds it to the next open space
- [x] Pressing backspace deletes the most recent symbol
- [x] Backspace is disabled if the row is empty
- [x] Load and shuffle the word list
- [x] Pressing enter button checks word, displays results
- [x] Enter is visually disabled until the row is full
- [x] Enter click event is disabled until row is full
- [x] Hide colors until word is checked
- [x] Define styles for correct and incorrect
- [x] Fix misplaced cell transitions
- [x] Fix everything that broke when fixing cell transition
- [ ] Fix cell border alignment
- [ ] Fade wrong cell symbols
- [x] Define opacity in bg color instead of element (except stripes)
- [ ] Add win/lose states
- [ ] Add instructions on page load
- [ ] Consider hints for partially correct symbols
- [ ] Adjust color palette

### Compound game
- [ ] Find compound data source
