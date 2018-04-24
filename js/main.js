function playSound(e){
    const note = document.querySelector(`.notes__note[data-key='${e.keyCode}']`);
    const allsounds = document.querySelector(`audio[data-key='${e.keyCode}']`);
    if(!allsounds) return
    allsounds.currentTime = 0;
    allsounds.play();
    note.classList.add('js-note-active');
        }

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('js-note-active');
}

const notes = document.querySelectorAll('.notes__note');
notes.forEach(note => 
note.addEventListener('transitionend', removeTransition));
              
window.addEventListener('keydown', playSound);