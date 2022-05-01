"use strict";

// в закладке УРЛа будем хранить разделённые подчёркиваниями слова
// #Load - начальная страница - загрузка данных
// #Menu - страница настроек игры
// #Play - страницы игры (активной)

// отслеживаем изменение закладки в УРЛе
// оно происходит при любом виде навигации
// в т.ч. при нажатии кнопок браузера ВПЕРЁД/НАЗАД
window.onhashchange=switchToStateFromURLHash;

// текущее состояние приложения
// это Model из MVC
var SPAState={};

// вызывается при изменении закладки УРЛа
// а также при первом открытии страницы
// читает новое состояние приложения из закладки УРЛа
// и обновляет ВСЮ вариабельную часть веб-страницы
// соответственно этому состоянию
// это упрощённая реализация РОУТИНГА - автоматического выполнения нужных
// частей кода в зависимости от формы URLа
// "роутинг" и есть "контроллер" из MVC - управление приложением через URL
function switchToStateFromURLHash() {
    var URLHash = window.location.hash;

    // убираем из закладки УРЛа решётку
    // (по-хорошему надо ещё убирать восклицательный знак, если есть)
    var stateStr = URLHash.substr(1);

    if (stateStr != "") { // если закладка непустая, читаем из неё состояние и отображаем
        var parts = stateStr.split("_");
        SPAState = {pagename: parts[0]}; // первая часть закладки - номер страницы
    } else {
        SPAState = {pagename: 'Menu_start'}; // иначе показываем главную страницу
    }

    switch (SPAState.pagename) {
        case 'Menu_start':{
            window.onload = imgPos
        }
        case 'Menu':
            removeRecords()
            if(!menu){
                clearSpas()
                imgPos()
            }
            break;
        case 'Play':
            play()
            break;
        case 'PreRecords':
            switchToRecordsPage()
            break;
        case 'Records':
            restoreInfo();
            clearSpas()
            createRecords()
            break;
    }
    console.log(SPAState.pagename)
}
// устанавливает в закладке УРЛа новое состояние приложения
// и затем устанавливает+отображает это состояние
function switchToState(newState) {
    // устанавливаем закладку УРЛа
    // нужно для правильной работы кнопок навигации браузера
    // (т.к. записывается новый элемент истории просмотренных страниц)
    // и для возможности передачи УРЛа другим лицам
    var stateStr=newState.pagename;
    location.hash=stateStr;

    // АВТОМАТИЧЕСКИ вызовется switchToStateFromURLHash()
    // т.к. закладка УРЛа изменилась (ЕСЛИ она действительно изменилась)
}

function switchToMenuPage() {
    switchToState( { pagename:'Menu' } );
}

function switchToPlayPage() {
    switchToState( { pagename:'Play' } );
}
function switchToPreRecordsPage() {
    switchToState( { pagename:'PreRecords' } );
}
function switchToRecordsPage() {
    switchToState( { pagename:'Records' } );
}

    // переключаемся в состояние, которое сейчас прописано в закладке УРЛ
    switchToStateFromURLHash();
