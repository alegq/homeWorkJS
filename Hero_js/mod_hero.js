function HeroMod() {
    this.state = 1;
    var myView = null;
    this.manPosX = 500
    this.manPosY = 500

    this.start = function (view) {
        myView = view
        // setInterval(()=>this.positionMan(), 100)
    }

    this.focusRedMan = function () {
        //console.log('focusRedMan')
        this.state=2
        myView.focusMan()
    }
    this.blurRedMan = function () {
        //console.log('blurRedMan')
        this.state=3
        myView.blurMan()
    }
    this.downRedMan = function (EO){
        EO=EO||window.event;
        var self = EO.target
        // найдём положение самой картинки относительно страницы
        var posDivMan=getElementPos(EO.target);

        // найдём координаты клика относительно картинки
        var mousedownX=Math.round(EO.pageX-posDivMan.left);
        var mousedownY=Math.round(EO.pageY-posDivMan.top);

        document.body.addEventListener("mousemove",mousemoveFun,false)

        function mousemoveFun(EO){
            EO=EO||window.event;

            // найдём координаты клика относительно вэб страницы
            var clickX=Math.round(EO.pageX);
            var clickY=Math.round(EO.pageY);

            // установим новыен координаты для картинки
            self.style.left=clickX -mousedownX +"px"
            self.style.top=clickY -mousedownY+"px";
        }

        document.body.addEventListener("mouseup",mouseupFun,false)
        function mouseupFun() {
            //EO.target.removeEventListener("mousemove",mousemoveFun,false)
            document.body.removeEventListener("mousemove",mousemoveFun,false)
            document.body.removeEventListener("mouseup",mouseupFun,false)
            EO.target.style.cursor = "auto";
        }

        this.state=4

        myView.downMan()
    }
    this.upRedMan = function (){
        //console.log('upRedMan')
        this.state=5
        myView.upMan()
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