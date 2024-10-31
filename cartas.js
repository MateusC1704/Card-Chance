var cartas = ["imagens/1.png","imagens/2.png","imagens/3.png"];

function sortear(){
    var numero = Math.floor((Math.random()*3) + 1);

    console.log("numero = ",numero);

    if (numero==1) {
        document.images[1].src = cartas[0];
        //document.write("<h4>A chance de você ter tirado uma carta do naipe A era de 25%, enquanto a chance dessa carta ser o Ás de A era de apenas 1,9%.</h4>");
    }

    if (numero==2) {
        document.images[1].src = cartas[1];
        //document.write("<h4>A chance de você ter tirado uma carta do naipe A era de 25%, enquanto a chance dessa carta ser o 2 de A era de apenas 1,9%.</h4>");
    }

    if (numero==3) {
        document.images[1].src = cartas[2];
        //document.write("<h4>A chance de você ter tirado uma carta do naipe A era de 25%, enquanto a chance dessa carta ser o 3 de A era de apenas 1,9%.</h4>");

    }

}