const btn= document.getElementById('copy')

btn.addEventListener('click',(event)=>{
    navigator.clipboard.writeText(calculator.displayValue).then()
})
function atualizarIdioma() {
    var selectIdioma = document.getElementById("select-idioma");
    var idiomaSelecionado = selectIdioma.value;
  
    var buttonChangeLanguage = document.getElementById("select-idioma");
    var buttonThemeBlack = document.getElementsByClassName("theme-toggle")[0];
    var buttonThemeWhite = document.getElementsByClassName("theme-toggle")[1];
    var buttonOpenParenthesis = document.getElementsByClassName("operator")[0];
    var buttonCloseParenthesis = document.getElementsByClassName("operator")[1];
    var buttonCos = document.getElementsByClassName("operator")[2];
    var buttonSin = document.getElementsByClassName("operator")[3];
    var buttonTan = document.getElementsByClassName("operator")[4];
    var buttonLn = document.getElementsByClassName("operator")[5];
    var buttonPow2 = document.getElementsByClassName("operator")[6];
    var buttonPow3 = document.getElementsByClassName("operator")[7];
    var buttonSqrt = document.getElementsByClassName("operator")[8];
    var buttonCbrt = document.getElementsByClassName("operator")[9];
    var buttonAdd = document.getElementsByClassName("operator")[10];
    var buttonSubtract = document.getElementsByClassName("operator")[11];
    var buttonMultiply = document.getElementsByClassName("operator")[12];
    var buttonDivide = document.getElementsByClassName("operator")[13];
    var button9 = document.getElementsByClassName("btn")[14];
    var button8 = document.getElementsByClassName("btn")[15];
    var button7 = document.getElementsByClassName("btn")[16];
    var button6 = document.getElementsByClassName("btn")[17];
    var button5 = document.getElementsByClassName("btn")[18];
    var button4 = document.getElementsByClassName("btn")[19];
    var button3 = document.getElementsByClassName("btn")[20];
    var button2 = document.getElementsByClassName("btn")[21];
    var button1 = document.getElementsByClassName("btn")[22];
    var button0 = document.getElementsByClassName("btn")[23];
    var buttonDecimal = document.getElementsByClassName("decimal")[0];
    var buttonClear = document.getElementsByClassName("all-clear")[0];
    var buttonEqual = document.getElementsByClassName("equal-sign")[0];
    var buttonCopy = document.getElementById("button-copy");
    var buttonExport = document.getElementById("button-export");
  
    if (idiomaSelecionado === "pt") {
      buttonChangeLanguage.innerHTML = "Mudar idioma";
      buttonThemeBlack.innerHTML = "Tema Preto";
      buttonThemeWhite.innerHTML = "Tema Branco";
      buttonOpenParenthesis.innerHTML = "(";
      buttonCloseParenthesis.innerHTML = ")";
      buttonCos.innerHTML = "cos";
      buttonSin.innerHTML = "sin";
      buttonTan.innerHTML = "tan";
      buttonLn.innerHTML = "ln";
      buttonPow2.innerHTML = "x²";
      buttonPow3.innerHTML = "x³";
      buttonSqrt.innerHTML = "√";
      buttonCbrt.innerHTML = "∛";
      buttonAdd.innerHTML = "+";
      buttonSubtract.innerHTML = "-";
      buttonMultiply.innerHTML = "&times;";
      buttonDivide.innerHTML = "&divide;";
      button9.innerHTML = "9";
      button8.innerHTML = "8";
      button7.innerHTML = "7";
      button6.innerHTML = "6";
      button5.innerHTML = "5";
      button4.innerHTML = "4";
      button3.innerHTML = "3";
      button2.innerHTML = "2";
      button1.innerHTML = "1";
      button0.innerHTML = "0";
      buttonDecimal.innerHTML = ".";
      buttonClear.innerHTML = "AC";
      buttonEqual.innerHTML = "=";
      buttonCopy.innerHTML = "Copiar";
      buttonExport.innerHTML = "Exportar";
    } else if (idiomaSelecionado === "en") {
      buttonChangeLanguage.innerHTML = "Change language";
      buttonThemeBlack.innerHTML = "Black Theme";
      buttonThemeWhite.innerHTML = "White Theme";
      buttonOpenParenthesis.innerHTML = "(";
      buttonCloseParenthesis.innerHTML = ")";
      buttonCos.innerHTML = "cos";
      buttonSin.innerHTML = "sin";
      buttonTan.innerHTML = "tan";
      buttonLn.innerHTML = "ln";
      buttonPow2.innerHTML = "x²";
      buttonPow3.innerHTML = "x³";
      buttonSqrt.innerHTML = "√";
      buttonCbrt.innerHTML = "∛";
      buttonAdd.innerHTML = "+";
      buttonSubtract.innerHTML = "-";
      buttonMultiply.innerHTML = "&times;";
      buttonDivide.innerHTML = "&divide;";
      button9.innerHTML = "9";
      button8.innerHTML = "8";
      button7.innerHTML = "7";
      button6.innerHTML = "6";
      button5.innerHTML = "5";
      button4.innerHTML = "4";
      button3.innerHTML = "3";
      button2.innerHTML = "2";
      button1.innerHTML = "1";
      button0.innerHTML = "0";
      buttonDecimal.innerHTML = ".";
      buttonClear.innerHTML = "AC";
      buttonEqual.innerHTML = "=";
      buttonCopy.innerHTML = "Copy";
      buttonExport.innerHTML = "Export";
    }
  }
  
