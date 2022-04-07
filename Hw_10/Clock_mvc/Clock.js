class Clock {
 
    constructor(){
        this.currTime=null;
        this.myView = null;
        this.hours =  null;
        this.minutes = null
        this.seconds = null
    }
    start =  function (view) {
        this.myView=view;
        //this.updateView()
        //setInterval(this.updateView, 1000)
    }
    formatDateTime = function() {
        this.currTime=new Date();
        this.hours=this.currTime.getHours();
        this.minutes=this.currTime.getMinutes();
        this.seconds=this.currTime.getSeconds();
    }
    updateView = function () {
        this.formatDateTime()
        if (this.myView) {
            this.myView.updateTime()
            //console.log(this.currTime)
        }
    }
    stop = function (ind) {
        console.log(ind)
    }
}




