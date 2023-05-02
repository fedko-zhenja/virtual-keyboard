import { Keyboard } from './Keyboard/keyboard.js';

export class PageElement {
  constructor() {
    this.textarea = document.createElement('textarea');
    this.textarea.className = 'textarea';

    this.keyboardWrapper = document.createElement('div');
    this.keyboardWrapper.className = 'keyboard-wrapper';
  }
}

function Application() {
  const container = document.createElement('div');
  container.className = 'app-container';

  const infoContainer = document.createElement('div');

  const infoFirstStr = document.createElement('p');
  infoFirstStr.innerText = 'Клавиатура создана в операционной системе Windows';

  const infoSecondStr = document.createElement('p');
  infoSecondStr.innerText = 'Для переключения языка комбинация: левыe ctrl + alt';

  const pageElement = new PageElement();
  const keyboard = new Keyboard();

  pageElement.keyboardWrapper.append(keyboard.wrapper);
  container.append(pageElement.textarea, pageElement.keyboardWrapper, infoContainer);
  infoContainer.append(infoFirstStr, infoSecondStr);

  return container;
}

const app = Application();

const body = document.querySelector('body');
body.append(app);
