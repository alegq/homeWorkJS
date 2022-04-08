class ClockControllerButtons  {
    constructor(){
        this.myModel = null; // с какой моделью работаем
        this.myField = null; // внутри какого элемента наша вёрстка
    }
    config=function(model,field) {
        this.myModel=model;
        this.myField=field;
        var buttonStart=field.querySelector('.start');
        buttonStart.addEventListener('click', ()=>this.myModel.stop=1)
        var buttonStart=field.querySelector('.stop');
        buttonStart.addEventListener('click', ()=>this.myModel.stop=0)
    }
}
//------------- общая настройка, инициализация----------
var mod1= new  Clock()
var view1 = new ClockViewDOM()
var controller1 = new ClockControllerButtons ()

var mod2= new  Clock()
var view2 = new ClockViewDOM()
var controller2 = new ClockControllerButtons ()

var mod3= new  Clock()
var view3 = new ClockViewSVG()
var controller3 = new ClockControllerButtons ()

var mod4= new  Clock()
var view4 = new ClockViewSVG()
var controller4 = new ClockControllerButtons ()


var containerElem1=document.getElementById('ClockContainer1');
var containerElem2=document.getElementById('ClockContainer2');
var containerElem3=document.getElementById('ClockContainer3');
var containerElem4=document.getElementById('ClockContainer4');

mod1.start(view1);
view1.start(mod1,containerElem1);
controller1.config(mod1,containerElem1);

mod2.start(view2);
view2.start(mod2,containerElem2);
controller2.config(mod2,containerElem2);

mod3.start(view3);
view3.start(mod3,containerElem3);
controller3.config(mod3,containerElem3);

mod4.start(view4);
view4.start(mod4,containerElem4);
controller4.config(mod4,containerElem4);


var ff = function() {
     mod1.updateView(mod1, containerElem1);
     mod2.updateView(mod2, containerElem2);
     mod3.updateView(mod3, containerElem3);
     mod4.updateView(mod4, containerElem4);
 }
setInterval(ff, 1000)
