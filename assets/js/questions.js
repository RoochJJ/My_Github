// ============================================
// BANCO DE DADOS DAS PERGUNTAS
// ============================================

const quizData = {
    infraestrutura: {
        title: "Infraestrutura de TI - Camada Física",
        subtitle: "Teste seus conhecimentos sobre fundamentos de redes e infraestrutura",
        questions: [
            {
                question: "Qual é a principal função da Camada Física no modelo de redes?",
                options: [
                    "Roteamento de pacotes entre redes",
                    "Transportar bits através da mídia de rede",
                    "Gerenciamento de sessões de usuário",
                    "Criptografia de dados"
                ],
                correct: 1,
                explanation: "A camada física transporta bits através da mídia de rede, sendo responsável pela transmissão real dos sinais elétricos, ópticos ou de rádio."
            },
            {
                question: "Quais são as três áreas funcionais que os padrões da camada física abordam?",
                options: [
                    "Hardware, Software e Firmware",
                    "Componentes Físicos, Codificação e Sinalização",
                    "Transmissão, Recepção e Processamento",
                    "Energia, Velocidade e Distância"
                ],
                correct: 1,
                explanation: "Os padrões da camada física abordam três áreas: Componentes Físicos (hardware), Codificação (conversão de bits) e Sinalização (representação dos valores)."
            },
            {
                question: "Qual é a diferença entre Throughput e Goodput?",
                options: [
                    "São termos equivalentes",
                    "Throughput inclui sobrecarga, Goodput são apenas dados úteis",
                    "Goodput é maior que Throughput",
                    "Throughput é teórico, Goodput é prático"
                ],
                correct: 1,
                explanation: "Goodput = Throughput - sobrecarga de tráfego. Goodput mede apenas os dados úteis transferidos, excluindo headers e overhead."
            },
            {
                question: "Qual é a principal vantagem do cabo STP sobre o UTP?",
                options: [
                    "Maior velocidade de transmissão",
                    "Melhor proteção contra interferências EMI/RFI",
                    "Menor custo de instalação",
                    "Facilidade de manuseio"
                ],
                correct: 1,
                explanation: "STP (Shielded Twisted Pair) oferece melhor proteção contra interferências eletromagnéticas devido à sua blindagem metálica."
            },
            {
                question: "Quantos pares de fios possui um cabo UTP padrão?",
                options: [
                    "2 pares",
                    "4 pares",
                    "6 pares",
                    "8 pares"
                ],
                correct: 1,
                explanation: "O cabo UTP possui 4 pares de fios de cobre com código de cores, torcidos juntos para reduzir interferências e crosstalk."
            },
            {
                question: "Qual é a distância máxima recomendada para cabos de fibra multimodo (MMF)?",
                options: [
                    "100 metros",
                    "550 metros",
                    "1000 metros",
                    "10000 metros"
                ],
                correct: 1,
                explanation: "A fibra multimodo tem uma distância máxima de 550 metros devido à maior dispersão comparada à fibra monomodo."
            },
            {
                question: "Qual conector é mais comumente usado com cabos UTP?",
                options: [
                    "BNC",
                    "RJ-45",
                    "SC",
                    "ST"
                ],
                correct: 1,
                explanation: "O conector RJ-45 é o padrão para terminação de cabos UTP em redes Ethernet."
            },
            {
                question: "Qual é a principal limitação das redes wireless (WLANs)?",
                options: [
                    "Alto custo de implementação",
                    "Operam em half-duplex (um dispositivo por vez)",
                    "Incompatibilidade com dispositivos móveis",
                    "Necessitam de cabos especiais"
                ],
                correct: 1,
                explanation: "WLANs operam em half-duplex, significando que apenas um dispositivo pode transmitir por vez, reduzindo a largura de banda quando há muitos usuários."
            },
            {
                question: "Qual padrão IEEE é usado para redes Wi-Fi?",
                options: [
                    "IEEE 802.3",
                    "IEEE 802.11",
                    "IEEE 802.15",
                    "IEEE 802.16"
                ],
                correct: 1,
                explanation: "IEEE 802.11 é o padrão para tecnologia LAN sem fio (WLAN), conhecido comercialmente como Wi-Fi."
            },
            {
                question: "Qual é a vantagem da fibra óptica sobre o cabeamento de cobre em longas distâncias?",
                options: [
                    "Menor custo de instalação",
                    "Imunidade total a interferências eletromagnéticas",
                    "Facilidade de manuseio",
                    "Compatibilidade com equipamentos antigos"
                ],
                correct: 1,
                explanation: "A fibra óptica é completamente imune a interferências eletromagnéticas (EMI/RFI) e tem muito menor atenuação, permitindo transmissões em longas distâncias."
            }
        ]
    },

    protocolos: {
        title: "Protocolos e Modelos de Rede",
        subtitle: "Teste seus conhecimentos sobre protocolos, modelos OSI e TCP/IP",
        questions: [
            {
                question: "Quais são os três elementos fundamentais para qualquer comunicação?",
                options: [
                    "Hardware, Software e Firmware",
                    "Fonte (remetente), Destino (receptor) e Canal (mídia)",
                    "Servidor, Cliente e Rede",
                    "Dados, Voz e Vídeo"
                ],
                correct: 1,
                explanation: "Toda comunicação necessita de uma fonte (remetente), um destino (receptor) e um canal (mídia) que forneça o caminho para a comunicação ocorrer."
            },
            {
                question: "Qual é o processo de conversão de informações em formato aceitável para transmissão?",
                options: [
                    "Encapsulamento",
                    "Codificação",
                    "Segmentação",
                    "Multiplexação"
                ],
                correct: 1,
                explanation: "Codificação é o processo de conversão de informações em outra forma aceitável para transmissão, enquanto decodificação reverte esse processo."
            },
            {
                question: "O que são PDUs (Protocol Data Units)?",
                options: [
                    "Protocolos de segurança",
                    "Unidades de dados em diferentes camadas do modelo",
                    "Tipos de cabos de rede",
                    "Padrões de codificação"
                ],
                correct: 1,
                explanation: "PDUs são as unidades de dados em cada camada: Dados, Segmento, Pacote, Quadro e Bits, cada uma com funções específicas no encapsulamento."
            },
            {
                question: "Qual é a diferença entre Unicast, Multicast e Broadcast?",
                options: [
                    "São protocolos diferentes",
                    "Unicast (um para um), Multicast (um para muitos), Broadcast (um para todos)",
                    "São tipos de cabos",
                    "São camadas do modelo OSI"
                ],
                correct: 1,
                explanation: "Unicast é comunicação um-para-um, Multicast é um-para-muitos (não todos), e Broadcast é um-para-todos os dispositivos da rede."
            },
            {
                question: "Quantas camadas possui o modelo OSI e qual é a camada superior?",
                options: [
                    "5 camadas, Aplicação",
                    "7 camadas, Aplicação",
                    "4 camadas, Transporte",
                    "6 camadas, Apresentação"
                ],
                correct: 1,
                explanation: "O modelo OSI possui 7 camadas, sendo a Aplicação (camada 7) a superior, seguida por Apresentação, Sessão, Transporte, Rede, Enlace e Física."
            },
            {
                question: "Qual protocolo é responsável pelo sequenciamento de segmentos?",
                options: [
                    "IP",
                    "TCP",
                    "HTTP",
                    "Ethernet"
                ],
                correct: 1,
                explanation: "TCP é responsável por sequenciar os segmentos individuais, numerando-os para que a mensagem possa ser remontada corretamente no destino."
            },
            {
                question: "O que é encapsulamento no contexto de redes?",
                options: [
                    "Processo de criptografia",
                    "Processo onde protocolos adicionam suas informações aos dados",
                    "Tipo de cabo de rede",
                    "Método de compressão"
                ],
                correct: 1,
                explanation: "Encapsulamento é o processo top-down onde cada camada adiciona suas informações (headers) aos dados recebidos da camada superior."
            },
            {
                question: "Qual organização mantém o conjunto de protocolos TCP/IP?",
                options: [
                    "IEEE",
                    "IETF (Internet Engineering Task Force)",
                    "ISO",
                    "ITU-T"
                ],
                correct: 1,
                explanation: "IETF (Internet Engineering Task Force) desenvolve, atualiza e mantém as tecnologias de Internet e o conjunto de protocolos TCP/IP."
            },
            {
                question: "Quais são os principais benefícios da segmentação de mensagens?",
                options: [
                    "Aumenta segurança e reduz custos",
                    "Aumenta velocidade e eficiência",
                    "Reduz interferência e melhora qualidade",
                    "Simplifica protocolos e reduz latência"
                ],
                correct: 1,
                explanation: "Segmentação aumenta velocidade (permite envio de grandes dados sem bloquear links) e eficiência (só retransmite segmentos perdidos)."
            },
            {
                question: "Em que camada do modelo OSI opera o protocolo HTTP?",
                options: [
                    "Camada 4 - Transporte",
                    "Camada 7 - Aplicação",
                    "Camada 3 - Rede",
                    "Camada 5 - Sessão"
                ],
                correct: 1,
                explanation: "HTTP opera na camada 7 (Aplicação), governando como um servidor web e cliente web interagem, definindo conteúdo e formato."
            }
        ]
    },

    redes: {
        title: "Redes e Cabeamento",
        subtitle: "Teste seus conhecimentos sobre cabeamento e conectividade",
        questions: [
            {
                question: "Como o cabo UTP reduz interferências e crosstalk?",
                options: [
                    "Usando blindagem metálica",
                    "Por cancelamento e variação de torções",
                    "Aumentando a espessura do cabo",
                    "Usando conectores especiais"
                ],
                correct: 1,
                explanation: "O UTP reduz interferências através do cancelamento (polaridades opostas) e variação do número de torções por pé em cada par de fios."
            },
            {
                question: "Qual é a diferença principal entre cabo direto e cruzado?",
                options: [
                    "Número de pares de fios",
                    "Padrão de terminação nas extremidades",
                    "Tipo de conector usado",
                    "Categoria do cabo"
                ],
                correct: 1,
                explanation: "Cabo direto usa o mesmo padrão (T568A ou T568B) nas duas extremidades, enquanto cruzado usa T568A em uma extremidade e T568B na outra."
            },
            {
                question: "Qual é a estrutura básica de um cabo coaxial (de fora para dentro)?",
                options: [
                    "Capa externa, isolamento, condutor interno",
                    "Capa externa, blindagem metálica, isolamento, condutor interno",
                    "Isolamento, blindagem, condutor interno",
                    "Capa externa, condutor interno, isolamento"
                ],
                correct: 1,
                explanation: "Cabo coaxial tem: capa externa (proteção), blindagem metálica (segundo fio/proteção), isolamento plástico e condutor interno (transmissão)."
            },
            {
                question: "Por que a fibra monomodo (SMF) alcança maiores distâncias que a multimodo (MMF)?",
                options: [
                    "Usa mais potência",
                    "Tem menor dispersão do sinal",
                    "É mais barata",
                    "É mais fácil de instalar"
                ],
                correct: 1,
                explanation: "SMF tem menor dispersão (espalhamento do pulso de luz), permitindo transmissões em distâncias muito maiores que MMF (até 100.000 metros vs 550 metros)."
            },
            {
                question: "Quais conectores são mais comuns para fibra óptica?",
                options: [
                    "RJ-45 e BNC",
                    "ST, SC e LC",
                    "USB e HDMI",
                    "Ethernet e Coaxial"
                ],
                correct: 1,
                explanation: "Os conectores mais comuns para fibra óptica são ST (Straight-Tip), SC (Subscriber Connector) e LC (Lucent Connector)."
            },
            {
                question: "Qual método de codificação é mencionado como exemplo na camada física?",
                options: [
                    "ASCII",
                    "Manchester",
                    "UTF-8",
                    "Base64"
                ],
                correct: 1,
                explanation: "Manchester é um método de codificação da camada física que converte bits em padrões de sinais reconhecíveis, junto com 4B/5B e 8B/10B."
            },
            {
                question: "Qual é uma aplicação comum do cabo coaxial atualmente?",
                options: [
                    "Redes locais corporativas",
                    "Instalações wireless (antenas) e internet a cabo",
                    "Conexões entre switches",
                    "Cabeamento estruturado de prédios"
                ],
                correct: 1,
                explanation: "Cabo coaxial é usado principalmente em instalações wireless (conectando antenas) e instalações de internet a cabo para clientes residenciais."
            },
            {
                question: "Qual é a largura de banda máxima suportada por cabeamento de fibra óptica?",
                options: [
                    "10 Gbps",
                    "100 Gbps",
                    "1 Tbps",
                    "10 Tbps"
                ],
                correct: 1,
                explanation: "Segundo o documento, cabeamento de fibra óptica suporta de 10 Mb/s até 100 Gb/s, muito superior ao UTP que vai até 10 Gb/s."
            },
            {
                question: "Quais dispositivos são necessários para uma WLAN básica?",
                options: [
                    "Apenas roteadores wireless",
                    "Access Point e adaptadores NIC sem fio",
                    "Switches e cabos UTP",
                    "Servidores DHCP e DNS"
                ],
                correct: 1,
                explanation: "Uma WLAN requer Access Point (concentra sinais wireless) e adaptadores de NIC sem fio (fornecem capacidade wireless aos hosts)."
            },
            {
                question: "Qual padrão IEEE é usado para Bluetooth?",
                options: [
                    "IEEE 802.11",
                    "IEEE 802.15",
                    "IEEE 802.16",
                    "IEEE 802.3"
                ],
                correct: 1,
                explanation: "Bluetooth usa o padrão IEEE 802.15, sendo uma tecnologia WPAN (Wireless Personal Area Network) para comunicações de curta distância."
            },
            {
                question: "Qual a diferença entre endereço IP e endereço MAC?",
                options: [
                    "IP é físico, MAC é lógico",
                    "IP é lógico (camada 3), MAC é físico (camada 2)",
                    "Não há diferença",
                    "IP é para internet, MAC é para LAN"
                ],
                correct: 1,
                explanation: "Endereços IP são lógicos (camada 3) para entrega fim-a-fim, enquanto endereços MAC são físicos (camada 2) incorporados na NIC para entrega local."
            },
            {
                question: "O que acontece com os endereços MAC quando o destino está em rede remota?",
                options: [
                    "Usa o MAC do destino final",
                    "Usa o MAC do gateway/roteador local",
                    "Não usa endereços MAC",
                    "Converte MAC em IP"
                ],
                correct: 1,
                explanation: "Quando o destino é remoto, o endereço MAC de destino será sempre do próximo hop (gateway/roteador) no link local, não do destino final."
            }
        ]
    },

    sistemas: {
        title: "Sistemas Operacionais",
        subtitle: "Linux, Windows e administração de sistemas",
        questions: [
            {
                question: "Qual comando lista arquivos e diretórios no Linux?",
                options: [
                    "dir",
                    "list",
                    "ls",
                    "show"
                ],
                correct: 2,
                explanation: "O comando 'ls' (list) é usado no Linux/Unix para listar arquivos e diretórios. No Windows, o equivalente é 'dir'."
            },
            {
                question: "O que é o kernel de um sistema operacional?",
                options: [
                    "Interface gráfica",
                    "Núcleo do sistema que gerencia recursos",
                    "Aplicativo do usuário",
                    "Sistema de arquivos"
                ],
                correct: 1,
                explanation: "O kernel é o núcleo do sistema operacional, responsável por gerenciar hardware, memória, processos e comunicação entre software e hardware."
            },
            {
                question: "Qual é a diferença entre processo e thread?",
                options: [
                    "São a mesma coisa",
                    "Processo é menor que thread",
                    "Thread compartilha memória do processo",
                    "Thread é independente do processo"
                ],
                correct: 2,
                explanation: "Threads são unidades de execução dentro de um processo que compartilham o mesmo espaço de memória, permitindo execução paralela mais eficiente."
            },
            {
                question: "No Linux, o que representa o diretório /etc?",
                options: [
                    "Arquivos executáveis",
                    "Arquivos de configuração do sistema",
                    "Arquivos temporários",
                    "Arquivos de usuário"
                ],
                correct: 1,
                explanation: "O diretório /etc contém arquivos de configuração do sistema e aplicativos, essenciais para o funcionamento do Linux."
            },
            {
                question: "Qual comando no Linux altera permissões de arquivos?",
                options: [
                    "chown",
                    "chmod",
                    "chgrp",
                    "change"
                ],
                correct: 1,
                explanation: "O comando 'chmod' (change mode) altera as permissões de leitura, escrita e execução de arquivos e diretórios no Linux."
            },
            {
                question: "Quais são as principais funções de um protocolo de rede?",
                options: [
                    "Apenas roteamento e segurança",
                    "Endereçamento, confiabilidade, controle de fluxo, sequenciamento, detecção de erros",
                    "Somente codificação e formatação",
                    "Apenas transmissão de dados"
                ],
                correct: 1,
                explanation: "Protocolos de rede incluem: endereçamento, confiabilidade, controle de fluxo, sequenciamento, detecção de erros e interface de aplicação."
            },
            {
                question: "O que é multiplexação no contexto de segmentação?",
                options: [
                    "Processo de criptografia",
                    "Tomar múltiplos fluxos segmentados e intercalá-los juntos",
                    "Dividir mensagens em partes menores",
                    "Comprimir dados para transmissão"
                ],
                correct: 1,
                explanation: "Multiplexação é o processo de pegar vários fluxos de dados segmentados e intercalá-los juntos para transmissão eficiente."
            },
            {
                question: "No Windows, o que é o Registry?",
                options: [
                    "Sistema de arquivos",
                    "Banco de dados de configurações",
                    "Aplicativo de registro",
                    "Protocolo de segurança"
                ],
                correct: 1,
                explanation: "O Registry do Windows é um banco de dados hierárquico que armazena configurações do sistema operacional e aplicativos."
            }
        ]
    },

    internet: {
        title: "Protocolos da Internet e Organizações",
        subtitle: "História, organizações e padrões que governam a internet",
        questions: [
            {
                question: "Qual organização é responsável por promover o desenvolvimento aberto da Internet?",
                options: [
                    "IEEE",
                    "Internet Society (ISOC)",
                    "Microsoft",
                    "Google"
                ],
                correct: 1,
                explanation: "Internet Society (ISOC) promove o desenvolvimento aberto e a evolução da Internet de forma neutra e sem fins lucrativos."
            },
            {
                question: "O que significa ICANN e qual sua função?",
                options: [
                    "Internet Connection and Network, gerencia conexões",
                    "Internet Corporation for Assigned Names and Numbers, coordena endereços IP e domínios",
                    "International Computer and Network, padroniza computadores",
                    "Internet Control and Administration, controla acessos"
                ],
                correct: 1,
                explanation: "ICANN coordena a alocação de endereços IP, gerenciamento de nomes de domínio e atribuição de outras informações críticas da internet."
            },
            {
                question: "Qual organização supervisiona a alocação de endereços IP para a ICANN?",
                options: [
                    "IEEE",
                    "IANA (Internet Assigned Numbers Authority)",
                    "IETF",
                    "ITU-T"
                ],
                correct: 1,
                explanation: "IANA supervisiona e gerencia a alocação de endereços IP, gerenciamento de nomes de domínio e identificadores de protocolo para a ICANN."
            },
            {
                question: "O que caracteriza os padrões abertos da internet?",
                options: [
                    "São proprietários e pagos",
                    "Promovem interoperabilidade, competição e são neutros",
                    "São controlados por uma única empresa",
                    "São secretos e exclusivos"
                ],
                correct: 1,
                explanation: "Padrões abertos incentivam interoperabilidade, competição e são desenvolvidos por organizações neutras e sem fins lucrativos."
            },
            {
                question: "Qual é o papel do IEEE na internet e redes?",
                options: [
                    "Controla os domínios da internet",
                    "Cria padrões em telecomunicações, redes e energia",
                    "Gerencia endereços IP",
                    "Desenvolve navegadores web"
                ],
                correct: 1,
                explanation: "IEEE é dedicado à criação de padrões em potência e energia, saúde, telecomunicações e redes (como 802.11 para Wi-Fi)."
            },
            {
                question: "O que desenvolve a EIA (Electronic Industries Alliance)?",
                options: [
                    "Software de rede",
                    "Padrões de fiação elétrica, conectores e racks de equipamentos",
                    "Protocolos de internet",
                    "Sistemas operacionais"
                ],
                correct: 1,
                explanation: "EIA desenvolve padrões relacionados à fiação elétrica, conectores e racks de 19 polegadas usados para montar equipamentos de rede."
            },
            {
                question: "Por que o modelo TCP/IP se tornou dominante sobre outros conjuntos de protocolos?",
                options: [
                    "É mais rápido que outros protocolos",
                    "É um padrão aberto, gratuito e aprovado pela indústria",
                    "Foi criado pela Microsoft",
                    "É mais seguro que outras opções"
                ],
                correct: 1,
                explanation: "TCP/IP é um conjunto de protocolos padrão aberto, disponível gratuitamente, baseado em padrões aprovados pela indústria para garantir interoperabilidade."
            },
            {
                question: "Qual era o conjunto de protocolos proprietário da Apple?",
                options: [
                    "NetWare",
                    "AppleTalk",
                    "OSI",
                    "IPX/SPX"
                ],
                correct: 1,
                explanation: "AppleTalk era o conjunto de protocolos proprietário da Apple Inc., usado antes da adoção do TCP/IP como padrão universal."
            },
            {
                question: "O que define o ITU-T?",
                options: [
                    "Padrões de segurança",
                    "Padrões para compressão de vídeo, IPTV e DSL",
                    "Protocolos wireless",
                    "Conectores de rede"
                ],
                correct: 1,
                explanation: "ITU-T define padrões para compressão de vídeo, IPTV (Internet Protocol Television) e comunicações de banda larga como DSL."
            },
            {
                question: "Qual organização é responsável pela arquitetura geral dos padrões da Internet?",
                options: [
                    "IETF",
                    "IAB (Internet Architecture Board)",
                    "ISOC",
                    "ICANN"
                ],
                correct: 1,
                explanation: "IAB (Internet Architecture Board) é responsável pelo gerenciamento e desenvolvimento geral dos padrões da Internet."
            }
        ]
    },

    filosofia: {
        title: "Filosofia e Pensadores",
        subtitle: "Grandes filósofos, correntes de pensamento e conceitos filosóficos",
        questions: [
            {
                question: "O que significa etimologicamente a palavra 'filosofia'?",
                options: [
                    "Amor ao conhecimento",
                    "Amor à sabedoria",
                    "Busca pela verdade",
                    "Estudo da razão"
                ],
                correct: 1,
                explanation: "Filosofia vem do grego 'philos' (amor) e 'sophia' (sabedoria), significando literalmente 'amor à sabedoria'."
            },
            {
                question: "Onde e quando surgiu a filosofia ocidental?",
                options: [
                    "Roma, século V a.C.",
                    "Grécia, século VI a.C.",
                    "Egito, século VII a.C.",
                    "Babilônia, século VIII a.C."
                ],
                correct: 1,
                explanation: "A filosofia ocidental surgiu na Grécia em meados do século VI a.C., como forma de conhecimento racional e sistemático."
            },
            {
                question: "Quem foi o primeiro filósofo da história ocidental?",
                options: [
                    "Sócrates",
                    "Tales de Mileto",
                    "Pitágoras",
                    "Heráclito"
                ],
                correct: 1,
                explanation: "Tales de Mileto (c. 624-548 a.C.) é considerado o primeiro filósofo ocidental, sendo um dos filósofos pré-socráticos."
            },
            {
                question: "Qual frase é atribuída a Sócrates?",
                options: [
                    "Penso, logo existo",
                    "Só sei que nada sei",
                    "O homem é a medida de todas as coisas",
                    "Tudo flui"
                ],
                correct: 1,
                explanation: "A frase 'Só sei que nada sei' é atribuída a Sócrates, representando sua humildade intelectual e método de questionamento."
            },
            {
                question: "Quem foi o tutor de Alexandre, o Grande?",
                options: [
                    "Platão",
                    "Aristóteles",
                    "Sócrates",
                    "Epicuro"
                ],
                correct: 1,
                explanation: "Aristóteles foi tutor de Alexandre, o Grande, sendo considerado um dos filósofos mais influentes da história."
            },
            {
                question: "Qual filósofo criou a 'Alegoria da Caverna'?",
                options: [
                    "Aristóteles",
                    "Platão",
                    "Sócrates",
                    "Heráclito"
                ],
                correct: 1,
                explanation: "A 'Alegoria da Caverna' foi criada por Platão para ilustrar sua teoria do conhecimento e o mundo das ideias."
            },
            {
                question: "Qual filósofo afirmou que 'o homem é um animal político'?",
                options: [
                    "Platão",
                    "Aristóteles",
                    "Cícero",
                    "Maquiavel"
                ],
                correct: 1,
                explanation: "Aristóteles afirmou que 'o homem é por natureza um animal político', enfatizando a natureza social do ser humano."
            },
            {
                question: "Quem é considerado o 'pai da filosofia moderna'?",
                options: [
                    "Immanuel Kant",
                    "René Descartes",
                    "David Hume",
                    "John Locke"
                ],
                correct: 1,
                explanation: "René Descartes é considerado o 'pai da filosofia moderna' por seu método da dúvida e o 'cogito ergo sum'."
            },
            {
                question: "Qual corrente filosófica defende que o conhecimento vem da experiência?",
                options: [
                    "Racionalismo",
                    "Empirismo",
                    "Idealismo",
                    "Materialismo"
                ],
                correct: 1,
                explanation: "O empirismo defende que todo conhecimento deriva da experiência sensorial, não de ideias inatas ou razão pura."
            },
            {
                question: "Quem escreveu 'O Príncipe'?",
                options: [
                    "Thomas Hobbes",
                    "Nicolau Maquiavel",
                    "Jean-Jacques Rousseau",
                    "John Locke"
                ],
                correct: 1,
                explanation: "Nicolau Maquiavel escreveu 'O Príncipe', obra fundamental da filosofia política que analisa o poder e a governança."
            }
        ]
    },

    geral: {
        title: "Conhecimentos Gerais",
        subtitle: "História, Geografia, Ciências, Cultura e Atualidades",
        questions: [
            {
                question: "Quem foi a primeira pessoa a viajar para o espaço?",
                options: [
                    "Neil Armstrong",
                    "Yuri Gagarin",
                    "Buzz Aldrin",
                    "Alan Shepard"
                ],
                correct: 1,
                explanation: "O cosmonauta russo Yuri Gagarin foi a primeira pessoa a viajar para o espaço, em 12 de abril de 1961, na missão Vostok 1."
            },
            {
                question: "Qual é o maior país do mundo em extensão territorial?",
                options: [
                    "China",
                    "Rússia",
                    "Estados Unidos",
                    "Canadá"
                ],
                correct: 1,
                explanation: "A Rússia é o maior país do mundo em extensão territorial, com aproximadamente 17,1 milhões de km²."
            },
            {
                question: "Em que ano foi proclamada a independência do Brasil?",
                options: [
                    "1821",
                    "1822",
                    "1823",
                    "1824"
                ],
                correct: 1,
                explanation: "A independência do Brasil foi proclamada por Dom Pedro I em 7 de setembro de 1822, às margens do rio Ipiranga."
            },
            {
                question: "Qual é o monte mais alto do mundo?",
                options: [
                    "K2",
                    "Monte Everest",
                    "Kangchenjunga",
                    "Lhotse"
                ],
                correct: 1,
                explanation: "O Monte Everest, localizado no Nepal, é o pico mais alto do mundo com 8.848 metros de altitude."
            },
            {
                question: "Quem pintou 'A Última Ceia'?",
                options: [
                    "Michelangelo",
                    "Leonardo da Vinci",
                    "Rafael",
                    "Donatello"
                ],
                correct: 1,
                explanation: "Leonardo da Vinci pintou 'A Última Ceia' entre 1495 e 1498, uma das obras mais famosas da história da arte."
            },
            {
                question: "Qual elemento químico tem o símbolo 'Au'?",
                options: [
                    "Prata",
                    "Ouro",
                    "Alumínio",
                    "Cobre"
                ],
                correct: 1,
                explanation: "Au é o símbolo químico do ouro, derivado do latim 'aurum', que significa ouro."
            },
            {
                question: "Em que continente fica o Egito?",
                options: [
                    "Ásia",
                    "África",
                    "Europa",
                    "Oceania"
                ],
                correct: 1,
                explanation: "O Egito está localizado no nordeste da África, embora uma pequena parte (Península do Sinai) esteja na Ásia."
            },
            {
                question: "Quantos ossos tem o corpo humano adulto?",
                options: [
                    "186",
                    "206",
                    "226",
                    "246"
                ],
                correct: 1,
                explanation: "O corpo humano adulto tem aproximadamente 206 ossos, variando ligeiramente entre indivíduos."
            },
            {
                question: "Qual é o oceano mais profundo do mundo?",
                options: [
                    "Atlântico",
                    "Pacífico",
                    "Índico",
                    "Ártico"
                ],
                correct: 1,
                explanation: "O Oceano Pacífico é o mais profundo, com a Fossa das Marianas atingindo cerca de 11.000 metros de profundidade."
            },
            {
                question: "Quem escreveu 'Dom Casmurro'?",
                options: [
                    "José de Alencar",
                    "Machado de Assis",
                    "Graciliano Ramos",
                    "Clarice Lispector"
                ],
                correct: 1,
                explanation: "Machado de Assis escreveu 'Dom Casmurro' (1899), uma das obras-primas da literatura brasileira."
            },
            {
                question: "Qual gás é mais abundante na atmosfera terrestre?",
                options: [
                    "Oxigênio",
                    "Nitrogênio",
                    "Dióxido de carbono",
                    "Argônio"
                ],
                correct: 1,
                explanation: "O nitrogênio representa cerca de 78% da atmosfera terrestre, sendo o gás mais abundante no ar que respiramos."
            },
            {
                question: "Em que ano acabou a Segunda Guerra Mundial?",
                options: [
                    "1944",
                    "1945",
                    "1946",
                    "1947"
                ],
                correct: 1,
                explanation: "A Segunda Guerra Mundial terminou em 1945, com a rendição da Alemanha em maio e do Japão em setembro."
            }
        ]
    }
};