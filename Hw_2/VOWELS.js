"use strict"
let strc = prompt('Введите строку:')

//------------- Not forEach, filter, reduce----------
function vowels(str) {
    str = str.toLowerCase()
    let count = 0
    const volvels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ]

    for (var prop in str) {
        if (volvels.includes(str[prop])) {
            count++
        }
    }
    return count
}

//------------- forEach ----------------------------
function vowelsForEach(str) {
    str = str.toLowerCase()
    let count = 0
    const volvels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ]

    function f(element) {
        if (volvels.includes(element)) {
            count++
        }
    }
    str.split('').forEach(f)

    return count
}

//------------- filter ----------------------------
function vowelsFilter(str) {
    str = str.toLowerCase()
    const volvels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ]
    var count = str.split('').filter(element => (volvels.includes(element))).length

    return count
}

//------------- reduce ----------------------------
function vowelsReduce(str) {
    str = str.toLowerCase()
    const volvels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е' ]

    function f(count, index) {
        if (volvels.includes(index)) {
            count++
        }
        return count
    }
    return str.split('').reduce(f,0)
}

console.log(vowels(strc))
console.log(vowelsForEach(strc))
console.log(vowelsFilter(strc))
console.log(vowelsReduce(strc))
