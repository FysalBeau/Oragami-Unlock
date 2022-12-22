

document.getElementById('lock').addEventListener('swiped-down', function(e) {
    console.log(e.target); // the element that was swiped
});

let piccounter = 0;
$("#first").on("click", async function(event) {
    //var x = event.pageX - this.offsetLeft;
    //x < this.width / 2 ? alert('Incorrect') : unlocked(this.parentNode);

    var y = event.pageY - this.offsetTop;
    var x = event.pageX - this.offsetLeft;

    if(piccounter == 0){
        playEffect();
        y < this.height / 2 ? reset() : (piccounter +=1, document.getElementById("first").src = "assets/dog2.png");
    }
    else if(piccounter == 1) {
        playEffect();
        x < this.width / 2 ? reset() : (piccounter +=1, document.getElementById("first").src = "assets/dog3.png");
    }
    else if(piccounter == 2) {
        playEffect();
        x < this.width / 2 ? (piccounter +=1, document.getElementById("first").src = "assets/dog4.png") : reset();
    }
    else if(piccounter == 3) {
        playEffect();
        document.getElementById("first").src = "assets/dog5.png";
        $("#unltext").show();
        const result = await delay();
        unlocked(this.parentNode);
        stopBackgroundNoise();
    }
});

let backgroundNoise = new Audio("assets/background-noise.mp3");
let effect = new Audio("assets/fold-sound-effect.mp3");

function playBackgroundNoise(){
    backgroundNoise.play();
    backgroundNoise.volume = 0.5;
}

function stopBackgroundNoise(){
    backgroundNoise.pause();
}

function playEffect(){
    effect.play();
}

// function stopEffect(){
//     effect.pause();
// }

async function reset() {
    $("#wrongtxt").show();
    const result = await delay();
    location.reload();
}

function unlocked(parent) {
    parent.remove();
    $("#homes").show();
}

function delay() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 1500);
    });
}

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
                                                     
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                                                           
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if (! yDown ) {
        return;
    }

    var yUp = evt.touches[0].clientY;
    var yDiff = yDown - yUp;
                                                                         
    if ( yDiff > 0 ) {
        $("#lock").remove();
        $("#origami").show();
        playBackgroundNoise();
    }                                                             
    /* reset values */
    yDown = null;                                             
};