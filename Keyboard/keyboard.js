import { Button } from "../Button/button.js";
// import { PageElement } from "../script.js"

const keyboardConfig = [
  { symbol: '`', altSymbol: 'ё', size: 1 },
  { symbol: '1', altSymbol: '!', size: 1 },
  { symbol: '2', altSymbol: '@', size: 1 },
  { symbol: '3', altSymbol: '#', size: 1 },
  { symbol: '4', altSymbol: '$', size: 1 },
  { symbol: '5', altSymbol: '%', size: 1 },
  { symbol: '6', altSymbol: '^', size: 1 },
  { symbol: '7', altSymbol: '&', size: 1 },
  { symbol: '8', altSymbol: '*', size: 1 },
  { symbol: '9', altSymbol: '(', size: 1 },
  { symbol: '0', altSymbol: ')', size: 1 },
  { symbol: '-', altSymbol: '_', size: 1 },
  { symbol: '=', altSymbol: '+', size: 1 },
  {
    symbol: 'Backspace', altSymbol: 'Backspace', size: 2, bg: 'dark',
  },
  {
    symbol: 'Tab', altSymbol: 'Tab', size: 1, bg: 'dark',
  },
  { symbol: 'q', altSymbol: 'й', size: 1 },
  { symbol: 'w', altSymbol: 'ц', size: 1 },
  { symbol: 'e', altSymbol: 'у', size: 1 },
  { symbol: 'r', altSymbol: 'к', size: 1 },
  { symbol: 't', altSymbol: 'е', size: 1 },
  { symbol: 'y', altSymbol: 'н', size: 1 },
  { symbol: 'u', altSymbol: 'г', size: 1 },
  { symbol: 'i', altSymbol: 'ш', size: 1 },
  { symbol: 'o', altSymbol: 'щ', size: 1 },
  { symbol: 'p', altSymbol: 'з', size: 1 },
  { symbol: '[', altSymbol: 'х', size: 1 },
  { symbol: ']', altSymbol: 'ъ', size: 1 },
  { symbol: '\\', altSymbol: '\\', size: 1 },
  {
    symbol: 'Del', altSymbol: 'Del', size: 1, bg: 'dark',
  },
  {
    symbol: 'CapsLock', altSymbol: 'CapsLock', size: 2, bg: 'dark',
  },
  { symbol: 'a', altSymbol: 'ф', size: 1 },
  { symbol: 's', altSymbol: 'ы', size: 1 },
  { symbol: 'd', altSymbol: 'в', size: 1 },
  { symbol: 'f', altSymbol: 'а', size: 1 },
  { symbol: 'g', altSymbol: 'п', size: 1 },
  { symbol: 'h', altSymbol: 'р', size: 1 },
  { symbol: 'j', altSymbol: 'о', size: 1 },
  { symbol: 'k', altSymbol: 'л', size: 1 },
  { symbol: 'l', altSymbol: 'д', size: 1 },
  { symbol: ';', altSymbol: 'ж', size: 1 },
  { symbol: "'", altSymbol: 'э', size: 1 },
  {
    symbol: 'Enter', altSymbol: 'Enter', size: 2, bg: 'dark',
  },
  {
    symbol: 'Shift', altSymbol: 'Shift', size: 2, bg: 'dark',
  },
  { symbol: 'z', altSymbol: '', size: 1 },
  { symbol: 'x', altSymbol: '', size: 1 },
  { symbol: 'c', altSymbol: '', size: 1 },
  { symbol: 'v', altSymbol: '', size: 1 },
  { symbol: 'b', altSymbol: '', size: 1 },
  { symbol: 'n', altSymbol: '', size: 1 },
  { symbol: 'm', altSymbol: '', size: 1 },
  { symbol: ',', altSymbol: '', size: 1 },
  { symbol: '.', altSymbol: '', size: 1 },
  { symbol: '/', altSymbol: '', size: 1 },
  {
    symbol: '▲', altSymbol: '▲', size: 1, bg: 'dark',
  },
  {
    symbol: 'Shift', altSymbol: 'Shift', size: 2, bg: 'dark',
  },
  {
    symbol: 'Ctrl', altSymbol: 'Ctrl', size: 1, bg: 'dark',
  },
  {
    symbol: 'Win', altSymbol: 'Win', size: 1, bg: 'dark',
  },
  {
    symbol: 'Alt', altSymbol: 'Alt', size: 1, bg: 'dark',
  },
  {
    symbol: '⌞⌟', altSymbol: '', size: 7, bg: 'dark',
  },
  {
    symbol: 'Alt', altSymbol: 'Alt', size: 1, bg: 'dark',
  },
  {
    symbol: '◀', altSymbol: '◀', size: 1, bg: 'dark',
  },
  {
    symbol: '▼', altSymbol: '▼', size: 1, bg: 'dark',
  },
  {
    symbol: '▶', altSymbol: '▶', size: 1, bg: 'dark',
  },
  {
    symbol: 'Ctrl', altSymbol: 'Ctrl', size: 1, bg: 'dark',
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
      };

      return new Button(data);
    });

    const buttonElements = this.keyboard.map((value) => {
      if (value.bg === 'dark') {
        value.button.classList.add('button-dark');
      }
      value.button.classList.add('button-active');
      return value.button;
    });

    this.wrapper = document.createElement('div');
    this.wrapper.append(...buttonElements);
    this.wrapper.addEventListener('click', clickBtn);

    function clickBtn(event) {
      const textArea = document.querySelector('.textarea');

      if (event.target.innerText === '⌞⌟') {
        textArea.value += ' ';
      } else if (event.target.innerText === 'Tab') {
        textArea.value += '    ';
      } else {
        textArea.value += event.target.innerText;
      }
    }
  }
}
