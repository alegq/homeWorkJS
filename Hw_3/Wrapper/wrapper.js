"use strict";
function wrapP(str, attribute) {
    var newStr = str.replace(/</i, '&lt;').replace(/>/i, '&gt;')
                    .replace(/'/i, '&apos;').replace(/"/i, '&quot;')

    if (attribute){
        return newStr = '<P ' + 'lang=\'' + attribute.lang + '\'>' + newStr + '</P>'
    }
    else {
        return newStr = '<P>' + newStr + '</P>'
    }
}

function wrapH1(str,attribute){
    var newStr = str.replace(/</i, '&lt;').replace(/>/i, '&gt;')
        .replace(/'/i, '&apos;').replace(/"/i, '&quot;')

    if (attribute){
        return newStr = '<H1 ' + 'aling=\'' + attribute.align + "' " + 'title=\'' + attribute.title+ '\'>' + newStr + '</H1>'
    }
    else {
        return newStr = '<H1>' + newStr + '</H1>'
    }
}

console.log( wrapP("Однажды в студёную зимню пору"))
console.log( wrapP("Однажды в студёную зимнюю пору",{lang:"ru"}) );
console.log( wrapP("Однажды в <студёную> зимнюю пору") );
console.log( wrapH1("СТИХИ",{align:"center",title:"M&M's"}) );

