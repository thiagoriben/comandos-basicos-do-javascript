var p1 = window.document.getElementsByTagName('p')[0]
// aqui eu disse q a variavel 'p1' é o paragráfo 1 (que é numero 0)

window.document.write ('Está escrito assim: ' + p1.innerText)
// peguei o conteúdo do paragrafo 1 (0) e escrevi embaixo com outra frase



var p2 = window.document.getElementsByTagName('p')[1]
// aqui eu disse q a variavel 'p2' é o paragráfo 2 (que é numero 1)

window.document.write ('<br><br>O segundo está escrito assim: ' + p2.innerText)
// peguei o conteúdo do paragrafo 2 (1) e escrevi embaixo com outra frase


var corpo = window.document.body
//especifiquei que a var corpo é do body

corpo.style.background = '...'
//aqui eu posso mudar a cor do fundo chamando o body pela div corpo


p1.style.color = 'grey'
p2.style.color = 'grey'

var d = window.document.getElementById('msg')
//selecionei a div pelo ID que eu atribui a ela no HTML

d.style.background = 'black'
//peguei o conteudo da div e coloquei uma cor no plano de fundo dela

d.innerText = 'Estou aguardando...'
//mudei o texto original da div do HTML pelo JS


//USANDO SELETOR 
var d = window.document.querySelector("div#msg")

//como é DIV eu represento como #
//quando é classe, eu represento com um .

d.style.color = 'yellow'
//peguei a div pelo querrySelector para seleções rapidas