/* PARTE DO FAQ COM SCROLL SUAVE */
function scrollDuvidas() {
	const faqPerguntas = document.querySelectorAll(".js-scroll dt");
	const faqRespostas = document.querySelectorAll(".js-scroll dd");

	faqRespostas[0].classList.add('ativo');

	function ativarScrollFAQ(index) {

		faqRespostas.forEach((item) => {
			item.classList.remove('ativo');
		});

		faqRespostas[index].classList.add('ativo');
	}

	faqPerguntas.forEach((item, index) => {
		item.addEventListener('click', () => {
			ativarScrollFAQ(index);
		});
	});
}
scrollDuvidas();

/* ------------------------------------------------------ */

/* PARTE DO SCROLL SUAVE NAS SEÇÕES GERAIS */
function scrollGeral() {
	const secao = document.querySelectorAll('.js-smooth');
	const windowMetade = window.innerHeight * 0.6;

	function activeSmoothGeneral() {

		secao.forEach((item) => {
			const topoSecao = item.getBoundingClientRect().top - windowMetade;

			if (topoSecao < 0) {
				item.classList.add('ativo');
			}
		});
	}

	activeSmoothGeneral();
	window.addEventListener('scroll', activeSmoothGeneral);
}
scrollGeral();

/* ------------------------------------------------------ */

/* PARTE DOS LINKS LIGADOS AS SEUS HREF'S COM CLIQUE SUAVE */
function linkSuave() {
	const links = document.querySelectorAll("a[href^='#']");

	function ativarLinkSuave(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const secao = document.querySelector(href);

		secao.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}

	links.forEach((item) => {
		item.addEventListener('click', ativarLinkSuave);
	});
}
linkSuave();

/* ------------------------------------------------------ */

/* FUNÇÃO PARA O TEXTO DO SUBTITULO IR APARECENDO (PERCORRENDO) ENQUANTO A PÁGINA CARREGA */
function subtituloAparecendo() {
	const blocoIntroducao = document.querySelector('#inicio');
	const texto = 'O que está esperando para viajar? Se cadastre na plataforma e confira todas as nossas ofertas';

	function escrever(str, el) {
		var caractere = str.split('').reverse();
		var tipo = setInterval(function () {
			if (!caractere.length) {
				return clearInterval(tipo);
			}
			var next = caractere.pop();
			el.innerHTML += next;
			el.style.fontFamily = 'Titillium Web';
			el.style.fontWeight = 'bold';
			el.style.fontStyle = 'italic';
			el.style.color = '#fff';
			el.style.textAlign = 'center';
		}, 50);
	}
	escrever(texto, blocoIntroducao);
}
subtituloAparecendo();

/* ------------------------------------------------------ */

/* FUNÇÃO PARA DAR UM EFEITO NO MENU AO USAR O SCROLL */
function efeitoMenu() {
	const itensMenu = document.querySelectorAll('.item-menu');
	const arrayItens = Array.from(itensMenu);

	window.addEventListener('scroll', () => {
		arrayItens.forEach((item) => {
			if (window.scrollY < 100) {
				item.classList.add('ativado');
				item.classList.remove('desativado');
			} else if (window.scrollY > 100) {
				item.classList.add('desativado');
				item.classList.remove('ativado');
			}
		});
	});
}
efeitoMenu();

/* ------------------------------------------------------ */

/* FUNÇÃO PARA VALIDAR O FORMULÁRIO DE PESQUISA */
function validarPesquisa() {
	const campo = document.querySelectorAll('.campo-pesquisa');
	const botaoPesquisar = document.querySelector('#btn-pesquisar');
	const arrayCampos = Array.from(campo);

	botaoPesquisar.addEventListener('click', () => {
		if (arrayCampos[0, 1].value === '') {
			alert('Verifique os erros no formulário e tente novamente');
		} else {
			arrayCampos[0].value = '';
			arrayCampos[1].value = '';
		}
	});
}
validarPesquisa();

/* ------------------------------------------------------ */

/* FUNÇÃO PARA DEIXAR O ITEM DO MENU NEGRITO QUANDO ESTIVER NO BLOCO REFERENTE */
function negritoItemMenu() {
	const itemMenu = document.querySelectorAll('.item-menu');
	const arrayItens = Array.from(itemMenu);

	window.addEventListener('scroll', () => {
		if (window.scrollY > 3200) {
			arrayItens[0].style.fontWeight = 'normal';
			arrayItens[3].style.fontWeight = 'normal';
			arrayItens[4].style.fontWeight = 'bold';
		} else if (window.scrollY < 100) {
			arrayItens[0].style.fontWeight = 'bold';
			arrayItens[3].style.fontWeight = 'normal';
			arrayItens[4].style.fontWeight = 'normal';
		} else if (window.scrollY > 650 && window.scrollY < 2100) {
			arrayItens[0].style.fontWeight = 'normal';
			arrayItens[4].style.fontWeight = 'normal';
			arrayItens[3].style.fontWeight = 'bold';
		}
	});
}
negritoItemMenu();

/* ------------------------------------------------------ */

/* FUNÇÃO PARA VALIDAR O FORMULÁRIO, COM FUNÇÃO DE CLIQUE, CHANGE, E COM REGEX */
function validarFormulario() {
	const campo = document.querySelectorAll('.campo-formulario');
	const botaoEnviar = document.querySelector('.botao-enviar');
	const arrayCampos = Array.from(campo);

	function regexTelefone() {
		arrayCampos[4].addEventListener('change', () => {
			const telefone = arrayCampos[4].value;
			const novoTelefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/g, '($1) $2-$3');
			arrayCampos[4].value = novoTelefone;
		});
	}
	regexTelefone();

	botaoEnviar.addEventListener('click', (event) => {
		if (arrayCampos[0, 1, 2, 3, 4].value === '' || arrayCampos[0, 1, 2, 3, 4].value.length < 11) {
			alert('Verifique os erros no formulário e tente novamente');
			event.preventDefault();
		} else {
			arrayCampos[0].value = '';
			arrayCampos[1].value = '';
			arrayCampos[2].value = '';
			arrayCampos[3].value = '';
			arrayCampos[4].value = '';
			alert('Mensagem enviada com sucesso, aguarde retorno pelo seu e-mail');
			event.preventDefault();
		}
	});

	arrayCampos[1].addEventListener('change', () => {
		if (!arrayCampos[1].value.includes('@') || arrayCampos[1].value.length < 12) {
			arrayCampos[1].style.border = '2px solid red';
		} else {
			arrayCampos[1].style.border = '1px solid #ccc';
		}
	});
}
validarFormulario();

/* ------------------------------------------------------ */

/* FUNÇÃO PARA VALIDAR MODAL, COM FUNÇÃO DE CLIQUE, CHANGE, E COM REGEX */
function validarModalDados() {
	const campos = document.querySelectorAll('.campos-modal');
	const dados = document.querySelectorAll('.dados-cartao');
	const campoSelecao = document.querySelectorAll('.campo-selecao');
	const botaoFinalizar = document.querySelector('.botao-finalizar');
	const botaoFechar = document.querySelector('.botao-fechar');

	const arrayCampos = Array.from(campos);
	const arrayDados = Array.from(dados);
	const arraySelecao = Array.from(campoSelecao);

	function regexCPF() {
		arrayCampos[2].addEventListener('change', () => {
			const cpf = arrayCampos[2].value;
			const novoCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
			arrayCampos[2].value = novoCPF;
		});
	}
	regexCPF();

	function regexRG() {
		arrayCampos[3].addEventListener('change', () => {
			const rg = arrayCampos[3].value;
			const novoRG = rg.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})/g, '$1.$2.$3-$4');
			arrayCampos[3].value = novoRG;
		});
	}
	regexRG();

	function regexNumeroCartao() {
		arrayDados[1].addEventListener('change', () => {
			const numeroCartao = arrayDados[1].value;
			const novoNumeroCartao = numeroCartao.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, '$1.$2.$3.$4');
			arrayDados[1].value = novoNumeroCartao;
		});
	}
	regexNumeroCartao();

	botaoFinalizar.addEventListener('click', (event) => {
		if (arrayCampos[0, 1, 2, 3].value === '' || arrayDados[0, 1, 2].value === '' || arraySelecao[0].value === 'Expira mês...'
			|| arraySelecao[2].value === 'Expira ano...' || arraySelecao[2].value === 'Selecione...') {
			alert('Verifique os erros no formulário e tente novamente');
			event.preventDefault();
		} else {
			alert('Compra efetuada com sucesso');
			arrayCampos[0].value = '';
			arrayCampos[1].value = '';
			arrayCampos[2].value = '';
			arrayCampos[3].value = '';

			arrayDados[0].value = '';
			arrayDados[1].value = '';
			arrayDados[2].value = '';

			arraySelecao[0].value = 'Expira mês...';
			arraySelecao[1].value = 'Expira ano...';
			arraySelecao[2].value = 'Selecione...';
			$('#modalCompra').modal('hide');
		}
	});

	botaoFechar.addEventListener('click', () => {
		arrayCampos[0].value = '';
		arrayCampos[1].value = '';
		arrayCampos[1].style.border = '1px solid #ccc';
		arrayCampos[2].value = '';
		arrayCampos[2].style.border = '1px solid #ccc';
		arrayCampos[3].value = '';
		arrayCampos[3].style.border = '1px solid #ccc';

		arrayDados[0].value = '';
		arrayDados[1].value = '';
		arrayDados[2].value = '';
	});

	arrayCampos[1].addEventListener('change', () => {
		if (!arrayCampos[1].value.includes('@')) {
			arrayCampos[1].style.border = '2px solid red';
		} else {
			arrayCampos[1].style.border = '1px solid #ccc';
		}
	});

	arrayCampos[2].addEventListener('change', () => {
		if (arrayCampos[2].value.length < 11) {
			arrayCampos[2].style.border = '2px solid red';
		} else {
			arrayCampos[2].style.border = '1px solid #ccc';
		}
	});

	arrayCampos[3].addEventListener('change', () => {
		if (arrayCampos[3].value.length < 8) {
			arrayCampos[3].style.border = '2px solid red';
		} else {
			arrayCampos[3].style.border = '1px solid #ccc';
		}
	});

	arrayDados[0].addEventListener('change', () => {
		if (arrayDados[0].value.length < 12) {
			arrayDados[0].style.border = '2px solid red';
		} else {
			arrayDados[0].style.border = '1px solid #ccc';
		}
	});

	arrayDados[1].addEventListener('change', () => {
		if (arrayDados[1].value.length < 16) {
			arrayDados[1].style.border = '2px solid red';
		} else {
			arrayDados[1].style.border = '1px solid #ccc';
		}
	});
}
validarModalDados();

/* ------------------------------------------------------ */

/* FUNÇÃO QUE AINDA NÃO SEI O QUE FAZER */
function efetuarCompraBoleto() {
	const botaoBoleto = document.querySelector('.botao-boleto');
	const botaoCartao = document.querySelector('.botao-cartao');
	const botaoFinalizar = document.querySelector('.botao-finalizar');
	const botaoFinalizarBoleto = document.querySelector('.botao-finalizar_boleto');
	const dadosCartao = document.querySelector('#nav-cartao');

	const camposModal = document.querySelectorAll('.campos-modal');
	const arrayCampos = Array.from(camposModal);

	botaoBoleto.addEventListener('click', () => {
		// botaoFinalizar.innerHTML = 'Contratar Plano';
		dadosCartao.style.display = 'none';
		botaoFinalizar.style.display = 'none';
		botaoFinalizarBoleto.style.display = 'inline';

		botaoFinalizarBoleto.addEventListener('click', () => {
			if (arrayCampos[0,1,2,3].value === '') {
				alert('Verifique os erros no formulário e tente novamente');
			} else {
				alert('Compra efetuada com sucesso, verifique seu e-mail');
				arrayCampos[0].value = '';
				arrayCampos[1].value = '';
				arrayCampos[2].value = '';
				arrayCampos[3].value = '';
				$('#modalCompra').modal('hide');

			}
		});
	});

	botaoCartao.addEventListener('click', () => {
		dadosCartao.style.display = 'block';
		botaoFinalizar.style.display = 'inline';
	});
}
efetuarCompraBoleto();


