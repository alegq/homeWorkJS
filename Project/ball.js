function Ball_mod() {
    var ball = document.createElement('div')
    ball.className='ball'
    console.log(ball)
    document.body.appendChild(ball)
    var ballPosX = 100
    var ballPosY = 100


    this.update = function() {
       // ball.style.left=Math.round(this.posX)+"px";
       // ball.style.top=Math.round(this.posY)+"px";
    }
    this.moveStart = function (){
        //ballH.posX = posX+widthField/2-radiusBall/2;
        //ballH.posY = posY+heightField/2-radiusBall/2;
        //this.update()
    }
}

var ball= new Ball_mod()
ball.update()
