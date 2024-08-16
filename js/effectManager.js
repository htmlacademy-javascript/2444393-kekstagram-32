import * as configure from './config.js';
import * as imgUploadConstants from './constans/imageUploadConst.js';

//функция, которая применяет фильтр к изображению на основе текущего значения слайдера и выбранного эффекта
function applyFilter(value) {
  const selectedEffect = document.querySelector('input[name="effect"]:checked').value;

  if (!configure.effectOptions[selectedEffect]) {
    return;
  }

  const filterFunction = configure.effectOptions[selectedEffect].filter || (() => '');
  imgUploadConstants.imagePreview.style.filter = filterFunction(value);
}


//функция, которая используется для настройки параметров слайдера
function updateSliderOptions(effect) {
  const options = configure.effectOptions[effect] || { range: { min: configure.SLIDER_DEFAULTS.min, max: configure.SLIDER_DEFAULTS.max }, start: configure.SLIDER_DEFAULTS.start, step: configure.SLIDER_DEFAULTS.step };
  imgUploadConstants.effectLevelSlider.noUiSlider.updateOptions({
    range: options.range,
    start: options.start,
    step: options.step,
  }, false);
}

// функция, которая обновляет слайдер и применяет эффект при изменении выбранного фильтра
function handleEffectChange() {
  const selectedEffect = document.querySelector('input[name="effect"]:checked').value;

  if (selectedEffect === 'none') {
    imgUploadConstants.effectLevelContainer.style.display = 'none';
    imgUploadConstants.imagePreview.style.filter = '';
    imgUploadConstants.effectLevelValue.value = '';
    imgUploadConstants.effectLevelValue.setAttribute('value', '');
  } else {
    imgUploadConstants.effectLevelContainer.style.display = 'block';
    updateSliderOptions(selectedEffect);
    applyFilter(imgUploadConstants.effectLevelSlider.noUiSlider.get());
  }
}

//функция, которая обновляет значение слайдера и применяет фильтр при изменении положения слайдера
function handleSliderUpdate() {
  const value = imgUploadConstants.effectLevelSlider.noUiSlider.get();
  imgUploadConstants.effectLevelValue.value = value;
  imgUploadConstants.effectLevelValue.setAttribute('value', value);
  applyFilter(value);
}

// Инициализация слайдера
noUiSlider.create(imgUploadConstants.effectLevelSlider, {
  range: {
    min: configure.SLIDER_DEFAULTS.min,
    max: configure.SLIDER_DEFAULTS.max,
  },
  start: configure.SLIDER_DEFAULTS.start,
  step: configure.SLIDER_DEFAULTS.step,
  connect: configure.SLIDER_DEFAULTS.connect,
});

imgUploadConstants.effectRadios.forEach((input) => {
  input.addEventListener('change', handleEffectChange);
});

imgUploadConstants.effectLevelSlider.noUiSlider.on('update', handleSliderUpdate);

export { applyFilter };
