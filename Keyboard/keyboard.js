import { Button } from '../Button/button.js';
// import { PageElement } from "../script.js"

const keyboardConfig = [
  {
    symbol: '`', altSymbol: 'ё', size: 1, code: 'Backquote',
  },
  {
    symbol: '1', altSymbol: '!', size: 1, code: 'Digit1',
  },
  {
    symbol: '2', altSymbol: '@', size: 1, code: 'Digit2',
  },
  {
    symbol: '3', altSymbol: '#', size: 1, code: 'Digit3',
  },
  {
    symbol: '4', altSymbol: '$', size: 1, code: 'Digit4',
  },
  {
    symbol: '5', altSymbol: '%', size: 1, code: 'Digit5',
  },
  {
    symbol: '6', altSymbol: '^', size: 1, code: 'Digit6',
  },
  {
    symbol: '7', altSymbol: '&', size: 1, code: 'Digit7',
  },
  {
    symbol: '8', altSymbol: '*', size: 1, code: 'Digit8',
  },
  {
    symbol: '9', altSymbol: '(', size: 1, code: 'Digit9',
  },
  {
    symbol: '0', altSymbol: ')', size: 1, code: 'Digit0',
  },
  {
    symbol: '-', altSymbol: '_', size: 1, code: 'Minus',
  },
  {
    symbol: '=', altSymbol: '+', size: 1, code: 'Equal',
  },
  {
    symbol: 'Backspace', altSymbol: 'Backspace', size: 2, bg: 'dark', code: 'Backspace',
  },
  {
    symbol: 'Tab', altSymbol: 'Tab', size: 1, bg: 'dark', code: 'Tab',
  },
  {
    symbol: 'q', altSymbol: 'й', size: 1, code: 'KeyQ',
  },
  {
    symbol: 'w', altSymbol: 'ц', size: 1, code: 'KeyW',
  },
  {
    symbol: 'e', altSymbol: 'у', size: 1, code: 'KeyE',
  },
  {
    symbol: 'r', altSymbol: 'к', size: 1, code: 'KeyR',
  },
  {
    symbol: 't', altSymbol: 'е', size: 1, code: 'KeyT',
  },
  {
    symbol: 'y', altSymbol: 'н', size: 1, code: 'KeyY',
  },
  {
    symbol: 'u', altSymbol: 'г', size: 1, code: 'KeyU',
  },
  {
    symbol: 'i', altSymbol: 'ш', size: 1, code: 'KeyI',
  },
  {
    symbol: 'o', altSymbol: 'щ', size: 1, code: 'KeyO',
  },
  {
    symbol: 'p', altSymbol: 'з', size: 1, code: 'KeyP',
  },
  {
    symbol: '[', altSymbol: 'х', size: 1, code: 'BracketLeft',
  },
  {
    symbol: ']', altSymbol: 'ъ', size: 1, code: 'BracketRight',
  },
  {
    symbol: '\\', altSymbol: '\\', size: 1, code: 'Backslash',
  },
  {
    symbol: 'Del', altSymbol: 'Del', size: 1, bg: 'dark', code: 'Delete',
  },
  {
    symbol: 'CapsLock', altSymbol: 'CapsLock', size: 2, bg: 'dark', code: 'CapsLock',
  },
  {
    symbol: 'a', altSymbol: 'ф', size: 1, code: 'KeyA',
  },
  {
    symbol: 's', altSymbol: 'ы', size: 1, code: 'KeyS',
  },
  {
    symbol: 'd', altSymbol: 'в', size: 1, code: 'KeyD',
  },
  {
    symbol: 'f', altSymbol: 'а', size: 1, code: 'KeyF',
  },
  {
    symbol: 'g', altSymbol: 'п', size: 1, code: 'KeyG',
  },
  {
    symbol: 'h', altSymbol: 'р', size: 1, code: 'KeyH',
  },
  {
    symbol: 'j', altSymbol: 'о', size: 1, code: 'KeyJ',
  },
  {
    symbol: 'k', altSymbol: 'л', size: 1, code: 'KeyK',
  },
  {
    symbol: 'l', altSymbol: 'д', size: 1, code: 'KeyL',
  },
  {
    symbol: ';', altSymbol: 'ж', size: 1, code: 'Semicolon',
  },
  {
    symbol: "'", altSymbol: 'э', size: 1, code: 'Quote',
  },
  {
    symbol: 'Enter', altSymbol: 'Enter', size: 2, bg: 'dark', code: 'Enter',
  },
  {
    symbol: 'Shift', altSymbol: 'Shift', size: 2, bg: 'dark', code: 'ShiftLeft',
  },
  {
    symbol: 'z', altSymbol: '', size: 1, code: 'KeyZ',
  },
  {
    symbol: 'x', altSymbol: '', size: 1, code: 'KeyX',
  },
  {
    symbol: 'c', altSymbol: '', size: 1, code: 'KeyC',
  },
  {
    symbol: 'v', altSymbol: '', size: 1, code: 'KeyV',
  },
  {
    symbol: 'b', altSymbol: '', size: 1, code: 'KeyB',
  },
  {
    symbol: 'n', altSymbol: '', size: 1, code: 'KeyN',
  },
  {
    symbol: 'm', altSymbol: '', size: 1, code: 'KeyM',
  },
  {
    symbol: ',', altSymbol: '', size: 1, code: 'Comma',
  },
  {
    symbol: '.', altSymbol: '', size: 1, code: 'Period',
  },
  {
    symbol: '/', altSymbol: '', size: 1, code: 'Slash',
  },
  {
    symbol: '▲', altSymbol: '▲', size: 1, bg: 'dark', code: 'ArrowUp',
  },
  {
    symbol: 'Shift', altSymbol: 'Shift', size: 2, bg: 'dark', code: 'ShiftRight',
  },
  {
    symbol: 'Ctrl', altSymbol: 'Ctrl', size: 1, bg: 'dark', code: 'ControlLeft',
  },
  {
    symbol: 'Win', altSymbol: 'Win', size: 1, bg: 'dark', code: 'MetaLeft',
  },
  {
    symbol: 'Alt', altSymbol: 'Alt', size: 1, bg: 'dark', code: 'AltLeft',
  },
  {
    symbol: '⌞⌟', altSymbol: '', size: 7, bg: 'dark', code: 'Space',
  },
  {
    symbol: 'Alt', altSymbol: 'Alt', size: 1, bg: 'dark', code: 'AltRight',
  },
  {
    symbol: '◀', altSymbol: '◀', size: 1, bg: 'dark', code: 'ArrowLeft',
  },
  {
    symbol: '▼', altSymbol: '▼', size: 1, bg: 'dark', code: 'ArrowDown',
  },
  {
    symbol: '▶', altSymbol: '▶', size: 1, bg: 'dark', code: 'ArrowRight',
  },
  {
    symbol: 'Ctrl', altSymbol: 'Ctrl', size: 1, bg: 'dark', code: 'ControlRight',
  },
];

export class Keyboard {
  constructor() {
    this.keyboard = keyboardConfig.map((value) => {
      const data = {
        symbol: value.symbol,
        altSymbol: value.altSymbol,
        size: value.size,
        bg: value.bg,
        code: value.code,
      };

      return new Button(data);
    });

    const buttonElements = this.keyboard.map((value) => {
      if (value.bg === 'dark') {
        value.button.classList.add('button-dark');
      }
      value.button.classList.add('button-active');
      value.button.setAttribute('id', `${value.code}`);
      return value.button;
    });

    this.wrapper = document.createElement('div');
    // this.wrapper.classList.add('keyboard');
    this.wrapper.append(...buttonElements);

    function clickBtn(event) {
      const textArea = document.querySelector('.textarea');
      const buttonActive = document.querySelectorAll('.button-active');
      //   console.log(buttonActive[0]);
      buttonActive.forEach((el) => {
        el.classList.remove('click-active');
      });

      if (event.target.innerText === '⌞⌟') {
        textArea.value += ' ';
      } else if (event.target.innerText === 'Tab') {
        textArea.value += '    ';
      } else {
        textArea.value += event.target.innerText;
      }
    }

    this.wrapper.addEventListener('click', clickBtn);

    document.addEventListener('keydown', (event) => {
      const textArea = document.querySelector('.textarea');
      if (event.key === '⌞⌟') {
        textArea.value += ' ';
      } else if (event.key === 'Tab') {
        textArea.value += '    ';
      } else {
        textArea.value += event.key;
      }

      const buttonActive = document.querySelectorAll('.button-active');
      buttonActive.forEach((el) => {
        el.classList.remove('click-active');
        if (el.id === event.code) {
          el.classList.add('click-active');

          el.addEventListener('animationend', () => {
            el.classList.remove('click-active');
          });
        }
      });
    });
  }
}
