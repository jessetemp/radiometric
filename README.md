# Radiometric

This began as a diagram that mapped elements in the periodic table to a radiometric dating timeline. Now the timeline has been replaced with a Wordle-like game.

## TODO:
### Table and Timeline
- [x] Add radiometric examples from Wikipedia. Start and end ranges are approximated to one order of magnitude from half-life
- [x] Add element labels to timeline
- [x] Compile CSS with Less
- [ ] Add color [noise](https://stackoverflow.com/questions/4011113/can-you-add-noise-to-a-css3-gradient) or other highlighting style
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
- [ ] Load and shuffle the word list
- [ ] Pressing enter button checks word, displays results
- [x] Enter is disabled until the row is full
- [ ] Define styles for correct, partial, or incorrect
- [ ] Define opacity in bg color instead of element
- [ ] Add instructions on page load

### Compound game
- [ ] Find compound data source
