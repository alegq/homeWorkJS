var pageWidth = document.documentElement.scrollWidth
var pageHeight = document.documentElement.scrollHeight
var countEnes = 1 // начальное количество врагов(зеленые человечки)
var hashEnemiesPoss = new Object() //хэш содержащий позиции всех врагов
var hashHeroPoss = new Object() //хэш содержащий позиции всех героев
var arrayHashysEnes = []  //массив со всеми врагами
var arrayHashysHero = [] //массив со всеми героями(если их будет несколько, в данной реализации только 1)
var level=1             //счетчик уровня
var name                //имя пользователя

var field = document.getElementById('field') //поля игры
var fieldPosX = field.offsetLeft  //положение поля
var fieldPosY = field.offsetTop   //положение поля

var menuGame = document.getElementById('menu')
var battomPlay = document.getElementById('play')
var battomRecords = document.getElementById('records')

window.onload = imgPos  //дожидаемся загрузки всей страницы

function imgPos() {
    var nameInp = document.getElementById('name_inp')
    var nameStor = window.localStorage.getItem('name')
    if (nameStor){
        nameInp.value=nameStor
    }

    var png1 = document.getElementById('png1')
    var png2 = document.getElementById('png2')
    png1.style.opacity=1
    png2.style.opacity=1

    setTopMenu()

}

function clearPngAndMenu(){
    png1.style.opacity=0
    png2.style.opacity=0
    menuGame.style.opacity = 0
    battomPlay.removeEventListener('click', play , false)
    battomRecords.removeEventListener('click', createRecords , false)
}

function play() {
    clickSoundInit()      // предзапуск звука по клику на кнопку "Play"
    var nameInp = document.getElementById('name_inp')
    name=nameInp.value         // достаем имя из поля ввода
    window.localStorage.setItem('name',name)//кладем имя в Storage
    clearPngAndMenu()       // убираем меню и png изображения
    createEmemies()     //создаем врагов(зеленые)

    //создаем героя(красный)
    var newHeroMan = []
    newHeroMan[0] = new HeroMod('red'+0)
    newHeroMan[1] = new HeroView('red'+0)
    newHeroMan[2] = new ControllerRedMan('red'+0)

    newHeroMan[0].start(newHeroMan[1])
    newHeroMan[1].indentific(newHeroMan[0])
    newHeroMan[2].config(newHeroMan[0])
    arrayHashysHero.push(newHeroMan)
}
function setTopMenu() {
    menuGame.style.top= 20 + '%'
    menuGame.style.opacity = 1
    battomPlay.addEventListener('click', play , false)
    battomRecords.addEventListener('click', createRecords , false)
}

var createEmemies = function () {
    //создаем врагов, помещая их объекты в общий массив [0]-mod,[1]-view,[2]-control
    for (let i = 0; i<countEnes; i++) {
        var newMan = []
        newMan[1] = new Enemys_view(i)
        newMan[0] = new EnemysMod(i)
        newMan[2] = new ControllerEnemies()

        newMan[1].indentific(newMan[0])
        newMan[0].start(newMan[1])
        newMan[2].config(newMan[0])

        arrayHashysEnes[i] = newMan
    }
}

var startNewLevel = function() {
    countEnes++ //увеличиваем количество врагов с каждым уровнем
    level++       //увеличивем счетчик уровней
    var Level = document.createElement('div')
    Level.className='end'
    Level.innerHTML = 'Level ' + level
    document.body.appendChild(Level)
    setTimeout(updeteEnemis,3000)

    function updeteEnemis(){
        createEmemies()
        document.body.removeChild(Level)
    }

}

var endGame = function () {
    clickSound(-1)
    clickSound(6)
    arrayHashysHero[0][2].endGame = true
    arrayHashysHero[0][2].start()

    for (let i=0; i<arrayHashysEnes.length;i++){
        arrayHashysEnes[i][2].stop()
    }


    var end = document.createElement('div')
    end.className='end'
    end.innerHTML = 'Game Over   <br>'+'    result:' + (level-1)
    document.body.appendChild(end)
    addRec()  // добавляем результат в рекорды
    setTimeout(clearSpase,4000)
       
    function clearSpase(){
        document.body.removeChild(end);
        setTopMenu()
        arrayHashysHero.forEach((x,i)=>{document.body.removeChild(document.getElementById('red'+i))})
        arrayHashysEnes.forEach((x,i)=>{console.log(x[0]);x[0].clearEny()})
        countEnes = 1
        hashEnemiesPoss = {}
        hashHeroPoss    = {}
        arrayHashysEnes = []
        arrayHashysHero = []
        level=1
    }

}





