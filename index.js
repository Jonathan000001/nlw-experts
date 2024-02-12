const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação", 
        "Uma linguagem de programação", 
        "Um estilo de folha de estilo"
        ],
      correta: 1,
    },
    {
      pergunta: "Qual é a finalidade principal do JavaScript?",
      respostas: [
        "Estilizar páginas web", 
        "Programar servidores", 
        "Adicionar interatividade às páginas web"
        ],
      correta: 2,
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let = minhaVariavel;", 
        "variable minhaVariavel;", 
        "let minhaVariavel;"
        ],
      correta: 2,
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um comentário no código", 
        "Um bloco de código reutilizável", 
        "Uma classe de estilo CSS"
        ],
      correta: 1,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado", 
        "Uma estrutura de controle", 
        "Uma representação da estrutura da página web"
        ],
      correta: 2,
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (i = 0; i < 5; i++)", 
        "loop (i = 0; i < 5; i++)", 
        "while (i = 0; i < 5; i++)"
        ],
      correta: 0,
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' ao declarar variáveis?",
      respostas: [
        "'let' é usado para números, 'const' para strings",
        "'let' permite reatribuição, 'const' não permite",
        "Não há diferença, ambos são intercambiáveis",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma biblioteca de gráficos",
        "Um formato de dados leve e independente de linguagem",
        "Um método de manipulação de strings",
      ],
      correta: 1,
    },
    {
      pergunta: "Como você lida com eventos em JavaScript?",
      respostas: [
        "Apenas usando HTML",
        "Apenas usando CSS",
        "Através de manipuladores de eventos em JavaScript",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Uma técnica para realizar requisições assíncronas no navegador",
        "Um tipo de banco de dados",
      ],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContetent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      
      }
      
      
      quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
  
    
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }