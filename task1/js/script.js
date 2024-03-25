'use strict';

const fullname = prompt('Введите ФИО','');
const group = prompt('Введите номер группы','');
const homework = prompt('Введите название домашки','');

function HomeworkPrint(fullname, group, homework){
    homework = "* Домашняя работа: <<" + homework + ">>";
    group = "* Выполнил: студент гр. " + group;
    fullname = "* " + fullname;
    var maxLen = Math.max(fullname.length, group.length, homework.length);
    console.log('*'.repeat(maxLen + 2));
    console.log(homework + ' '.repeat(maxLen - homework.length) + ' *');
    console.log(group + ' '.repeat(maxLen - group.length) + ' *');
    console.log(fullname + ' '.repeat(maxLen - fullname.length) + ' *');
    console.log('*'.repeat(maxLen + 2));

}



HomeworkPrint(fullname, group, homework);










