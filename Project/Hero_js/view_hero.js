
function HeroView(id) {
    var myModel = null;
    var myField = null;

    var conteinerMan = document.getElementById("red");
    conteinerMan.id += id
    var SVGObjectElems = conteinerMan.getElementsByClassName('red_man');
    SVGObjectElems[0].style.opacity = 1
    // SVGObjectElems[0].addEventListener('load', function () {
    //     SVGObjectElems[0].style.opacity = 1
    // });


    this.indentific = function (model, field) {
        myModel = model
        console.log(5)
    }
    this.focusMan = function () {
        SVGObjectElems[0].style.opacity = 0
        SVGObjectElems[1].style.opacity = 1
    }
    this.blurMan = function () {
        SVGObjectElems[0].style.opacity = 1
        SVGObjectElems[3].style.opacity = 0
        SVGObjectElems[1].style.opacity = 0
    }
    this.downMan = function () {
        SVGObjectElems[1].style.opacity = 0
        SVGObjectElems[3].style.opacity = 0
        SVGObjectElems[2].style.opacity = 1

    }
    this.upMan = function () {
        SVGObjectElems[2].style.opacity = 0
        SVGObjectElems[3].style.opacity = 1
    }

}