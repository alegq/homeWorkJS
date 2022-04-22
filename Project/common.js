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
    var menuGame = document.getElementById('menu')

    function setTopMenu(newY) {
        menuGame.style.top= newY + '%'
        console.log(menuGame.style)
    }
    setTopMenu(20)


    //создаем врагов, помещая их объекты в общий массив [0]-mod,[1]-view,[2]-control
function Play() {

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



