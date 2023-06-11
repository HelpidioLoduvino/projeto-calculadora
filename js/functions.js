const btn= document.getElementById('copy')

btn.addEventListener('click',(event)=>{
    navigator.clipboard.writeText(calculator.displayValue).then()
})