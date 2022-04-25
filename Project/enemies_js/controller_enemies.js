class ControllerEnemies {
    constructor(){
        this.myModel = null; // с какой моделью работаем
        this.endGame = false //
        this.tick_e = null //переменная для setInterval
        this.timeout = null

    }
    config=function(model) {
        this.myModel=model;
        this.tick_e =setInterval(()=> this.start(), 100)
    }
    start=function () {
           if (this.myModel.state==0){
               this.myModel.state=1
               // this.myModel.speedX=-2
               // this.myModel.speedY=-2

            }
    }
    stop=function () {
        this.myModel.state=0
        clearInterval(this.tick_e)
    }
}

