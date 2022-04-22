function HeroMod(id) {
    var myView = null;
    var manPosX = 500
    var manPosY = 500
    var id = id
    var ball = null

    this.start = function (view) {
        myView = view
    }

    this.focusRedMan = function () {
        myView.state=1
        myView.updateViewRed()
    }
    this.blurRedMan = function () {
        //console.log('blurRedMan')
        myView.state=2
        myView.updateViewRed()
    }
    this.downRedMan = function (EO){
        EO=EO||window.event;
        var self = EO.target
        // найдём положение самой картинки относительно страницы
        var posDivMan=getElementPos(EO.target);

        // найдём координаты клика относительно картинки
        var mousedownX=Math.round(EO.pageX-posDivMan.left);
        var mousedownY=Math.round(EO.pageY-posDivMan.top);


        ball= new Ball_mod()       // создаем новый снежок в руке
        ball.update(posDivMan.left+70,posDivMan.top) //задаем координты для нового снежка

        document.body.addEventListener("mousemove",mousemoveFun,false)

        function mousemoveFun(EO){
            EO=EO||window.event;

            // найдём координаты клика относительно вэб страницы
            var clickX=Math.round(EO.pageX);
            var clickY=Math.round(EO.pageY);

            manPosX = clickX-mousedownX
            manPosY = clickY-mousedownY

            // установим новыен координаты для героя
            self.style.left=manPosX +"px"
            self.style.top=manPosY+"px";
            hashEnemiesPoss[id] = [manPosX,manPosY]// заносим координаты в общий хэш координатов всех персонажей
            ball.update(clickX-mousedownX+70,clickY-mousedownY) // обновляем координаты для снежка в руке
        }

        document.body.addEventListener("mouseup",mouseupFun,false)
        function mouseupFun() {
            ball.startMoveBall() //запускаем снежок
            document.body.removeEventListener("mousemove",mousemoveFun,false)
            document.body.removeEventListener("mouseup",mouseupFun,false)
        }

        myView.state=3
        myView.updateViewRed()
    }
    this.upRedMan = function (){
        myView.state=4
        myView.updateViewRed()
    }

    this.killedMan = function (){
        myView.state=5
        myView.updateViewRed()
        endGame()

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