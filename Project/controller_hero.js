class ControllerRedMan {
    constructor(){
        this.myModel = null; // с какой моделью работаем
        this.myField = null; // внутри какого элемента наша вёрстка

    }
    config=function(model,field) {
        this.myModel=model;
        this.myField=field;

        var conteinerRedMan = document.getElementById("red");
        //var SVGObjectElems=conteinerRedMan.getElementsByClassName('red_man');
        var SVGObjectElem=conteinerRedMan.getElementsByClassName('red_man')[0];

        var SVGDocument=SVGObjectElem.contentDocument;
        SVGDocument=SVGDocument.getElementById('svg_26')
        console.log(SVGDocument)

        conteinerRedMan.addEventListener("mousedown", fff, false)
        //redMan.addEventListener('click', ()=>this.myModel.focusRedMan())

        function fff() {
            console.log(1)

        }


    }

}

function fff() {
    console.log(1)

}
//
// document.querySelector("#r").onclick = fff
