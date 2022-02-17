const strc = prompt('Введите строку:')

function removeSpace(str) {
    let start = 0
    let end = 0

    while (str.charAt(0 + start) === ' '){start++}
    if (start == str.length ) {
        console.log('Только пробелы')
        return (str = '')
    }

    while (str.charAt(str.length -1 - end ) === ' '){end++}
    if(start == 0 && end == 0){
        console.log('Пробелов нет')
        return str
    }

    return str.substr(start,str.length - (start+end))
}

alert('#' + removeSpace(strc) + '#')


