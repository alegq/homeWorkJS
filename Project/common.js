var pageWidth = document.documentElement.scrollWidth
var pageHeight = document.documentElement.scrollHeight

var field = document.getElementById('field')
field.style.width = Math.round(pageWidth/1.2)+'px'
field.style.height = Math.round(pageHeight/1.2)+'px'
var fieldPosX = field.offsetLeft
field.style.position = 'absolute'
field.style.top = pageHeight/20+'px'
field.style.left = fieldPosX+'px'
    fieldPosX = field.offsetLeft
var fieldPosY = field.offsetTop



window.onload = imgPos

function imgPos() {
    var view1 = new Enemys_view(1)
    var mod1 = new Enemys_mod

    var viewHero_1 = new hero_view(3)
    viewHero_1.indentific(mod1)

    view1.indentific(mod1)
    mod1.start(view1)
}


