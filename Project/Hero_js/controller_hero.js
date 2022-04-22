class ControllerRedMan {
    constructor(){
        this.myModel = null; // с какой моделью работаем
        this.myField = null; // внутри какого элемента наша вёрстка
        this.endGame = false //

    }
    config=function(model,field) {
        this.myModel=model;
        this.myField=field;
        this.start()
    }
    start=function () {
        var conteinerRedMan = document.getElementById("red1");
        if (!this.endGame){
            conteinerRedMan.addEventListener("mouseover", this.myModel.focusRedMan, false)
            conteinerRedMan.addEventListener("mouseout", this.myModel.blurRedMan, false)
            conteinerRedMan.addEventListener("mousedown", this.myModel.downRedMan, false)
            conteinerRedMan.addEventListener("mouseup", this.myModel.upRedMan, false)
        }else {
            conteinerRedMan.removeEventListener("mouseover", this.myModel.focusRedMan, false)
            conteinerRedMan.removeEventListener("mouseout", this.myModel.blurRedMan, false)
            conteinerRedMan.removeEventListener("mousedown", this.myModel.downRedMan, false)
            conteinerRedMan.removeEventListener("mouseup", this.myModel.upRedMan, false)
        }
    }

}

