class ClockControllerButtons  {
    constructor(){
        this.myModel = null; // с какой моделью работаем
        this.myField = null; // внутри какого элемента DOM наша вёрстка
    }
    config=function(model,field) {
        this.myModel=model;
        this.myField=field;
        var buttonStart=document.querySelector('.start');
        buttonStart.addEventListener('click', ()=>this.myModel.stop(1))
        var buttonStart=document.querySelector('.stop');
        buttonStart.addEventListener('click', ()=>this.myModel.stop(0))
    }
    // start=function () {
    //     this.myModel.updateView(1)
    // }
    // stop=function () {
    //     this.myModel.updateView(0)
    // }

}
 var mod1= new  Clock()
 var view1 = new ClockViewDOM()
 var controller1 = new ClockControllerButtons ()

var mod2= new  Clock()
var view2 = new ClockViewDOM()
var controller2 = new ClockControllerButtons ()


 var containerElem1=document.getElementById('ClockContainer1');
 var containerElem2=document.getElementById('ClockContainer2');

var ff = function(){
    mod1.start(view1);
    view1.start(mod1,containerElem1);
    controller1.config(mod1,containerElem1);

    mod2.start(view2);
    view2.start(mod2,containerElem2);
    controller2.config(mod2,containerElem2);
}


setInterval(ff, 1000)
