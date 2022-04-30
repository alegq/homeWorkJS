"use strict";
function HeroView(id) {
    var myModel = null;
    this.state = 0;

    var conteinerMan = document.getElementById("red");
    conteinerMan = conteinerMan.cloneNode(true)
    conteinerMan.id = id
    conteinerMan.style.zIndex=pageHeight
    document.body.appendChild(conteinerMan)
    var SVGObjectElems = conteinerMan.getElementsByClassName('red_man');
    SVGObjectElems[0].style.opacity = 1


    this.indentific = function (model, field) {
        myModel = model
    }

    this.updateViewRed = function () {
        switch(this.state){
            case 1:{
                SVGObjectElems[0].style.opacity = 0
                SVGObjectElems[1].style.opacity = 1
                break
            }
            case 2:{
                SVGObjectElems[0].style.opacity = 1
                SVGObjectElems[3].style.opacity = 0
                SVGObjectElems[1].style.opacity = 0
                break
            }
            case 3:{
                SVGObjectElems[1].style.opacity = 0
                SVGObjectElems[3].style.opacity = 0
                SVGObjectElems[2].style.opacity = 1
                break
            }
            case 4:{
                SVGObjectElems[2].style.opacity = 0
                SVGObjectElems[3].style.opacity = 1
                break
            }
            case -1:{
                SVGObjectElems[0].style.opacity = 0
                SVGObjectElems[1].style.opacity = 0
                SVGObjectElems[2].style.opacity = 0
                SVGObjectElems[3].style.opacity = 0
                SVGObjectElems[4].style.opacity = 1
                conteinerMan.style.overflow='visible'
                break
            }
            default:{
                break
            }

        }
    }
}