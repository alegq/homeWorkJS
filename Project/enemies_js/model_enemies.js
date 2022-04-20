function EnemysMod(id) {
    this.state = 1;
    var myView = null;
    this.manPosX = 300
    this.manPosY = 300 //+ ((Math.random() < 0.5) ? -1 : 1)*150;
    var speedX = 3
    var speedY = 3//*  ((Math.random() < 0.5) ? -1 : 1)
    var EnemID = id
    var tick_e = null


    this.start = function (view) {
        myView = view
         tick_e=setInterval(()=>this.positionMan(), 100)
    }

    this.positionMan = function () {
        if ((Math.atan((pageHeight-this.manPosY)/(this.manPosX))<1 ||
            this.manPosY+93<fieldPosY|| this.manPosY>fieldPosY+pageHeight/1.7)&& this.state ==1
            ){
            speedX = 0
            speedY = 0
            this.state = 2;
        }
        if (this.state == 4){
            ball= new Ball_mod()       // создаем новый снежок в руке
            ball.update(this.manPosX+40,this.manPosY+125) //задаем координты для нового снежка
            //ball.style.zIndex=2
            this.state = 5
        }
        if(this.state == 6){
            ball.hero=false
            ball.startMoveBall()
        }

        this.moveMan()
    }

    this.moveMan = function (){
        this.manPosX += speedX;
        this.manPosY += speedY;
        hashEnemiesPoss[EnemID] = [this.manPosX,this.manPosY]
        myView.moveMan()
    }
    this.killed = function () {
        clearInterval(tick_e)
        delete hashEnemiesPoss[EnemID]
        myView.kill()
    }
}

//--------------------------------------------

