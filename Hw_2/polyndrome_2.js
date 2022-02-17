"use strict"
let strc = prompt('Введите строку:')


function polyndrome(str) {
    str = str.toLowerCase().replace(/ё/g, 'е')
    const simNeg = '.,;:!?-()\" '

    let newStr = ''
    for (let i = 0; i<str.length; i++){
        if (!(simNeg.includes(str.charAt(i)))) {
            newStr += str.charAt(i)
        }
    }

    function polyndRec(newStr){
        if ( newStr.length <= 1) {
            return (true)
        }else if (newStr.charAt(0) !== newStr.charAt(newStr.length-1)){
            return (false)
        }else {
            return polyndRec(newStr.slice(1,newStr.length-1))
        }
    }

    return polyndRec(newStr)
}
alert(polyndrome(strc) ? 'Палиндром' : 'Не палиндром')


