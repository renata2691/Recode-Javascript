function f_calculadora() {
    var valor1 = Number(document.getElementById("valor1").value)
    var valor2 = Number(document.getElementById("valor2").value)

    switch(document.getElementById("operacao").value){
        case "adicao":
            var resultado = valor1 + valor2;
            document.getElementById("resultado").value = resultado;
            break;
        case "subtracao":
            var resultado = valor1 - valor2;
            document.getElementById("resultado").value = resultado;
        case "multiplicacao":
           var resultado = valor1 * valor2;
           document.getElementById("resultado").value = resultado;
            break;
        case "divisao":
           var resultado = valor1/valor2;
           document.getElementById("resultado").value = resultado;
            break;
        case "sem":
            alert('Selecione uma opção')
            break;
    }
}

