import { Button } from '../Button/button.js';
// import { PageElement } from "../script.js"

const keyboardConfig = [
  {
    symbol: '`', altSymbol: 'ё', size: 1, code: 'Backquote', caps: true, shiftEn: '~',
  },
  {
    symbol: '1', altSymbol: '1', size: 1, code: 'Digit1', shiftEn: '!', shiftRu: '!',
  },
  {
    symbol: '2', altSymbol: '2', size: 1, code: 'Digit2', shiftEn: '@', shiftRu: '"',
  },
  {
    symbol: '3', altSymbol: '3', size: 1, code: 'Digit3', shiftEn: '#', shiftRu: '№',
  },
  {
    symbol: '4', altSymbol: '4', size: 1, code: 'Digit4', shiftEn: '$', shiftRu: ';',
  },
  {
    symbol: '5', altSymbol: '5', size: 1, code: 'Digit5', shiftEn: '%', shiftRu: '%',
  },
  {
    symbol: '6', altSymbol: '6', size: 1, code: 'Digit6', shiftEn: '^', shiftRu: ':',
  },
  {
    symbol: '7', altSymbol: '7', size: 1, code: 'Digit7', shiftEn: '&', shiftRu: '?',
  },
  {
    symbol: '8', altSymbol: '8', size: 1, code: 'Digit8', shiftEn: '*', shiftRu: '*',
  },
  {
    symbol: '9', altSymbol: '9', size: 1, code: 'Digit9', shiftEn: '(', shiftRu: '(',
  },
  {
    symbol: '0', altSymbol: '0', size: 1, code: 'Digit0', shiftEn: ')', shiftRu: ')',
  },
  {
    symbol: '-', altSymbol: '-', size: 1, code: 'Minus', shiftEn: '_', shiftRu: '_',
  },
  {
    symbol: '=', altSymbol: '=', size: 1, code: 'Equal', shiftEn: '+', shiftRu: '+',
  },
  {
    symbol: 'Backspace', altSymbol: 'Backspace', size: 2, bg: 'dark', code: 'Backspace',
  },
  {
    symbol: 'Tab', altSymbol: 'Tab', size: 1, bg: 'dark', code: 'Tab',
  },
  {
    symbol: 'q', altSymbol: 'й', size: 1, code: 'KeyQ', caps: true,
  },
  {
    symbol: 'w', altSymbol: 'ц', size: 1, code: 'KeyW', caps: true,
  },
  {
    symbol: 'e', altSymbol: 'у', size: 1, code: 'KeyE', caps: true,
  },
  {
    symbol: 'r', altSymbol: 'к', size: 1, code: 'KeyR', caps: true,
  },
  {
    symbol: 't', altSymbol: 'е', size: 1, code: 'KeyT', caps: true,
  },
  {
    symbol: 'y', altSymbol: 'н', size: 1, code: 'KeyY', caps: true,
  },
  {
    symbol: 'u', altSymbol: 'г', size: 1, code: 'KeyU', caps: true,
  },
  {
    symbol: 'i', altSymbol: 'ш', size: 1, code: 'KeyI', caps: true,
  },
  {
    symbol: 'o', altSymbol: 'щ', size: 1, code: 'KeyO', caps: true,
  },
  {
    symbol: 'p', altSymbol: 'з', size: 1, code: 'KeyP', caps: true,
  },
  {
    symbol: '[', altSymbol: 'х', size: 1, code: 'BracketLeft', caps: true, shiftEn: '{',
  },
  {
    symbol: ']', altSymbol: 'ъ', size: 1, code: 'BracketRight', caps: true, shiftEn: '}',
  },
  {
    symbol: '\\', altSymbol: '\\', size: 1, code: 'Backslash', shiftEn: '|', shiftRu: '/',
  },
  {
    symbol: 'Del', altSymbol: 'Del', size: 1, bg: 'dark', code: 'Delete',
  },
  {
    symbol: 'CapsLock', altSymbol: 'CapsLock', size: 2, bg: 'dark', code: 'CapsLock',
  },
  {
    symbol: 'a', altSymbol: 'ф', size: 1, code: 'KeyA', caps: true,
  },
  {
    symbol: 's', altSymbol: 'ы', size: 1, code: 'KeyS', caps: true,
  },
  {
    symbol: 'd', altSymbol: 'в', size: 1, code: 'KeyD', caps: true,
  },
  {
    symbol: 'f', altSymbol: 'а', size: 1, code: 'KeyF', caps: true,
  },
  {
    symbol: 'g', altSymbol: 'п', size: 1, code: 'KeyG', caps: true,
  },
  {
    symbol: 'h', altSymbol: 'р', size: 1, code: 'KeyH', caps: true,
  },
  {
    symbol: 'j', altSymbol: 'о', size: 1, code: 'KeyJ', caps: true,
  },
  {
    symbol: 'k', altSymbol: 'л', size: 1, code: 'KeyK', caps: true,
  },
  {
    symbol: 'l', altSymbol: 'д', size: 1, code: 'KeyL', caps: true,
  },
  {
    symbol: ';', altSymbol: 'ж', size: 1, code: 'Semicolon', caps: true, shiftEn: ':',
  },
  {
    symbol: "'", altSymbol: 'э', size: 1, code: 'Quote', caps: true, shiftEn: '"',
  },
  {
    symbol: 'Enter', altSymbol: 'Enter', size: 2, bg: 'dark', code: 'Enter',
  },
  {
    symbol: 'Shift', altSymbol: 'Shift', size: 2, bg: 'dark', code: 'ShiftLeft',
  },
  {
    symbol: 'z', altSymbol: 'я', size: 1, code: 'KeyZ', caps: true,
  },
  {
    symbol: 'x', altSymbol: 'ч', size: 1, code: 'KeyX', caps: true,
  },
  {
    symbol: 'c', altSymbol: 'с', size: 1, code: 'KeyC', caps: true,
  },
  {
    symbol: 'v', altSymbol: 'м', size: 1, code: 'KeyV', caps: true,
  },
  {
    symbol: 'b', altSymbol: 'и', size: 1, code: 'KeyB', caps: true,
  },
  {
    symbol: 'n', altSymbol: 'т', size: 1, code: 'KeyN', caps: true,
  },
  {
    symbol: 'm', altSymbol: 'ь', size: 1, code: 'KeyM', caps: true,
  },
  {
    symbol: ',', altSymbol: 'б', size: 1, code: 'Comma', caps: true, shiftEn: '<',
  },
  {
    symbol: '.', altSymbol: 'ю', size: 1, code: 'Period', caps: true, shiftEn: '>',
  },
  {
    symbol: '/', altSymbol: '.', size: 1, code: 'Slash', shiftEn: '?', shiftRu: ',',
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
    symbol: '⌞⌟', altSymbol: '⌞⌟', size: 7, bg: 'dark', code: 'Space',
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
        caps: value.caps,
        // shift: value.shift,
        shiftEn: value.shiftEn,
        shiftRu: value.shiftRu,
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

    this.wrapper.append(...buttonElements);

    function clickBtn(event) {
      const textArea = document.querySelector('.textarea');
      const buttonActive = document.querySelectorAll('.button-active');

      buttonActive.forEach((el) => {
        el.classList.remove('click-active');
      });

      if (event.target.innerText === '⌞⌟') {
        textArea.value += ' ';
      } else if (event.target.innerText === 'Tab') {
        textArea.value += '    ';
      } else if (event.target.innerText === 'CapsLock' || event.target.innerText === 'Ctrl' || event.target.innerText === 'Alt' || event.target.innerText === 'Shift' || event.target.innerText === 'Backspace' || event.target.innerText === '▶' || event.target.innerText === '▼' || event.target.innerText === '◀' || event.target.innerText === '▲' || event.target.innerText === 'Del' || event.target.innerText === 'Enter') {
        textArea.value += '';
      } else {
        textArea.value += event.target.innerText;
      }
    }

    this.wrapper.addEventListener('click', clickBtn);
    // ниже делаю ввод нажатых клавиш в textarea
    document.addEventListener('keydown', (event) => {
      const textArea = document.querySelector('.textarea');
      const buttonActive = document.querySelectorAll('.button-active');

      if (event.key === '⌞⌟') {
        textArea.value += ' ';
      } else if (event.key === 'Tab') {
        textArea.value += '    ';
      } else if (event.key === 'CapsLock' || event.key === 'Control' || event.key === 'Alt' || event.key === 'AltGraph' || event.key === 'Shift' || event.key === 'Backspace' || event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Delete' || event.key === 'Enter') {
        textArea.value += '';
      } else {
        buttonActive.forEach((el) => {
          if (el.id === event.code) {
            textArea.value += el.innerText;
          }
        });
        // const btnn = document.getElementById(`${event.code}`);
        // textArea.value += btnn.innerText;
      }
      // ниже добавляю и удаляю анимацию кнопок при нажатии клавиш
      buttonActive.forEach((el) => {
        el.classList.remove('click-active');
        if (el.id === event.code && el.id !== 'CapsLock') {
          el.classList.add('click-active');

          el.addEventListener('animationend', () => {
            el.classList.remove('click-active');
          });
        }
      });
    });
  }
}
