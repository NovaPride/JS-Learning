/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const advert = document.getElementsByClassName('promo__adv');
advert[0].style.display = 'none';

//2
const genre = document.getElementsByClassName('promo__genre');
genre[0].innerHTML = "ДРАМА";

//3
const bground = document.getElementsByClassName('promo__bg');
bground[0].style.background = 'url("img/bg.jpg") center center / cover no-repeat;';

//4
const interactiveList = document.querySelector('.promo__interactive-list'),
      interactiveListOldItem = interactiveList.querySelectorAll('.promo__interactive-item'),
      moviesList = [];
movieDB.movies.sort();

for (let i = 0; i < interactiveListOldItem.length; i++) {
    interactiveListOldItem[i].remove();
}

for (let i = 0; i < movieDB.movies.length; i++) {
    moviesList[i] = document.createElement('li');
    moviesList[i].classList.add('promo__interactive-item');
    moviesList[i].innerHTML = movieDB.movies[i];
    moviesList[i].style.display = 'list-item'; //5_1
    interactiveList.appendChild(moviesList[i]);
}

//5_2
interactiveList.style.listStyleType = 'decimal';
