function Enemys_view(id) {
    var myModel = null;
    var myField = null;

    var conteinerMan = document.getElementById("1");
    conteinerMan= conteinerMan.cloneNode(true)
    document.body.appendChild(conteinerMan)
    conteinerMan.id = id+1

    var SVGObjectElem=document.getElementById('green_going');
    console.log(SVGObjectElem)

    var SVGDocument=SVGObjectElem.contentDocument;

    console.log(SVGDocument)

    var kneeLeft=SVGDocument.getElementById("svg_11");

    var footLeft=SVGDocument.getElementById("svg_12");
    var footRight=SVGDocument.getElementById("svg_15");
    var arm = SVGDocument.getElementById("svg_16");   // запястье руки
    var wrist= SVGDocument.getElementById("svg_25");  //кисть руки
    var stateBones = 1

    this.indentific = function (model, field) {
        myModel = model
        myField = field

    }

    this.moveMan = function (){
        conteinerMan.style.left=myModel.manPosX+"px";
        conteinerMan.style.top =myModel.manPosY+"px";
        this.moveBones()
    }

    this.moveBones = function () {

        if(stateBones) {
            kneeLeft.setAttribute("transform", "rotate(25.9557 74.8135 197.383)");
            kneeLeft.setAttribute("cx", "74.81346");
            kneeLeft.setAttribute("cy", "197.38342");
            kneeLeft.setAttribute("rx", "5.64576");
            kneeLeft.setAttribute("ry", "11.92121");

            footLeft.setAttribute("transform", "rotate(18.7039 78.5402 206.98)");
            footLeft.setAttribute("d", "m73.31038,212.51919c-5.73657,0 -5.14472,-3.29553 -5.14472,-6.06489c0,-2.76936 4.64662,-5.01254 10.3832,-5.01254c5.73657,0 10.3832,2.24318 10.3832,5.01254c0,2.76936 -9.8851,6.06489 -15.62168,6.06489z");


            footRight.setAttribute("transform", "rotate(18.1936 105.017 203.721)");

            wrist.setAttribute("transform", "rotate(-50.4375 67.1606 183.182)")
            wrist.setAttribute("cx", "67.16055")
            wrist.setAttribute("cy", "183.1817")
            arm.setAttribute("d", "m76.35716,193.63976c-3.69105,0 -6.6808,-2.96021 -6.6808,-6.6148c0,-3.65458 2.98974,-6.6148 6.6808,-6.6148c3.69105,0 6.6808,2.96021 6.6808,6.6148c0,3.65458 -2.98974,6.6148 -6.6808,6.6148z")
            stateBones=0
        }else {
            kneeLeft.setAttribute("transform", "rotate(-1.17307 75.6135 197.383)");
            kneeLeft.setAttribute("cx", "75.61346");
            kneeLeft.setAttribute("cy", "197.38342");
            kneeLeft.setAttribute("rx", "5.64576");
            kneeLeft.setAttribute("ry", "11.92121");

            footLeft.setAttribute("transform", "rotate(18.7039 84.1402 206.98)");
            footLeft.setAttribute("d", "m78.91038,212.51919c-5.73657,0 -5.14472,-3.29553 -5.14472,-6.06489c0,-2.76936 4.64662,-5.01254 10.3832,-5.01254c5.73657,0 10.3832,2.24318 10.3832,5.01254c0,2.76936 -9.8851,6.06489 -15.62168,6.06489z");

            footRight.setAttribute("transform", "rotate(28.1608 105.017 203.721)");

            wrist.setAttribute("transform", "rotate(-27.8949 64.1171 183.616)")
            wrist.setAttribute("cx", "64.11707")
            wrist.setAttribute("cy", "183.61648")
            arm.setAttribute("d", "m71.57455,196.68324c-3.69105,0 -6.6808,-2.96021 -6.6808,-6.6148c0,-3.65458 2.98974,-6.6148 6.6808,-6.6148c3.69105,0 6.6808,2.96021 6.6808,6.6148c0,3.65458 -2.98974,6.6148 -6.6808,6.6148z")
            stateBones=1
        }

    }
}
//
window.onload = imgPos

function imgPos() {
    var f = new Enemys_view(1)

    function went() {
        f.moveBones()

    }

    //setInterval(went,100);

}