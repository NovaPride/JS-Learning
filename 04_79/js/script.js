window.addEventListener('DOMContentLoaded', function() {

    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    
    // Timer

    const getRemainTime = (time) => {
        let now = Math.floor((new Date(time) - new Date()) / 1000);
        let res = {
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0
        }
        if (now <= 0) return res;
        res.seconds = now % 60;
        now = (now - res.seconds) / 60;

        res.minutes = now % 60;
        now = (now - res.minutes) / 60;

        res.hours = now % 24;
        res.days = (now - res.hours) / 24;
        return res;
    }

    const setClock = (remTime) => {
        const {days, hours, minutes, seconds} = remTime;
        const timer = document.querySelector('.timer');
        timer.querySelector('#days').textContent = days < 10 ? `0${days}` : days;
        timer.querySelector('#hours').textContent = hours < 10 ? `0${hours}` : hours;
        timer.querySelector('#minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
        timer.querySelector('#seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;
    }

    const updateMyClock = (time) => {
        setClock(getRemainTime(time));
        const t = setInterval(() => {setClock(getRemainTime(time))}, 1000);
    }
    
    updateMyClock("2024-04-11");

    //Menu

    class Menu {
        constructor(subtitle, descr, price, imgLink){
            this.subtitle = subtitle;
            this.descr = descr;
            this.price = price;
            this.imgLink = imgLink;
            this.menu_item = document.createElement("div");
            this.menu_item.classList.add("menu__item");
            this.menu_item.innerHTML = `
                    <img src="${this.imgLink}" alt="post">
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>`;
        }
        append(){
            const menuList = document.querySelector("[data-menuList]");
            menuList.firstElementChild.appendChild(this.menu_item);
        }
    }
    
    const allMenus = [];
    
    allMenus.push(new Menu(
        `Меню "Фитнес"`, 
        `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`, 
        `229`, 
        `img/tabs/vegy.jpg`
    ));
    allMenus.push(new Menu(
        `Меню "Премиум"`, 
        `В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!`, 
        `550`, 
        `img/tabs/elite.jpg`
    ));
    allMenus.push(new Menu(
        `Меню "Постное"`, 
        `Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.`, 
        `430`, 
        `img/tabs/post.jpg`
    ));
    
    allMenus.forEach(e => {
        e.append();
    });

});