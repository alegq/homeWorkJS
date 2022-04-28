class ControllerRedMan {
    constructor(id){
        this.myModel = null; // с какой моделью работаем
        this.endGame = false //
        this.id = id

    }
    config=function(model,field) {
        this.myModel=model;
        this.start()
    }
    start=function () {
        var conteinerRedMan = document.getElementById(this.id);
        if (!this.endGame){
            conteinerRedMan.addEventListener("mouseover", this.myModel.focusRedMan, false)
            conteinerRedMan.addEventListener("mouseout", this.myModel.blurRedMan, false)
            conteinerRedMan.addEventListener("mousedown", this.myModel.downRedMan, false)
        }else {
            conteinerRedMan.removeEventListener("mouseover", this.myModel.focusRedMan, false)
            conteinerRedMan.removeEventListener("mouseout", this.myModel.blurRedMan, false)
            conteinerRedMan.removeEventListener("mousedown", this.myModel.downRedMan, false)
        }
    }

}

