export class Button {
  constructor(data) {
    this.symbol = data.symbol;
    this.altSymbol = data.altSymbol;
    this.size = data.size;
    this.bg = data.bg;
    this.code = data.code;
    this.capsLock = data.caps;

    this.language = 'en';

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

    // ниже меняю регистр при нажатии на клавиатуре физической
    this.caps = false;

    document.addEventListener('keydown', (event) => {
      const capsBtn = document.getElementById(`${event.key}`);

      if (event.code === 'CapsLock' && this.caps === false && this.capsLock !== undefined) {
        if (this.language === 'en') {
          this.button.innerText = this.symbol.toUpperCase();
        } else if (this.language === 'ru') {
          this.button.innerText = this.altSymbol.toUpperCase();
        }

        capsBtn.classList.add('active-caps');
        this.caps = true;
      } else if (event.code === 'CapsLock' && this.caps === true && this.capsLock !== undefined) {
        if (this.language === 'en') {
          this.button.innerText = this.symbol.toLowerCase();
        } else if (this.language === 'ru') {
          this.button.innerText = this.altSymbol.toLowerCase();
        }

        capsBtn.classList.remove('active-caps');
        this.caps = false;
      }
    });
    // ниже меняю регистр при нажатии на клавиатуре виртуальной
    document.addEventListener('click', (event) => {
      if (event.target.innerText === 'CapsLock' && this.caps === false && this.capsLock !== undefined) {
        if (this.language === 'en') {
          this.button.innerText = this.symbol.toUpperCase();
        } else if (this.language === 'ru') {
          this.button.innerText = this.altSymbol.toUpperCase();
        }

        event.target.classList.add('active-caps');
        this.caps = true;
      } else if (event.target.innerText === 'CapsLock' && this.caps === true && this.capsLock !== undefined) {
        if (this.language === 'en') {
          this.button.innerText = this.symbol.toLowerCase();
        } else if (this.language === 'ru') {
          this.button.innerText = this.altSymbol.toLowerCase();
        }
        // this.button.innerText = this.symbol.toLowerCase();
        event.target.classList.remove('active-caps');
        this.caps = false;
      }
    });
    // ниже меняю язык
    let altShift = [];
    this.language = 'en';
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Control' || event.key === 'Alt') {
        altShift.push(event.key);
      }

      if (altShift[0] === 'Alt' && altShift[1] === 'Alt') {
        altShift = [];
      } else if (altShift[0] === 'Control' && altShift[1] === 'Control') {
        altShift = [];
      }

      if (altShift.length === 2 && this.language === 'en') {
        if (this.caps === false) {
          this.button.innerText = this.altSymbol;
        } else if (this.caps === true) {
          this.button.innerText = this.altSymbol.toUpperCase();
        }

        altShift = [];
        this.language = 'ru';
      } else if (altShift.length === 2 && this.language === 'ru') {
        if (this.caps === false) {
          this.button.innerText = this.symbol;
        } else if (this.caps === true) {
          this.button.innerText = this.symbol.toUpperCase();
        }

        altShift = [];
        this.language = 'en';
      }
    });
    // нажатие на shift на клавиатуре физической
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Shift' && this.language === 'en') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.symbol.toLowerCase();
          } else {
            this.button.innerText = this.symbol.toUpperCase();
          }
        }
      } else if (event.key === 'Shift' && this.language === 'ru') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.altSymbol.toLowerCase();
          } else {
            this.button.innerText = this.altSymbol.toUpperCase();
          }
        }
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Shift' && this.language === 'en') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.symbol.toUpperCase();
          } else {
            this.button.innerText = this.symbol.toLowerCase();
          }
        }
      } else if (event.key === 'Shift' && this.language === 'ru') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.altSymbol.toUpperCase();
          } else {
            this.button.innerText = this.altSymbol.toLowerCase();
          }
        }
      }
    });
    // нажатие на shift на клавиатуре виртуальной
    document.addEventListener('mousedown', (event) => {
      if (event.target.innerText === 'Shift' && this.language === 'en') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.symbol.toLowerCase();
          } else {
            this.button.innerText = this.symbol.toUpperCase();
          }
        }
      } else if (event.target.innerText === 'Shift' && this.language === 'ru') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.altSymbol.toLowerCase();
          } else {
            this.button.innerText = this.altSymbol.toUpperCase();
          }
        }
      }
    });

    document.addEventListener('mouseup', (event) => {
      // console.log(event.target.innerText);
      if (event.target.innerText === 'Shift' && this.language === 'en') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.symbol.toUpperCase();
          } else {
            this.button.innerText = this.symbol.toLowerCase();
          }
        }
      } else if (event.target.innerText === 'Shift' && this.language === 'ru') {
        if (this.capsLock !== undefined) {
          if (this.caps === true) {
            this.button.innerText = this.altSymbol.toUpperCase();
          } else {
            this.button.innerText = this.altSymbol.toLowerCase();
          }
        }
      }
    });
  }
}
