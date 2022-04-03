var field = document.getElementById('field')
var startButt = document.getElementById('button')
var score = document.getElementById('count')
var racketLeft = document.getElementById('racketL')
var racketRight = document.getElementById('racketR')
var ball = document.getElementById('ball')
var scoreLeft = document.getElementsByTagName('span')[0]
var scoreRight = document.getElementsByTagName('span')[1]


const widthField = 500              // ширина поля
const heightField = 300             // высота поля
var widthButton = Math.round(widthField/9)      // ширина кнопки
var heightButton = Math.round(heightField/12)   // высота кнопки
var widthScore =  Math.round(widthField/5)      // ширина счета
var heightScore = Math.round(heightField/6)     // высота счета
var widhtRacket = Math.round(widthField/30)     // ширина ракетки
var heightRacket = Math.round(heightField/3)    // высота ракетки
var radiusBall = Math.round(widthField/15)

field.style.width = Math.round(widthField)+'px'
field.style.height = Math.round(heightField)+'px'
var posX = field.offsetLeft
var posY = field.offsetTop


field.style.position = 'absolute'
field.style.top = heightScore+'px'
field.style.left = posX+'px'
posX = field.offsetLeft
posY = field.offsetTop

startButt.style.width = widthButton+'px'
startButt.style.height = heightButton+'px'
startButt.style.position = 'absolute'
startButt.style.left = posX +"px"
startButt.style.top = posY - heightButton - 10 +"px"

score.style.width = widthScore+'px'
score.style.height = heightScore+'px'
score.style.left = posX + widthField/2 - widthScore/2+'px'
score.style.lineHeight = heightScore + 'px'
score.style.fontSize = heightScore/1.2 + 'px'

racketLeft.style.position = 'absolute'
racketLeft.style.width = widhtRacket+'px'
racketLeft.style.height = heightRacket+'px'
racketLeft.style.left = posX+1+'px'
racketLeft.style.top = posY+heightRacket+'px'

racketRight.style.position = 'absolute'
racketRight.style.width = widhtRacket+'px'
racketRight.style.height = heightRacket+'px'
racketRight.style.left = Math.round(posX+widthField-widhtRacket+1)+'px'
racketRight.style.top = Math.round(posY+heightRacket)+'px'

ball.style.width = radiusBall+'px'
ball.style.height = radiusBall+'px'
ball.style.left = posX+widthField/2-radiusBall/2+'px'
ball.style.top = posY+heightField/2-radiusBall/2+'px'

var ballH={
    posX : posX+widthField/2-radiusBall/2,
    posY : posY+heightField/2-radiusBall/2,
    speedX : 8,
    speedY : 1,
    width : radiusBall,
    height: radiusBall,

    update : function() {
        ball.style.left=Math.round(this.posX)+"px";
        ball.style.top=Math.round(this.posY)+"px";
    },
    moveStart : function (){
        ballH.posX = posX+widthField/2-radiusBall/2;
        ballH.posY = posY+heightField/2-radiusBall/2;
        this.update()
    }
}

var racketLeftH={
    posX : posX+1,
    posY : posY+heightRacket,
    speedY : 3,
    width : widhtRacket,
    height: heightRacket,

    update : function() {
        racketLeft.style.left=Math.round(this.posX)+"px";
        racketLeft.style.top=Math.round(this.posY)+"px";
    }
}

var racketRightH={
    posX : posX+widthField-widhtRacket+1,
    posY : posY+heightRacket,
    speedY : 3,
    width : widhtRacket,
    height: heightRacket,

    update : function() {
        racketRight.style.left=this.posX+"px";
        racketRight.style.top=this.posY+"px";
    }
}

var areaH={
    width : posX + widthField,
    height : posY + heightField
}

startButt.addEventListener('click',start, false)
var tickTime

function start() {
    ballH.moveStart()
    //ballH.update()
    tickTime = setInterval(tick,40);
    addEventListener('keydown', moveLeftRacket, false )
    addEventListener('keyup', stopLeftRacket, false )
    clearInterval(tick)
}

var pressCtrl = false
var pressShift = false
var pressUp = false
var pressDown = false

function moveLeftRacket(EO) {
    EO=EO||window.event;
    EO.preventDefault()
    console.log(EO.code)
    switch (EO.code) {
        case 'ControlLeft'  : pressCtrl = true; break;
        case 'ShiftLeft'    : pressShift = true; break;
        case 'ArrowUp'      : pressUp = true; break;
        case 'ArrowDown'    : pressDown = true; break;
        default: break;
    }
}
function stopLeftRacket(EO) {
    EO=EO||window.event;

    switch (EO.code) {
        case 'ControlLeft' : pressCtrl = false; break;
        case 'ShiftLeft'   : pressShift = false; break;
        case 'ArrowUp'     : pressUp = false; break;
        case 'ArrowDown'   : pressDown = false; break;
        default: break;
    }
}

function tick() {

    ballH.posX+=ballH.speedX;
    ballH.posY+=ballH.speedY;

    //отбился ли мяч правой ракеткой
    if(ballH.posX+ballH.width>areaH.width-widhtRacket
        && ballH.posY>racketRightH.posY-ballH.width
        && ballH.posY<racketRightH.posY+heightRacket
    ){
        ballH.speedX=-ballH.speedX;
        ballH.posX= areaH.width-ballH.width-widhtRacket+1;
    }

    //отбился ли мяч левой ракеткой
    if(ballH.posX<posX+widhtRacket
        && ballH.posY>racketLeftH.posY-ballH.width
        && ballH.posY<racketLeftH.posY+heightRacket
    ){
        ballH.speedX=-ballH.speedX;
        ballH.posX= posX + widhtRacket;
    }
    // вылетел ли мяч правее стены?
    if ( ballH.posX+ballH.width>areaH.width) {
        ballH.posX= areaH.width-ballH.width+1;
        scoreLeft.innerHTML = scoreLeft.innerText*1 + 1
        clearInterval(tickTime)
    }
    // вылетел ли мяч левее стены?
    if ( ballH.posX<posX ) {
        ballH.posX=posX;
        scoreRight.innerHTML = scoreRight.innerText*1 + 1
        clearInterval(tickTime)

    }

    // вылетел ли мяч ниже пола?
    if ( ballH.posY+ballH.height>areaH.height ) {
        ballH.speedY=-ballH.speedY;
        ballH.posY=areaH.height-ballH.height;
    }
    // вылетел ли мяч выше верхней грани?
    if ( ballH.posY<posY ) {
        ballH.speedY=-ballH.speedY;
        ballH.posY=posY;
    }

    //--------- обратка нажатия клавиш---------//
    if (pressCtrl && racketLeftH.posY<posY+heightField-heightRacket){
        racketLeftH.posY += racketLeftH.speedY;
    }
    if (pressShift && racketLeftH.posY>posY+1){
        racketLeftH.posY -= racketLeftH.speedY;
    }
    if (pressUp && racketRightH.posY>posY+1){
        racketRightH.posY -= racketLeftH.speedY;
    }
    if (pressDown && racketRightH.posY<(posY+heightField-heightRacket)){
        racketRightH.posY += racketLeftH.speedY;
    }
    //----------

    racketLeftH.update();
    racketRightH.update();
    ballH.update();
}


