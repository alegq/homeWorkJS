function Ball_mod() {
    var myMod = null;
    var myConrolMan= null;

    this.hero = true // оределяем герою или врагу принадлежит снежок
    var ballPosX = 0
    var ballPosY = 0
    var speedX = 10
    var speedY = 10
    var tick = null

    //создаем шар в руке
    var ball = document.createElement('div')
    ball.className='ball'
    document.body.appendChild(ball)

    this.start = function (conrolMan, mod ) {
        myMod = mod
        myConrolMan = conrolMan
    }

    this.update = function(x,y) {
        ball.style.left=Math.round(x)+"px";
        ball.style.top=Math.round(y)+"px";
        ballPosX = x
        ballPosY = y
    }
    this.moveBall = function (){
        if (this.hero){
            ballPosX -=speedX
            ballPosY -=speedY
        }else {
            ballPosX +=speedX
            ballPosY +=speedY
        }

        ball.style.left=ballPosX +"px"
        ball.style.top =ballPosY +"px"
    }
    this.startMoveBall = function () {
        tick =setInterval(()=>this.conrolBall(), 30)
    }
    this.conrolBall = function () {
        pageWidth = document.documentElement.scrollWidth
        pageHeight = document.documentElement.scrollHeight

        //проверяем вышел ли снежок за рамки поля
        if(ballPosX<fieldPosX || ballPosY<fieldPosY
            ||ballPosX<fieldPosX>fieldPosX+pageWidth/1.2 || ballPosY>fieldPosY+pageHeight/1.2
        ){
            this.stopBall()
        }
        //проверяем попал снежок в персонажа
        for ( let k in hashEnemiesPoss ){
            if (ballPosX>hashEnemiesPoss[k][0]+53&& ballPosX<hashEnemiesPoss[k][0]+53+50 &&
                ballPosY>hashEnemiesPoss[k][1]+108&& ballPosY<hashEnemiesPoss[k][1]+98+95&& this.hero)
            {
                this.stopBall()
                arrayHashysEnes[k][0].killed() //вызываем метод killed у model_enemies убитого человечка
                return;
            }
        }
        for ( let k in hashHeroPoss ){
            if (ballPosX>hashHeroPoss[k][0]&& ballPosX<hashHeroPoss[k][0]+95 &&
                 ballPosY>hashHeroPoss[k][1]&& ballPosY<hashHeroPoss[k][1]+115)
            {
                    this.stopBall()
                    arrayHashysHero[0][0].killedMan()
                    return;
            }
        }

        this.moveBall()

    }


    this.stopBall = function () {
        clearInterval(tick)
        document.body.removeChild(ball)
    }

}

