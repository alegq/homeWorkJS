"use strict"
let strc = prompt('Введите строку:')
strc = strc.trim()
while (!strc){
    strc = prompt('Введите строку:')
}



function vowels(str) {
    str = str.toLowerCase()
    strc = strc.replace(/ё/g, 'е')
    const volvel = '.,;:!?-()\" '

    let i = 0
    let j = str.length-1
    let ind = true

    while (i<j){
        symbolsNegativeBegin()
        symbolsNegativeEnd()
        if(str.charAt(i) == str.charAt(j)){
            i++; j--
        }else{ ind = false; break}
    }

    function symbolsNegativeBegin(){
        let ind = true
        while (i < j) {
            for (var prop  in volvel) {
                if(volvel[prop]==str.charAt(i)){
                    ind = false
                    break
                }
            }
            if(ind){break} else{i++; ind = true}



        }
    }
    function symbolsNegativeEnd(){
        let ind = true
        while (j > i) {
            for (var prop  in volvel) {
                if(volvel[prop]==str.charAt(j)){
                    ind = false
                    break
                }
            }
            if(ind){break} else{j--; ind = true}

        }
    }
    return ind ? 'Палиндром' : 'Не палиндром'
}

alert(vowels(strc))