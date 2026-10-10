# 06 — Estilos, responsividade e animações

[Índice](README.md) · [Anterior](05-estrutura-compartilhada.md) · [Próximo](07-javascript-compartilhado.md)

## Três lugares para encontrar estilos

O arquivo principal é `css/style.css`, com 1443 linhas no estado documentado. Há também atributos `style` em diversos elementos e um bloco `<style>` específico em `bordado-e-memoria.html`.

`post-652.css` contém seletores Elementor preservados como referência; não é a folha importada pelas nove páginas atuais. Não edite esse arquivo esperando mudar a apresentação normal do projeto.

## Paleta e fontes

As variáveis de `:root` definem a base:

| Variável | Valor | Uso típico |
| --- | --- | --- |
| `--bg-color` | `#fdfbf5` | Fundo creme |
| `--text-primary` | `#334155` | Texto principal |
| `--text-dark` | `#1e293b` | Texto de destaque |
| `--brand-gold` | `#DEAA3A` | Identidade dourada |
| `--primary-blue` | `#046bd2` | Botões e controles |
| `--primary-blue-hover` | `#045cb4` | Variação de interação |
| `--white` / `--black` | `#ffffff` / `#000000` | Branco e preto |
| `--gray-light` | `#eaeaea` | Áreas suaves |
| `--gray-border` | `#D1D5DB` | Bordas |
| `--font-handwritten` | Indie Flower, cursive | Estilo manuscrito |
| `--font-sans` | Inter, sans-serif | Fonte base |
| `--base-font-size` | `16px` | Tamanho base ajustado pela acessibilidade |
| `--h1-size` / `--h2-size` | `2.25rem` / `1.875rem` | Referências tipográficas |
| `--p-line-height` | `1.65` | Altura de linha |
| `--header-height` | `80px` | Altura do cabeçalho e posição do menu mobile |
| `--transition-speed` | `0.3s` | Tempo comum de transições |

Há cores fixas verdes, marrons, vermelhas e douradas nos HTMLs. Mudar `--brand-gold` não altera todos os elementos que usam diretamente `#DEAA3A`. Para uma troca de identidade, pesquise também `style`, `<style>` e cores hexadecimais nos arquivos ativos.

## Reset e medidas

O seletor `*` zera margem e padding e usa `box-sizing: border-box`, fazendo dimensões incluírem bordas e espaço interno. O corpo define fonte, fundo, texto, altura de linha e oculta overflow horizontal.

`px` é uma medida fixa em pixels CSS. `rem` depende do tamanho da raiz `html`; por isso o ajuste de `--base-font-size` afeta partes medidas em `rem`. Valores fixos em `px` não aumentam na mesma proporção. `%`, `vw` e `vh` relacionam dimensões ao contêiner ou viewport.

`margin` separa caixas; `padding` dá espaço dentro delas. `max-width` limita largura sem exigir ocupação total. `margin: 0 auto` ajuda a centralizar caixas de largura limitada.

## Flexbox, Grid e posição

O cabeçalho usa Flexbox para alinhar marca, menu e busca. Rodapés e várias composições usam Grid. As subpáginas institucionais usam áreas flexíveis de imagem/texto.

`position: relative` cria referência para filhos posicionados. `absolute` sobrepõe controles dentro dessa referência. `fixed` prende ferramentas/modal à janela. `z-index` ordena sobreposições dentro dos contextos de empilhamento.

Não use `overflow-x: hidden` como prova de que uma página é responsiva: ele pode apenas esconder conteúdo que transbordou. Confira grades inline de duas colunas das coleções e da Guarda em telas pequenas, pois não são todas cobertas por regras próprias de adaptação.

## Principais grupos da folha compartilhada

| Grupo de seletores | Função |
| --- | --- |
| `body.a11y-*` | Temas e ferramentas de leitura |
| `.skip-link` | Atalho de teclado para o conteúdo |
| `.modal-*` | Boas-vindas e overlay |
| `.a11y-*` | Painel lateral e botões |
| `.main-header`, `.header-container`, `.custom-logo` | Cabeçalho e marca |
| `.nav-*`, `.menu-item`, `.dropdown-*`, `.submenu` | Menus de um ou mais níveis |
| `.search-*` | Campo e painel de busca |
| `.slider-*`, `.slide-*`, `.dot` | Carrossel inicial |
| `.about-*` | Apresentação “O Museu” |
| `.logos-*`, `.partner-logo`, `.bottom-*` | Rodapés |
| `.page-banner-*`, `.subpage-*` | Páginas institucionais |
| `.reveal*`, `.hover-*`, `.link-underline` | Efeitos opcionais de entrada/interação |
| `.accordion-*` | Aparência dos painéis de coleção |
| `.back-to-top` | Botão criado pelo JavaScript |

## Limites de tela

As regras usam condições de largura máxima:

| Limite | Mudanças principais |
| --- | --- |
| Até 1024 px | Reorganiza grupos do rodapé; Bordado reduz galeria e empilha relatos |
| Até 768 px | Mostra hamburger, esconde menu até ativação e ajusta subpáginas/carrossel |
| Até 576 px | Reduz logos de quatro para duas colunas e ajusta títulos |
| Até 640 px, no CSS de Bordado | Ajusta título, fotos e tamanhos do carrossel próprio |

O JavaScript usa `window.innerWidth <= 768` para os cliques mobile. Se mudar o limite no CSS, confira também essa condição para não deixar estilos e comportamento discordarem.

## Imagens e recorte

`object-fit: cover` preenche a caixa e recorta o excedente. `background-size: cover` faz o equivalente em imagens de fundo. `contain` preserva a imagem inteira dentro da área, usado na visualização ampliada. `background-position: center` seleciona a região central do fundo.

O carrossel inicial usa altura de 350 px na regra mobile; o próprio de Bordado usa 500 px na base e ajustes locais. Uma foto importante pode precisar de enquadramento diferente em telas menores. Não troque uma imagem sem conferir o recorte.

## Animações existentes

`fadeIn`, `slideUp` e `bodyFadeIn` controlam entradas. Slides alternam opacidade/visibilidade por `.active`. O hamburger transforma suas linhas. `.back-to-top.visible` revela o botão com translação. `.accordion-icon` gira quando o botão recebe `.open`.

A folha também define classes opcionais `pulse-cta`, `section-divider`, `count-animate`, `float-element`, `shake`, `skeleton`, `card-3d` e `text-reveal`. Uma definição de CSS não significa que a classe esteja aplicada a uma página. `count-animate`, por exemplo, anima opacidade/posição, não conta números dinamicamente.

Existem declarações repetidas de `@keyframes slideUp` e `shimmer`. Uma definição posterior com o mesmo nome participa como definição vigente; revise a ordem ao ajustar esses efeitos.

## Entrada ao rolar

`.reveal` deixa o elemento invisível, e `.reveal.revealed` o mostra. Modificadores `reveal-fade-up`, `down`, `left`, `right` e `scale` definem deslocamento inicial. `reveal-delay-1` a `5` acrescentam atrasos de 0.1 a 0.5 segundo.

`initReveal` observa essas classes, mas **nenhuma das nove páginas atuais tem a classe `reveal`** no HTML examinado. Portanto, esse mecanismo está disponível no código, mas não ativa entrada de conteúdo nessas páginas por si só.

Ao adicioná-lo, planeje leitura com JavaScript falhando: um elemento marcado `reveal` pode permanecer oculto se o observador não for inicializado.

## Movimento reduzido e foco

Há uma regra `prefers-reduced-motion: reduce` que zera duração e atraso de animações e duração de transições com `!important`. Isso reduz movimento CSS, mas não cancela temporizadores dos carrosséis ou chamadas JavaScript de rolagem suave. O comportamento completo precisa de revisão própria.

`*:focus-visible` define contorno dourado com distância de 3 px. O atalho de pular para conteúdo aparece ao focar. Preserve esses recursos ao mudar estilos de botões e links.

## Como investigar um estilo que não muda

Nas ferramentas do navegador, inspecione o elemento e veja quais declarações foram aplicadas ou riscadas. Procure regras inline, seletores mais específicos, `!important`, media queries e regras posteriores. A causa pode estar no HTML e não em `style.css`.

Se estiver ajustando `.bordado-gallery a`, lembre que o script atual cria `div` como caixas das fotos. Muitas aparências desse grupo são também aplicadas via `style.cssText` e eventos dentro do script da própria página.
