# Movies Explorer - фронтенд SPA по поиску фильмов

<p align="center">
  <img src="https://img.shields.io/badge/node.js-v16.16.0-green">
  <img src="https://img.shields.io/badge/react-v18.2.0-blue">
  <img src="https://img.shields.io/badge/react--router-v5.2.1-orange">
  <img src="https://img.shields.io/badge/formik-v2.2.9-purple">
</p>

### URL:
https://movies-explorer.sk.nomoredomainsclub.ru

### О проекте:
Приложение содержит:
 - Страницу с __описанием__ проекта и __портфолио__ [создателя](https://github.com/StasKudinow);
 - Страницы __регистрации__ и __авторизации__;
 - Страницу __поиска фильмов__: с формой для поиска и блоком результатов;
 - Страницу с __сохраненными фильмами__;
 - Страницу __редактирования профиля__ авторизованного пользователя;
 
Реализована функциональность поиска фильмов из стороннего API, сохранение фильмов в собственное API,
фильтрация в форме поиска, регистрация и авторизация пользователя. 

### Запуск проекта:
* Установить __npm__ `npm install -g npm`;
* Запустить проект `npm start`;

### Функциональность проекта:
* Одностраничное приложение на __React__ с использованием синтаксиса __JSX__;
* Код разбит на __модули__, каждый с уникальной функциональностью;
* __Компонентная__ файловая структура. Почти в каждом компоненте существует __CSS__ файл со стилями данного компонента;
* Общая функциональность собрана в __корневом__ компоненте `App.js`;
* Стили написаны на нативном __CSS3__. Сторонние библиотеки не используются;
* Все стили подключены в общий файл `index.css`, который затем импортируется в корневой файл `index.js`;
* Приложение сверстано по дизайн-макету [Figma](https://disk.yandex.ru/d/Ek4uIDwolOYXIQ). При верстки использовался __Pixel Perfect__;
* __Форма поиска фильмов__ содержит функционал фильтрации по __символу__, а так же имеет __чекбокс__ для фильтрации короткометражек, длиной менее 40 минут;
* Фильмы запрашиваются из __стороннего__ [API](https://api.nomoreparties.co/beatfilm-movies) при __первом запросе__ на поиск;
* __Результаты поиска, значение формы поиска и состояние чекбокса__ сохраняются в `localStorage` браузера пользователя. При перезагрузке страницы данные подгружаются из __хранилища__, в результате чего страница преобретает свое последнее __состояние__; 
* Когда пользователь __лайкает__ фильм, тот сохраняется в __собственное__ [API](https://github.com/StasKudinow/movies-explorer-api) проекта, после чего все сохраненные пользователем фильмы отображаются на странице __сохраненные фильмы__;
* При __дизлайке__ на странице __фильмов__, или при __удалении__ на странице __сохраненных фильмов__, происходит запрос на удаление к __серверу__ с последующими результатами;
* Все формы __валидируются__. Для валидации используется библиотека `formik`;
* Кнопки __submit__ имеют состояние __disabled__, если форма невалидна. __Поля формы__ имеют состояние __disabled__, пока выполняется запрос на сервер;
* Имеются __всплывающие подсказки__ во всем приложении для __отзывчивости__ интерфейса;
* Для __адаптивности__ приложения используется библиотека `react-responsive`;

## Технологии в проекте:
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript&logoColor=yellow"/>
  <img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=React&logoColor=blue"/>
  <img src="https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=CSS3&logoColor=blue"/>
  <img src="https://img.shields.io/badge/npm-black?style=for-the-badge&logo=npm&logoColor=red"/>
</p>

🗄️ [Backend](https://github.com/StasKudinow/movies-explorer-api)

🌎 __IP:__ 62.84.125.241

🦸🏻‍♂️ __Developers:__ [Stas Kudinov](https://github.com/StasKudinow)
