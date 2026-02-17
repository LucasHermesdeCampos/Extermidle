const personagens = [
    {
    nome: "Alfredo Alípio de Freitas",
    genero: "Homem",
    status: "Vivo",
    classe: "Especialista",
    origem: ["Médico", "Padre", "Político", "Lider"],
    associacao: ["Ordo Realitas", "Equipe OS", "Equipe Exterminio"],
    idade: 33,
    nex: 75
    },
    {
    nome: "Benedito Peixoto",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Cultista Arrependido", "Pesquisador Paranormal"],
    associacao: ["Ordo Realitas", "Equipe OS", "Equipe Exterminio"],
    idade: 18,
    nex: 85
    },
    {
    nome: "Eric Sharp",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Investigador", "Magnata", "Recrutador", "Mentor"],
    associacao: ["Ordo Realitas", "Equipe OS", "Equipe Exterminio"],
    idade: 31,
    nex: 85
    },
    {
    nome: "Felipe Kiefer",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Lenhador"],
    associacao: ["Ordo Realitas", "Equipe OS", "Equipe Exterminio"],
    idade: 30,
    nex: 80
    },
    {
    nome: "Luis",
    genero: "Homem",
    status: "Desconhecido",
    classe: "Especialista",
    origem: ["Militar", "Atirador de Elite"],
    associacao: ["Ordo Realitas", "Equipe OS"],
    idade: 32,
    nex: 20
    },
    {
    nome: "Renata de Sales",
    genero: "Mulher",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Militar", "Policial"],
    associacao: ["Forças Armadas dos Estados Unidos", "Ordo Realitas", "Equipe OS"],
    idade: 27,
    nex: 45
    },
    {
    nome: "Sebastião Cavalcanti",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Professor", "Empresário", "Escritor"],
    associacao: ["Ordo Realitas", "Equipe OS"],
    idade: 48,
    nex: 35
    },
    {
    nome: "Victor Vicente",
    genero: "Homem",
    status: "Desconhecido",
    classe: "Ocultista",
    origem: ["Cultista Arrependido"],
    associacao: ["Ordo Realitas", "Equipe OS"],
    idade: 25,
    nex: 35
    },
    {
    nome: "Zack (Fernando)",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Guitarrista", "Artista"],
    associacao: ["Ordo Realitas", "Dragões Metálicos", "Equipe OS"],
    idade: "Desconhecido",
    nex: 15
    },
    {
    nome: "Alice Abernado",
    genero: "Mulher",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Militar"],
    associacao: ["Forças Armadas", "Ordo Realitas", "Equipe M"],
    idade: 28,
    nex: 72
    },
    {
    nome: "Enio Bento",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Trabalhador Rural", "Caçador"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 48,
    nex: 35
    },
    {
    nome: "Enio Neto Bento",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Artista", "Podcaster"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 17,
    nex: 30
    },
    {
    nome: "Felipe Soarez",
    genero: "Homem",
    status: "Falecido",
    classe: "Especialista",
    origem: ["Técnico", "Teórico da Conspiração"],
    associacao: ["Ordo Realitas", "Equipe M", "Casa de Helminto"],
    idade: 21,
    nex: 20
    },
    {
    nome: "Lando Touden",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Estudante", "Biólogo"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: "Desconhecido",
    nex: 20
    },
    {
    nome: "Luiz Ferreira",
    genero: "Homem",
    status: "Desconhecido",
    classe: "Especialista",
    origem: ["Militar", "Atirador de Elite"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 32,
    nex: 20
    },
    {
    nome: "Rogério Maciel",
    genero: "Homem",
    status: "Vivo",
    classe: "Especialista",
    origem: ["Magnanta", "Hacker"],
    associacao: ["Ordo Realitas", "Equipe M", "Família Maciel"],
    idade: 33,
    nex: 20
    },
    {
    nome: "Rafael Montes",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Militar"],
    associacao: ["Forças Armadas dos Estados Unidos", "Hell Hunters", "Ordo Realitas", "Equipe M"],
    idade: 29,
    nex: 20
    },
    {
    nome: "Aizetsu",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Cultista Arrependido", "Pesquisador Paranormal"],
    associacao: ["Clones", "Ordo Realitas", "Equipe Hades"],
    idade: "Desconhecido",
    nex: 55
    },
    {
    nome: "Leôncio S. Kennedy",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Policial", "Militar"],
    associacao: ["BOPE", "Ordo Realitas", "Equipe Hades"],
    idade: 23,
    nex: 50
    },
    {
    nome: "Rafael Martins",
    genero: "Homem",
    status: "Vivo",
    classe: "Especialista",
    origem: ["Engenheiro", "Técnico"],
    associacao: ["Ordo Realitas", "Equipe Hades"],
    idade: 24,
    nex: 50
    },
    {
    nome: "Urami",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Cultista Arrependido"],
    associacao: ["Clones", "Ordo Realitas", "Equipe Hades"],
    idade: "Desconhecido",
    nex: 55
    },
    {
    nome: "Urogi",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Cantor", "Costureiro", "Artista", "Ocultista"],
    associacao: ["Clones", "Ordo Realitas", "Equipe Hades"],
    idade: "Desconhecido",
    nex: 55
    },
    {
    nome: "Cristiano Torres",
    genero: "Homem",
    status: "Vivo",
    classe: "Especialista",
    origem: ["Médico", "Socorrista"],
    associacao: ["Ordo Realitas", "Equipe Demolição"],
    idade: 37,
    nex: 20
    },
    {
    nome: "Bartolomeu Costa",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Prisioneiro"],
    associacao: ["Ordo Realitas", "Equipe Demolição"],
    idade: "Desconhecido",
    nex: 60
    },
    {
    nome: "Hank Petrescu",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Minerador"],
    associacao: ["Ordo Realitas", "Equipe Demolição"],
    idade: 41,
    nex: 20
    },
    {
    nome: "Malena Abramelo",
    genero: "Mulher",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Universitário", "Guitarrista", "Artista"],
    associacao: ["Ordo Realitas", "Equipe Demolição"],
    idade: 24,
    nex: 50
    },
    {
    nome: "Arthur Gammel Angel",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Detetive", "Esoterrorista"],
    associacao: ["Culto dos Insondáveis", "Ordo Veritatis", "Equipe Manobra de Combate"],
    idade: 24,
    nex: 50
    },
    {
    nome: "Clyde",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Universitário"],
    associacao: ["Ordo Veritatis", "Equipe Manobra de Combate"],
    idade: 20,
    nex: 60
    },
    {
    nome: "Jony Constantinopla",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Lutador"],
    associacao: ["Ordo Veritatis", "Equipe Manobra de Combate"],
    idade: 25,
    nex: 50
    },
    {
    nome: "Pedro Oliveira da Silva",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Atleta", "Arqueiro"],
    associacao: ["Ordo Veritatis", "Equipe Manobra de Combate"],
    idade: 40,
    nex: 50
    },
    {
    nome: "Enzo Rocha dos Santos",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Atleta", "Jogador de Flag Football"],
    associacao: ["Seleção Brasileira", "Ordo Realitas", "Equipe Gonçalo"],
    idade: 24,
    nex: 18
    },
    {
    nome: "Marcos Dornelles Penha",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Universitário", "Mecânico"],
    associacao: ["Ordo Realitas", "Equipe Gonçalo"],
    idade: 20,
    nex: 14
    },
    {
    nome: "Miguel Gonçalo",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Armeiro", "Agente Federal"],
    associacao: ["Ordo Realitas", "Equipe Gonçalo"],
    idade: 25,
    nex: 14
    },
    {
    nome: "Rafael Dornelles",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Acadêmico", "Geólogo"],
    associacao: ["Ordo Realitas", "Equipe Gonçalo"],
    idade: 30,
    nex: 18
    },
    {
    nome: "Bill Sabor",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Mendigo", "Ocultista"],
    associacao: ["Bruxa Rubra"],
    idade: 41,
    nex: 0
    },
    {
    nome: "Frederick Archiebald",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Fotojornalista", "Teórico da Conspiração"],
    associacao: ["Jornal de Boston"],
    idade: 81,
    nex: 0
    },
    {
    nome: "Jeremy Scott",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Criminoso", "Assaltante"],
    associacao: ["Mafia de Boston"],
    idade: 26,
    nex: 0
    },
    {
    nome: "Thomaz Thompson",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Criminoso", "Mafioso"],
    associacao: ["Mafia de Boston"],
    idade: 36,
    nex: 0
    },
    {
    nome: "Frederick Archiebald",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Mendigo", "Ocultista"],
    associacao: ["Bruxa Rubra"],
    idade: 41,
    nex: 0
    },
    {
    nome: "Kai",
    genero: "Homem",
    status: "Falecido",
    classe: "Esotérico",
    origem: ["Explorador", "Adestrador", "Mateiro"],
    associacao: [""],
    idade: 25,
    nex: 0
    },
    {
    nome: "Lamar Demeatrice Jackson",
    genero: "Homem",
    status: "Vivo",
    classe: "Esperto",
    origem: ["Legista", "Médico"],
    associacao: [""],
    idade: 42,
    nex: 0
    },
    {
    nome: "Leandro Messum",
    genero: "Homem",
    status: "Vivo",
    classe: "Esperto",
    origem: ["Trambiqueiro", "Comerciante"],
    associacao: [""],
    idade: 26,
    nex: 0
    },
    {
    nome: "Marcius Messum",
    genero: "Homem",
    status: "Vivo",
    classe: "Esperto",
    origem: ["Comerciante"],
    associacao: [""],
    idade: 27,
    nex: 0
    },
    {
    nome: "Alexandre Peixoto",
    genero: "Homem",
    status: "Vivo",
    classe: "Sobrevivente",
    origem: ["Médico", "Cirugião", "Agente de Saúde"],
    associacao: [""],
    idade: "Desconhecido",
    nex: 0
    },
    {
    nome: "Caio Medeiros",
    genero: "Homem",
    status: "Vivo",
    classe: "Sobrevivente",
    origem: ["Legista"],
    associacao: [""],
    idade: "Desconhecido",
    nex: 0
    },
    {
    nome: "Diego Bittencourt",
    genero: "Homem",
    status: "Falecido",
    classe: "Sobrevivente",
    origem: ["Policial", "Segurança"],
    associacao: ["Shopping Center Arcádia"],
    idade: "Desconhecido",
    nex: 0
    },
    {
    nome: "José Flamingo",
    genero: "Homem",
    status: "Vivo",
    classe: "Sobrevivente",
    origem: ["Prisioneiro", "Mendigo", "Morador de Rua", "Empacotador"],
    associacao: ["Cidade de Riopinhal", "Shopping Center Arcádia"],
    idade: 28,
    nex: 1
    },
    {
    nome: "Sarah Benventana",
    genero: "Mulher",
    status: "Vivo",
    classe: "Sobrevivente",
    origem: ["Artista", "Ator", "Influencer"],
    associacao: ["Shopping Center Arcádia"],
    idade: 17,
    nex: 0
    },
    {
    nome: "Tobias Pinheiro",
    genero: "Homem",
    status: "Vivo",
    classe: "Sobrevivente",
    origem: ["Universitário"],
    associacao: [""],
    idade: "Desconhecido",
    nex: 0
    },
    {
    nome: "Arthur Moser",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Agente Federal"],
    associacao: ["Federal Bureau of Investigation"],
    idade: 20,
    nex: 0
    },
    {
    nome: "Dante Canário",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Comerciante", "Negociante de Antiguidades", "Contrabandista"],
    associacao: [""],
    idade: 40,
    nex: 0
    },
    {
    nome: "Dante Santoro",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Biólogo", "Biólogo Marinho"],
    associacao: [""],
    idade: "Desconhecido",
    nex: 0
    },
    {
    nome: "Rita Manezzolli",
    genero: "Mulher",
    status: "Desconhecido",
    classe: "Mundano",
    origem: ["Artista", "Pintor"],
    associacao: [""],
    idade: 31,
    nex: 0
    },
    {
    nome: "Ignacio",
    genero: "Desconhecido",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Mercenário", "Bombeiro"],
    associacao: ["Ordo Veritais", "Equipe Centelha"],
    idade: 30,
    nex: 20
    },
    {
    nome: "Caio Leal",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Investigador Paranormal"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 30,
    nex: "Desconhecido"
    },
    {
    nome: "Christiano Dominato",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Policial", "Delegado", "Inspetor de Polícia"],
    associacao: ["Cidade de Riopinhal", "Ordo Realitas", "Equipe M"],
    idade: 48,
    nex: 15
    },
    {
    nome: "Diana Fiorelli",
    genero: "Mulher",
    status: "Falecido",
    classe: "Desconhecido",
    origem: ["Pesquisadora Paranormal", "Botânica", "Cultista"],
    associacao: ["Rei da Carne", "Ordo Realitas"],
    idade: 50,
    nex: 50
    },
    {
    nome: "Enzo Almeida Vasconecelos",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Policial", "Cultista"],
    associacao: ["Ordo Realitas"],
    idade: 10,
    nex: 50
    },
    {
    nome: "Gian Gusmão",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Padre", "Sacerdote"],
    associacao: ["Ordo Realitas", "Equipe Hades", "Equipe Vanguarda"],
    idade: 64,
    nex: "Desconhecido"
    },
    {
    nome: "Lucille Bentz",
    genero: "Mulher",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Mercenário", "Atirador de Elite", "Hoteleiro"],
    associacao: ["Cidade de Riopinhal", "Ordo Realitas", "Equipe Hades", "Equipe Vanguarda"],
    idade: 60,
    nex: 55
    },
    {
    nome: "Marina Vega",
    genero: "Mulher",
    status: "Vivo",
    classe: "Especialista",
    origem: ["Técnico", "Engenheiro", "Militar", "Capitão"],
    associacao: ["Marinha do Brasil", "Ordo Realitas"],
    idade: 32,
    nex: 25
    },
    {
    nome: "Mauro Nunes",
    genero: "Homem",
    status: "Desconhecido",
    classe: "Combatente",
    origem: ["Lutador", "Personal Trainer"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 30,
    nex: 20
    },
    {
    nome: "Sara Montavani",
    genero: "Mulher",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Pesquisador Paranormal", "Universitário", "Ocultista", "Arquivista"],
    associacao: ["Ordo Realitas", "Equipe Exterminio"],
    idade: 19,
    nex: 80
    },
    {
    nome: "Sofia Fujisaki",
    genero: "Mulher",
    status: "Vivo",
    classe: "Especialista",
    origem: ["Atleta", "Jogador de Beisebol"],
    associacao: ["Seishin Sekai", "Ordo Realitas", "Equipe Resiliência"],
    idade: 20,
    nex: 15
    },
    {
    nome: "Vanessa Vinci",
    genero: "Mulher",
    status: "Vivo",
    classe: "Desconhecido",
    origem: ["Motorista", "Piloto"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 31,
    nex: "Desconhecido"
    },
    {
    nome: "Zelda Benchcourt",
    genero: "Mulher",
    status: "Vivo",
    classe: "Desconhecido",
    origem: ["Advogado", "Mentor"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 28,
    nex: "Desconhecido"
    },
    {
    nome: "Marc Menet",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Ocultista", "Líder"],
    associacao: ["Obscurité", "Ordo Realitas"],
    idade: "Desconhecido",
    nex: "Desconhecido"
    },
    {
    nome: "Zelda Benchcourt",
    genero: "Mulher",
    status: "Vivo",
    classe: "Desconhecido",
    origem: ["Advogado", "Mentor"],
    associacao: ["Ordo Realitas", "Equipe M"],
    idade: 28,
    nex: "Desconhecido"
    },
    {
    nome: "Antonella Blanchard",
    genero: "Mulher",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Diretor", "Atendente", "Ocultista"],
    associacao: ["AIA", "Shopping Center Arcádia"],
    idade: 25,
    nex: "Desconhecido"
    },
    {
    nome: "Luis Gonçalves",
    genero: "Homem",
    status: "Falecido",
    classe: "Desconhecido",
    origem: ["Mercenário"],
    associacao: ["AIA"],
    idade: "Desconhecido",
    nex: "Desconhecido"
    },
    {
    nome: "Aclus",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Ocultista", "Líder", "Orfão"],
    associacao: ["Orfanato Santo Expedito", "Os Amigos Preocupados"],
    idade: 125,
    nex: 99
    },
    {
    nome: "Antonella",
    genero: "Mulher",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Orfão"],
    associacao: ["Orfanato Santo Expedito", "Os Amigos Preocupados"],
    idade: 11,
    nex: "Desconhecido"
    },
    {
    nome: "Beatriz Santos",
    genero: "Mulher",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Ocultista", "Orfão"],
    associacao: ["Orfanato Santo Expedito", "Os Amigos Preocupados"],
    idade: 44,
    nex: "Desconhecido"
    },
    {
    nome: "Dante Jeske",
    genero: "Homem",
    status: "Desconhecido",
    classe: "Mundano",
    origem: ["Físico", "Cientista", "Orfão"],
    associacao: ["Orfanato Santo Expedito", "Os Amigos Preocupados"],
    idade: 16,
    nex: "Desconhecido"
    },
    {
    nome: "Ketlin",
    genero: "Mulher",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Orfão"],
    associacao: ["Orfanato Santo Expedito", "Os Amigos Preocupados"],
    idade: 7,
    nex: "Desconhecido"
    },
    {
    nome: "Márcio Servantes",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Físico", "Cientista", "Orfão"],
    associacao: ["Orfanato Santo Expedito", "Os Amigos Preocupados"],
    idade: 45,
    nex: "Desconhecido"
    },
    {
    nome: "Valetin",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Orfão"],
    associacao: ["Orfanato Santo Expedito", "Os Amigos Preocupados"],
    idade: 10,
    nex: "Desconhecido"
    },
    {
    nome: "Apresentador",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Ocultista", "Apresentador"],
    associacao: ["Produção do Anfitrião"],
    idade: "Desconhecido",
    nex: "Desconhecido"
    },
    {
    nome: "Antonio Quintas",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Magnata", "Entusiasta da Tecnologia", "Ocultista"],
    associacao: ["Rei do Horror"],
    idade: 40,
    nex: "Desconhecido"
    },
    {
    nome: "Elton Padilha",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Ocultista", "Gerente"],
    associacao: ["Frigoríferos Matadero", "Os Amigos Preocupados", "Rei do Horror"],
    idade: 77,
    nex: "Desconhecido"
    },
    {
    nome: "Álvaro Padilha",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Médico", "Legista", "Ocultista"],
    associacao: ["Rei do Horror", "DOPS-SP", "Exército Brasileiro"],
    idade: 52,
    nex: "Desconhecido"
    },
    {
    nome: "Rodrigo Guimarães",
    genero: "Homem",
    status: "Desconhecido",
    classe: "Ocultista",
    origem: ["Ocultista"],
    associacao: ["Rei do Horror"],
    idade: 20,
    nex: "Desconhecido"
    },
    {
    nome: "Antonov Goerck",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Ocultista", "Gerente"],
    associacao: ["Frigoríferos Matadero", "Satanistas"],
    idade: 40,
    nex: 30
    },
    {
    nome: "Alvaro Caires",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Psicólogo"],
    associacao: ["Tríade", "Equipe Demolição"],
    idade: "Desconhecido",
    nex: 40
    },
    {
    nome: "Roberto Ghular",
    genero: "Homem",
    status: "Falecido",
    classe: "Desconhecido",
    origem: ["Delegado", "Policial", "Ocultista"],
    associacao: ["Sanguis Orchid", "Cidade de Aurora"],
    idade: 56,
    nex: "Desconhecido"
    },
    {
    nome: "Bretislav Czyhlarz",
    genero: "Homem",
    status: "Vivo",
    classe: "Desconhecido",
    origem: ["Mercenário", "Traficante", "Prisioneiro"],
    associacao: ["Os Capuzes Vermelhos"],
    idade: 37,
    nex: "Desconhecido"
    },
    {
    nome: "Joyce Ribeiro",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Militar", "Caminhoneiro", "Aposentado", "Prisioneiro"],
    associacao: ["Cidade de Riopinhal"],
    idade: 60,
    nex: 10
    },
    {
    nome: "Cultista Encapuzado",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Cultista"],
    associacao: ["Os Amigos Preocupados"],
    idade: 30,
    nex: "Desconhecido"
    },
    {
    nome: "Matheus Santavilla",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Esoterrorista", "Cultista", "Mercenário", "Capitão"],
    associacao: ["Companhias Maciel", "Escriptas", "Gonçalino"],
    idade: 27,
    nex: 25
    },
    {
    nome: "Romeu Guimarães",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Universitário", "Influencer", "Cultista"],
    associacao: ["Os Amigos Preocupados"],
    idade: 21,
    nex: "Desconhecido"
    },
    {
    nome: "Johann Matadero",
    genero: "Homem",
    status: "Desconhecido",
    classe: "Ocultista",
    origem: ["Chef", "Cultista"],
    associacao: ["Frigoríferos Matadero"],
    idade: 40,
    nex: 50
    },
    {
    nome: "Walter Corbitt",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Advogado", "Cultista"],
    associacao: [""],
    idade: 86,
    nex: 50
    },
    {
    nome: "Larissa Ribeiro",
    genero: "Mulher",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Policial"],
    associacao: ["Cidade de Aurora", "Ordo Realitas"],
    idade: 26,
    nex: 5
    },
    {
    nome: "Geraldo Munch",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Delegado", "Policial", "Investigador", "Aposentado"],
    associacao: ["Cidade de Aurora"],
    idade: 76,
    nex: 0
    },
    {
    nome: "Juliana Barbosa",
    genero: "Mulher",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Bibliotecário"],
    associacao: ["Cidade de Aurora"],
    idade: 25,
    nex: 0
    },
    {
    nome: "Lia Schmidt",
    genero: "Mulher",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Atendente"],
    associacao: ["Gonçalo"],
    idade: 25,
    nex: 5
    },
    {
    nome: "Luiz Marzio",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Policial", "Agente Federal"],
    associacao: ["Policia Federal"],
    idade: 30,
    nex: 0
    },
    {
    nome: "Antônia Carvalho",
    genero: "Mulher",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Hoteleiro"],
    associacao: ["Pousada Caminho das Águas", "Família Maciel", "Praia da Sereia", "Maresia Salgada"],
    idade: 57,
    nex: 0
    },
    {
    nome: "Bernardo Duarte",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Pescador"],
    associacao: ["Pousada Caminho das Águas", "Maresia Salgada"],
    idade: 28,
    nex: "Desconhecido"
    },
    {
    nome: "Beatriz Duarte",
    genero: "Mulher",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Atenente", "Garçonete"],
    associacao: ["Praia da Sereia", "Maresia Salgada"],
    idade: 25,
    nex: 0
    },
    {
    nome: "Estevão Santos",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Pescador"],
    associacao: ["Praia da Sereia", "Maresia Salgada"],
    idade: 60,
    nex: "Desconhecido"
    },
    {
    nome: "Helena Martins",
    genero: "Mulher",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Artista", "Cantor"],
    associacao: ["Pousada Caminho das Águas", "Praia da Sereia", "Maresia Salgada"],
    idade: 24,
    nex: "Desconhecido"
    },
    {
    nome: "Hugo Bulgário",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Segurança", "Camareiro", "Estudante", "Mecânico"],
    associacao: ["Cidade de Riopinhal", "Pousada Caminho das Águas", "Praia da Sereia", "Maresia Salgada"],
    idade: 23,
    nex: 0
    },
    {
    nome: "João Martins",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Pescador"],
    associacao: ["Praia da Sereia", "Maresia Salgada"],
    idade: 72,
    nex: 0
    },
    {
    nome: "Júlio Martins",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Zelador"],
    associacao: ["Pousada Caminho das Águas", "Praia da Sereia", "Maresia Salgada"],
    idade: "Desconhecido",
    nex: 0
    },
    {
    nome: "Marcelo Santos",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Gerente"],
    associacao: ["Praia da Sereia", "Maresia Salgada"],
    idade: 40,
    nex: 0
    },
    {
    nome: "Monique Carvalho",
    genero: "Mulher",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Atendente"],
    associacao: ["Pousada Caminho das Águas", "Praia da Sereia", "Maresia Salgada"],
    idade: 26,
    nex: 0
    },
    {
    nome: "Rogério Santos",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Bartender", "Atendente"],
    associacao: ["Pousada Caminho das Águas", "Praia da Sereia", "Maresia Salgada"],
    idade: 34,
    nex: 0
    },
    {
    nome: "Sonia Ferreira",
    genero: "Mulher",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Artesã", "Aposentada"],
    associacao: ["Praia da Sereia", "Maresia Salgada"],
    idade: 45,
    nex: 0
    },
    {
    nome: "Calvin Rodrigues",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Turista"],
    associacao: ["Pousada Caminho das Águas"],
    idade: 33,
    nex: 0
    },
    {
    nome: "Angelo de La Cruz",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Padre", "Diretor"],
    associacao: ["Igreja Católica da Argentina", "Orfanato Venâncio Perfeito"],
    idade: 50,
    nex: 15
    },
    {
    nome: "Gabriel",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Orfão"],
    associacao: ["Orfanato Venâncio Perfeito", "Rei da Carne", "Filhos de Adão"],
    idade: 14,
    nex: 0
    },
    {
    nome: "Mauricio Montes",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Agente Sanitário", "Prisioneiro"],
    associacao: ["Cidade de Riopinhal"],
    idade: 56,
    nex: 0
    },
    {
    nome: "Tiago Wolter",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Farmacêutico", "Agente de Saúde", "Assassino", "Cultista"],
    associacao: ["Cidade de Riopinhal", "Rei da Carne"],
    idade: 45,
    nex: 50
    },
    {
    nome: "Lúcia Saltorelli",
    genero: "Mulher",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Artista", "Pintor"],
    associacao: ["Banco Mercantil Saltorelli", "Cidade de Riopinhal"],
    idade: "Desconhecido",
    nex: 0
    },
    {
    nome: "Absalom Rossini",
    genero: "Homem",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Fazendeiro", "Gerente", "Prisioneiro"],
    associacao: ["Cidade de Riopinhal"],
    idade: 73,
    nex: 5
    },
    {
    nome: "Catarina Saltorelli",
    genero: "Mulher",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Socialite"],
    associacao: ["Banco Mercantil Saltorelli"],
    idade: "Desconhecido",
    nex: 25
    },
    {
    nome: "Eugênio Saltorelli",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Gerente", "CEO", "Investidor", "Magnata"],
    associacao: ["Banco Mercantil Saltorelli", "Companhias Maciel"],
    idade: 50,
    nex: 0
    },
    {
    nome: "Anselmo Montenegro",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Médico", "Agente de Saúde", "Radiologista"],
    associacao: ["Produção do Anfitrião"],
    idade: 56,
    nex: 20
    },
    {
    nome: "Iosef Beltranov",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Juiz", "Diretor", "Padre"],
    associacao: ["Orfanato Santo Expedito", "Igreja Ortodexa Brasileira"],
    idade: 78,
    nex: 0
    },
    {
    nome: "Reinaldo Duran",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Policial", "Prefeito"],
    associacao: ["Cidade de Vento Baixo"],
    idade: 63,
    nex: 0
    },
    {
    nome: "Eliana Carvalho",
    genero: "Mulher",
    status: "Vivo",
    classe: "Mundano",
    origem: ["Prefeito", "Político", "Ativista", "Vidente"],
    associacao: ["Cidade de Vento Baixo", "Maresia Salgada", "Praia da Sereia"],
    idade: 69,
    nex: 20
    },
    {
    nome: "Hosaa",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Xamã", "Eremita", "Feiticeiro"],
    associacao: [""],
    idade: 58,
    nex: 20
    },
    {
    nome: "Rufus Dunker",
    genero: "Homem",
    status: "Falecido",
    classe: "Ocultista",
    origem: ["Caçador", "Marceneiro", "Cultista"],
    associacao: ["Gangue Dunker"],
    idade: 67,
    nex: 5
    },
    {
    nome: "Wade Dunker",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Bandido"],
    associacao: ["Gangue Dunker"],
    idade: 32,
    nex: 0
    },
    {
    nome: "Johnny Buck",
    genero: "Homem",
    status: "Falecido",
    classe: "Mundano",
    origem: ["Bandido"],
    associacao: ["Gangue Dunker"],
    idade: 20,
    nex: 2
    },
    {
    nome: "Incola",
    genero: "Desconhecido",
    status: "Desconhecido",
    classe: "Desconhecido",
    origem: ["Desconhecido"],
    associacao: ["Desconhecido"],
    idade: "Desconhecido",
    nex: "Desconhecido"
    },
    {
    nome: "Estevão Mineiro",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Eremita", "Sobrevivente", "Minerador"],
    associacao: ["Mojangue", "Non-Canon"],
    idade: 48,
    nex: 40
    },
    {
    nome: "Grigori Rasputinho",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Professor"],
    associacao: ["Non-Canon"],
    idade: 156,
    nex: 99
    },
    {
    nome: "Kurt Cobém",
    genero: "Homem",
    status: "Vivo",
    classe: "Ocultista",
    origem: ["Acadêmico", "Cantor"],
    associacao: ["Non-Canon"],
    idade: 27,
    nex: 99
    },
    {
    nome: "Miguel Jaqueson",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Enclausurado", "Dançarino", "Artista", "Cantor"],
    associacao: ["Non-Canon"],
    idade: 67,
    nex: 50
    },
    {
    nome: "Moura Snaipa Boontedesix",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Enclausurado", "Ator", "Estourador de Balões", "Programador", "Atirador de Elite"],
    associacao: ["Non-Canon"],
    idade: 17,
    nex: 50
    },
    {
    nome: "Moura Snaipa Boontedesix",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Enclausurado", "Ator", "Estourador de Balões", "Programador", "Atirador de Elite"],
    associacao: ["Um Kiwi Ninja", "Non-Canon"],
    idade: 17,
    nex: 50
    },
    {
    nome: "Paul Alan Leio",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Cultista Arrependido", "Viajante", "Turista"],
    associacao: ["Alheios", "Non-Canon"],
    idade: 45,
    nex: 45
    },
    {
    nome: "Bob Esponja",
    genero: "Homem",
    status: "Vivo",
    classe: "Combatente",
    origem: ["Chapeiro", "Cozinheiro", "Exterminador", "Motoqueiro", "Membro de Gangue"],
    associacao: ["Siri Cascudo", "Non-Canon"],
    idade: 20,
    nex: 99
    },
    {
    nome: "S'en'shyên'tchi",
    genero: "Homem",
    status: "Falecido",
    classe: "Combatente",
    origem: ["Pelicano", "Mascote", "Magnata"],
    associacao: ["JETT Records", "Non-Canon"],
    idade:58,
    nex: 50
    },
];


const MAX_TENTATIVAS = 10;
let tentativas = carregarProgresso();
let jogoFinalizado = false;

function getPersonagemDoDia() {
  const hoje = new Date();
  const seed =
    hoje.getFullYear() * 10000 +
    (hoje.getMonth() + 1) * 100 +
    hoje.getDate();
  return personagens[seed % personagens.length];
}

const alvo = getPersonagemDoDia();
const input = document.getElementById("guessInput");
const suggestions = document.getElementById("suggestions");
const board = document.getElementById("board");
const victoryBanner = document.getElementById("victoryBanner");
const shareBtn = document.getElementById("shareBtn");
const attemptBar = document.getElementById("attemptBar");

function salvarProgresso() {
  localStorage.setItem("tentativas", JSON.stringify(tentativas));
}

function carregarProgresso() {
  return JSON.parse(localStorage.getItem("tentativas")) || [];
}

function criarBarraTentativas() {
  attemptBar.innerHTML = "";
  for (let i = 0; i < MAX_TENTATIVAS; i++) {
    const div = document.createElement("div");
    div.className = "attempt";
    if (i < tentativas.length) div.classList.add("used");
    attemptBar.appendChild(div);
  }
}

function compararLista(chute, alvo) {
  const chuteArr = Array.isArray(chute) ? chute : [chute];
  const alvoArr = Array.isArray(alvo) ? alvo : [alvo];

  const todosCorretos =
    chuteArr.length === alvoArr.length &&
    chuteArr.every(v => alvoArr.includes(v));

  if (todosCorretos) return "green";

  const algumCorreto = chuteArr.some(v => alvoArr.includes(v));

  if (algumCorreto) return "orange";

  return "red";
}

function compararNumero(valor, alvo) {
  const ehNumeroValor = typeof valor === "number";
  const ehNumeroAlvo = typeof alvo === "number";

  // Ambos desconhecidos
  if (!ehNumeroValor && !ehNumeroAlvo) {
    return "green";
  }

  // Um desconhecido e outro não
  if (!ehNumeroValor || !ehNumeroAlvo) {
    return "red";
  }

  // Iguais
  if (valor === alvo) {
    return "green";
  }

  // Maior ou menor
  return valor < alvo ? "red arrow-up" : "red arrow-down";
}


function comparar(chute, alvo) {
  return {
    nome: chute.nome === alvo.nome ? "green" : "red",
    genero: chute.genero === alvo.genero ? "green" : "red",
    status: chute.status === alvo.status ? "green" : "red",
    classe: chute.classe === alvo.classe ? "green" : "red",
    origem: compararLista(chute.origem, alvo.origem),
    associacao: compararLista(chute.associacao, alvo.associacao),
    idade: compararNumero(chute.idade, alvo.idade),
    nex: compararNumero(chute.nex, alvo.nex)
  };
}





async function renderTentativa(personagem, resultado) {
  const row = document.createElement("div");
  row.className = "row";

  const campos = [
    "nome",
    "genero",
    "status",
    "classe",
    "origem",
    "associacao",
    "idade",
    "nex"
  ];

  campos.forEach(() => {
    const cell = document.createElement("div");
    row.appendChild(cell);
  });

  // ALTERADO AQUI
  board.appendChild(row);

  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    const cell = row.children[i];

    await new Promise(r => setTimeout(r, 120));

    const valor = personagem[campo];
    cell.textContent = Array.isArray(valor)
      ? valor.join(", ")
      : valor;
    cell.className = resultado[campo];
  }
}


function finalizarJogo(vitoria) {
  jogoFinalizado = true;
  shareBtn.classList.remove("hidden");

  victoryBanner.classList.remove("hidden");

  if (vitoria) {
    victoryBanner.className = "victory win";
    victoryBanner.textContent = "✔ Você acertou o personagem do dia!";
  } else {
    victoryBanner.className = "victory lose";
    victoryBanner.textContent =
      "✖ Você não acertou. O personagem era: " + alvo.nome;
  }
}

function fazerChute(nome) {
  if (jogoFinalizado) return;
  if (tentativas.length >= MAX_TENTATIVAS) return;

  const personagem = personagens.find(
    p => p.nome.toLowerCase() === nome.toLowerCase()
  );
  if (!personagem) return;

  const resultado = comparar(personagem, alvo);
  tentativas.push({ personagem, resultado });
  salvarProgresso();
  renderTentativa(personagem, resultado);
  criarBarraTentativas();

  if (personagem.nome === alvo.nome) {
    finalizarJogo(true);
  } else if (tentativas.length >= MAX_TENTATIVAS) {
    finalizarJogo(false);
  }
}

document.getElementById("guessBtn").onclick = () => {
  fazerChute(input.value);
  input.value = "";
  suggestions.innerHTML = "";
};

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();
  suggestions.innerHTML = "";

  if (!texto) return;

  personagens
    .filter(p => p.nome.toLowerCase().startsWith(texto))
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "suggestion";
      div.textContent = p.nome;
      div.onclick = () => {
        input.value = p.nome;
        suggestions.innerHTML = "";
      };
      suggestions.appendChild(div);
    });
});

function corParaEmoji(cor) {
  if (cor.includes("green")) return "🟩";
  if (cor.includes("orange")) return "🟧";
  return "🟥";
}

function gerarTextoCompartilhamento() {
  const tentativasUsadas = tentativas.length;
  const venceu = tentativas.some(t => t.personagem.nome === alvo.nome);

  let texto;

  if (venceu) {
    texto =
      `Acertei o personagem do dia no Exterdle (${location.href}) em ${tentativasUsadas} tentativas:\n`;
  } else {
    texto =
      `Não acertei o personagem do dia no Exterdle (${location.href})\n`;
  }

  tentativas.forEach(t => {
    texto +=
      corParaEmoji(t.resultado.nome) +
      corParaEmoji(t.resultado.genero) +
      corParaEmoji(t.resultado.status) +
      corParaEmoji(t.resultado.classe) +
      corParaEmoji(t.resultado.origem) +
      corParaEmoji(t.resultado.associacao) +
      corParaEmoji(t.resultado.idade) +
      corParaEmoji(t.resultado.nex) +
      "\n";
  });

  return texto;
}


shareBtn.onclick = () => {
  const texto = gerarTextoCompartilhamento();
  navigator.clipboard.writeText(texto);
  alert("Resultado copiado!");
};

function renderProgresso() {
  tentativas.forEach(t =>
    renderTentativa(t.personagem, t.resultado)
  );

  criarBarraTentativas();

  const venceu = tentativas.some(t => t.personagem.nome === alvo.nome);
  if (venceu) finalizarJogo(true);
  else if (tentativas.length >= MAX_TENTATIVAS)
    finalizarJogo(false);
}

renderProgresso();
criarBarraTentativas();
