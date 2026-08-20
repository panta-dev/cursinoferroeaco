import { AudiencePersona } from '../types';

export const AUDIENCE_PERSONAS: AudiencePersona[] = [
  {
    slug: 'para-construtoras',
    name: 'Para Construtoras & Incorporadoras',
    h1: 'Aço Armado Just-In-Time e Redução de Custos Indiretos no Canteiro',
    metaTitle: 'Aço Armado para Construtoras em São Paulo | Cursino Ferro e Aço',
    metaDescription: 'Fornecimento de aço cortado, dobrado e armado para construtoras e incorporadoras em SP. Entregas escalonadas, zero perda de pontas e faturamento corporativo.',
    tagline: 'Gestão Físico-Financeira & Escala Operacional',
    heroSubtitle: 'Elimine 100% do desperdício de pontas de aço, reduza passivos trabalhistas com bancadas manuais no canteiro e garanta o cumprimento rigoroso dos ciclos de concretagem da sua obra em São Paulo.',
    imageUrl: '/images/construtoras.jpg',
    highlightBadge: 'Faturamento Corporativo & Entrega Escalonada',
    stats: [
      { value: '0% Perda', label: 'Zero sobra de pontas de aço no canteiro' },
      { value: '+45% Ritmo', label: 'Aceleração de ciclo por pavimento' },
      { value: '100% NBR', label: 'Aço certificado ABNT NBR 6118 e 7480' }
    ],
    customCopyPillar: [
      {
        title: 'Entregas Escalonadas por Cronograma Físico',
        desc: 'Programamos o envio das armaduras de acordo com a sua concretagem de fundação, pilares e lajes, sem sobrecarregar o espaço físico do canteiro.'
      },
      {
        title: 'Faturamento Corporativo e Previsibilidade',
        desc: 'Condições comerciais ajustadas ao fluxo de caixa da construtora, medições transparentes e faturamento direto com emissão de NF de lote.'
      },
      {
        title: 'Eliminação de Bancadas e Riscos Trabalhistas',
        desc: 'Substitua a armação manual insalubre por peças industrializadas que chegam prontas para içamento e posicionamento imediato.'
      }
    ],
    painPoints: [
      {
        title: 'Desperdício de até 15% em pontas de vergalhão',
        desc: 'O corte manual no canteiro gera quilos de sobras inutilizadas que foram pagas e vão direto para o entulho.'
      },
      {
        title: 'Atrasos no ciclo de concretagem e mão de obra ociosa',
        desc: 'Equipes de pedreiros e caminhões betoneira parados aguardando a finalização da amarração de vigas e pilares.'
      },
      {
        title: 'Canteiro desorganizado e acúmulo de passivo',
        desc: 'Áreas de corte improvisadas ocupam espaço nobre de circulação e aumentam o risco de acidentes de trabalho.'
      }
    ],
    solutions: [
      {
        title: 'Ferragem 100% pronta e quantificada no peso exato',
        desc: 'Você paga exclusivamente pelos elementos estruturais calculados no projeto executivo, sem perdas nem cobranças ocultas.'
      },
      {
        title: 'Logística Just-in-Time com descarregamento ágil',
        desc: 'Frota própria com entrega programada em horários compatíveis com o plano de concretagem da sua construtora.'
      },
      {
        title: 'Rastreabilidade total por pavimento e elemento',
        desc: 'Materiais com etiquetas resistentes identificando código da peça (P1, P2, V1, S1), facilitando conferência e auditoria de qualidade.'
      }
    ],
    operationalBenefits: [
      'Contratos de fornecimento com cronograma travado',
      'Leitura automatizada de pranchas em DWG, CAD e BIM',
      'Certificados de qualidade siderúrgica em todos os lotes',
      'Atendimento dedicado com gerente de conta exclusivo'
    ],
    ctaText: 'FALAR COM GERENTE DE CONTAS CORPORATIVO',
    whatsappMessage: 'Olá! Sou de uma construtora em São Paulo e gostaria de falar sobre fornecimento de aço e ferragens armadas para nossa obra.'
  },
  {
    slug: 'para-engenheiros',
    name: 'Para Engenheiros Calculistas & Residentes',
    h1: 'Fidelidade Absoluta às suas Pranchas e Normas ABNT',
    metaTitle: 'Aço Estrutural para Engenheiros em SP | Corte e Dobra Preciso | Cursino',
    metaDescription: 'Garantia de conformidade técnica para engenheiros civis em SP. Dobras no raio normativo, estribagem correta e rastreabilidade por etiqueta no canteiro.',
    tagline: 'Rigor Normativo, Precisão e Rastreabilidade',
    heroSubtitle: 'Acabe com a insegurança e o desgaste na fiscalização das armaduras. Garantimos bitolas, ganchos, comprimentos de transpasse e espaçamento de estribos 100% fiéis ao seu software de cálculo estrutural.',
    imageUrl: '/images/engenheiros.jpg',
    highlightBadge: 'Compatível com TQS, Eberick, CypeCAD e Revit',
    stats: [
      { value: 'ABNT 6118', label: 'Raio de curvatura e ancoragem rigorosos' },
      { value: 'Zero Erro', label: 'Espaçamento milimétrico de estribos' },
      { value: '100% Rastreado', label: 'Etiquetas individuais em cada peça' }
    ],
    customCopyPillar: [
      {
        title: 'Conformidade Geométrica Estrita',
        desc: 'Dobras executadas em máquinas industriais que mantêm os ângulos retos de 90° e 135° sem esmagar o núcleo do aço nem estirar as fibras.'
      },
      {
        title: 'Fiscalização Rápida no Canteiro',
        desc: 'Com as etiquetas identificando posição (P1, V10, S3), sua equipe de engenharia valida a armação nas fôrmas em minutos antes de liberar o concreto.'
      },
      {
        title: 'Transparência no Memorial Descritivo',
        desc: 'Entregamos relatórios quantitativos detalhados por bitola (CA-50 8.0, 10.0, 12.5, 16.0mm / CA-60 4.2, 5.0mm) facilitando o as-built.'
      }
    ],
    painPoints: [
      {
        title: 'Armação executada fora das especificações da prancha',
        desc: 'Pedreiros improvisando dobras no ferro, diminuindo o cobrimento mínimo e alterando a posição do centro de gravidade das barras.'
      },
      {
        title: 'Estribos com espaçamento desigual ou ganchos frouxos',
        desc: 'Variações que comprometem a resistência ao esforço cortante e exigem retrabalho demorado na frente de fiscalização.'
      },
      {
        title: 'Confusão e troca involuntária de armaduras',
        desc: 'Armaduras de pilares com taxas de aço diferentes colocadas na posição errada por falta de etiquetagem visível.'
      }
    ],
    solutions: [
      {
        title: 'Corte e dobra com controle dimensional industrial',
        desc: 'Equipamentos automatizados calibrados que garantem dimensões exatas de acordo com as tabelas de aço do seu projeto.'
      },
      {
        title: 'Sistema de Rastreabilidade Estrutural Cursino',
        desc: 'Etiquetas plásticas indestrutíveis presas em cada peça informando elemento, pavimento, bitola e localização na planta.'
      },
      {
        title: 'Suporte técnico direto com quem entende de cálculo',
        desc: 'Canal direto de comunicação com nossa equipe de engenharia para tirar dúvidas sobre pranchas ou interferências de projeto.'
      }
    ],
    operationalBenefits: [
      'Aceitamos pranchas em PDF vetorial, DWG ou arquivos de corte',
      'Cumprimento rigoroso de comprimentos de ancoragem e ganchos',
      'Aço CA-50 e CA-60 das principais siderúrgicas nacionais',
      'Atestado de conformidade e memorial de aço por elemento'
    ],
    ctaText: 'ENVIAR PRANCHA PARA ANÁLISE TÉCNICA',
    whatsappMessage: 'Olá! Sou engenheiro civil e gostaria de enviar um projeto estrutural para cotação e alinhamento técnico.'
  },
  {
    slug: 'para-empreiteiros',
    name: 'Para Empreiteiros & Mestres de Obra',
    h1: 'Ferragem que Chega Pronta, Firme e Fácil de Montar',
    metaTitle: 'Ferragem Pronta para Empreiteiros e Mestres em SP | Cursino',
    metaDescription: 'Aumente o rendimento da sua equipe de obra. Colunas, vigas e sapatas armadas prontas com etiquetas de montagem. Entrega rápida em SP.',
    tagline: 'Produtividade Máxima no Canteiro',
    heroSubtitle: 'Chega de perder meio período medindo vergalhão com trena e entortando barra no cano. Receba sapatas, colunas, vigas e baldrames prontos: sua equipe só posiciona na fôrma e concretiza.',
    imageUrl: '/images/empreiteiros.jpg',
    highlightBadge: 'Montagem 3x Mais Rápida no Canteiro',
    stats: [
      { value: '3x Mais Rápido', label: 'Montagem direta na fôrma sem medir' },
      { value: 'Amarração Firme', label: 'Não entorta no transporte nem içamento' },
      { value: 'Zap Direto', label: 'Orçamento rápido sem burocracia' }
    ],
    customCopyPillar: [
      {
        title: 'Sua Equipe Rende Muito Mais',
        desc: 'Com as ferragens prontas, seus pedreiros e armadores terminam a fundação e a estrutura no dobro da velocidade, liberando a obra mais cedo.'
      },
      {
        title: 'Identificação que Todo Mundo Entende',
        desc: 'As etiquetas mostram em letras grandes qual peça é qual (P1, P2, Viga 1, Sapata 4). Não precisa ficar procurando nem decifrando prancha difícil.'
      },
      {
        title: 'Ferragem Firme que não Desmonta',
        desc: 'Nossa amarração é reforçada com arame recozido de bitola correta. As gaiolas e vigas não deformam quando você descarrega ou coloca na vala.'
      }
    ],
    painPoints: [
      {
        title: 'Perder horas na bancada de corte e dobra manual',
        desc: 'Armadores gastando tempo com serra, torquês e trena enquanto poderiam estar avançando o fechamento das formas.'
      },
      {
        title: 'Peças amarradas frouxas que entortam ao levantar',
        desc: 'Gaiolas de sapata e colunas que deformam e perdem o prumo ao serem movimentadas no terreno.'
      },
      {
        title: 'Falta de material de última hora que para a concretagem',
        desc: 'Faltar estribos ou barras no dia de bater laje por erro de cálculo manual no canteiro.'
      }
    ],
    solutions: [
      {
        title: 'Ferragens entregues prontas para colocar no lugar',
        desc: 'Sapatas no esquadro, vigas baldrame alinhadas e colunas travadas prontas para receber concreto.'
      },
      {
        title: 'Etiquetas à prova d\'água que indicam o local exato',
        desc: 'Você olha a etiqueta e já sabe exatamente onde a peça vai ser colocada, sem confusão com o ajudante.'
      },
      {
        title: 'Atendimento ágil pelo WhatsApp para não parar sua obra',
        desc: 'Precisou de arame, estribo ou coluna extra? Mande uma mensagem que a Cursino resolve rápido.'
      }
    ],
    operationalBenefits: [
      'Preço competitivo de fábrica direto para quem constrói',
      'Descarregamento organizado no local indicado pelo mestre',
      'Linha completa: vergalhões, telas, treliças e arames',
      'Agilidade para pedir pelo WhatsApp enviando foto da lista'
    ],
    ctaText: 'COTAR FERRAGEM PRONTA PELO WHATSAPP',
    whatsappMessage: 'Fala pessoal da Cursino! Sou empreiteiro/mestre de obra e quero cotar ferragens armadas para minha obra.'
  },
  {
    slug: 'para-obras-residenciais',
    name: 'Para Casas, Sobrados & Reformas',
    h1: 'Ferragem sob Medida para sua Casa sem Comprar Ferro a Mais',
    metaTitle: 'Aço para Construção Residencial em SP | Casas e Reformas | Cursino',
    metaDescription: 'Construa sua casa ou sobrado com economia e segurança. Enviamos o aço e ferragens armadas sob medida direto na sua obra em SP.',
    tagline: 'Economia Real, Segurança e Suporte Didático',
    heroSubtitle: 'Construir sua casa não precisa ser complicado. Envie o projeto do seu arquiteto ou engenheiro: calculamos a quantidade exata, entregamos tudo pronto e você economiza sem sobras de ferro enferrujando no lote.',
    imageUrl: '/images/obras-residenciais.jpg',
    highlightBadge: 'Orçamento Transparente & Sem Desperdício',
    stats: [
      { value: 'Zero Sobra', label: 'Pague apenas pelo que a casa vai usar' },
      { value: 'Segurança Total', label: 'Aço original certificado de siderúrgica' },
      { value: 'Fácil Montagem', label: 'Seu pedreiro recebe tudo identificado' }
    ],
    customCopyPillar: [
      {
        title: 'Economia Inteligente no Orçamento',
        desc: 'Comprando barras soltas, você acaba pagando por 10% a 15% de aço que vira pedaço inútil. Comprando pronto, você só paga o que foi calculado.'
      },
      {
        title: 'Atendimento Simples e Didático',
        desc: 'Não entende de termos técnicos de engenharia? Sem problemas! Nossa equipe analisa sua planta e explica tudo de forma clara e transparente.'
      },
      {
        title: 'Segurança Estrutural para sua Família',
        desc: 'Estrutura reforçada de sapatas, pilares e vigas com aço de alta resistência para garantir uma casa sólida, sem trincas nem rachaduras.'
      }
    ],
    painPoints: [
      {
        title: 'Comprar barras a mais que sobram e enferrujam no quintal',
        desc: 'Gastar dinheiro com quilos de ferro que nunca mais serão usados depois do término da obra.'
      },
      {
        title: 'Orçamentos complicados e sem clareza no valor',
        desc: 'Receber cotações confusas em depósitos comuns sem saber se as bitolas e quantidades estão corretas.'
      },
      {
        title: 'Medo da estrutura da casa apresentar trincas no futuro',
        desc: 'Insegurança com pedreiros dobrando ferro na mão sem seguir as normas de engenharia.'
      }
    ],
    solutions: [
      {
        title: 'Cálculo exato a partir da prancha da sua casa',
        desc: 'Nossa equipe técnica faz o levantamento de cada quilo de aço necessário para o alicerce, colunas e laje.'
      },
      {
        title: 'Peças entregues dobradas, amarradas e etiquetadas',
        desc: 'O pedreiro da sua obra recebe tudo pronto e no tamanho certo, agilizando a construção e barateando a mão de obra.'
      },
      {
        title: 'Condições de pagamento facilitadas e entrega em SP',
        desc: 'Facilidade para pagar no cartão ou transferência com entrega pontual no endereço do seu lote ou condomínio.'
      }
    ],
    operationalBenefits: [
      'Suporte paciente e esclarecimento de dúvidas sobre sua planta',
      'Entrega programada para não atrapalhar a vizinhança ou condomínio',
      'Fornecimento de vergalhões, telas para contrapiso e arames',
      'Cotação rápida enviando o PDF da planta pelo WhatsApp'
    ],
    ctaText: 'ENVIAR PROJETO DA CASA NO WHATSAPP',
    whatsappMessage: 'Olá! Estou construindo/reformando minha casa em São Paulo e gostaria de fazer um orçamento de ferragens sob medida.'
  }
];
