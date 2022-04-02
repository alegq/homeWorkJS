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

console.log('X='+ posX+' Y='+posY)
field.style.position = 'absolute'
field.style.top = heightScore+'px'
field.style.left = posX+'px'
posX = Math.round(field.offsetLeft)
posY = Math.round(field.offsetTop)

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

console.log(posX+' '+widthField+' '+widhtRacket)


ball.style.width = radiusBall+'px'
ball.style.height = radiusBall+'px'
ball.style.left = posX+widthField/2-radiusBall/2+'px'
ball.style.top = posY+heightField/2-radiusBall/2+'px'

var ballH={
    posX : posX+widthField/2-radiusBall/2,
    posY : posY+heightField/2-radiusBall/2,
    speedX : 4,
    speedY : 1,
    width : radiusBall,
    height: radiusBall,

    update : function() {
        //var ballElem=document.getElementById('IBall');
        ball.style.left=Math.round(this.posX)+"px";
        ball.style.top=Math.round(this.posY)+"px";
    }
}

var racketLeftH={
    posX : posX+1,
    posY : posY+heightRacket,
    speedY : 3,
    width : widhtRacket,
    height: heightRacket,

    update : function() {
        //var ballElem=document.getElementById('IBall');
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
        //var ballElem=document.getElementById('IBall');
        // racketRight.style.left=Math.round(this.posX)+"px";
        // racketRight.style.top=Math.round(this.posY)+"px";
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
    ballH.posX = posX+widthField/2-radiusBall/2;
    ballH.posY = posY+heightField/2-radiusBall/2;
    ballH.update()
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
    console.log(5)
    //clearInterval(tickTime)
    if(ballH.posX+ballH.width>areaH.width-widhtRacket  )
    // вылетел ли мяч правее стены?
    if ( ballH.posX+ballH.width>areaH.width) {
       //ballH.speedX=-ballH.speedX;
        ballH.posX= areaH.width-ballH.width+1;
        scoreRight.innerHTML = scoreRight.innerText*1 + 1
        clearInterval(tickTime)
    }
    // вылетел ли мяч левее стены?
    if ( ballH.posX<posX ) {
        //ballH.speedX=-ballH.speedX;
        ballH.posX=posX;
        scoreLeft.innerHTML = scoreLeft.innerText*1 + 1
        clearInterval(tickTime)

}

    // ballH.speedY+=ballH.accelY;
    ballH.posY+=ballH.speedY;

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
    if (pressCtrl){
        if (racketLeftH.posY<(posY+heightField-heightRacket)){
            racketLeftH.posY += racketLeftH.speedY;
        }

    }
    if (pressShift){
        if (racketLeftH.posY>posY+1) {
            racketLeftH.posY -= racketLeftH.speedY;
        }
    }
    if (pressUp){
        if (racketRightH.posY>posY+1){
            racketRightH.posY -= racketLeftH.speedY;
        }

    }
    if (pressDown){
        if(racketRightH.posY<(posY+heightField-heightRacket)){
            racketRightH.posY += racketLeftH.speedY;
        }

    }
    racketLeftH.update();
    racketRightH.update();
    ballH.update();
}

console.log(startButt)
