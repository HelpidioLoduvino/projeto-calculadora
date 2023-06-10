document.addEventListener('keydown',(event)=>{
     if(event.key > -1 && event.key<10){
          inputDigit(event.key)
          updateDisplay()
     }
})