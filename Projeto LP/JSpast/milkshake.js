function calcular()
{
    var shake300 = Number(document.getElementById("Shake300ml").value);
    var shake500 = Number(document.getElementById("Shake500ml").value);
    var preco300 = 15;
    var preco500 = 20;

    var result = (shake300*preco300)+(shake500*preco500);
    alert("O preço é de R$"+result+" Reais");
}