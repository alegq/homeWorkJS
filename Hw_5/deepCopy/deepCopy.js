"use strict";

function deepCopy(element) {

    function copyObject(obj) {
        var clonObj = {} ;
        for(let i in obj) {
            if(obj[i] instanceof Array){
                clonObj[i] = copyArray(obj[i])
            }else if(obj[i] instanceof Object){
                clonObj[i] = copyObject(obj[i]);
            }else {
                clonObj[i] = obj[i];
            }

        }
        return clonObj
    }

    function copyArray(arr) {
        var clonArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] instanceof Array){
                clonArr[i] = copyArray(arr[i])
            }else if(arr[i] instanceof Object){
                clonArr[i] =  copyObject(arr[i])
            }else{
                clonArr[i] = arr[i]
            }

        }
        return clonArr
    }

    if  (element instanceof Array) {
        return copyArray(element)
    }else if (element instanceof Object){
        return copyObject(element)
    }else
        return element;
}

function squareRootsTests() {
    let count = 0
    let countNeg = 0

    console.log('--------TEST 1---------')
    var h1={ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };
    var h2=deepCopy(h1);

    if (h1!==h2){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1!==h2');countNeg++}
    if (h1.a===h2.a){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1.a===h2.a');countNeg++}
    if (h1.b!==h2.b){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1.b!==h2.b');countNeg++}
    if (h1.b.b1===h2.b.b1){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1.b.b1===h2.b.b1');countNeg++}
    if (h1.c!==h2.c){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1.c!==h2.c');countNeg++}
    if (h1.c[0]===h2.c[0]){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1.c[0]===h2.c[0]');countNeg++}
    if (h1.d===h2.d){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1.d===h2.d ');countNeg++}
    if (h1.e===h2.e){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h1.e===h2.e');countNeg++}
    if (isNaN(h2.f)){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! isNaN(h2.f)');countNeg++}
    if (h2.c instanceof Array){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! h2.c instanceof Array');countNeg++}

    console.log('--------TEST 2---------')
    var a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
    var a2=deepCopy(a1);
    if (a1!==a2){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1!==a2');countNeg++}
    if (typeof(a2)===typeof(a1)){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! typeof(a2)===typeof(a1)');countNeg++}
    if (a1[0]===a2[0]){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1[0]===a2[0]');countNeg++}
    if (a1[1]!==a2[1]){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1[1]!==a2[1]');countNeg++}
    if (a1[1].b1===a2[1].b1){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1[1].b1===a2[1].b1');countNeg++}
    if (a1[2]!==a2[2]){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1[2]!==a2[2]');countNeg++}
    if (a1[2][0]===a2[2][0]){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1[2][0]===a2[2][0]');countNeg++}
    if (a1[3]===a2[3]){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1[3]===a2[3]');countNeg++}
    if (a1[4]===a2[4]){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a1[4]===a2[4');countNeg++}
    if (isNaN(a2[5])){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! isNaN(a2[5]');countNeg++}
    if (a2[2] instanceof Array){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! a2[2] instanceof Array');countNeg++}

    console.log('--------TEST 3---------')
    var v1="sss";
    var v2=deepCopy(v1);

    if (typeof(v2)===typeof(v1)){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! typeof(v2)===typeof(v1)');countNeg++}
    if (v1===v2){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! v1===v2');countNeg++}

    console.log('--------TEST 4---------')
    var z1=null;
    var z2=deepCopy(z1);

    if (typeof(z2)===typeof(z1)){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! typeof(z2)===typeof(z1)');countNeg++}
    if (z1===z2){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! z1===z2');countNeg++}

    console.log('--------TEST 5 ---------')
    var n1=Number.NaN ;
    var n2=deepCopy(n1);

    if (typeof(n2)===typeof(n1)){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! typeof(n2)===typeof(n1)');countNeg++}
    if (isNaN(n2)){ console.log('пройден'); count++}else{console.log('НЕ ПРОЙДЕН! isNaN(n2)');countNeg++}

    console.log('\n' + 'прошли:' + count +'  ' + 'не прошли:' + countNeg)
}