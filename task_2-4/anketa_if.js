"use strict"
let lastName = prompt('Введите фамилию')
while (lastName === '' ||  lastName == null){
    lastName = prompt('Введите фамилию')
}

let firstName = prompt('Введите имя')
while (firstName === '' || firstName == null){
    firstName = prompt('Введите имя')
}

let fatherNames = prompt('Введите отчество')
while (fatherNames === '' || fatherNames == null){
    fatherNames = prompt('Введите отчество')
}

let age = prompt('Введите возраст')
let ageNumber = Number(age)
while (Number.isNaN(ageNumber) || ageNumber === 0){
       age = prompt('Возраст введен не коректно, введите возраст еще раз')
       ageNumber = Number(age)
 }

const gender = confirm('Ваш пол - мужской?')

let pension
let gender_concr = 'мужской'

if (gender){
    if (age >= 63){
        pension = 'да'
    }else {
        pension = 'нет'
    }
}else{
    gender_concr = 'женский'
    if (age >= 58){
        pension = 'да'
    }else {
        pension = 'нет'
    }
}

alert('ФИО: '  + lastName + ' ' + firstName + ' ' + fatherNames + '\n' +
      'возраст, лет: ' + ageNumber +'\n' +
      'возраст, дней: ' + ageNumber*365 + '\n' +
      'через 5 лет вам будет: ' + (ageNumber+5) + '\n' +
      'пол: ' + gender_concr + '\n' +
      'пенсионный возраст: ' + pension)


