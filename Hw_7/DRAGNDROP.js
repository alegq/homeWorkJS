var ImgEl=document.getElementsByTagName('img')

let img = document.createElement('img');
img.src = 'http://fe.it-academy.by/Sites/0000007/sax.jpg';


imgPos()//изменяем позиционирование всех img
function imgPos(){
    var imgTop=[]
    var imgLeft=[]
    for (let i = 0; i<ImgEl.length; i++){
        imgTop[i]=ImgEl[i].offsetTop
        imgLeft[i]=ImgEl[i].offsetLeft
        console.log('X:'+ imgLeft[i] + '   '+'Y: '+ imgTop[i])
    }
    for (let i = 0; i<ImgEl.length; i++){
        ImgEl[i].style.position='absolute';
        ImgEl[i].style.left=imgLeft[i]+"px";
        ImgEl[i].style.top=imgTop[i]+"px";
        ImgEl[i].draggable=false
        ImgEl[i].style.zIndex = i
    }
}

for (let i = 0; i<ImgEl.length; i++) {
    ImgEl[i].addEventListener("mousedown", mousedownFun, false)
}

function mousedownFun(EO){
    EO=EO||window.event;

    EO.target.style.cursor = "pointer";
    var self = EO.target
    // найдём положение самой картинки относительно страницы
    var boxPos=getElementPos(EO.target);

    function getElementPos(elem) {
        var bbox=elem.getBoundingClientRect();
        return {
            left: bbox.left+window.pageXOffset,
            top: bbox.top+window.pageYOffset
        };
    }

    // найдём координаты клика относительно картинки
    var mousedownX=Math.round(EO.pageX-boxPos.left);
    var mousedownY=Math.round(EO.pageY-boxPos.top);

    // изменим z-index картинки
    changeIndex(EO.target)
    function changeIndex (elem) {
        var allImg = document.getElementsByTagName('img')
        var z_max = 0
        for (let i=0; i<allImg.length; i++) {
            if(z_max<allImg[i].style.zIndex){
                z_max=allImg[i].style.zIndex
            }
        }
        elem.style.zIndex = Number(z_max)+1;
    }

     //EO.target.addEventListener("mousemove",mousemoveFun,false)
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
        EO.target.style.cursor = "auto";
    }
}


