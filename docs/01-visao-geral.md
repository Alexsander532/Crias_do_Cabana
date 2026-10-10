# 01 — Visão geral

[Índice](README.md) · [Próximo](02-executar-o-projeto.md)

## O que é o Museu Crias do Cabana?

O projeto apresenta um museu virtual colaborativo dedicado às histórias, memórias e saberes de moradoras e moradores do Aglomerado Cabana do Pai Tomás, em Belo Horizonte. Os textos relacionam a iniciativa ao projeto Artes de Curar, Rezar e Brincar e ao Programa SoFiA do CEFET-MG.

O site reúne apresentação institucional, coleções temáticas, relatos, fotografias, áudios e acesso a um documentário e livro. A participação da comunidade é encaminhada por uma página com contato e formulário externo.

A documentação explica como esse conteúdo é organizado no código. Ela não certifica fatos históricos, transcrições, autoria ou permissões de publicação. Esses pontos fazem parte da revisão da equipe responsável pelo museu.

## As três tecnologias centrais

| Tecnologia | Papel | Arquivos principais |
| --- | --- | --- |
| HTML | Estrutura e conteúdo: títulos, textos, imagens, links e controles | Nove páginas atuais na raiz |
| CSS | Aparência, layout, cores, responsividade e animações | `css/style.css` e estilos nos HTMLs |
| JavaScript | Menu, modal, carrosséis, acessibilidade e galeria | `js/app.js` e scripts dentro de alguns HTMLs |

Essas são tecnologias executadas diretamente pelo navegador. Não há React, TypeScript, Tailwind, Next.js ou empacotamento npm nesta cópia. Não é necessário conhecer essas ferramentas para manter o site atual.

Também existem dois scripts Python, usados como auxiliares de edição, arquivos de referência do antigo site WordPress e um acervo de mídias. Python não executa a interface dos visitantes.

## Analogia: um álbum com várias páginas

Imagine um álbum comunitário. Cada HTML é uma página do álbum. CSS escolhe molduras, cores e disposição. JavaScript adiciona mecanismos como virar fotos, abrir painéis e ampliar imagens. `assets` guarda as fotografias e gravações. Os arquivos originais são referências de uma apresentação anterior.

O navegador recebe os arquivos e monta a apresentação. Ao clicar em um link para outro `.html`, solicita outra página. Não há um roteador React trocando componentes dentro de uma aplicação única.

## Recursos presentes

O código inclui modal de boas-vindas por sessão, menu com listas suspensas, menu mobile, painel de busca, barra de acessibilidade, carrossel inicial automático, mudança de aparência do cabeçalho ao rolar e botão de voltar ao topo.

A coleção Bordado e Memória tem carrossel próprio, seleção aleatória de oito fotografias entre dez, visualização ampliada e dois áudios com transcrição textual. A Guarda de Congo tem vídeo incorporado e link externo para o livro. Coleções reúne quatro temas em painéis expansíveis, mas existe um conflito entre as duas implementações de acordeão, explicado no capítulo 12.

## O que não está implementado

| Necessidade | Situação nesta cópia |
| --- | --- |
| Pesquisa no acervo | Não há algoritmo, índice ou serviço de busca |
| Receber histórias no próprio site | A página direciona para Google Forms externo |
| Publicar respostas automaticamente | Não implementado |
| Login ou área administrativa | Não implementado |
| Banco de dados | Não identificado |
| Repositório de documentos próprio | Item de menu ainda aponta para `#`; não há página dedicada |
| Página do Aglomerado com conteúdo próprio | Arquivo existe, mas repete o conteúdo do projeto Artes de Curar |
| Compartilhamento de layout por template | Cabeçalho e rodapés duplicados nos arquivos |
| Testes/lint automatizados configurados | Não há configuração ou comandos de pacote para isso |
| Publicação automática configurada nos arquivos | Não identificada |

## O WordPress citado no rodapé

O rodapé diz “Powered by Astra WordPress Theme”. Os arquivos `original.html` e `*-original.html` contêm marcação e referências típicas de WordPress, Astra e Elementor.

Entretanto, as nove páginas de trabalho usam HTML local, `css/style.css` e `js/app.js`. Não há PHP, instalação WordPress ou painel administrativo nesta pasta. O crédito no rodapé é texto preservado, não prova de que esta implementação está executando WordPress.

## Como o conteúdo é atualizado

```text
Equipe revisa informação ou mídia
          ↓
Integrante edita HTML, CSS, JavaScript ou assets
          ↓
Confere o resultado em servidor local
          ↓
Compartilha/revisa uma versão dos arquivos
          ↓
Publica na hospedagem configurada pela equipe
```

Salvar uma mudança no computador não atualiza o site público. Receber uma resposta no Google Forms também não modifica automaticamente um HTML. A etapa editorial de selecionar, autorizar, transcrever e publicar contribuições precisa ser organizada pelos responsáveis.
