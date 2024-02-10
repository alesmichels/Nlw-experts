const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilização de páginas web.",
        "Uma linguagem de programação para desenvolvimento de aplicativos mobile.",
        "Uma linguagem de programação para desenvolvimento web interativo.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "variable x = 5;",
        "let x = 5;",
        "x = 5;",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Array",
        "Object",
        "String",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um loop em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo.",
        "Uma estrutura de controle de fluxo que repete um bloco de código enquanto uma condição for verdadeira.",
        "Uma função para adicionar elementos a um array.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual destes é um operador de comparação em JavaScript?",
      respostas: [
        "+",
        "==",
        "&&",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de dados que armazena múltiplos elementos em JavaScript?",
      respostas: [
        "Array",
        "String",
        "Object",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "add()",
        "push()",
        "append()",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID.",
        "Seleciona um elemento pelo seu nome.",
        "Seleciona um elemento pelo seu tipo.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de declaração de função em JavaScript?",
      respostas: [
        "função() {...}",
        "def função() {...}",
        "function() {...}",
      ],
      correta: 2
    },
  ];
  // mapear o HTML Daqui para baixo.
  
  const quiz = document.querySelector('#quiz') //usa o # para identificar a "ID", no caso a ID é quiz
  const template = document.querySelector('template')//querySelector é uma função de pesquisa, e a função "document" modela o documento para java script, copia tudo o que está no HTML dentro entre os "template" 
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
  for(const item of perguntas){ //"for" - loop ou laço de repetição, serve para entrar em um array, ele vai fazer alguma ação 
    const quizItem = template.content.cloneNode(true)//OBS: uso do ponto é para ir conectando as strings. cloneNode vai clonar o "nó", cada TAG é um nó, e cada tag dentro de outra é um "filho".
    
    quizItem.querySelector ('h3').textContent = item.pergunta //Nesse caso, foi mudado o título da pergunta. Pega o template clontado "quizItem", seleciona o conteudo do texto "h3, que vai ser igual ao "item.pergunta" 
  
  for(let resposta of item.respostas) { //nessa situação vamos trazer as respostas para a tela, gerando um novo loop de repetição.
    const dt = quizItem.querySelector('dl dt').cloneNode(true)//mesma demanda de procura, nesse caso, vamos procurar o "DT". coloca-se dentro dos () o Dl e com um espaço entre eles o DT. por que disso, quer dizer que dentro do DL, subsequentemente tem um DT. 
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => { 
     const estaCorreta = event.target.value == item.correta
     corretas.delete(item)
     if(estaCorreta){
       corretas.add(item)
     }
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
    }
  
    quizItem.querySelector('dl').appendChild(dt) //traz eles para a tela. 
  }
  
  
  quizItem.querySelector('dl dt').remove() //depois que trouxemos tudo, usou para tirar da rotina e dirar o "0".
    
  quiz.appendChild(quizItem) //coloca a pergunta na tela
  }