export class Button {
  constructor(data) {
    this.symbol = data.symbol;
    this.altSymbol = data.altSymbol;
    this.size = data.size;
    this.bg = data.bg;

    if (data.onclick === undefined) {
      this.onclick = () => {
        console.log(this.symbol);
      };
    } else {
      this.onclick = data.onclick;
    }

    this.button = document.createElement('button');
    this.button.innerText = this.symbol;
    this.button.style.width = `${this.size * 50}px`;
    this.button.style.height = '50px';
  }
}
