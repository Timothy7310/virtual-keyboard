import '../scss/main.scss';
import '../index.html';
import keyBoradSetUp from './modules/keyboard-setup';
import KeyBoard from './modules/keyboard';
import TextArea from './modules/textarea';
import mouseListener from './modules/mouse-listener';
import keyboardListener from './modules/keyboard-listener';

const textarea = new TextArea('body');
textarea.render();
const keyboard = new KeyBoard(keyBoradSetUp, 'body', navigator.userAgent, localStorage.getItem('isEng'));
keyboard.render();
keyboard.languageCheck();
keyboard.languageMessage();
keyboard.operatingSystemMessage();

mouseListener();
keyboardListener();
