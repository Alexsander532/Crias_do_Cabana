# Manual do Museu Virtual Crias do Cabana

Esta documentação foi preparada para os próximos integrantes do PET conecTTE e para pessoas que estão começando em programação. O objetivo é permitir que você entenda a estrutura do site, saiba onde alterar cada informação, reconheça os limites atuais e consiga dar continuidade ao trabalho.

**Referência: arquivos locais do projeto em 7 de outubro de 2026.** As descrições refletem esta cópia, não uma inspeção do site publicado ou das contas institucionais. Nomes, depoimentos, direitos de mídia, contatos e conteúdo histórico continuam sujeitos à revisão dos responsáveis pelo museu.

## Roteiro de leitura

| Capítulo | O que explica |
| --- | --- |
| [01 — Visão geral](01-visao-geral.md) | Propósito, tecnologias e recursos implementados |
| [02 — Executar o projeto](02-executar-o-projeto.md) | Ferramentas, servidor local e primeiros passos |
| [03 — Fundamentos](03-fundamentos.md) | Como ler HTML, CSS e JavaScript usando exemplos do site |
| [04 — Arquitetura e páginas](04-arquitetura-e-paginas.md) | Estrutura das pastas e conteúdo de todas as telas |
| [05 — Estrutura compartilhada](05-estrutura-compartilhada.md) | Cabeçalho, menus, modal, acessibilidade e rodapés |
| [06 — Estilos e responsividade](06-estilos-e-responsividade.md) | Paleta, CSS, animações, unidades e telas menores |
| [07 — JavaScript compartilhado](07-javascript-compartilhado.md) | Cada função de `js/app.js` e seus contratos com o HTML |
| [08 — Bordado e Memória](08-bordado-e-memoria.md) | Carrossel próprio, galeria aleatória, ampliação e depoimentos |
| [09 — Acervo e integrações](09-acervo-e-integracoes.md) | Fotos, logos, áudios, vídeo, Google Forms e fontes |
| [10 — Guias de alteração](10-guias-de-alteracao.md) | Receitas para textos, menus, coleções, mídias e páginas novas |
| [11 — Scripts e arquivos originais](11-scripts-e-arquivos-originais.md) | Python, referências WordPress e cuidados de manutenção |
| [12 — Qualidade e diagnóstico](12-qualidade-e-diagnostico.md) | Problemas identificados, testes manuais e investigação |
| [13 — Publicação e continuidade](13-publicacao-e-continuidade.md) | Versionamento, hospedagem estática e passagem de conhecimento |
| [14 — Inventário do projeto](14-inventario-do-projeto.md) | Consulta de todos os arquivos de código e grupos de acervo |

## Por onde começar

- **Nunca programei:** leia 01, 02 e 03 e faça o primeiro exercício do capítulo 10.
- **Preciso corrigir um texto ou foto:** consulte 04, 09 e 10 e revise com o capítulo 12.
- **Quero entender as interações:** leia 05, 07 e 08 com o código aberto ao lado.
- **Vou assumir o projeto:** leia também 11, 13 e 14; registre os acessos e decisões que não estão nos arquivos.

## Informações essenciais

1. Este site usa **HTML, CSS e JavaScript sem framework**. Não há `package.json`, `npm run dev`, build Next.js ou banco de dados nesta pasta.
2. Cada página é um arquivo `.html`. Cabeçalho, ferramentas e rodapés são copiados entre elas; uma alteração compartilhada exige conferir nove páginas.
3. “Conte a sua História” aponta para um Google Forms externo e informa um número de WhatsApp. As respostas não são automaticamente inseridas no site pelo código local.
4. A busca abre/fecha o painel, mas não pesquisa conteúdo. Aglomerado e Repositório ainda têm links `#` nos menus examinados.
5. Bordado e Memória possui CSS e JavaScript próprios dentro do HTML, além dos arquivos compartilhados.
6. Os scripts Python são utilitários históricos que alteram arquivos; não são necessários para abrir o site e apresentam problemas que precisam de revisão antes do uso.

## Como usar o manual

Um caminho como `css/style.css` é relativo à raiz, a pasta que contém `index.html`. Comandos são para o terminal; exemplos HTML/CSS/JavaScript são para arquivos ou trechos de código. Caminhos e nomes ilustrativos marcados como fictícios devem ser substituídos antes de publicar.

Ao alterar o site, atualize os capítulos afetados. Este manual registra inclusive defeitos existentes, para não ensinar como pronto algo que ainda precisa de implementação ou correção.
