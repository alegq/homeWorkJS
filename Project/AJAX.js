var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName='YALOVIK_SNOWBALLS_INFO';
var infoRec = []

function storeInfo() {
    updatePassword=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : lockGetReady, error : errorHandler
        }
    );
}

function lockGetReady(callresult) {
    if (callresult.error != undefined)
        alert(callresult.error);
    else {
        var info = infoRec
        $.ajax({
                url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
                data: {f: 'UPDATE', n: stringName, v: JSON.stringify(info), p: updatePassword},
                success: updateReady, error: errorHandler
            }
        );
    }
}

function updateReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
}

function restoreInfo() {
    $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readReady, error : errorHandler
        }
    );
}



function readReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
        var info=JSON.parse(callresult.result);
        infoRec=info
    }
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

//storeInfo()
restoreInfo();

function createRecords() {
    var menuGame = document.getElementById('menu')
    var recDiv = document.getElementById('rec_field')

    if (recDiv){
        menuGame.removeChild(recDiv)
        menuGame.style.height = '40%'
        menuGame.style.transitionDuration = '0.5s'
        menuGame.style.minHeight = '350px'
    }else {
        recDiv = document.createElement('div')
        recDiv.id = 'rec_field'

        menuGame.appendChild(recDiv)

        menuGame.style.height = '62%'
        menuGame.style.minHeight = '600px'
        menuGame.style.transitionDuration = '0s'
        recDiv.innerHTML = recDiv.innerHTML + '<h1 id="head_rec">Список рекордов:</h1>' + ' <ol id="ol_rec">\n' +
            '    <li></li>\n' +
            '    <li></li>\n' +
            '    <li></li>\n' +
            '    <li></li>\n' +
            '    <li></li>\n' +
            '  </ol>';
        var olRec = document.getElementById('ol_rec')
        olRec.style.opacity='100%'

        var recLi = document.getElementsByTagName('li')
        for(let i=0; i<recLi.length; i++){
            recLi[i].innerText = infoRec[i].name +'  ' + infoRec[i].record
        }
    }

}

function addRec() {
    infoRec.push({name: name,record: level-1})  //добавляем наш результат в конец массива
    infoRec = arrSor(infoRec)// сортируем массив и удаляем последний элемент

    function arrSor(infoRec) {
        for (let j = infoRec.length - 1; j > 0; j--) {
            for (let i = 0; i < j; i++) {
                if (infoRec[i].record > infoRec[i + 1].record) {
                    let temp = infoRec[i];
                    infoRec[i] = infoRec[i + 1];
                    infoRec[i + 1] = temp;
                }
            }
        }
        infoRec.reverse().pop()
        return infoRec
    }



    storeInfo() // записываем данные на сервер
}