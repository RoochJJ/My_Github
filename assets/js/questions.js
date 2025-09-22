// ============================================
// BANCO DE DADOS DAS PERGUNTAS
// ============================================

const quizData = {
    infraestrutura: {
        title: "Infraestrutura de TI - Redes e Sistemas",
        subtitle: "Teste seus conhecimentos sobre fundamentos de redes, protocolos e infraestrutura",
        questions: [
            // Camada Física
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
            // Camada de Enlace de Dados
            {
                question: "Qual é a principal função da camada de enlace de dados?",
                options: [
                    "Roteamento entre redes diferentes",
                    "Comunicações entre placas de interface de rede do dispositivo final",
                    "Controle de sessão entre aplicações",
                    "Criptografia de dados"
                ],
                correct: 1,
                explanation: "A camada de enlace de dados é responsável pelas comunicações entre NICs dos dispositivos finais e encapsula pacotes da Camada 3 em Frames da Camada 2."
            },
            {
                question: "Quais são as duas subcamadas da Camada de Link de Dados IEEE 802?",
                options: [
                    "Physical e Data Link",
                    "LLC (Logical Link Control) e MAC (Media Access Control)",
                    "Network e Transport",
                    "Session e Presentation"
                ],
                correct: 1,
                explanation: "LLC se comunica entre software de rede e hardware do dispositivo, enquanto MAC é responsável pelo encapsulamento de dados e controle de acesso à mídia."
            },
            {
                question: "O que significa CSMA/CD e onde é usado?",
                options: [
                    "Controle de acesso em redes wireless",
                    "Detecção de colisão em LANs Ethernet half-duplex",
                    "Protocolo de roteamento dinâmico",
                    "Método de criptografia de dados"
                ],
                correct: 1,
                explanation: "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) é usado em LANs Ethernet legacy para detectar e gerenciar colisões em meio compartilhado half-duplex."
            },
            {
                question: "Qual a diferença entre CSMA/CD e CSMA/CA?",
                options: [
                    "São protocolos idênticos",
                    "CSMA/CD detecta colisões, CSMA/CA previne colisões",
                    "CSMA/CA é mais rápido que CSMA/CD",
                    "CSMA/CD é para wireless, CSMA/CA para cabeado"
                ],
                correct: 1,
                explanation: "CSMA/CD detecta colisões após ocorrerem (Ethernet), enquanto CSMA/CA previne colisões antes que aconteçam (WLANs 802.11)."
            },
            // Comutação Ethernet
            {
                question: "Qual é o tamanho mínimo e máximo de um quadro Ethernet?",
                options: [
                    "32 bytes mínimo, 1024 bytes máximo",
                    "64 bytes mínimo, 1518 bytes máximo",
                    "128 bytes mínimo, 2048 bytes máximo",
                    "256 bytes mínimo, 4096 bytes máximo"
                ],
                correct: 1,
                explanation: "Quadros Ethernet têm tamanho mínimo de 64 bytes e máximo de 1518 bytes. Quadros menores são fragmentos de colisão e maiores são considerados jumbo frames."
            },
            {
                question: "Como um switch Ethernet aprende endereços MAC?",
                options: [
                    "Configuração manual dos endereços",
                    "Examinando o endereço MAC de origem dos quadros recebidos",
                    "Protocolo DHCP fornece os endereços",
                    "DNS resolve nomes para endereços MAC"
                ],
                correct: 1,
                explanation: "O switch examina o endereço MAC de origem de cada quadro recebido e associa com a porta de entrada, construindo dinamicamente sua tabela de endereços MAC."
            },
            {
                question: "O que acontece quando um switch recebe um quadro com endereço MAC de destino desconhecido?",
                options: [
                    "Descarta o quadro imediatamente",
                    "Encaminha o quadro por todas as portas exceto a de entrada (flood)",
                    "Envia uma mensagem de erro",
                    "Armazena o quadro até descobrir a porta correta"
                ],
                correct: 1,
                explanation: "Quando o endereço MAC de destino não está na tabela, o switch faz flooding (unicast desconhecido), enviando o quadro por todas as portas exceto a de entrada."
            },
            {
                question: "Qual é a diferença entre switching store-and-forward e cut-through?",
                options: [
                    "Store-and-forward é mais rápido",
                    "Store-and-forward recebe o quadro completo e verifica CRC, cut-through encaminha após ler o endereço destino",
                    "Cut-through verifica erros, store-and-forward não",
                    "São métodos idênticos"
                ],
                correct: 1,
                explanation: "Store-and-forward recebe o quadro inteiro e calcula CRC antes de encaminhar. Cut-through encaminha assim que lê o endereço de destino, oferecendo menor latência mas sem verificação de erros."
            },
            {
                question: "Por que as portas Gigabit Ethernet operam apenas em full-duplex?",
                options: [
                    "Para economizar energia",
                    "Para eliminar colisões e maximizar performance",
                    "Por limitações de hardware",
                    "Para simplificar a configuração"
                ],
                correct: 1,
                explanation: "Gigabit Ethernet opera apenas em full-duplex para eliminar colisões, maximizar a utilização da largura de banda e não precisar do protocolo CSMA/CD."
            },
            // Endereçamento IPv4/IPv6
            {
                question: "Quantos bits possui um endereço IPv4 e como é dividido?",
                options: [
                    "16 bits divididos em 2 octetos",
                    "32 bits divididos em 4 octetos de 8 bits cada",
                    "64 bits divididos em 8 octetos",
                    "128 bits divididos em 16 octetos"
                ],
                correct: 1,
                explanation: "Um endereço IPv4 possui 32 bits, dividido em 4 octetos de 8 bits cada, representados em notação decimal pontilhada (ex: 192.168.1.1)."
            },
            {
                question: "Quantos bits possui um endereço IPv6 e como é representado?",
                options: [
                    "64 bits em notação decimal",
                    "128 bits em notação hexadecimal",
                    "256 bits em notação binária",
                    "96 bits em notação octal"
                ],
                correct: 1,
                explanation: "IPv6 possui 128 bits, representado em notação hexadecimal dividido em 8 grupos de 4 dígitos separados por dois pontos (ex: 2001:db8::1)."
            },
            {
                question: "No IPv6, o que significam as notações de endereço Unicast, Multicast e Anycast?",
                options: [
                    "Tipos de protocolos diferentes",
                    "Unicast (um para um), Multicast (um para muitos), Anycast (um para o mais próximo de muitos)",
                    "Métodos de criptografia",
                    "Velocidades de transmissão"
                ],
                correct: 1,
                explanation: "Unicast identifica uma interface individual, Multicast identifica um grupo de interfaces, e Anycast identifica o mais próximo de um grupo de interfaces."
            },
            // Configuração e IOS
            {
                question: "Qual é a diferença entre os modos EXEC usuário e EXEC privilegiado no Cisco IOS?",
                options: [
                    "Não há diferença entre eles",
                    "EXEC usuário (>) permite comandos básicos, EXEC privilegiado (#) permite todos os comandos",
                    "EXEC privilegiado é mais lento",
                    "EXEC usuário é para administradores"
                ],
                correct: 1,
                explanation: "EXEC usuário (prompt >) permite apenas comandos básicos de monitoramento, enquanto EXEC privilegiado (prompt #) permite acesso a todos os comandos e recursos."
            },
            {
                question: "Qual comando é usado para salvar a configuração em execução para a startup-config?",
                options: [
                    "save config",
                    "copy running-config startup-config",
                    "write memory",
                    "backup configuration"
                ],
                correct: 1,
                explanation: "O comando 'copy running-config startup-config' salva as alterações da configuração ativa (RAM) para o arquivo de configuração de inicialização (NVRAM)."
            },
            {
                question: "Onde ficam armazenados os arquivos running-config e startup-config?",
                options: [
                    "Ambos na NVRAM",
                    "Running-config na RAM, startup-config na NVRAM",
                    "Ambos na Flash",
                    "Running-config na NVRAM, startup-config na RAM"
                ],
                correct: 1,
                explanation: "Running-config fica na RAM (volátil, perdido ao reiniciar) e startup-config fica na NVRAM (não-volátil, mantido após reinicialização)."
            },
            // Topologias e Definições de Rede
            {
                question: "Qual é a diferença entre topologia física e topologia lógica?",
                options: [
                    "São conceitos idênticos",
                    "Física mostra conexões reais, lógica mostra conexões virtuais e endereçamento",
                    "Lógica é mais importante que física",
                    "Física é apenas para documentação"
                ],
                correct: 1,
                explanation: "Topologia física mostra as conexões físicas e localização dos dispositivos, enquanto topologia lógica mostra as conexões virtuais usando interfaces e esquemas de endereçamento."
            },
            {
                question: "Quais são as três topologias físicas WAN mais comuns?",
                options: [
                    "Bus, Ring, Star",
                    "Ponto a ponto, Hub-and-spoke (estrela), Malha (mesh)",
                    "Linear, Circular, Triangular",
                    "Simples, Dupla, Tripla"
                ],
                correct: 1,
                explanation: "As três topologias WAN mais comuns são: Ponto a ponto (conexão direta entre dois pontos), Hub-and-spoke (site central conecta filiais) e Malha (todos conectados a todos)."
            },
            {
                question: "Qual a principal diferença entre LAN e WAN?",
                options: [
                    "LAN é mais rápida, WAN é mais lenta",
                    "LAN abrange área pequena com alta velocidade, WAN abrange área ampla com velocidade menor",
                    "LAN é privada, WAN é pública",
                    "LAN usa cabos, WAN usa wireless"
                ],
                correct: 1,
                explanation: "LAN (Local Area Network) cobre áreas pequenas com alta velocidade e é administrada por uma organização. WAN (Wide Area Network) cobre áreas geográficas amplas com velocidades menores."
            },
            {
                question: "O que caracteriza uma rede convergente?",
                options: [
                    "Apenas transmissão de dados",
                    "Transporta dados, voz e vídeo na mesma infraestrutura",
                    "Usa apenas protocolos proprietários",
                    "Funciona apenas em redes locais"
                ],
                correct: 1,
                explanation: "Redes convergentes transportam múltiplos serviços (dados, voz, vídeo) em uma única infraestrutura, usando o mesmo conjunto de regras e padrões."
            },
            {
                question: "Quais são as quatro características básicas de uma arquitetura de rede confiável?",
                options: [
                    "Velocidade, Custo, Simplicidade, Compatibilidade",
                    "Tolerância a falhas, Escalabilidade, QoS, Segurança",
                    "Hardware, Software, Protocolos, Aplicações",
                    "Cabeado, Wireless, Fibra, Coaxial"
                ],
                correct: 1,
                explanation: "Uma arquitetura de rede confiável deve abordar: Tolerância a falhas (redundância), Escalabilidade (crescimento), QoS (qualidade de serviço) e Segurança."
            },
            // Sistema Binário e Hexadecimal
            {
                question: "Qual é o valor decimal do número binário 11010110?",
                options: [
                    "214",
                    "214",
                    "216",
                    "218"
                ],
                correct: 1,
                explanation: "11010110 em binário = 128+64+0+16+0+4+2+0 = 214 em decimal. Cada posição representa uma potência de 2."
            },
            {
                question: "Como converter o decimal 168 para binário?",
                options: [
                    "10101000",
                    "10101000",
                    "11101000",
                    "10111000"
                ],
                correct: 1,
                explanation: "168 = 128+32+8 = 10101000 em binário. Subtraindo sucessivamente as potências de 2: 168-128=40, 40-32=8, 8-8=0."
            },
            {
                question: "No sistema hexadecimal, que dígitos são usados?",
                options: [
                    "0-9",
                    "0-9 e A-F",
                    "0-7",
                    "0-15"
                ],
                correct: 1,
                explanation: "Hexadecimal usa base 16 com dígitos 0-9 e letras A-F (A=10, B=11, C=12, D=13, E=14, F=15). É usado em endereços IPv6 e MAC."
            },
            // Tipos de Comunicação
            {
                question: "Qual é a diferença entre comunicação half-duplex e full-duplex?",
                options: [
                    "Half-duplex é mais rápido",
                    "Half-duplex permite apenas um dispositivo transmitir por vez, full-duplex permite transmissão simultânea",
                    "Full-duplex usa mais energia",
                    "São métodos idênticos"
                ],
                correct: 1,
                explanation: "Half-duplex permite que apenas um dispositivo transmita por vez (usado em WLANs e hubs). Full-duplex permite transmissão simultânea nos dois sentidos (switches Ethernet modernos)."
            },
            {
                question: "Em que tipo de rede é usado controle de acesso baseado em contenção?",
                options: [
                    "Redes full-duplex com switches",
                    "Redes half-duplex onde dispositivos competem pelo meio",
                    "Redes determinísticas",
                    "Redes ponto-a-ponto"
                ],
                correct: 1,
                explanation: "Controle de acesso baseado em contenção é usado em redes multi-acesso half-duplex onde todos os nós competem pelo uso do meio compartilhado (como Ethernet hub ou WLAN)."
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