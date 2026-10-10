# 04 — Arquitetura e todas as páginas

[Índice](README.md) · [Anterior](03-fundamentos.md) · [Próximo](05-estrutura-compartilhada.md)

## A estrutura da pasta

```text
Crias_do_Cabana-main/
├── index.html                    Página inicial
├── outros arquivos .html         Páginas atuais e referências antigas
├── css/
│   └── style.css                 Estilos compartilhados
├── js/
│   └── app.js                    Interações compartilhadas
├── assets/
│   ├── logos e imagens           Identidade e páginas institucionais
│   ├── backup-originais/         Versões preservadas de imagens
│   └── colecoes/
│       ├── imagens e áudios      Coleções gerais e Guarda
│       ├── bordado-memoria/      Dez fotografias WebP utilizadas
│       └── para o site/          Acervo de 42 fotografias JPG
├── add_reveal_classes.py         Utilitário de edição por expressões regulares
├── update.py                     Utilitário de substituição da página da Guarda
├── post-652.css                  Referência CSS Elementor
├── README.md                     Entrada para este manual
└── docs/                         Documentação para continuidade
```

Não há pasta `src`, gerenciamento npm, servidor próprio ou banco de dados. Os arquivos HTML de trabalho usam os mesmos caminhos relativos de CSS, JavaScript e mídia. O servidor de hospedagem entrega esses arquivos; o navegador executa as interações.

## Fluxo de carregamento

```text
Visitante solicita index.html
        ↓
Navegador lê estrutura e referências do HTML
        ↓
Carrega CSS, fontes, imagens e app.js
        ↓
DOMContentLoaded inicia as funções compartilhadas
        ↓
Eventos de clique, tempo e rolagem atualizam a interface
```

Na página Bordado, um script inline depois de `main` também cria slides, galeria e lightbox. Ele executa imediatamente em uma função própria, depois que seus contêineres já foram lidos pelo navegador.

## Nove páginas de trabalho

| Arquivo | Conteúdo | Onde alterar |
| --- | --- | --- |
| `index.html` | Abertura com carrossel e apresentação “O Museu” | Slides e seções de `main` |
| `um-museu-colaborativo.html` | Propósito colaborativo, memória e identidade | Banner e textos de `main` |
| `o-programa-sofia.html` | Apresentação de SoFiA e imagem de divulgação | Seção `subpage-content-section` |
| `o-projeto-artes-de-curar-rezar-brincar.html` | Projeto de pesquisa/extensão e seus resultados | Conteúdo, fotos e link para equipe |
| `o-aglomerado-cabana-do-pai-tomas.html` | Atualmente repete a página do projeto | Revisar o conteúdo antes de usá-la como página própria |
| `conte-a-sua-historia.html` | Convite, WhatsApp e Google Forms | Textos e `href` do formulário |
| `colecoes-artes.html` | Artes de Curar, Rezar, Brincar e Bordado | Quatro blocos de acordeão |
| `guarda-de-congo-sao-benedito.html` | História da Guarda, fotos, vídeo e livro | Seções de história/documentário/livro |
| `bordado-e-memoria.html` | Oficina, galeria, relatos e áudios | `main`, `<style>` e script próprio |

O nome do arquivo é parte da URL. Renomear um arquivo exige atualizar todos os links e considerar endereços já compartilhados.

## Página inicial

O carrossel possui três `.slide-item`, cada um com uma imagem de fundo: `slider-home.png`, `slider-sobre.png` e `slider-aglomerado.png`. A primeira já tem `active` no HTML. Há duas setas e três indicadores `.dot`.

As imagens são fundos CSS, não elementos `<img>`. Texto existente dentro de uma imagem não se transforma automaticamente em texto acessível ou pesquisável no HTML. As classes de conteúdo/botão do carrossel existem na folha de estilos, mas os slides atuais só têm imagem e overlay.

A seção `#museu` mostra a marca vertical, a apresentação do museu e textos sobre participação tecnológica do COMPET e PET conecTTE. Os textos ficam diretamente no arquivo.

## Um Museu Colaborativo

Possui um banner com `slider-sobre.png`, sujeito ao cálculo de parallax do script compartilhado. Depois aparecem título, introdução, uma área com foto e texto em colunas e parágrafos em largura total.

`subpage-*` é uma família de classes reutilizadas em páginas institucionais. A imagem editorial é `um-museu-colaborativo-content.jpg`.

## O Programa SoFiA

Começa diretamente pelo título e introdução, sem banner. Explica a relação do nome SoFiA com Sociologia, Filosofia e Arte e apresenta a imagem `o-projeto-sofia-content.jpg`.

O texto convida a conhecer o programa por site e redes, mas o conteúdo de `main` examinado não apresenta links individuais correspondentes. Não confunda o convite textual com integração implementada.

## O Projeto Artes de Curar, Rezar e Brincar

Tem ícone decorativo, título, introdução, duas imagens editoriais e parágrafos sobre saberes e produtos do projeto. O link “Conheça a nossa equipe” leva a uma página externa de SoFiA. Não há cadastro local de pessoas em JSON ou JavaScript para essa seção.

A fonte Roboto é citada inline no título, enquanto a importação Google Fonts dessa página carrega outras famílias. Se Roboto não estiver disponível, o navegador usa a alternativa `sans-serif`.

## O Aglomerado Cabana do Pai Tomás

O arquivo existe, mas o bloco `main` é idêntico ao da página do projeto Artes de Curar. Seu título de aba também identifica o projeto. Os itens “O Aglomerado Cabana do Pai Tomás” nos menus das nove páginas continuam com `href="#"`.

Portanto, há duas pendências diferentes: criar/revisar o conteúdo próprio e corrigir a navegação. Apenas trocar o link do menu faria o visitante chegar à cópia atual do conteúdo do projeto.

## Conte a sua História

Apresenta o convite “Você é cria do Cabana?”, o número `(31) 97137-2842` como texto e um link para Google Forms. O telefone não é um link `wa.me` no estado atual. A página não tem campos de submissão de histórias, armazenamento ou aprovação de conteúdo.

O único formulário HTML local nessa página é o de busca, repetido no cabeçalho. Ele não é o formulário de contribuição comunitária.

## Coleções

Uma introdução explica o acervo colaborativo. Os quatro `.accordion-item` reúnem:

1. **Artes de Curar:** saberes de cuidado, fotografia de abertura e composição com três fotos.
2. **Artes de Rezar:** religiosidade, Congado/Reinados, imagens e link para a Guarda.
3. **Artes de Brincar:** memórias de brincadeiras, ruas e festas, com apresentação textual.
4. **Bordado e Memória:** resumo da oficina, fotografias e link para a página completa.

Cada botão é seguido imediatamente por `.accordion-content`. Há um `onclick="toggleAccordion(this)"` e uma função inline de abrir/fechar, mas `app.js` remove esse atributo e instala outro comportamento. O conflito com `display: none` inline é documentado nos capítulos 07 e 12.

Não existe uma varredura automática de `assets/colecoes` para cadastrar temas. Criar uma pasta de fotos não acrescenta um acordeão.

## Guarda de Congo

Apresenta título em dois `h1`, foto principal, citação de Dona Odete, história da Guarda com outras fotografias, documentário incorporado e chamada para o livro.

O vídeo usa um iframe YouTube. O botão do livro abre a página da editora; não aponta para um PDF local nem garante download direto. Existe ainda uma função inline `toggleAccordion` nessa página, embora seu conteúdo atual não contenha os blocos de acordeão para utilizá-la.

## Bordado e Memória

A página tem identidade e interações próprias: título/subtítulo, carrossel de seis fotos, introdução, galeria aleatória com oito imagens, depoimentos de Dona Ivanete e Dona Carmelita, dois áudios e textos transcritos.

Carrossel, galeria e ampliação são construídos pelo script inline; os textos e players já existem no HTML. Sem JavaScript, o carrossel e a galeria permanecem vazios. O capítulo 08 detalha todos esses mecanismos.

## Metadados e página inexistente

Cada página possui idioma, charset, viewport, descrição, título e favicon. Algumas usam o mesmo título/descrição genéricos; outras possuem textos específicos. Não há sitemap, robots, canonical ou página `404.html` nesta cópia.

A resposta para um arquivo inexistente depende do servidor local ou da hospedagem. Não existe tratamento JavaScript que transforme uma URL não encontrada em uma tela de erro própria.

## Quatro referências antigas

`original.html`, `um-museu-colaborativo-original.html`, `o-programa-sofia-original.html` e `o-projeto-artes-de-curar-original.html` contêm versões com marcação WordPress e recursos externos. As páginas atuais não os importam para montar o site. Sua preservação e uso como referência são explicados no capítulo 11.
