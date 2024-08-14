import { isEscapeKey } from './util.js';
import * as constants from './selectors.js';

//функция закрывает сообщение (об успехе или ошибке) при определенных условиях
function closeUploadMessage(event) {
  event.stopPropagation();

  const element = constants.bodyElement.querySelector('.success') || constants.bodyElement.querySelector('.error');
  const closeButton = element.querySelector('button');

  if (event.target === element || event.target === closeButton || isEscapeKey(event)) {
    element.remove();
    constants.bodyElement.removeEventListener('click', closeUploadMessage);
    constants.bodyElement.removeEventListener('keydown', closeUploadMessage);
  }
}

//функция отображает сообщение (об успехе или ошибке) на экране
export function renderResponseMessage(templateId, buttonClass) {
  const template = document.querySelector(templateId).content;
  const messageElement = template.cloneNode(true).firstElementChild;

  constants.bodyElement.appendChild(messageElement);
  constants.bodyElement.addEventListener('click', closeUploadMessage);
  constants.bodyElement.addEventListener('keydown', closeUploadMessage);

  const button = messageElement.querySelector(buttonClass);
  if (button) {
    button.addEventListener('click', closeUploadMessage);
  }
}
