function calculator() {
   // Calculator

   const field = document.querySelector('[data-field]');
   const femaleButt = document.querySelector('[data-gender="0"]'),
         maleButt = document.querySelector('[data-gender="1"]'),
         activityButts = document.querySelectorAll('[data-ratio]'),
         activityParent = document.querySelector('[data-ratioParent]');
   const ccalText = document.querySelector('[data-ccal]');
   let calcInfo = {
       gender: 0,
       height: 170,
       weight: 70,
       age: 20,
       activity: 1.375
   }
   const calcFunc = () => {
       let {gender, height, weight, age, activity} = calcInfo;
       let ccal;
       switch (gender){
           case 0: ccal = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity); break;
           case 1: ccal = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity); break;
       } 
       if(!isNaN(ccal) && typeof(ccal) === 'number'){
           ccalText.innerHTML = `
           <div class="calculating__subtitle">
               Ваша суточная норма калорий:
           </div>
           <div class="calculating__result">
               <span>${ccal}</span> ккал
           </div>`;
       } else {
           ccalText.innerHTML = `
           <div class="calculating__subtitle">
               Введите правильные данные!
           </div>`;
       }
       
   }

   field.addEventListener('click', butt => {
       const target = butt.target;
       if (target === femaleButt) {
           calcInfo.gender = +0;
           femaleButt.classList.add('calculating__choose-item_active');
           maleButt.classList.remove('calculating__choose-item_active');
       } else if (target === maleButt) {
           calcInfo.gender = +1;
           femaleButt.classList.remove('calculating__choose-item_active');
           maleButt.classList.add('calculating__choose-item_active');
       }
       if (target.parentNode === activityParent) {
           activityButts.forEach(e => {
               if (e === target) {e.classList.add('calculating__choose-item_active')}
               else {e.classList.remove('calculating__choose-item_active')}
           })
           calcInfo.activity = +target.dataset.ratio;
       }
       calcFunc();
   });

   field.addEventListener('keyup', butt =>{ 
       const val = +butt.target.value;
       switch (butt.target.dataset.feature){
           case 'height': calcInfo.height = val; break;
           case 'weight': calcInfo.weight = val; break;
           case 'age': calcInfo.age = val; break;
           default: break;
       }
       calcFunc();
   })
}

module.exports = calculator;