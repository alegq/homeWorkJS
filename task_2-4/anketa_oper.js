const lastName = prompt('Введите фамилию');
const firstName = prompt('Введите имя');
const fatherNames = prompt('Введите отчество');
const age = prompt('Введите возраст');
const gender = confirm('Ваш пол - мужской?');

let pension;
let gender_concr = 'мужской';

(age >= 63 && gender) ? pension = 'да' : pension = 'нет';
(age >= 58 && !gender) ? (pension = 'да', gender_concr = 'женский') : (pension = 'нет', gender_concr = 'женский')

alert('ФИО: '  + lastName + ' ' + firstName + ' ' + fatherNames + '\n' +
    'возраст, лет: ' + age +'\n' +
    'возраст, дней: ' + age*365 + '\n' +
    'пол: ' + gender_concr + '\n' +
    'пенсионный возраст: ' + pension);


