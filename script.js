import { Keyboard } from './Keyboard/keyboard.js';

// const keyboard = new Keyboard();
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

  const pageElement = new PageElement();
  const keyboard = new Keyboard();

  pageElement.keyboardWrapper.append(keyboard.wrapper);
  container.append(pageElement.textarea, pageElement.keyboardWrapper);

  return container;
}

const app = Application();

const body = document.querySelector('body');
body.append(app);
document.querySelector('textarea').addEventListener('keydown', (e) => e.preventDefault());
