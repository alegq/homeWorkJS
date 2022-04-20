function Ball_mod() {
    var myMod = null;
    var myConrolMan= null;

    this.hero = true // герою или врагу принадлежит снежок
    var ballPosX = 0
    var ballPosY = 0
    var speedX = 10
    var speedY = 10
    var tick = null

    //создаем шар в руке
    var ball = document.createElement('div')
    ball.className='ball'
    console.log(ball)
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
        tick =setInterval(()=>this.conrolBall(), 40)
    }
    this.conrolBall = function () {
        for ( let k in hashEnemiesPoss ){
            if (ballPosX>hashEnemiesPoss[k][0]+53&& ballPosX<hashEnemiesPoss[k][0]+53+50 &&
                ballPosY>hashEnemiesPoss[k][1]+108&& ballPosY<hashEnemiesPoss[k][1]+98+95&&
                this.hero){
                this.stopBall()
                //removeEnemy(k)
                arrayHashуsEnes[k][0].killed()
                return;
            }else if(ballPosX>700&&!this.hero){
                this.stopBall()
                //return;
                //console.log(5)
            }else            {
                this.moveBall()
            }
        }
    }


    this.stopBall = function () {
        clearInterval(tick)
        //setTimeout(()=>{document.body.removeChild(ball)}, 1000);
        document.body.removeChild(ball)
    }

}

