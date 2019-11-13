function f_conversor() {
    var valor1 = Number(document.getElementById("valor1").value)


    switch(document.getElementById("operacao").value){
        case "euro":
            var resultado = valor1 /4.59;
            document.getElementById("resultado").value = resultado.toFixed(2);
            break;
        case "dolar":
            var resultado = valor1 /4.17;
            document.getElementById("resultado").value = resultado.toFixed(2);
        case "peso":
           var resultado = valor1 * 14.31;
           document.getElementById("resultado").value = resultado.toFixed(2);
            break;
        case "iene":
           var resultado = valor1 * 26.18;
           document.getElementById("resultado").value = resultado.toFixed(2);
            break;
        case "sem":
            alert('Selecione uma opção')
            break;
    }
}

