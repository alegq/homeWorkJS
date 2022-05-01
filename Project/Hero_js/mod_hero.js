"use strict";
function HeroMod(id) {
    var myView = null;
    var manPosX = null
    var manPosY = null
    var id = id
    var ball = null
    var tick =null
    var selfs=this
    var manPosXProc = 70
    var manPosYProc = 70
    var manWidth = 95
    var manHeight = 115

    this.start = function (view) {
        myView = view
        tick = setInterval(()=>this.updateD(),40)
    }

    this.focusRedMan = function () {
        myView.state=1
        myView.updateViewRed()
        //clearInterval(tick)
    }
    this.blurRedMan = function (EO) {
        var self = EO.target
        myView.state=2
        myView.updateViewRed()
        // tick = setInterval(()=>selfs.updateD(self),40)
    }
    this.downRedMan = function (EO){
        EO=EO||window.event;
        var self = EO.target
        // найдём положение самой картинки относительно страницы
        var posDivMan=getElementPos(EO.target);

        pageWidth = document.documentElement.scrollWidth
        pageHeight = document.documentElement.scrollHeight

        // найдём координаты клика относительно картинки
        var mousedownX=Math.round(EO.pageX-posDivMan.left);
        var mousedownY=Math.round(EO.pageY-posDivMan.top);

        if(!ball){
            ball= new Ball_mod()       // создаем новый снежок в руке
            ball.hero=true
            ball.update(posDivMan.left+pageWidth*0.032,posDivMan.top-pageWidth*0.003) //задаем координты для нового снежка
        }

        document.body.addEventListener("mouseup",mouseupFun,false)
        document.body.addEventListener("mousemove",mousemoveFun,false)

        function mousemoveFun(EO){
            EO=EO||window.event;

            // найдём координаты клика относительно вэб страницы
            var clickX=Math.round(EO.pageX);
            var clickY=Math.round(EO.pageY);

            manPosX = clickX-mousedownX
            manPosY = clickY-mousedownY

            // установим новыен координаты для героя
            if (manPosY>pageWidth*0.5*0.05 && manPosY<pageWidth*0.55*0.05+pageWidth*0.45*0.85 && manPosX<pageWidth*0.07+pageWidth*0.85-pageWidth*0.05 && manPosX>pageWidth*0.07) {
                self.style.left=manPosX +"px"
                self.style.top=manPosY+"px";

                manPosXProc=manPosX*100/pageWidth
                manPosYProc=manPosY*100/(pageWidth*0.45)

                hashHeroPoss[id] = [manPosX,manPosY]// заносим координаты в общий хэш координатов всех персонажей
                if(ball){
                    ball.update(clickX-mousedownX+pageWidth*0.035,clickY-mousedownY) // обновляем координаты для снежка в руке
                }

            }
        }
        function mouseupFun() {
            if (ball){
                ball.startMoveBall() //запускаем снежок
                ball=null
                myView.state=4
                clickSound(myView.state)
                myView.updateViewRed()
            }
            document.body.removeEventListener("mousemove",mousemoveFun,false)
            document.body.removeEventListener("mouseup",mouseupFun,false)
        }
        myView.state=3
        myView.updateViewRed()
    }


    this.killedMan = function (){
        clearInterval(tick)
        myView.state=-1
        clickSound(this.state)
        myView.updateViewRed()
        if(ball){
            ball.stopBall()
            ball = null
        }
        endGame()
    }

    this.updateD = function (){
        var conteinerMan = document.getElementById(id);
        conteinerMan.style.left=pageWidth*manPosXProc/100 +"px"
        conteinerMan.style.top=pageWidth*0.45*manPosYProc/100 +"px"
        conteinerMan.style.width=pageWidth*0.05+"px"
        conteinerMan.style.height=pageWidth*0.05*1.4 +"px"
    }

    //------------------
    function getElementPos(elem) {
        var bbox=elem.getBoundingClientRect();
        return {
            left: bbox.left+window.pageXOffset,
            top: bbox.top+window.pageYOffset
        };
    }

}
