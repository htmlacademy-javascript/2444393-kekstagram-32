import * as imgUploadConstants from './constans/imageUploadConst.js';

//функция для обновления масштаба
function updateScale(increment) {
  const currentValue = parseInt(imgUploadConstants.scaleControlValue.value, 10);
  const minScale = parseInt(imgUploadConstants.scaleControlValue.getAttribute('min'), 10);
  const maxScale = parseInt(imgUploadConstants.scaleControlValue.getAttribute('max'), 10);
  const stepScale = parseInt(imgUploadConstants.scaleControlValue.getAttribute('step'), 10);
  let newValue = currentValue + (increment * stepScale);

  if (newValue < minScale) {
    newValue = minScale;
  }
  if (newValue > maxScale) {
    newValue = maxScale;
  }

  imgUploadConstants.scaleControlValue.value = `${newValue}%`;
  downScaleImage();
}

//функция для изменения масштаба изображения
function downScaleImage() {
  const scaleValue = parseInt(imgUploadConstants.scaleControlValue.value, 10) / 100;
  imgUploadConstants.imgUploadPreview.style.transform = `scale(${scaleValue})`;
}

//функция для сброса масштаба изображения
export function resetScale() {
  imgUploadConstants.scaleControlValue.value = '100%';
  downScaleImage();
}

imgUploadConstants.scaleSmallerButton.addEventListener('click', () => {
  updateScale(-1);
});
imgUploadConstants.scaleBiggerButton.addEventListener('click', () => {
  updateScale(1);
});
