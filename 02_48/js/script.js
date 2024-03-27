/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const advert = document.getElementsByClassName('promo__adv'),
          genre = document.getElementsByClassName('promo__genre'),
          bground = document.getElementsByClassName('promo__bg'),
          interactiveList = document.querySelector('.promo__interactive-list'),
          interactiveListOldItem = interactiveList.querySelectorAll('.promo__interactive-item'),
          moviesList = [];
    
    advert[0].innerHTML = "ДРАМА";
    genre[0].innerHTML = "";
    bground[0].style.background = 'url("img/bg.jpg") center center / cover no-repeat;';
    movieDB.movies.sort();
    
    for (let i = 0; i < movieDB.movies.length; i++) { //5
        movieDB.movies[i] = movieDB.movies[i].toLowerCase();
    }
    

    
    {//  document.body.innerHTML = ;
    
    // console.log(1, document.body.childNodes);
    // console.log(2, document.body.firstChild);
    // console.log(3, document.body.lastChild);
    // console.log(4, document.querySelector(`#current`).parentNode.parentNode);
    // //data atributes
    // console.log(5, document.querySelector(`[data-current="2"]`).parentElement.innerHTML);
    // console.log(6, document.querySelector(`[data-current="2"]`).parentElement.nextElementSibling);
    
    // const btn = document.querySelector(`[data-submit_btn=""]`);
    // console.log (btn);
    
    // // btn.onclick = function () {
    // //     console.log("dasdsa");
    // // };
    
    // const deleteElement = (e) => {
    //     console.log(e.target.value);
        
    // }
    // //убирает базу (не будет перезагружать страницу)
    // btn.addEventListener('click', function(e) {
    //     e.preventDefault();
    // });
    
    // btn.addEventListener('mouseenter', deleteElement);
    }
    
    //1
    function updateTrashEvents(){
        const trashCans = document.querySelectorAll(`.delete`);
        trashCans.forEach(item => {
            item.addEventListener('click', () => {
                movieDB.movies.splice(
                    movieDB.movies.findIndex(movie => {
                        return movie === item.parentElement.firstChild.innerHTML;
                    })
                , 1);
                reloadMovieList();
            });
        });
    }

    function reloadMovieList(){
        interactiveList.innerHTML = "";
        movieDB.movies.sort();
        for (let i = 0; i < movieDB.movies.length; i++) {
            interactiveList.innerHTML += `<li class="promo__interactive-item"><p>${movieDB.movies[i]}</p> <div class="delete"></div> </li> `;
        }
        updateTrashEvents();
    }
    
    reloadMovieList();

    const movieText = document.querySelector(`[data-submit="text"]`),
          movieCheck = document.querySelector(`[data-submit="checkbox"]`),
          movieBtn = document.querySelector(`[data-submit="btn"]`);
          
    const addMovie = (e) => {
        e.preventDefault();
        if (movieText.value < 1) return;
        if (movieCheck.checked) console.log(`Добавляем любимый фильм`); //4
        movieDB.movies.push(movieText.value.length < 22 ? movieText.value.toLowerCase() : movieText.value.slice(0, 21).toLowerCase() + "..."); //2, 5
        reloadMovieList();
    };
    
    movieBtn.addEventListener('click', addMovie); 
});

























