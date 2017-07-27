
var citacoesFilosoficas = [
    {
        "citacao": "“O futuro é o seu presente concreto.”",
        "autor": "Claudio Gervasio de Lisboa"
    },  
    {
        "citacao":"“Toda hora é hora de fazer o que é certo.”",
        "autor":"Martin Luther King"
    },
    {
        "citacao": "““O ser humano é aquilo que a educação faz dele.”",
        "autor": "Immanuel Kant"
    },
    {
        "citacao": "““Eduquem as crianças e não será necessário castigar os homens.”",
        "autor": "Pitágoras"
    },
    {
        "citacao": "“A injustiça num lugar qualquer é uma ameaça à justiça em todo o lugar.”",
        "autor": "Martin Luther King"
    },
    {
        "citacao": "“O que me preocupa não é o grito dos maus. É o silêncio dos bons.”",
        "autor": "Martin Luther King"
    },
    {
        "citacao": "“Todos os homens têm, por natureza, desejo de conhecer.”",
        "autor": "Aristóteles"
    },
    {
        "citacao": "“Os fins justificam os meios.”",
        "autor": ""
    },
    {
        "citacao": "“O mundo se tornou mais parecido com aquele de Maquiavel.”",
        "autor": "Bertrand Russell"
    },
    {
        "citacao": "“O homem nasce livre e por toda parte encontra-se acorrentado.”",
        "autor": "Jean-Jacques Rousseau"
    },
    {
        "citacao": "“A vontade geral deve emanar de todos para ser aplicada a todos.”",
        "autor": "Jean-Jacques Rousseau"
    },    
    {
        "citacao": "“Deixe a mulher compartilhar dos direitos e ela emulará as virtudes do homem.”",
        "autor": "Mary Wollstonecraft"
    },
    {
        "citacao": "“Todo homem toma os limites de seu próprio campo de visão como os limites do mundo.”",
        "autor": "Arthur Schopenhauer"
    },
    {
        "citacao": "“Sobre seu próprio corpo e mente, o indivíduo é soberano.”",
        "autor": "John Stuart Mill"
    },   
    {
        "citacao": "“A história de todas as sociedades até hoje existentes é a história da luta de classes.”",
        "autor": "Karl Marx"
    },
    {
        "citacao": "“Deve o cidadão, por um momento sequer, renunciar à sua consciência em favor do legislador?.”",
        "autor": "Henry David Thoreau"
    },
    {
        "citacao": "“O homem é uma corda estendida entre o animal e o super-homem: uma corda sobre um abismo.”",
        "autor": "Friedrich Nietzsch"
    },   
    {
        "citacao": "“Aqueles que não conseguem lembrar o passado estão condenados a repeti-lo.”",
        "autor": "George Santayana"
    },
    {
        "citacao": "“A história não nos pertence: nós pertencemos a ela.”",
        "autor": "Hans-Georg Gadamer"
    },
    {
        "citacao": "“Quanto aos homens, não é o que eles são que me interessa, mas o que eles podem se tornar.”",
        "autor": "Jean-Paul Sartre"
    },   
    {
        "citacao": "“O sentido fundamental da liberdade é liberdade dos grilhões.”",
        "autor": "Isaiah Berlin"
    },
    {
        "citacao": "“O que faríamos sem uma cultura?.”",
        "autor": "Mary Midgley"
    },
    {
        "citacao": "“A arte é uma forma de vida.”",
        "autor": "Richard Wollheim"
    },                   
    {
        "citacao": "“Os Estados não são agentes morais; as pessoas são.”",
        "autor": "Noam Chomsky"
    },
    {
        "citacao": "“A sociedade é dependente da crítica às suas próprias tradições.”",
        "autor": "Jürgen Habermas"
    },
    {
        "citacao": "“Que tipo de mundo podemos preparar para os nossos bisnetos?.”",
        "autor": "Richard Rorty"
    },   
    {
        "citacao": "“Se podemos contar uns com os outros, não precisamos depender de mais nada.”",
        "autor": "Richard Rorty"
    },
    {
        "citacao": "“Sem um fim social o saber será a maior das futilidades.”",
        "autor": "Gilberto Freyre"
    },
    {
        "citacao": "“A educação tem raízes amargas, mas os seus frutos são doces.”",
        "autor": "Aristóteles"
    },   
    {
        "citacao": "“É no problema da educação que assenta o grande segredo do aperfeiçoamento da humanidade.”",
        "autor": "Immanuel Kant"
    },
    {
        "citacao": "“A boa educação é moeda de ouro. Em toda a parte tem valor.”",
        "autor": "Padre Antônio Vieira"
    },
    {
        "citacao": "“Toda a educação, no momento, não parece motivo de alegria, mas de tristeza. Depois, no entanto, produz naqueles que assim foram exercitados um fruto de paz e de justiça.”",
        "autor": "Bíblia (Hebreus 12:11)"
    }, 
    {
        "citacao": "“A vida deve ser uma constante educação.”",
        "autor": "Gustave Flaubert"
    },
    {
        "citacao": "“O resultado mais sublime da educação é a tolerância.”",
        "autor": "Helen Keller"
    },
    {
        "citacao": "“Feliz aquele que transfere o que sabe e aprende o que ensina.”",
        "autor": "Cora Coralina"
    }, 
    {
        "citacao": "“A educação é a arma mais poderosa que você pode usar para mudar o mundo.”",
        "autor": "Nelson Mandela"
    },
    {
        "citacao": "“Devemos promover a coragem onde há medo, promover o acordo onde existe conflito, e inspirar esperança onde há desespero.”",
        "autor": "Nelson Mandela"
    },
    {
        "citacao": "“A maior necessidade de um Estado é a de governantes corajosos.”",
        "autor": "Johann Goethe"
    },       
    {
        "citacao": "“Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.”",
        "autor": "Paulo Freire"
    }, 
    {
        "citacao": "“Ninguém liberta ninguém. As pessoas se libertam em comunhão.”",
        "autor": "Paulo Freire"
    }, 
    {
        "citacao": "“Não há saber mais ou saber menos: Há saberes diferentes.”",
        "autor": "Paulo Freire"
    },   
    {
        "citacao": "“Ninguém é sujeito da autonomia de ninguém.”",
        "autor": "Paulo Freire"
    }                  
];

var citacao = "";
var autor = "";


function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function changeCitacoes(item) {
    item = (typeof item !== 'undefined') ?  item : ourRandomRange(0,41);

    citacao = document.getElementById("textCitacao").textContent = citacoesFilosoficas[item]["citacao"];
    autor = document.getElementById("autor").textContent = citacoesFilosoficas[item]["autor"];    
}

function setBackGround(){
    window.setTimeout( "setBackGround()", 5000); // 5000 milliseconds delay
    document.body.style.backgroundColor = getRandomColor();   
}

function getQuoteMessage(){
    let urlTwitter = "https://twitter.com/intent/tweet?text="+citacao;
    window.open(urlTwitter);
}









