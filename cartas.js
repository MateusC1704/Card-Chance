var cartas = [
    "imagens/C/01.png","imagens/C/02.png","imagens/C/03.png","imagens/C/04.png","imagens/C/05.png","imagens/C/06.png","imagens/C/07.png","imagens/C/08.png",
    "imagens/C/09.png","imagens/C/10.png","imagens/C/11.png","imagens/C/12.png","imagens/C/13.png","imagens/E/01.png","imagens/E/02.png","imagens/E/03.png",
    "imagens/E/04.png","imagens/E/05.png","imagens/E/06.png","imagens/E/07.png","imagens/E/08.png","imagens/E/09.png","imagens/E/10.png","imagens/E/11.png",
    "imagens/E/12.png","imagens/E/13.png","imagens/O/01.png","imagens/O/02.png","imagens/O/03.png","imagens/O/04.png","imagens/O/05.png","imagens/O/06.png",
    "imagens/O/07.png","imagens/O/08.png","imagens/O/09.png","imagens/O/10.png","imagens/O/11.png","imagens/O/12.png","imagens/O/13.png","imagens/P/01.png",
    "imagens/P/02.png","imagens/P/03.png","imagens/P/04.png","imagens/P/05.png","imagens/P/06.png","imagens/P/07.png","imagens/P/08.png","imagens/P/09.png",
    "imagens/P/10.png","imagens/P/11.png","imagens/P/12.png","imagens/P/13.png"
];
var txtalt = [
    "Às de Copas","Dois de Copas","Três de Copas","Quatro de Copas","Cinco de Copas","Seis de Copas","Sete de Copas","Oito de Copas","Nove de Copas",
    "Dez de Copas","Valete de Copas", "Dama de Copas", "Rei de Copas","Às de Espadas","Dois de Espadas","Três de Espadas","Quatro de Espadas","Cinco de Espadas",
    "Seis de Espadas","Sete de Espadas","Oito de Espadas","Nove de Espadas","Dez de Espadas","Valete de Espadas", "Dama de Espadas", "Rei de Espadas","Às de Ouros",
    "Dois de Ouros","Três de Ouros","Quatro de Ouros","Cinco de Ouros","Seis de Ouros","Sete de Ouros","Oito de Ouros","Nove de Ouros","Dez de Ouros",
    "Valete de Ouros", "Dama de Ouros", "Rei de Ouros","Às de Paus","Dois de Paus","Três de Paus","Quatro de Paus","Cinco de Paus","Seis de Paus","Sete de Paus","Oito de Paus","Nove de Paus",
    "Dez de Paus","Valete de Paus","Dama de Paus","Rei de Paus"
];

function sortear(){
    var numero = Math.floor((Math.random()*52) + 1);

    console.log("numero = ",numero);

    if (numero==1) {
        document.images[1].src = cartas[0];
        document.images[1].alt = txtalt[0];
        
    }

    if (numero==2) {
        document.images[1].src = cartas[1];
        document.images[1].alt = txtalt[1];
        
    }

    if (numero==3) {
        document.images[1].src = cartas[2];
        document.images[1].alt = txtalt[2];
        
    }

    if (numero==4) {
        document.images[1].src = cartas[3];
        document.images[1].alt = txtalt[3];
        
    }

    if (numero==5) {
        document.images[1].src = cartas[4];
        document.images[1].alt = txtalt[4];
        
    }

    if (numero==6) {
        document.images[1].src = cartas[5];
        document.images[1].alt = txtalt[5];
        
    }

    if (numero==7) {
        document.images[1].src = cartas[6];
        document.images[1].alt = txtalt[6];
        
    }

    if (numero==8) {
        document.images[1].src = cartas[7];
        document.images[1].alt = txtalt[7];
        
    }

    if (numero==9) {
        document.images[1].src = cartas[8];
        document.images[1].alt = txtalt[8];
        
    }

    if (numero==10) {
        document.images[1].src = cartas[9];
        document.images[1].alt = txtalt[9];
        
    }

    if (numero==11) {
        document.images[1].src = cartas[10];
        document.images[1].alt = txtalt[10];
        
    }

    if (numero==12) {
        document.images[1].src = cartas[11];
        document.images[1].alt = txtalt[11];
        
    }

    if (numero==13) {
        document.images[1].src = cartas[12];
        document.images[1].alt = txtalt[12];
        
    }

    if (numero==14) {
        document.images[1].src = cartas[13];
        document.images[1].alt = txtalt[13];
        
    }

    if (numero==15) {
        document.images[1].src = cartas[14];
        document.images[1].alt = txtalt[14];
        
    }

    if (numero==16) {
        document.images[1].src = cartas[15];
        document.images[1].alt = txtalt[15];
        
    }

    if (numero==17) {
        document.images[1].src = cartas[16];
        document.images[1].alt = txtalt[16];
        
    }

    if (numero==18) {
        document.images[1].src = cartas[17];
        document.images[1].alt = txtalt[17];
        
    }

    if (numero==19) {
        document.images[1].src = cartas[18];
        document.images[1].alt = txtalt[18];
        
    }

    if (numero==20) {
        document.images[1].src = cartas[19];
        document.images[1].alt = txtalt[19];
        
    }

    if (numero==21) {
        document.images[1].src = cartas[20];
        document.images[1].alt = txtalt[20];
        
    }

    if (numero==22) {
        document.images[1].src = cartas[21];
        document.images[1].alt = txtalt[21];
        
    }

    if (numero==23) {
        document.images[1].src = cartas[22];
        document.images[1].alt = txtalt[22];
        
    }

    if (numero==24) {
        document.images[1].src = cartas[23];
        document.images[1].alt = txtalt[23];
        
    }

    if (numero==25) {
        document.images[1].src = cartas[24];
        document.images[1].alt = txtalt[24];
    }

    if (numero==26) {
        document.images[1].src = cartas[25];
        document.images[1].alt = txtalt[25];   
    }

    if (numero==27) {
        document.images[1].src = cartas[26];
        document.images[1].alt = txtalt[26];   
    }

    if (numero==28) {
        document.images[1].src = cartas[27];
        document.images[1].alt = txtalt[27];   
    }

    if (numero==29) {
        document.images[1].src = cartas[28];
        document.images[1].alt = txtalt[28];   
    }

    if (numero==30) {
        document.images[1].src = cartas[29];
        document.images[1].alt = txtalt[29];   
    }

    if (numero==31) {
        document.images[1].src = cartas[30];
        document.images[1].alt = txtalt[30];   
    }

    if (numero==32) {
        document.images[1].src = cartas[31];
        document.images[1].alt = txtalt[31];   
    }

    if (numero==33) {
        document.images[1].src = cartas[32];
        document.images[1].alt = txtalt[32];   
    }

    if (numero==34) {
        document.images[1].src = cartas[33];
        document.images[1].alt = txtalt[33];   
    }

    if (numero==35) {
        document.images[1].src = cartas[34];
        document.images[1].alt = txtalt[34];   
    }

    if (numero==36) {
        document.images[1].src = cartas[35];
        document.images[1].alt = txtalt[35];   
    }

    if (numero==37) {
        document.images[1].src = cartas[36];
        document.images[1].alt = txtalt[36];   
    }

    if (numero==38) {
        document.images[1].src = cartas[37];
        document.images[1].alt = txtalt[37];   
    }

    if (numero==39) {
        document.images[1].src = cartas[38];
        document.images[1].alt = txtalt[38];   
    }

    if (numero==40) {
        document.images[1].src = cartas[39];
        document.images[1].alt = txtalt[39];   
    }

    if (numero==41) {
        document.images[1].src = cartas[40];
        document.images[1].alt = txtalt[40];   
    }

    if (numero==42) {
        document.images[1].src = cartas[41];
        document.images[1].alt = txtalt[41];   
    }

    if (numero==43) {
        document.images[1].src = cartas[42];
        document.images[1].alt = txtalt[42];   
    }

    if (numero==44) {
        document.images[1].src = cartas[43];
        document.images[1].alt = txtalt[43];   
    }

    if (numero==45) {
        document.images[1].src = cartas[44];
        document.images[1].alt = txtalt[44];   
    }

    if (numero==46) {
        document.images[1].src = cartas[45];
        document.images[1].alt = txtalt[45];   
    }

    if (numero==47) {
        document.images[1].src = cartas[46];
        document.images[1].alt = txtalt[46];   
    }

    if (numero==48) {
        document.images[1].src = cartas[47];
        document.images[1].alt = txtalt[47];   
    }

    if (numero==49) {
        document.images[1].src = cartas[48];
        document.images[1].alt = txtalt[48];   
    }

    if (numero==50) {
        document.images[1].src = cartas[49];
        document.images[1].alt = txtalt[49];   
    }

    if (numero==51) {
        document.images[1].src = cartas[50];
        document.images[1].alt = txtalt[50];   
    }

    if (numero==52) {
        document.images[1].src = cartas[51];
        document.images[1].alt = txtalt[51];   
    }

}