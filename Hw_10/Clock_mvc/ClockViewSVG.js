function ClockViewSVG () {

    var myModel = null; // с какой моделью работаем
    var myField = null; // внутри какого элемента DOM наша вёрстка

    var w3_org = "http://www.w3.org/2000/svg"
    var smallArrow = document.createElementNS(w3_org, 'line');
    var middleArrow = document.createElementNS(w3_org, 'line');
    var longArrow = document.createElementNS(w3_org, 'line');
    var timeZone = null
    var diameterClk = 300 // диаметр часов(большой круг)
    var transRotOrig = ' ' + diameterClk/2 +' '+ diameterClk/2+')'

    this.start = function (model,field){
        myModel = model
        myField = field

        timeZone = field.querySelector('.time_zone');
        timeZone = parseInt(timeZone.textContent)

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


        var SVGElem=field.querySelector('.svg');
        SVGElem.style.position='relative';

        var circle=document.createElementNS(w3_org,'ellipse');
        circle.setAttribute("stroke","sandybrown");
        circle.setAttribute("fill","sandybrown");
        circle.setAttribute("rx",radiusClk);
        circle.setAttribute("ry",radiusClk);
        circle.setAttribute("cx",radiusClk+1);
        circle.setAttribute("cy",radiusClk+1);
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

        smallArrow.setAttribute('x1', radiusClk )
        smallArrow.setAttribute('y1', radiusClk )
        smallArrow.setAttribute('x2', radiusClk )
        smallArrow.setAttribute('y2', radiusClk-smallArrowHeight )
        smallArrow.setAttribute('stroke', 'black'  )
        smallArrow.setAttribute('stroke-width', smallArrowWidth )
        smallArrow.setAttribute('stroke-linecap', 'round '  )

        middleArrow.setAttribute('x1', radiusClk )
        middleArrow.setAttribute('y1', radiusClk )
        middleArrow.setAttribute('x2', radiusClk )
        middleArrow.setAttribute('y2', radiusClk-middleArrowHeight )
        middleArrow.setAttribute('stroke', 'black'  )
        middleArrow.setAttribute('stroke-width', middleArrowWidth )
        middleArrow.setAttribute('stroke-linecap', 'round '  )

        longArrow.setAttribute('x1', radiusClk )
        longArrow.setAttribute('y1', radiusClk )
        longArrow.setAttribute('x2', radiusClk )
        longArrow.setAttribute('y2', radiusClk-longArrowHeight )
        longArrow.setAttribute('stroke', 'black'  )
        longArrow.setAttribute('stroke-width', longArrowWidth )
        longArrow.setAttribute('stroke-linecap', 'round '  )

        SVGElem.appendChild(smallArrow);
        SVGElem.appendChild(middleArrow);
        SVGElem.appendChild(longArrow);

        myModel.updateView()
    }

    this.updateTime = function (){
            longArrow.setAttribute("transform", ' rotate(' + myModel.seconds*6 + transRotOrig)
            middleArrow.setAttribute("transform", ' rotate(' + myModel.minutes*6  + transRotOrig)
            smallArrow.setAttribute("transform", ' rotate(' + ((myModel.hours+myModel.timeZone+timeZone) * 30 + myModel.minutes * 0.5) + transRotOrig)
        }

    }


