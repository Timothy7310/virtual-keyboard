import '../scss/main.scss';
import '../index.html';
import keyBoradSetUp from './modules/keyboard-setup';
import KeyBoard from './modules/keyboard';

const keyboard = new KeyBoard(keyBoradSetUp, 'body', navigator.userAgent);
keyboard.render();
keyboard.languageMessage();
keyboard.operatingSystemMessage();
