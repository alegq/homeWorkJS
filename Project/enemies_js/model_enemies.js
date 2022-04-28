function EnemysMod(id) {
    this.state = 1;
    var myView = null;
    this.manPosX =  fieldPosX+50 + Math.round(Math.random()*300)
    this.manPosY = fieldPosY + Math.round(Math.random()*350)
    //this.manPosY = 100 + ((Math.random() < 0.5) ? -1 : 1)*150;
    this.speedX = 3
    this.speedY = 3//  ((Math.random() < 0.5) ? -1 : 1)
    var EnemID = id
    var ball = null

    var tick_e = null //переменная для setInterval
    var timeoutThrow= null //переменная для setTimeout(поднять руку)
    var timeoutThrow2= null //переменная для setTimeout(сделать бросок)
    var timeoutNormal= null //переменная для setTimeout(вернуться в исходное состояние)


    this.start = function (view) {
        myView = view
         tick_e=setInterval(()=>this.positionMan(), 100)
    }

    this.positionMan = function () {
        //1-идет; 2-лепит снежок; 3-поднимает руку со снежком;
        //4-запускаем снежок; 5-возвращаемся в исходное состояние;
        switch (this.state ) {
            case 1:{
                if (Math.atan((pageHeight-this.manPosY)/(this.manPosX))<1 ||
                    this.manPosY+93<fieldPosY|| this.manPosY>fieldPosY+pageHeight/1.7 )
                {
                    this.speedX = 0;
                    this.speedY = 0;
                    this.state = 2;
                }
                break
            }
            case 2:{

                timeoutThrow=setTimeout(()=>this.state=3, 1000);
                break
            }
            case 3:{
                if (!ball){
                    ball= new Ball_mod()       // создаем новый снежок в руке
                    ball.update(this.manPosX+40,this.manPosY+125)       //задаем координты для нового снежк
                    ball.hero=false           // указываем что снежок от врага
                    timeoutThrow2=setTimeout(()=>this.state=4, 1000);
                }
                break
            }
            case 4:{
                ball.startMoveBall()
                clickSound(this.state)
                this.state=5
            }
            case 5:{
                timeoutNormal=setTimeout(()=>this.state=0, 1000);
                ball=null
                break
            }
            default:{break}
        }
        this.moveMan()
    }

    this.moveMan = function (){
        this.manPosX += this.speedX;
        this.manPosY += this.speedY;
        hashEnemiesPoss[EnemID] = [this.manPosX,this.manPosY]
        myView.moveMan()
    }
    this.killed = function () {
        this.clearEny()
        this.state=-1
        clickSound(this.state)
        myView.kill()
        if (Object.keys(hashEnemiesPoss).length  == 0){
            startNewLevel()
            clickSound(5)
        }
    }
    this.clearEny = function(){
        setTimeout(()=>{document.body.removeChild(document.getElementById(id))}, 2000);
        clearInterval(tick_e)
        clearTimeout(timeoutThrow)
        clearTimeout(timeoutThrow2)
        clearTimeout(timeoutNormal)
        delete hashEnemiesPoss[EnemID]
        if (ball){
            ball.stopBall()
        }
    }
}

//--------------------------------------------

