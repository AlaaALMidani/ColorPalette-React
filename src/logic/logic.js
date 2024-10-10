export class Color {
  static id = 1;
  constructor(hexa, isLocked) {
    this.id = Color.id;
    this.hexa = hexa;
    if (isLocked !== undefined) 
        this.isLocked = false;
    else {
      this.isLocked = isLocked;
    }
    Color.id += 1;
  }
}

export class State {
  constructor(colors) {
    this.colors = colors;
  }
}

export class ColorPaletteGenerator {
  states = [
    new State([

      new Color("#ff433f"),
      new Color("#2f433f"),
      new Color("#fe0234"),
      new Color("#fee332"),
      new Color("#cf4333"),
    
    ]),
  ];
  currentIndex = 0;
  currentState = this.states[0];
  generatePallette() {
    let tempState = [];
    for (let i = 0; i < 5; i++) {
      if (this.currentState.colors[i].isLocked) {
        tempState.push(this.currentState.colors[i]);
      } else {
        tempState.push(new Color(randomC()));
      }
    }
    this.states.push(new State(tempState));
    this.setIndex(this.currentIndex + 1);
  }

  doo() {
    if (this.currentIndex === this.states.length-1) return;
    this.setIndex(this.currentIndex + 1);
  }
  undo() {
    if (this.currentIndex === 0) return;
    this.setIndex(this.currentIndex - 1);
  }
  lockToggling(id) {
    for (let i = 0; i < 5; i++) {

      if (this.currentState.colors[i].id == id) {
        this.currentState.colors[i].isLocked = !this.currentState.colors[i].isLocked;
      }
    }
  }
  setIndex(index) {
    this.currentIndex = index;
    this.currentState = this.states[index];
  }
}

function randomC() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
}
