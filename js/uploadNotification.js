import { isEscapeKey } from './util.js';
import * as constants from './constans/mainInterfaceConst.js';

//функция закрывает сообщение (об успехе или ошибке) при определенных условиях
function onMessageClose(event) {
  event.stopPropagation();

  const element = constants.bodyElement.querySelector('.success') || constants.bodyElement.querySelector('.error');
  const closeButton = element.querySelector('button');

  if (event.target === element || event.target === closeButton || isEscapeKey(event)) {
    element.remove();
    constants.bodyElement.removeEventListener('click', onMessageClose);
    constants.bodyElement.removeEventListener('keydown', onMessageClose);
  }
}

//функция отображает сообщение (об успехе или ошибке) на экране
export function onMessageRender(templateId, buttonClass) {
  const template = document.querySelector(templateId).content;
  const messageElement = template.cloneNode(true).firstElementChild;

  constants.bodyElement.appendChild(messageElement);
  constants.bodyElement.addEventListener('click', onMessageClose);
  constants.bodyElement.addEventListener('keydown', onMessageClose);

  const button = messageElement.querySelector(buttonClass);
  if (button) {
    button.addEventListener('click', onMessageClose);
  }
}
