var pageWidth = document.documentElement.scrollWidth
var pageHeight = document.documentElement.scrollHeight

var countEnes = 1 //количество врагов(зеленые человечки)

var field = document.getElementById('field')
field.style.width = Math.round(pageWidth/1.2)+'px'
field.style.height = Math.round(pageHeight/1.2)+'px'
var fieldPosX = field.offsetLeft
field.style.position = 'absolute'
field.style.top = pageHeight/20+'px'
field.style.left = fieldPosX+'px'
    fieldPosX = field.offsetLeft
var fieldPosY = field.offsetTop

var hashEnemiesPoss = new Object()
var arrayHashуsEnes = []


window.onload = imgPos

function imgPos() {


    //создаем врагов, помещая их объекты в общий массив [0]-mod,[1]-view,[2]-control
    for (let i = 0; i<countEnes; i++) {
        var newMan = []
        newMan[1] = new Enemys_view(i)
        newMan[0] = new EnemysMod(i)

        newMan[1].indentific(newMan[0])
        newMan[0].start(newMan[1])

        arrayHashуsEnes[i] = newMan
    }
    // var view1 = new Enemys_view(1)
    // var mod1 = new EnemysMod(1)
    //
    // view1.indentific(mod1)
    // mod1.start(view1)

//----------------------
     var modHero_1 = new HeroMod()
     var viewHero_1 = new HeroView(1)
     var controllerHero_1 = new ControllerRedMan()
//
     modHero_1.start(viewHero_1)
     viewHero_1.indentific(modHero_1)
     controllerHero_1.config(modHero_1)
}

// удалить убитого врага(зеленый)
var removeEnemy = function (id) {
    console.log(id)

}


