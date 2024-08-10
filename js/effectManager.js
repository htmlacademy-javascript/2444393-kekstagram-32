import * as constants from './const.js';

// функция, которая применяет фильтр к изображению на основе текущего значения слайдера и выбранного эффекта
function applyFilter(value) {
  const selectedEffect = document.querySelector('input[name="effect"]:checked').value;
  const filterFunction = constants.effectOptions[selectedEffect]?.filter || (() => '');
  constants.imagePreview.style.filter = filterFunction(value);
}

//функция, которая используется для настройки параметров слайдера
function updateSliderOptions(effect) {
  const options = constants.effectOptions[effect] || { range: { min: constants.SLIDER_DEFAULTS.min, max: constants.SLIDER_DEFAULTS.max }, start: constants.SLIDER_DEFAULTS.start, step: constants.SLIDER_DEFAULTS.step };
  constants.effectLevelSlider.noUiSlider.updateOptions({
    range: options.range,
    start: options.start,
    step: options.step,
  }, false);
}

// функция, которая обновляет слайдер и применяет эффект при изменении выбранного фильтра
function handleEffectChange() {
  const selectedEffect = document.querySelector('input[name="effect"]:checked').value;

  if (selectedEffect === 'none') {
    constants.effectLevelContainer.style.display = 'none';
    constants.imagePreview.style.filter = '';
    constants.effectLevelValue.value = '';
    constants.effectLevelValue.setAttribute('value', '');
  } else {
    constants.effectLevelContainer.style.display = 'block';
    updateSliderOptions(selectedEffect);
    applyFilter(constants.effectLevelSlider.noUiSlider.get());
  }
}

//функция, которая обновляет значение слайдера и применяет фильтр при изменении положения слайдера
function handleSliderUpdate() {
  const value = constants.effectLevelSlider.noUiSlider.get();
  constants.effectLevelValue.value = value;
  constants.effectLevelValue.setAttribute('value', value);
  applyFilter(value);
}

// Инициализация слайдера
noUiSlider.create(constants.effectLevelSlider, {
  range: {
    min: constants.SLIDER_DEFAULTS.min,
    max: constants.SLIDER_DEFAULTS.max,
  },
  start: constants.SLIDER_DEFAULTS.start,
  step: constants.SLIDER_DEFAULTS.step,
  connect: constants.SLIDER_DEFAULTS.connect,
});

constants.effectRadios.forEach((input) => {
  input.addEventListener('change', handleEffectChange);
});

constants.effectLevelSlider.noUiSlider.on('update', handleSliderUpdate);

export { applyFilter };
