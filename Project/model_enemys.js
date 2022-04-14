function Enemys_mod() {
    this.state = 1;
    var myView = null;
    this.manPosX = 300
    this.manPosY = 300
    var speedX = 2
    var speedY = 2

    this.start = function (view) {
        myView = view
        setInterval(()=>this.positionMan(), 100)
    }

    this.positionMan = function () {
        if (Math.atan((pageHeight-this.manPosY)/(this.manPosX))<1){
            this.manPosX -= 1
            this.manPosY -= 1
            speedX = 0
            speedY = 0
            this.state = 2;
        }
        this.moveMan()
    }

    this.moveMan = function (){
        this.manPosX += speedX;
        this.manPosY += speedY;
        myView.moveMan()
    }
}

//--------------------------------------------
function hero_mod() {
    this.state = 1;
    var myView = null;
    this.manPosX = 300
    this.manPosY = 300


    this.start = function (view) {
        myView = view
        setInterval(()=>this.positionMan(), 100)
    }

    this.positionMan = function () {
        if (Math.atan((pageHeight-this.manPosY)/(this.manPosX))<1){
            this.manPosX -= 1
            this.manPosY -= 1
            speedX = 0
            speedY = 0
            this.state = 2;
        }
        this.moveMan()
    }

    this.moveMan = function (){
        this.manPosX += speedX;
        this.manPosY += speedY;
        myView.moveMan()
    }
}