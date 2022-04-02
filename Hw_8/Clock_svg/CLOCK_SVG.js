var inputElem = document.getElementsByTagName('input')

inputElem[1].addEventListener('click',buildClock, false) //обработчик событий кнопки



function buildClock(EO){
    EO=EO||window.event;

    var diameterClk = inputElem[0].value // диаметр часов(большой круг)
    var radiusClk = diameterClk/2  // радиус часов (большой круг)
    var diametrSmallCircle = diameterClk/8 // диаметра малого круга
    var radiusSmallCircle = diametrSmallCircle/2 //радиус малого круга
    var borderClk = radiusClk/25 // расстояние между маленьким кругом и большим
    var numCount = 12 // количество цифр на циферблате
    var angleRot = 360/numCount // угол смещения

    var smallArrowHeight = radiusClk/2 //длинна малой стрелки(часовая)
    var smallArrowWidth = radiusClk/30 //ширина малой стрелки(часовая)

    var middleArrowHeight = radiusClk/1.4 //длинна средней стрелки(минутная)
    var middleArrowWidth = radiusClk/50 //ширина средней стрелки(минутная)

    var longArrowHeight = radiusClk/1.2 //длинна длинной стрелки(секундная)
    var longArrowWidth = radiusClk/100 //ширина длинной стрелки(секундная)

    var posX = 20 // смещение относительно начала страницы
    var posY = 20 // смещение относительно начала страницы

    document.body.removeChild(document.getElementsByTagName('div')[0])  // удаляем поля ввода вывода

    var SVGElem=document.getElementById("SSS");
    var containerSmallCircle=document.getElementById("SS");
    var w3_org = "http://www.w3.org/2000/svg"


    var circle=document.createElementNS(w3_org,'ellipse');
    circle.setAttribute("stroke","sandybrown");
    circle.setAttribute("fill","sandybrown");
    circle.setAttribute("rx",radiusClk);
    circle.setAttribute("ry",radiusClk);
    circle.setAttribute("cx",radiusClk);
    circle.setAttribute("cy",radiusClk);
    SVGElem.appendChild(circle);


    var containerSmallCircle= document.createElementNS(w3_org,'g');
    containerSmallCircle.setAttribute("stroke","sandybrown");
    containerSmallCircle.setAttribute("width","200");
    containerSmallCircle.setAttribute("height","200");
    SVGElem.appendChild(containerSmallCircle);

    var smallCircle=document.createElementNS(w3_org,'ellipse');
    smallCircle.setAttribute("stroke","mediumseagreen");
    smallCircle.setAttribute("fill","mediumseagreen");
    smallCircle.setAttribute("rx",radiusSmallCircle);
    smallCircle.setAttribute("ry",radiusSmallCircle);
    smallCircle.setAttribute("cx",radiusSmallCircle);
    smallCircle.setAttribute("cy",radiusSmallCircle);
    containerSmallCircle.appendChild(smallCircle);



//     //большой круг циферблата
//     var bigCircle = document.createElement('div')
//     bigCircle.style.backgroundColor = 'sandybrown'
//     bigCircle.style.borderRadius = '50%'
//     bigCircle.style.width = diameterClk + 'px'
//     bigCircle.style.height = diameterClk + 'px'
//
//     bigCircle.style.position='absolute';
//     bigCircle.style.left=posX+"px";
//     bigCircle.style.top =posX + "px";
//     document.body.appendChild(bigCircle)
//
//     for (let i = 0; i<numCount; i++) {
//         // контейнер малого круга
//         var containerSmallCircle = document.createElement('div')
//         containerSmallCircle.className = 'container_Sml_Cir'
//         containerSmallCircle.style.width = diametrSmallCircle + 'px'
//         containerSmallCircle.style.height = radiusClk - borderClk + 'px'
//         containerSmallCircle.style.position = 'absolute';
//         containerSmallCircle.style.left = posX + radiusClk - radiusSmallCircle + "px";
//         containerSmallCircle.style.top = posY + borderClk + "px";
//         containerSmallCircle.style.transformOrigin = '50% 100%'
//         containerSmallCircle.style.transform = ' rotate(' + (angleRot + i*angleRot)  + 'deg)'
//         document.body.appendChild(containerSmallCircle)
//
//         // малый круг
//         var smallCircle = document.createElement('div')
//         smallCircle.style.width = diametrSmallCircle + 'px'
//         smallCircle.style.height = diametrSmallCircle + 'px'
//         smallCircle.style.borderRadius = '50%'
//         smallCircle.style.backgroundColor = 'mediumseagreen'
//         containerSmallCircle.appendChild(smallCircle)
//
//         // цифры в кругах
//         var numberCircle = document.createElement('div')
//         numberCircle.style.width = diametrSmallCircle + 'px'
//         numberCircle.style.height = diametrSmallCircle + 'px'
//         numberCircle.innerHTML = i+1
//         numberCircle.style.textAlign = 'center'
//         numberCircle.style.lineHeight = diametrSmallCircle + 'px'
//         numberCircle.style.fontSize = radiusSmallCircle + 'px'
//         numberCircle.style.transform = ' rotate(' +  (360 - 360/numCount - i*360/numCount)  + 'deg)'
//         smallCircle.appendChild(numberCircle)
//     }
// //-------------
//
//     //секундная стрелка
//     var smallArrow = document.createElement('div')
//     smallArrow.style.background = 'black'
//     smallArrow.style.height = smallArrowHeight + 'px'
//     smallArrow.style.width =  smallArrowWidth + 'px'
//     smallArrow.style.border = '1px solid black'
//     smallArrow.style.borderRadius = ' 50px 50px 50px 50px'
//     smallArrow.style.position='absolute';
//     smallArrow.style.left= posX + radiusClk - smallArrowWidth/2  + "px";
//     smallArrow.style.top=  posY  + radiusClk - smallArrowHeight + "px";
//     smallArrow.style.transformOrigin = '50% 100%'
//
//     //минутная стрелка
//     var middleArrow = document.createElement('div')
//     middleArrow.style.background = 'black'
//     middleArrow.style.height = middleArrowHeight + 'px'
//     middleArrow.style.width =  middleArrowWidth + 'px'
//     middleArrow.style.border = '1px solid black'
//     middleArrow.style.borderRadius = ' 50px 50px 50px 50px'
//     middleArrow.style.position='absolute';
//     middleArrow.style.left= posX + radiusClk - middleArrowWidth/2  + "px";
//     middleArrow.style.top=  posY  + radiusClk - middleArrowHeight + "px";
//     middleArrow.style.transformOrigin = '50% 100%'
//
//     //часовая стрелка
//     var longArrow = document.createElement('div')
//     longArrow.style.background = 'black'
//     longArrow.style.height = longArrowHeight + 'px'
//     longArrow.style.width =  longArrowWidth + 'px'
//     longArrow.style.border = '1px solid black'
//     longArrow.style.borderRadius = ' 50px 50px 50px 50px'
//     longArrow.style.position='absolute';
//     longArrow.style.left= posX + radiusClk - longArrowWidth/2  + "px";
//     longArrow.style.top=  posY  + radiusClk - longArrowHeight + "px";
//     longArrow.style.transformOrigin = '50% 100%'
// //-----------
//
//     var currTime
//     var hours
//     var minutes
//     var seconds
//
//     updateTime()
//
//     document.body.appendChild(smallArrow)
//     document.body.appendChild(middleArrow)
//     document.body.appendChild(longArrow)
//
//     setInterval(updateTime, 1000)
//
//     function formatDateTime() {
//         currTime=new Date();
//         hours=currTime.getHours();
//         minutes=currTime.getMinutes();
//         seconds=currTime.getSeconds();
//     }
//     function updateTime(){
//         formatDateTime()
//         longArrow.style.transform = ' rotate(' + seconds*6  + 'deg)'
//         middleArrow.style.transform = ' rotate(' + minutes*6  + 'deg)'
//         smallArrow.style.transform = ' rotate(' + (hours * 30 + minutes * 0.5)   + 'deg)'
//         console.log(hours+':'+minutes+':'+seconds)
//     }

}



