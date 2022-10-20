// function passcode(parent) {
//     parent.remove();
//     $("#origami").show();
//     toggleFullscreen();
// }

let piccounter = 0;
$("#first").on("click", async function(event) {
    //var x = event.pageX - this.offsetLeft;
    //x < this.width / 2 ? alert('Incorrect') : unlocked(this.parentNode);

    var y = event.pageY - this.offsetTop;
    var x = event.pageX - this.offsetLeft;

    if(piccounter == 0){
        y < this.height / 2 ? reset() : (piccounter +=1, document.getElementById("first").src = "assets/dog2.png");
    }
    else if(piccounter == 1) {
        x < this.width / 2 ? reset() : (piccounter +=1, document.getElementById("first").src = "assets/dog3.png");
    }
    else if(piccounter == 2) {
        x < this.width / 2 ? (piccounter +=1, document.getElementById("first").src = "assets/dog4.png") : reset();
    }
    else if(piccounter == 3) {
        document.getElementById("first").src = "assets/dog5.png";
        $("#unltext").show();
        const result = await delay();
        unlocked(this.parentNode);
    }
});

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
      }, 3000);
    });
}


// Full-Screen Mode Toggle Code (Start)
function getFullscreenElement() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullscreenElement ||
      document.msFullscreenElement
    );
  }
  
  function toggleFullscreen() {
    if (getFullscreenElement()) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
      });
    }
  }
let touchstartY = 0;
let touchendY = 0;
    
function checkDirection() {
  if (touchendY > touchstartY) {
    parent.remove();
    $("#origami").show();
    toggleFullscreen();
  }
}

document.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY;
})

document.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY
  checkDirection()
})