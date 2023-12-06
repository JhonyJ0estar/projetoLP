function calculo()
{
    var bola = Number(document.getElementById("Bola").value);
    if(bola>3)
    {
        var desconto = bola * 8.0 * (1-0.16);
        alert("O preço do sorvete é: R$"+desconto);
    }
    else
    {
        var semdesconto = bola*8.0;
       alert("O preço do sorvete é: R$"+semdesconto);
    }
}
//criei a função com if para calcular as bolas de sorvete, se passar de 3 é colocado um desconto de 16%