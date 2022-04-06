class Clock {
 
    constructor(){
        this.currTime=new Date();
        this.myView = null;
        this.hours =  currTime.getHours();
        this.minutes = currTime.getMinutes()
        this.seconds = currTime.getSeconds()
    }
    start =  function (view) {
        setInterval(updateTime, 1000)
        this.myView=view;
    }
    updateView = function (myView) {
        if ( myView )
            myView.update();
    }


}