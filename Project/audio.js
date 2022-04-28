var throwAudio=new Audio("audio/throw.mp3");
var touchAudio = new Audio("audio/touch.mp3")
var stepAudio = new Audio("audio/steps_snow.mp3")
var win_level = new Audio("audio/win_level.mp3")
var game_over = new Audio("audio/game_over.mp3")

function clickSoundInit() {
    throwAudio.play(); // запускаем звук
    throwAudio.pause(); // и сразу останавливаем

    touchAudio.play();
    touchAudio.pause();

    win_level.play();
    win_level.pause();

    game_over.play();
    game_over.pause();

    stepAudio.play();
    stepAudio.pause();

}

function clickSound(state) {

    switch (state) {
        case 1 :{
            stepAudio.currentTime=0; // в секундах
            stepAudio.play();
            break
        }
        case 4 :{
            throwAudio.currentTime=0; // в секундах
            throwAudio.play();
            break
        }
        case 5 :{
            win_level.currentTime=0; // в секундах
            win_level.play();
            break
        }
        case 6 :{
            game_over.currentTime=0; // в секундах
            game_over.play();
        }

        case -1 :{
              touchAudio.currentTime=0; // в секундах
            touchAudio.play();
            break
        }
        default:{break}
    }
}
