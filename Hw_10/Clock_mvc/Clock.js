class Clock {
 
    constructor(){
        this.currTime=null;
        this.myView = null;
        this.hours =  null;
        this.minutes = null
        this.seconds = null
        this.timeZone
        this.stop = true
    }
    start =  function (view) {
        this.myView=view;
    }
    formatDateTime = function() {
        this.currTime=new Date();
        this.hours=this.currTime.getHours();
        this.minutes=this.currTime.getMinutes();
        this.seconds=this.currTime.getSeconds();
        this.timeZone=this.currTime.getTimezoneOffset()/60;
    }
    updateView = function () {
        this.formatDateTime()
        if (this.myView && this.stop) {
            this.myView.updateTime()
        }
    }

}




