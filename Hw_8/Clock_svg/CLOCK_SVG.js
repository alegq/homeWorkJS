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
    var transRotOrig = ' ' + radiusClk +' '+ radiusClk+')'

    var smallArrowHeight = radiusClk/2 //длинна малой стрелки(часовая)
    var smallArrowWidth = radiusClk/30 //ширина малой стрелки(часовая)

    var middleArrowHeight = radiusClk/1.4 //длинна средней стрелки(минутная)
    var middleArrowWidth = radiusClk/50 //ширина средней стрелки(минутная)

    var longArrowHeight = radiusClk/1.2 //длинна длинной стрелки(секундная)
    var longArrowWidth = radiusClk/100 //ширина длинной стрелки(секундная)

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



    for (let i = 0; i<numCount; i++) {
        var containerSmallCircle = document.createElementNS(w3_org, 'g');
        containerSmallCircle.setAttribute("stroke", "sandybrown");
        containerSmallCircle.setAttribute("width", "200");
        containerSmallCircle.setAttribute("height", "200");
        containerSmallCircle.setAttribute("transform", ' rotate(' + (-60 + i*30) + transRotOrig)
        SVGElem.appendChild(containerSmallCircle);

        var smallCircle = document.createElementNS(w3_org, 'ellipse');
        smallCircle.setAttribute("stroke", "mediumseagreen");
        smallCircle.setAttribute("fill", "mediumseagreen");
        smallCircle.setAttribute("rx", radiusSmallCircle);
        smallCircle.setAttribute("ry", radiusSmallCircle);
        smallCircle.setAttribute("cx", 2*radiusClk - borderClk - radiusSmallCircle);
        smallCircle.setAttribute("cy", radiusClk );
        containerSmallCircle.appendChild(smallCircle);

        var numberCircle = document.createElementNS(w3_org, 'text')
        numberCircle.setAttribute("x", 2*radiusClk - borderClk -  radiusSmallCircle);
        numberCircle.setAttribute("y", radiusClk + 0.3 *radiusSmallCircle );
        numberCircle.setAttribute("font-size", radiusSmallCircle);
        numberCircle.setAttribute("text-anchor", 'middle');
        numberCircle.setAttribute("fill", 'black');
        numberCircle.setAttribute("stroke", 'black');
        numberCircle.innerHTML = i+1
        var x = 2*radiusClk - borderClk -  radiusSmallCircle
        var y =radiusClk
        numberCircle.setAttribute("transform", ' rotate(' + (90 - 360/numCount - i*360/numCount) + ' ' + x + ' ' + y +')')
        containerSmallCircle.appendChild(numberCircle)
    }

    var smallArrow = document.createElementNS(w3_org, 'line');
    smallArrow.setAttribute('x1', radiusClk )
    smallArrow.setAttribute('y1', radiusClk )
    smallArrow.setAttribute('x2', radiusClk )
    smallArrow.setAttribute('y2', radiusClk-smallArrowHeight )
    smallArrow.setAttribute('stroke', 'black'  )
    smallArrow.setAttribute('stroke-width', smallArrowWidth )
    smallArrow.setAttribute('stroke-linecap', 'round '  )


    var middleArrow = document.createElementNS(w3_org, 'line');
    middleArrow.setAttribute('x1', radiusClk )
    middleArrow.setAttribute('y1', radiusClk )
    middleArrow.setAttribute('x2', radiusClk )
    middleArrow.setAttribute('y2', radiusClk-middleArrowHeight )
    middleArrow.setAttribute('stroke', 'black'  )
    middleArrow.setAttribute('stroke-width', middleArrowWidth )
    middleArrow.setAttribute('stroke-linecap', 'round '  )


    var longArrow = document.createElementNS(w3_org, 'line');
    longArrow.setAttribute('x1', radiusClk )
    longArrow.setAttribute('y1', radiusClk )
    longArrow.setAttribute('x2', radiusClk )
    longArrow.setAttribute('y2', radiusClk-longArrowHeight )
    longArrow.setAttribute('stroke', 'black'  )
    longArrow.setAttribute('stroke-width', longArrowWidth )
    longArrow.setAttribute('stroke-linecap', 'round '  )



//-----------------------------------
     var currTime
     var hours
     var minutes
     var seconds

     updateTime()

     SVGElem.appendChild(smallArrow);
     SVGElem.appendChild(middleArrow);
     SVGElem.appendChild(longArrow);

     setInterval(updateTime, 1000)

    function formatDateTime() {
        currTime=new Date();
        hours=currTime.getHours();
        minutes=currTime.getMinutes();
        seconds=currTime.getSeconds();
    }
    function updateTime(){
        formatDateTime()
        longArrow.setAttribute("transform", ' rotate(' + seconds*6 + transRotOrig)
        middleArrow.setAttribute("transform", ' rotate(' + minutes*6  + transRotOrig)
        smallArrow.setAttribute("transform", ' rotate(' + (hours * 30 + minutes * 0.5) + transRotOrig)

        console.log(hours+':'+minutes+':'+seconds)
    }

}



