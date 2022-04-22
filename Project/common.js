var pageWidth = document.documentElement.scrollWidth
var pageHeight = document.documentElement.scrollHeight

var countEnes = 1 //количество врагов(зеленые человечки)

var field = document.getElementById('field')
field.style.width = 85 + '%'
field.style.height = 85 +'%'
var fieldPosX = field.offsetLeft
field.style.position = 'absolute'
field.style.top = 5+'%'
field.style.left = 7+'%'
    fieldPosX = field.offsetLeft
var fieldPosY = field.offsetTop

var hashEnemiesPoss = new Object()
var arrayHashуsEnes = []
var arrayHashуsHero = []

window.onload = imgPos


function imgPos() {
    var name = document.getElementById('name_inp')
    console.log(name)
    var nameStor = window.localStorage.getItem('name')
    console.log(nameStor)
    if (nameStor){
        console.log(6)
        name.value=nameStor
    }
    var menuGame = document.getElementById('menu')
    var png1 = document.getElementById('png1')
    var png2 = document.getElementById('png2')
    png1.style.opacity=1
    png2.style.opacity=1
    function setTopMenu(newY) {
        menuGame.style.top= newY + '%'
    }
    function clearPng(){
        png1.style.opacity=0
        png2.style.opacity=0
        menuGame.style.opacity = 0
    }
    setTopMenu(20)
    var battomPlay = document.getElementById('play')
    battomPlay.addEventListener('click', play , false)


    //создаем врагов, помещая их объекты в общий массив [0]-mod,[1]-view,[2]-control
function play() {
    var name = document.getElementById('name_inp')
    console.log(name)

    name=name.value // достаем имя из поля ввода
    window.localStorage.setItem('name',name)//кладем имя в хэш
    clearPng()

    for (let i = 0; i<countEnes; i++) {
        var newMan = []
        newMan[1] = new Enemys_view(i)
        newMan[0] = new EnemysMod(i)
        newMan[2] = new ControllerEnemies()

        newMan[1].indentific(newMan[0])
        newMan[0].start(newMan[1])
        newMan[2].config(newMan[0])

        arrayHashуsEnes[i] = newMan
    }
}

    // var view1 = new Enemys_view(1)
    // var mod1 = new EnemysMod(1)
    //
    // view1.indentific(mod1)
    // mod1.start(view1)

//----------------------
     var newHeroMan = []
    newHeroMan[0] = new HeroMod('red1')
    newHeroMan[1] = new HeroView(1)
    newHeroMan[2] = new ControllerRedMan()
//
    newHeroMan[0].start(newHeroMan[1])
    newHeroMan[1].indentific(newHeroMan[0])
    newHeroMan[2].config(newHeroMan[0])
    arrayHashуsHero.push(newHeroMan)
}

var endGame = function () {
    console.log('end')
   //newHeroMan[2].endGame = true
    arrayHashуsHero[0][2].endGame = true
    arrayHashуsHero[0][2].start()

}



