import * as configure from './config.js';

//функция для выполнения запросов к серверу.
export const load = (route, errorText, method = configure.Method.GET, body = null) =>
  fetch(`${configure.BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

//функция для получения данных с сервера.
export const getData = () =>
  load(configure.Route.GET_DATA, configure.ErrorText.GET_DATA);


//функция для отправки данных на сервер.
export const uploadPicture = (formData) =>
  load(configure.Route.UPLOAD_PICTURE, configure.ErrorText.UPLOAD_PICTURE, configure.Method.POST, formData);
