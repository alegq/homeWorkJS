function Enemys_mod() {
    var state = 1;
    this.move = function () {
        // var SVGObjectElem=document.getElementById("green_going");
        // var SVGDocument=SVGObjectElem.contentDocument;
        // console.log(SVGDocument)
        // var paths=SVGDocument.getElementsByTagName("path");

        // console.log(SVGDocument.contentType)

        var SVGObjectElem=document.getElementById("SSS");
        var SVGDocument=SVGObjectElem.contentDocument;
        console.log(SVGDocument);
        var paths=SVGDocument.getElementsByTagName("path");
        console.log(paths[0])


    }
}

var f = new Enemys_mod()
f.move()

