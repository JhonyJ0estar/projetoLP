function Calcular()
{
    var a300 = Number(document.getElementById("A300ml").value);
    var a600 = Number(document.getElementById("A600ml").value);
    var a2l = Number(document.getElementById("A2L").value);
    
    var resultado = (((a300*300))+((a600*600))+(a2l*2000))/1000;
    if (resultado <1000)
    {
        alert("Total de litros em compra: "+resultado+"ML");
    }
    else
    {
        alert("Total de litros em compra: "+resultado+"Litros");
    }
}
//criei a função com if para calcular os ml e se passasse de 1000 ml era convertido em litros