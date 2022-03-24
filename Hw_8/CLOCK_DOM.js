var inputElem = document.getElementsByTagName('input')

inputElem[1].addEventListener('click',buildClock, false) //обработчик событий кнопки



function buildClock(EO){
    EO=EO||window.event;

    var diameterClk = inputElem[0].value // диаметр часов
    var radiusClk = diameterClk/2
    var diametrSmallCircle = diameterClk/8
    var radiusSmallCircle = diametrSmallCircle/2
    var borderClk = radiusClk/25 // расстояние между маленьким кругом и большим

    var smallArrowHeight = radiusClk/2 //длинна малой стрелки
    var smallArrowWidth = radiusClk/30 //ширина малой стрелки

    var middleArrowHeight = radiusClk/1.4 //длинна средней стрелки
    var middleArrowWidth = radiusClk/50 //ширина средней стрелки

    var longArrowHeight = radiusClk/1.2 //длинна длинной стрелки
    var longArrowWidth = radiusClk/100 //ширина длинной стрелки

    var posX = 20
    var posY = 20

    document.body.removeChild(document.getElementsByTagName('div')[0])  // удаляем поля ввода вывода

    //большой круг циферблата
    var bigCircle = document.createElement('div')
    bigCircle.className = 'big_circle'
    bigCircle.style.width = diameterClk + 'px'
    bigCircle.style.height = diameterClk + 'px'

    bigCircle.style.position='absolute';
    bigCircle.style.left=posX+"px";
    bigCircle.style.top =posX + "px";
    document.body.appendChild(bigCircle)

    console.log(bigCircle.offsetTop + '    ' + bigCircle.offsetLeft)

    for (let i = 0; i<12; i++) {
        // контейнер малого круга
        var containerSmallCircle = document.createElement('div')
        containerSmallCircle.className = 'container_Sml_Cir'
        containerSmallCircle.style.width = diametrSmallCircle + 'px'
        containerSmallCircle.style.height = radiusClk - borderClk + 'px'
        containerSmallCircle.style.position = 'absolute';
        containerSmallCircle.style.left = posX + radiusClk - radiusSmallCircle + "px";
        containerSmallCircle.style.top = posY + borderClk + "px";
        containerSmallCircle.style.transformOrigin = '50% 100%'
        containerSmallCircle.style.transform = ' rotate(' + (30+ i*30)  + 'deg)'
        document.body.appendChild(containerSmallCircle)


        // малый круг
        var smallCircle = document.createElement('div')
        smallCircle.style.width = diametrSmallCircle + 'px'
        smallCircle.style.height = diametrSmallCircle + 'px'
        smallCircle.style.borderRadius = '50%'
        smallCircle.style.backgroundColor = 'mediumseagreen'
        containerSmallCircle.appendChild(smallCircle)


        // цифры в кругах
        var numberCircle = document.createElement('div')
        numberCircle.style.width = diametrSmallCircle + 'px'
        numberCircle.style.height = diametrSmallCircle + 'px'
        numberCircle.innerHTML = i+1

        numberCircle.style.textAlign = 'center'
        numberCircle.style.lineHeight = diametrSmallCircle + 'px'
        numberCircle.style.fontSize = radiusSmallCircle + 'px'
        smallCircle.appendChild(numberCircle)
    }

    var smallArrow = document.createElement('div')
    smallArrow.style.background = 'black'
    smallArrow.style.height = smallArrowHeight + 'px'
    smallArrow.style.width =  smallArrowWidth + 'px'
    smallArrow.style.border = '1px solid black'
    smallArrow.style.borderRadius = ' 50px 50px 50px 50px'

    smallArrow.style.position='absolute';
    smallArrow.style.left= posX + radiusClk - smallArrowWidth/2  + "px";
    smallArrow.style.top=  posY  + radiusClk - smallArrowHeight + "px";
    smallArrow.style.transformOrigin = '50% 100%'

    document.body.appendChild(smallArrow)


    var middleArrow = document.createElement('div')
    middleArrow.style.background = 'black'
    middleArrow.style.height = middleArrowHeight + 'px'
    middleArrow.style.width =  middleArrowWidth + 'px'
    middleArrow.style.border = '1px solid black'
    middleArrow.style.borderRadius = ' 50px 50px 50px 50px'

    middleArrow.style.position='absolute';
    middleArrow.style.left= posX + radiusClk - middleArrowWidth/2  + "px";
    middleArrow.style.top=  posY  + radiusClk - middleArrowHeight + "px";
    middleArrow.style.transformOrigin = '50% 100%'

    document.body.appendChild(middleArrow)

    var longArrow = document.createElement('div')
    longArrow.style.background = 'black'
    longArrow.style.height = longArrowHeight + 'px'
    longArrow.style.width =  longArrowWidth + 'px'
    longArrow.style.border = '1px solid black'
    longArrow.style.borderRadius = ' 50px 50px 50px 50px'

    longArrow.style.position='absolute';
    longArrow.style.left= posX + radiusClk - longArrowWidth/2  + "px";
    longArrow.style.top=  posY  + radiusClk - longArrowHeight + "px";
    longArrow.style.transformOrigin = '50% 100%'
    document.body.appendChild(longArrow)
    //




    setInterval(f, 10000)
    var i = 0
    function f(){
        i+=6
        smallArrow.style.transform = ' rotate(' + i  + 'deg)'
    }

    setInterval(ff, 5000)
    var j = 0
    function ff(){
        j+=6
        middleArrow.style.transform = ' rotate(' + j  + 'deg)'
    }

    setInterval(fff, 1000)
    var k = 0
    function fff(){
        k+=6
        longArrow.style.transform = ' rotate(' + k  + 'deg)'
    }





}



