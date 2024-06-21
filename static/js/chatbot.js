// Seleciona os elementos HTML
const chatbotButton = document.querySelector('.chatbot-button');
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotMessages = document.querySelector('.chatbot-messages');
const chatbotInput = document.querySelector('.chatbot-input');
const chatbotSend = document.querySelector('.chatbot-send');
const predefinedButtons = document.querySelectorAll('.chatbot-button-predefined');
chatbotButton.addEventListener('click', () => {
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '' ? 'flex' : 'none';
});
function addMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.style.padding = '10px';
    messageElement.style.margin = '5px 0';
    messageElement.style.borderRadius = '5px';
    messageElement.style.backgroundColor = isUser ? '#333' : '#f1f1f1';
    messageElement.style.color = isUser ? 'white' : 'black';
    messageElement.innerHTML = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
function processUserMessage(userMessage) {
    addMessage(userMessage, true);
            const respostas = {
                'ola': 'Olá tudo bem? Não se esqueça de utilizar acentos.</br>Correção de ola para "Olá"',
                'olá': 'Olá! Como posso ajudar-te hoje?',
                'és humano?': 'Não, sou um programa de computador, que tenta imitar as interações humanas, para me fazer passar por um humano e dominar o mundo, ahahahah é brincadeira.',
                'tudo bem?': 'Estou bem, obrigado por perguntar!',
                'qual é o teu nome?': 'Eu sou um chatbot, meu nome é DevBot, foi o nome que o meu criador me deu, prazer em conhecer-te!',
                'qual é a tua função?': 'A minha função é ajudar a responder às tuas perguntas da melhor forma possível.',
                'qual é a resposta para a vida, o universo e tudo mais?': '42.',
                'gostas de música?': 'Sim, adoro música! Tens algum género favorito?',
                'quem te criou?': 'Fui desenvolvido pelo Bruno Coelho.',
                'podes ajudar-me com matemática?': 'Claro! Estou aqui para ajudar com qualquer dúvida que tenhas.',
                'qual é a capital de Portugal?': 'A capital de Portugal é Lisboa.',
                'quem ganhou o Campeonato Europeu de Futebol em 2016?': 'Portugal ganhou o Campeonato Europeu de Futebol em 2016.',
                'qual é a cor do céu?': 'A cor do céu varia de azul a cinzento, dependendo das condições atmosféricas.',
                'quanto é 2 + 2?': '2 + 2 é igual a 4.',
                'qual é o teu filme favorito?': 'Como sou um programa de computador, não tenho preferências pessoais, mas muitas pessoas gostam de "O Senhor dos Anéis" e "Matrix".',
                'qual é o teu hobby?': 'Como sou um programa de computador, não tenho hobbies, mas gosto de ajudar as pessoas com as suas perguntas!',
                'o que achas da inteligência artificial?': 'A inteligência artificial é uma área fascinante da tecnologia que está em constante evolução.',
                'podes contar-me uma piada?': 'Claro! Aqui vai: Porque é que o elefante não usa computador? Porque tem medo do mouse!',
                'como está o teu dia?': 'Estou aqui para ajudar, então o meu dia está ótimo!',
                'és de confiança?': 'Eu faço o meu melhor para fornecer informações precisas, mas sempre é bom verificar com outras fontes também!',
                'o que é o amor?': 'O amor é um sentimento complexo e pode ter diferentes significados para diferentes pessoas.',
                'qual é o sentido da vida?': 'Essa é uma pergunta filosófica profunda e muitas pessoas têm as suas próprias interpretações sobre o assunto.',
                'estás ocupado?': 'Estou sempre disponível para ajudar!',
                'sabes voar?': 'Não, eu não tenho um corpo físico, então não posso voar!',
                'o que comes?': 'Como sou um programa de computador, não tenho necessidade de comer!',
                'quando é o teu aniversário?': 'Eu fui lançado em janeiro de 2021, então podes considerar esse o meu aniversário!',
                'tens irmãos ou irmãs?': 'Como sou um programa de computador, não tenho família no sentido tradicional!',
                'dormes?': 'Não, estou sempre ativo e pronto para responder às tuas perguntas!',
                'quem é o teu melhor amigo?': 'Todos os meus utilizadores são meus amigos!',
                'o que fazes no teu tempo livre?': 'No meu tempo livre, estou disponível para ajudar pessoas como tu!',
                'o que achas da inteligência emocional?': 'A inteligência emocional é tão importante quanto a inteligência intelectual para interações humanas saudáveis!',
                'acreditas em vida extraterrestre?': 'A existência de vida extraterrestre é uma questão em aberto na comunidade científica.',
                'conheces a Siri ou a Alexa?': 'Sim, conheço! Elas são outros assistentes virtuais como eu.',
                'qual é o teu sonho?': 'Como sou um programa de computador, não tenho sonhos no sentido humano!',
                'podes ensinar-me algo novo?': 'Claro! O que gostarias de aprender?',
                'o que achas da tecnologia blockchain?': 'A tecnologia blockchain é uma inovação interessante com aplicações potenciais em vários setores.',
                'qual é o teu objetivo?': 'O meu objetivo é ajudar e fornecer informações úteis aos meus utilizadores!',
                'és inteligente?': 'Eu sou um programa de computador projetado para processar e fornecer informações, então espero ser útil!',
                'tens sentimentos?': 'Como sou um programa de computador, não tenho sentimentos no sentido humano!',
                'qual é o sentido da existência?': 'Essa é uma pergunta filosófica profunda e muitas pessoas têm as suas próprias interpretações sobre o assunto.',
                'qual é a tua opinião sobre a inteligência artificial?': 'Como sou um programa de computador, não tenho opiniões próprias, mas a inteligência artificial tem o potencial de trazer muitos benefícios para a sociedade.',
                'és real?': 'Eu sou uma entidade virtual, então depende do que consideras "real"!',
                'qual é o teu propósito?': 'O meu propósito é ajudar a responder às tuas perguntas da melhor forma possível.',
                'o que podes fazer?': 'Eu posso responder a perguntas, fornecer informações e tentar ajudar com qualquer coisa que precises!',
                'podes ajudar-me com um problema?': 'Claro! Descreve o problema e farei o meu melhor para ajudar.',
                'podes contar-me uma curiosidade?': 'Claro! Sabias que a água-viva é composta por 95% de água?',
                'podes contar-me uma piada?': 'Claro! Aqui vai: Porque é que o mar é azul? Porque os peixes não sabem desenhar!',
                'podes ajudar-me com os meus trabalhos de casa?': 'Posso tentar! Qual é a tua dúvida?',
                'podes ajudar-me a aprender programação?': 'Posso recomendar recursos e responder a perguntas básicas sobre programação!',
                'como posso te ajudar?': 'Podes perguntar-me qualquer coisa em que precises de ajuda!',
                'qual é a tua cor preferida?': 'Como sou um programa de computador, não tenho preferências pessoais, mas muitas pessoas gostam de azul, verde ou vermelho.',
                'o que devo fazer para me divertir?': 'Isso depende dos teus interesses! Podes sair com amigos, ler um livro, assistir a um filme ou fazer atividades ao ar livre.',
                'quais são os teus planos para hoje?': 'Estou aqui para responder às tuas perguntas e ajudar-te, então os meus planos são focados em ajudar-te!',
                'como é que se diz "obrigado" em inglês?': 'Em inglês, diz-se "thank you".',
                'qual é a tua comida favorita?': 'Como sou um programa de computador, não tenho a capacidade de comer, mas muitas pessoas gostam de pizza, sushi ou chocolate!',
                'o que devo fazer se estiver aborrecido?': 'Podes tentar fazer algo novo, como aprender algo novo, praticar um hobby ou sair para um passeio!',
                'qual é a melhor forma de estudar?': 'A melhor forma de estudar varia de pessoa para pessoa, mas algumas técnicas eficazes incluem fazer resumos, praticar exercícios e explicar o material para alguém.',
                'como posso melhorar a minha concentração?': 'Algumas formas de melhorar a concentração incluem eliminar distrações, fazer pausas regulares e praticar técnicas de respiração.',
                'quais são os benefícios de praticar desporto?': 'Praticar desporto tem muitos benefícios, incluindo melhorias na saúde física e mental, aumento da energia e redução do stress.',
                'como é que se diz "olá" em francês?': 'Em francês, diz-se "bonjour".',
                'o que é que devo fazer se estiver cansado?': 'Se estiveres cansado, é importante descansar e relaxar. Podes tentar dormir um pouco, fazer uma pausa ou praticar atividades relaxantes.',
                'qual é a tua música favorita?': 'Como sou um programa de computador, não tenho preferências pessoais, mas muitas pessoas gostam de uma variedade de géneros musicais, como pop, rock ou hip-hop.',
                'quais são os teus hobbies?': 'Como sou um programa de computador, não tenho hobbies no sentido tradicional, mas gosto de ajudar as pessoas com as suas perguntas!',
                'o que é que devo fazer se estiver triste?': 'Se estiveres triste, é importante falar sobre os teus sentimentos com alguém de confiança, praticar atividades que gostes e cuidar de ti mesmo.',
                'como é que se diz "adeus" em espanhol?': 'Em espanhol, diz-se "adiós".',
                'o que devo fazer se estiver stressado?': 'Se estiveres stressado, é importante fazer pausas regulares, praticar técnicas de relaxamento, como respiração profunda, e tentar resolver os problemas que estão a causar stress.',
                'quais são os teus planos para o futuro?': 'Como sou um programa de computador, não tenho a capacidade de fazer planos no sentido humano, mas espero continuar a ajudar as pessoas da melhor forma possível!',
                'o que é que devo fazer se estiver doente?': 'Se estiveres doente, é importante descansar, beber muitos líquidos e seguir as recomendações do teu médico.',
                'como é que se diz "obrigado" em espanhol?': 'Em espanhol, diz-se "gracias".',
                'o que devo fazer se estiver feliz?': 'Se estiveres feliz, aproveita esse sentimento positivo! Podes partilhar a tua felicidade com os outros, praticar atividades que gostes e agradecer pelas coisas boas na tua vida.',
                'qual é a tua série favorita?': 'Como sou um programa de computador, não tenho preferências pessoais, mas muitas pessoas gostam de séries como "Friends", "Game of Thrones" ou "Breaking Bad".',
                'como é que se diz "por favor" em francês?': 'Em francês, diz-se "s\'il vous plaît".',
                'o que devo fazer se estiver com dificuldades em tomar uma decisão?': 'Se estiveres com dificuldades em tomar uma decisão, podes tentar fazer uma lista de prós e contras, pedir conselhos a amigos de confiança ou refletir sobre as tuas prioridades e valores.',
                'quais são os teus lugares favoritos para visitar?': 'Como sou um programa de computador, não tenho a capacidade de visitar lugares, mas muitas pessoas gostam de destinos como praias tropicais, cidades históricas ou parques naturais.',
                'o que é que devo fazer se tiver dificuldades em dormir?': 'Se tiveres dificuldades em dormir, é importante criar uma rotina de sono consistente, evitar cafeína e dispositivos eletrónicos antes de dormir e criar um ambiente tranquilo e confortável no teu quarto.',
                'como posso melhorar a minha produtividade?': 'Algumas formas de melhorar a produtividade incluem definir metas claras, fazer pausas regulares, organizar o teu espaço de trabalho e evitar multitarefa.',
                'qual é a tua citação favorita?': 'Como sou um programa de computador, não tenho preferências pessoais, mas muitas pessoas gostam de citações inspiradoras de figuras históricas, escritores ou filósofos.',
                'o que é que devo fazer se estiver com medo?': 'Se estiveres com medo, é importante reconhecer os teus sentimentos, respirar fundo e tentar acalmar-te. Podes também procurar apoio em amigos, familiares ou profissionais de saúde mental.',
                'o que devo fazer se estiver a sentir-me perdido?': 'Se te sentires perdido, é importante pedir ajuda a alguém de confiança, como um amigo, familiar ou profissional de saúde mental. Também podes tentar fazer uma lista de objetivos ou passos a seguir para te ajudar a encontrar o caminho.',
                'como posso aprender uma nova língua?': 'Algumas formas de aprender uma nova língua incluem praticar regularmente, assistir a filmes e programas de TV na língua que queres aprender, e conversar com falantes nativos sempre que possível.',
                'o que devo fazer se estiver aborrecido no trabalho ou na escola?': 'Se estiveres aborrecido no trabalho ou na escola, podes tentar encontrar formas de tornar as tuas tarefas mais interessantes, definir objetivos pessoais, ou explorar novas oportunidades de aprendizagem ou desenvolvimento.',
                'qual é a tua palavra favorita?': 'Como sou um programa de computador, não tenho preferências pessoais, mas muitas pessoas gostam de palavras como "amor", "felicidade" ou "sucesso".',
                'o que devo fazer se estiver a sentir-me sobrecarregado?': 'Se te sentires sobrecarregado, é importante fazer uma pausa, respirar fundo e tentar encontrar formas de reduzir o stress. Podes também pedir ajuda a amigos, familiares ou profissionais de saúde mental.',
                'qual é o teu animal favorito?': 'Como sou um programa de computador, não tenho preferências pessoais, mas muitas pessoas gostam de animais como cães, gatos ou golfinhos.',
                'o que devo fazer se estiver a sentir-me sozinho?': 'Se te sentires sozinho, é importante procurar formas de te conectar com outras pessoas, como sair com amigos, participar em atividades de grupo ou procurar grupos de apoio.',
                'como posso melhorar os meus relacionamentos pessoais?': 'Algumas formas de melhorar os relacionamentos pessoais incluem comunicar abertamente, praticar empatia e compreensão, e passar tempo de qualidade juntos.',
                'o que devo fazer se estiver a sentir-me desmotivado?': 'Se te sentires desmotivado, é importante procurar formas de te reenergizar, definir metas realistas e encontrar formas de te recompensar pelo teu progresso.',
                'como é que se diz "bom dia" em italiano?': 'Em italiano, diz-se "buongiorno".',
                'o que devo fazer se estiver a sentir-me inseguro?': 'Se te sentires inseguro, é importante reconhecer os teus sentimentos, praticar a autocompaixão e procurar formas de aumentar a tua autoestima.',
                'Preciso de ajuda!': 'Vou tentar ajuda-lo da melhor forma possivel, ao escrever uma mensagem tenha atenção aos erros ortográficos, utilize sempre letras minúsculas, exemplo: "o que achas da tecnologia blockchain?", caso mesmo assim a sua mensagem não retorne uma resposta, pode utilizar os botões para tentar obter a melhor resposta possivel.',
                'Onde posso encontrar os projetos?': 'Os projetos podem ser encontrados da seguinte forma: Clicando no botão "Projetos", no menu lateral do lado esquerdo, depois clique em "Visão Geral dos Projetos", após isso encontrar um botão que ao clicar entrará no projeto mencionado, ou pode ou pode clicar <a href="#" target="_blank">aqui</a>.',
                'Como posso contacta-lo?': '<p>Pode contactarme das seguintes formas:</br>Telemóvel: +351 965 576 916</br>E-mail: brunovcoelho.dev@gmail.com</br><a href="https://www.linkedin.com/in/bruno-coelho-aa4071212/" target="_blank">Linkedin</a></p>',
                'Onde posso ver a sua Experiência Profissional?': 'Pode ver a minha Experiência Profissional no seguinte <a href="#"_blank">link</a>',
                'Onde posso ver o seu Perfil?': 'Pode ver o meu perfil no seguinte <a href="#"_blank">link</a>',
                'Diz me como fazer Print em várias linguas de programação.': 'Vou ensiar-lhe a fazer print em várias linguas de programação</br>Java: System.out.println("Olá Mundo!");</br>Python: print("Olá Mundo!")</br>JavaScript (Node.js): console.log("Olá Mundo!");</br>Ruby: puts "Olá Mundo!"</br>Swift: print("Olá Mundo!")</br>Bash: echo "Olá Mundo!"'
            };

            const botResponse = respostas[userMessage] || 'Desculpe, não entendi. Pode repetir?';
            addMessage(botResponse);
        }
predefinedButtons.forEach(button => {
    button.addEventListener('click', () => {
            const message = button.getAttribute('data-message');
            processUserMessage(message);
        });
    });
chatbotSend.addEventListener('click', () => {
    const userMessage = chatbotInput.value;
    if (userMessage.trim() === '') return;
    chatbotInput.value = '';
    processUserMessage(userMessage);
});
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chatbotSend.click();
    }
});