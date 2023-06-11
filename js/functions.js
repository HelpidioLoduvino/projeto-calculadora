const btn= document.getElementById('copy')

btn.addEventListener('click',(event)=>{
    navigator.clipboard.writeText(calculator.displayValue).then()
})


// Função para atualizar os rótulos dos botões de acordo com o idioma selecionado
function atualizarIdioma() {
    // Obtenha os botões pelos seus identificadores
    var buttonOpenParenthesis = document.getElementById("button-open-parenthesis");
    var buttonCloseParenthesis = document.getElementById("button-close-parenthesis");
    var buttonCos = document.getElementById("button-cos");
    var buttonSin = document.getElementById("button-sin");
    var buttonTan = document.getElementById("button-tan");
    var buttonLn = document.getElementById("button-ln");
    var buttonPow2 = document.getElementById("button-pow-2");
    var buttonPow3 = document.getElementById("button-pow-3");
    var buttonSqrt = document.getElementById("button-sqrt");
    var buttonSqrt3 = document.getElementById("button-sqrt-3");
    var buttonAdd = document.getElementById("button-add");
    var buttonSubtract = document.getElementById("button-subtract");
    var buttonMultiply = document.getElementById("button-multiply");
    var buttonDivide = document.getElementById("button-divide");
    var buttonEqual = document.getElementById("button-equal");
    var buttonCopy = document.getElementById("button-copy");
    var buttonExport = document.getElementById("button-export");

    if (idioma === "en") {
        // Inglês
        buttonOpenParenthesis.innerHTML = "(";
        buttonCloseParenthesis.innerHTML = ")";
        buttonCos.innerHTML = "cos";
        buttonSin.innerHTML = "sin";
        buttonTan.innerHTML = "tan";
        buttonLn.innerHTML = "ln";
        buttonPow2.innerHTML = "x²";
        buttonPow3.innerHTML = "x³";
        buttonSqrt.innerHTML = "√";
        buttonSqrt3.innerHTML = "∛";
        buttonAdd.innerHTML = "+";
        buttonSubtract.innerHTML = "-";
        buttonMultiply.innerHTML = "&times;";
        buttonDivide.innerHTML = "&divide;";
        buttonEqual.innerHTML = "=";
        buttonCopy.innerHTML = "Copy";
        buttonExport.innerHTML = "Export";
    } else if (idioma === "es") {
        // Espanhol
        buttonOpenParenthesis.innerHTML = "(";
        buttonCloseParenthesis.innerHTML = ")";
        buttonCos.innerHTML = "cos";
        buttonSin.innerHTML = "sin";
        buttonTan.innerHTML = "tan";
        buttonLn.innerHTML = "ln";
        buttonPow2.innerHTML = "x²";
        buttonPow3.innerHTML = "x³";
        buttonSqrt.innerHTML = "√";
        buttonSqrt3.innerHTML = "∛";
        buttonAdd.innerHTML = "+";
        buttonSubtract.innerHTML = "-";
        buttonMultiply.innerHTML = "&times;";
        buttonDivide.innerHTML = "&divide;";
        buttonEqual.innerHTML = "=";
        buttonCopy.innerHTML = "Copiar";
        buttonExport.innerHTML = "Exportar";
    } else if (idioma === "pt") {
        // Português
        buttonOpenParenthesis.innerHTML = "(";
        buttonCloseParenthesis.innerHTML = ")";
        buttonCos.innerHTML = "cos";
        buttonSin.innerHTML = "sin";
        buttonTan.innerHTML = "tan";
        buttonLn.innerHTML = "ln";
        buttonPow2.innerHTML = "x²";
        buttonPow3.innerHTML = "x³";
        buttonSqrt.innerHTML = "√";
        buttonSqrt3.innerHTML = "∛";
        buttonAdd.innerHTML = "+";
        buttonSubtract.innerHTML = "-";
        buttonMultiply.innerHTML = "&times;";
        buttonDivide.innerHTML = "&divide;";
        buttonEqual.innerHTML = "=";
        buttonCopy.innerHTML = "Copiar";
        buttonExport.innerHTML = "Exportar";
    }
}

// Chame a função inicialmente para atualizar os rótulos dos botões com base no idioma padrão
atualizarIdioma();
