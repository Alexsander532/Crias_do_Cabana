# 05 — Estrutura compartilhada entre as páginas

[Índice](README.md) · [Anterior](04-arquitetura-e-paginas.md) · [Próximo](06-estilos-e-responsividade.md)

## Reutilização por cópia

As nove páginas possuem blocos semelhantes de cabeçalho, ferramentas e rodapés. Não existe um componente ou template central responsável por gerar esses blocos. CSS e JavaScript são compartilhados, mas a estrutura HTML precisa ser mantida em cada arquivo.

Isso significa que alterar uma logo do cabeçalho em `index.html` não troca automaticamente a logo em Bordado. Para uma mudança global, pesquise todas as páginas atuais, aplique a alteração e compare os blocos. Os arquivos `*-original.html` devem ser tratados separadamente como referências históricas.

## Informações no `head`

Cada documento declara `lang="pt-BR"`, UTF-8 e viewport. Os links de `preconnect` antecipam conexão aos domínios de Google Fonts. Um `<link rel="stylesheet">` importa as fontes e outro importa `css/style.css`.

`assets/favicon.png` é o ícone selecionado por `<link rel="icon">`. Não é uma convenção automática baseada no nome de uma pasta: o endereço está escrito nos HTMLs.

Bordado inclui um bloco `<style>` depois da folha compartilhada. Essas regras específicas participam da cascata junto às regras gerais e aos estilos inline.

## Link de pular para o conteúdo

O primeiro controle do corpo é `.skip-link`, com `href="#main-content"`. O CSS o posiciona fora da área visível e o mostra ao receber foco. O destino é `<main id="main-content">`.

Preserve esse ID ao criar ou copiar uma página. Se renomeá-lo, ajuste o link. Um destino inexistente faz a navegação de teclado perder a utilidade desse atalho.

## Modal de boas-vindas

`#welcome-modal` é uma `.modal-overlay` com `role="dialog"`, `aria-modal="true"` e `aria-labelledby="modal-title"`. Dentro ficam botão de fechar, título e apresentação colaborativa.

Adicionar `.active` torna o overlay visível. `initWelcomeModal` faz isso após 800 ms se a sessão ainda não tiver a marca `crias_modal_seen`. Fechar pelo botão, pela área externa ou por Escape retira a classe e grava a marca.

O texto do modal é copiado em cada página. Não existe armazenamento de contribuições nesse mecanismo. Também não há captura de foco, retorno de foco, bloqueio de rolagem ou isolamento completo do conteúdo de fundo implementados para este modal.

## Barra de acessibilidade

`#accessibility-toolbar` reúne o botão `#a11y-toggle` e uma lista de `.a11y-btn`. `data-action` liga cada botão a uma ação de `initA11y`:

| Atributo | Ação |
| --- | --- |
| `resize-plus` | Aumentar tamanho base do texto |
| `resize-minus` | Diminuir tamanho base do texto |
| `grayscale` | Alternar escala de cinza |
| `high-contrast` | Alternar tema de alto contraste |
| `negative-contrast` | Alternar inversão de cores |
| `light-background` | Alternar fundo claro |
| `links-underline` | Sublinhar links |
| `readable-font` | Aplicar Arial |
| `reset` | Restaurar escala e limpar classes do corpo |

O painel abre/fecha com `.active` e atualiza `aria-expanded`. Clicar fora o fecha. As escolhas afetam a página atual, sem persistência de preferências entre páginas.

O reset usa `document.body.className = ''`. Se uma futura implementação colocar uma classe estrutural no corpo, ela também será removida. Os efeitos de filtros sobre o corpo e controles fixos precisam ser testados em cada modo de contraste.

## Cabeçalho e marca

`.main-header` contém `.header-container`, marca horizontal, botão hamburger, navegação e busca. Seu estilo base usa `position: relative`, portanto não há cabeçalho fixo/sticky implementado pela regra atual. A classe `.scrolled` adiciona fundo/desfoque/sombra, sem alterar essa posição.

Algumas páginas têm a logo com `href="#"`; outras usam `index.html`. Uma mudança de navegação inicial deve conferir esse detalhe em todas as páginas. `fixNavigationLinks` não corrige os links da logo.

## Menu principal

O menu usa `<nav>`, uma `.nav-list` e itens `.menu-item`. Os grupos Sobre e Coleções recebem `.has-dropdown`; seus links principais têm `.nav-link` e os filhos `.dropdown-link`.

Sobre reúne Museu Colaborativo, Programa SoFiA e Projeto Artes. Coleções reúne a página temática, Guarda de São Benedito e Bordado e Memória. Outros itens incluem Aglomerado, Repositório e Conte a sua História.

No desktop, o CSS abre dropdown por `:hover` ou `:focus-within`. No mobile, até 768 px, o JavaScript alterna `.dropdown-active`. Clicar no pai de um dropdown no mobile cancela a navegação e abre/fecha a lista; o destino principal precisa ter um link acessível dentro da lista, como os itens atuais possuem.

O código prevê submenus com `.has-submenu` e `.submenu`, mas a estrutura atual principal não depende deles. Se adotar esse nível, confira a interação entre os eventos de submenu e o fechamento mobile acionado pelos links descendentes.

## Contrato do menu mobile

O botão precisa manter o ID `mobile-menu-trigger`, e a área navegável a classe `navigation-menu`. `.active` mostra a lista e transforma as três linhas do ícone em um X. `aria-expanded` acompanha o estado do botão.

Ao clicar em um link dentro de `.dropdown-menu`, o script fecha o menu e limpa estados dos dropdowns. Não há um tratamento equivalente para todos os links comuns fora de dropdown; navegação para outra página recarrega a estrutura, mas um link `#` pode deixar o menu aberto.

## Painel de busca

`#search-toggle` controla `#search-dropdown`. O formulário tem `action="#"`, `method="get"` e input `name="s"`. Isso permite ao navegador formar uma URL com parâmetro, mas não existe código que leia esse parâmetro e retorne resultados.

`initSearch` somente mostra/esconde o painel e coloca foco no campo ao abrir. O fato de o botão de submit existir não significa que uma busca esteja pronta.

## Rodapés

`.logos-footer` apresenta grupos Realização, Financiamento e Parceiros. Os HTMLs exibem SoFiA; FAPEMIG e DEDC; Conecta Cabana, COMPET, PET conecTTE e GEPTT. Os logos dessa área são imagens, sem um cadastro central de instituições.

`.logos-group`, `.logos-grid`, `.grid-1`, `.grid-2`, `.grid-4` e `.partner-logo` definem agrupamento e distribuição. Alterar papéis ou marcas exige revisão institucional e edição nas páginas correspondentes.

`.bottom-footer` contém copyright de 2026 e referência ao tema Astra WordPress. Esse texto não é atualizado automaticamente pelo relógio ou por script. Confira se a atribuição permanece adequada à implementação quando a equipe revisar o rodapé.

## JavaScript comum no final

As nove páginas atuais usam `<script src="js/app.js?v=2"></script>` no final de `body`. Essa posição facilita encontrar a estrutura do documento. O arquivo ainda aguarda `DOMContentLoaded` antes de iniciar os recursos.

Não inclua o script duas vezes: ele registraria eventos duplicados e poderia criar mais de um botão de voltar ao topo. Ao copiar uma página, verifique IDs únicos dentro dela e a presença de apenas uma referência ao script compartilhado.
