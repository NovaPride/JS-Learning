/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    let num = +prompt('Сколько фильмов вы уже посмотрели?');
    while (num == '' || num == null || isNaN(num)) {
        num = +prompt('Сколько фильмов вы уже посмотрели?');
    }
    return num;
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt((i + 1) + '. Один из последних просмотренных фильмов?'),
            b = prompt((i + 1) + '. На сколько оцените его?');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB['movies'][a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

personalMovieDB.count = start();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.privat);
writeYourGenres();

console.log(personalMovieDB);