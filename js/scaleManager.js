import * as constants from './const.js';

// Функция для обновления масштаба
function updateScale(increment) {
  const currentValue = parseInt(constants.scaleControlValue.value, 10);
  const minScale = parseInt(constants.scaleControlValue.getAttribute('min'), 10);
  const maxScale = parseInt(constants.scaleControlValue.getAttribute('max'), 10);
  const stepScale = parseInt(constants.scaleControlValue.getAttribute('step'), 10);
  let newValue = currentValue + (increment * stepScale);

  if (newValue < minScale) {
    newValue = minScale;
  }
  if (newValue > maxScale) {
    newValue = maxScale;
  }

  constants.scaleControlValue.value = `${newValue}%`;
  downScaleImage();
}

// Функция для изменения масштаба изображения
function downScaleImage() {
  const scaleValue = parseInt(constants.scaleControlValue.value, 10) / 100;
  constants.imgUploadPreview.style.transform = `scale(${scaleValue})`;
}

constants.scaleSmallerButton.addEventListener('click', () => {
  updateScale(-1);
});
constants.scaleBiggerButton.addEventListener('click', () => {
  updateScale(1);
});

