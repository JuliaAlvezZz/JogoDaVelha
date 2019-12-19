var vez, fim, v1, v2, v3, v4, v5, v6, v7, v8, v9, tema=0;

function inicio(){
	vez=1;
	fim=0;
	trava=0;
	v1="v1";
	v2="v2";
	v3="v3";
	v4="v4";
	v5="v5";
	v6="v6";
	v7="v7";
	v8="v8";
	v9="v9";
	document.getElementById("vencedor").innerHTML="Ainda não é o fim do jogo";
	document.getElementById("jogador").innerHTML="Jogador 1";
}

function trocaJogador(){
	if(vez===1){
		vez=2;
		document.getElementById("jogador").innerHTML="Jogador 2";
		return "x";
	}else{
		vez=1;
		document.getElementById("jogador").innerHTML="Jogador 1";
		return "o";
	}
}

function ganhou(){
	if((v1===v2)&&(v1===v3)) return 1;

	if((v1===v5)&&(v1===v9)) return 1;

	if((v1===v4)&&(v1===v7)) return 1;

	if((v2===v5)&&(v2===v8)) return 1;

	if((v3===v5)&&(v3===v7)) return 1;

	if((v3===v6)&&(v3===v9)) return 1;

	if((v4===v5)&&(v4===v6)) return 1;

	if((v7===v8)&&(v7===v9)) return 1;

	if(((v1==="x")||(v1==="o"))&&((v2==="x")||(v2==="o"))&&((v3==="x")||(v3==="o"))&&((v4==="x")||(v4==="o"))&&((v5==="x")||(v5==="o"))&&((v6==="x")||(v6==="o"))&&((v7==="x")||(v7==="o"))&&((v8==="x")||(v8==="o"))&&((v9==="x")||(v9==="o"))) document.getElementById("vencedor").innerHTML="<font color='red'>Deu velha!</font>";
}

function reiniciar(){
	inicio();
	document.getElementById('op1').innerHTML=" ";
	document.getElementById('op2').innerHTML=" ";
	document.getElementById('op3').innerHTML=" ";
	document.getElementById('op4').innerHTML=" ";
	document.getElementById('op5').innerHTML=" ";
	document.getElementById('op6').innerHTML=" ";
	document.getElementById('op7').innerHTML=" ";
	document.getElementById('op8').innerHTML=" ";
	document.getElementById('op9').innerHTML=" ";
}

function escolheu(q){
	if(trava===0){
		switch(q){
			case 1:
				if((v1!=="x")&&(v1!=="o")){
					v1=trocaJogador();
					document.getElementById('op1').innerHTML=v1;
				}
				break;
			case 2:
				if((v2!=="x")&&(v2!=="o")){
					v2=trocaJogador();
					document.getElementById('op2').innerHTML=v2;
				}
				break;
			case 3:
				if((v3!=="x")&&(v3!=="o")){
					v3=trocaJogador();
					document.getElementById('op3').innerHTML=v3;
				}
				break;
			case 4:
				if((v4!=="x")&&(v4!=="o")){
					v4=trocaJogador();
					document.getElementById('op4').innerHTML=v4;
				}
				break;
			case 5:
				if((v5!=="x")&&(v5!=="o")){
					v5=trocaJogador();
					document.getElementById('op5').innerHTML=v5;
				}
				break;
			case 6:
				if((v6!=="x")&&(v6!=="o")){
					v6=trocaJogador();
					document.getElementById('op6').innerHTML=v6;
				}
				break;
			case 7:
				if((v7!=="x")&&(v7!=="o")){
					v7=trocaJogador();
					document.getElementById('op7').innerHTML=v7;
				}
				break;
			case 8:
				if((v8!=="x")&&(v8!=="o")){
					v8=trocaJogador();
					document.getElementById('op8').innerHTML=v8;
				}
				break;
			case 9:
				if((v9!=="x")&&(v9!=="o")){
					v9=trocaJogador();
					document.getElementById('op9').innerHTML=v9;
				}
				break;
		}

		fim=ganhou();

		if(fim===1){
			var vencedor;
			if(vez===1){
				vencedor=2;
			}else{
				vencedor=1;
			}
			document.getElementById("vencedor").innerHTML="<font color='green'>O Jogador "+vencedor+" ganhou!</font>";
			trava=1;
		}
	}
}

function mudaTema(){
	switch(tema){
		case 0:
			tema=1;
			document.body.style.backgroundImage="url('img/tema1/background.jpg')";
			document.getElementById("quad1").style.backgroundImage="url('img/tema1/idoso1.jpg')";
			document.getElementById("quad2").style.backgroundImage="url('img/tema1/idoso2.jpg')";
			document.getElementById("quad3").style.backgroundImage="url('img/tema1/idoso3.jpg')";
			document.getElementById("quad4").style.backgroundImage="url('img/tema1/idoso4.jpg')";
			document.getElementById("quad5").style.backgroundImage="url('img/tema1/idoso5.jpg')";
			document.getElementById("quad6").style.backgroundImage="url('img/tema1/idoso6.jpg')";
			document.getElementById("quad7").style.backgroundImage="url('img/tema1/idoso7.jpg')";
			document.getElementById("quad8").style.backgroundImage="url('img/tema1/idoso8.jpg')";
			document.getElementById("quad9").style.backgroundImage="url('img/tema1/idoso9.jpg')";
			document.getElementById("titulo").innerHTML="Jogo da Velha Vida Loka";
			document.body.style.fontFamily="Stencil";
			break;
		case 1:
			tema=2;
			document.body.style.backgroundImage="url('img/tema2/background.jpg')";
			document.getElementById("quad1").style.backgroundImage="url('img/tema2/idoso1.jpg')";
			document.getElementById("quad2").style.backgroundImage="url('img/tema2/idoso2.jpg')";
			document.getElementById("quad3").style.backgroundImage="url('img/tema2/idoso3.jpg')";
			document.getElementById("quad4").style.backgroundImage="url('img/tema2/idoso4.jpg')";
			document.getElementById("quad5").style.backgroundImage="url('img/tema2/idoso5.jpg')";
			document.getElementById("quad6").style.backgroundImage="url('img/tema2/idoso6.jpg')";
			document.getElementById("quad7").style.backgroundImage="url('img/tema2/idoso7.jpg')";
			document.getElementById("quad8").style.backgroundImage="url('img/tema2/idoso8.jpg')";
			document.getElementById("quad9").style.backgroundImage="url('img/tema2/idoso9.jpg')";
			document.getElementById("titulo").innerHTML="Jogo do Bebê";
			document.body.style.fontFamily="Cooper";
			break;
		case 2:
			tema=0;
			document.body.style.backgroundImage="url('img/tema0/background.jpg')";
			document.getElementById("quad1").style.backgroundImage="url('img/tema0/idoso1.jpg')";
			document.getElementById("quad2").style.backgroundImage="url('img/tema0/idoso2.jpg')";
			document.getElementById("quad3").style.backgroundImage="url('img/tema0/idoso3.jpg')";
			document.getElementById("quad4").style.backgroundImage="url('img/tema0/idoso4.jpg')";
			document.getElementById("quad5").style.backgroundImage="url('img/tema0/idoso5.jpg')";
			document.getElementById("quad6").style.backgroundImage="url('img/tema0/idoso6.jpg')";
			document.getElementById("quad7").style.backgroundImage="url('img/tema0/idoso7.jpg')";
			document.getElementById("quad8").style.backgroundImage="url('img/tema0/idoso8.jpg')";
			document.getElementById("quad9").style.backgroundImage="url('img/tema0/idoso9.jpg')";
			document.getElementById("titulo").innerHTML="Jogo da Velha";
			document.body.style.fontFamily="Courier";
			break;
	}
}