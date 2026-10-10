# 07 — Cada função do JavaScript compartilhado

[Índice](README.md) · [Anterior](06-estilos-e-responsividade.md) · [Próximo](08-bordado-e-memoria.md)

## Entrada do programa

`js/app.js` registra um evento `DOMContentLoaded`. Quando a árvore do HTML está pronta, chama nesta ordem:

```js
fixNavigationLinks();
initWelcomeModal();
initMobileMenu();
initSearch();
initSlider();
initA11y();
initReveal();
initBackToTop();
initAccordions();
initScrollHandler();
```

Cada função organiza um recurso. A maioria procura seus elementos e retorna cedo quando não existem. Isso permite usar o mesmo arquivo em nove páginas. Não há `try/catch` isolando todas as inicializações: uma exceção durante uma delas pode impedir as seguintes, inclusive por acesso indisponível a `sessionStorage`.

## `fixNavigationLinks`

Percorre os links e normaliza o texto, removendo espaços repetidos. Se o rótulo contiver “Guarda de São Benedito” ou “GUARDA DE CONGO SÃO BENEDITO” e o destino estiver vazio, for `#` ou terminar em `#`, troca pelo arquivo da Guarda.

Depois percorre `.menu-item.has-dropdown`, encontra o link direto com `:scope > .nav-link` e, se o texto começar por “Coleções” com destino provisório, atribui `colecoes-artes.html`.

Essa é uma correção por texto, não um cadastro universal de rotas. Se mudar o rótulo, a regra pode deixar de encontrá-lo. Ela não conserta Repositório, Aglomerado ou logos. Também não confirma que um destino já preenchido é correto.

## `initWelcomeModal`

Exige `#welcome-modal` e `.modal-close` dentro dele. A função interna `showWelcomeModal` lê `crias_modal_seen` e agenda `.active` após 800 ms se a marca não existir. `closeWelcomeModal` retira a classe e salva `'true'` em `sessionStorage`.

Há eventos para o botão, clique no próprio overlay e Escape. Clicar em um elemento dentro do conteúdo não satisfaz `e.target === welcomeModal`, então não fecha o modal por engano.

A marca é gravada **ao fechar**, não ao mostrar. Recarregar sem fechar pode exibir de novo. Ela é ligada à origem e à sessão da aba; não é uma preferência persistente de conta. Para testar novamente, use a aba de armazenamento nas ferramentas do navegador ou, no Console dessa página:

```js
sessionStorage.removeItem('crias_modal_seen');
```

Depois recarregue. Essa ação remove apenas a marca local do teste. Não envia dados ao museu.

## `initMobileMenu`

Exige `#mobile-menu-trigger` e `.navigation-menu`. Encontra dropdowns e possíveis submenus. `closeMobileMenu` limpa `.active`, atualiza `aria-expanded` do hamburger e fecha os dropdowns.

O clique do hamburger alterna as classes de botão/menu e seu estado acessível. O clique no pai de dropdown, até 768 px, cancela navegação, alterna `.dropdown-active` e fecha os demais. Cada link de submenu previsto alterna `.submenu-active` nesse mesmo limite.

Links com `href` dentro de `.dropdown-menu` recebem um evento para fechar o menu mobile. Os links comuns de Aglomerado, Repositório e contribuição ficam fora desse seletor.

A limpeza não remove explicitamente todos os `.submenu-active`, e não há evento de `resize` que restabeleça a navegação ao mudar a largura. Se ampliar submenus ou mudar breakpoints, teste abertura, fechamento e redimensionamento.

## `initSearch`

Exige `#search-toggle` e `#search-dropdown`. O clique usa `stopPropagation`, alterna `.active`, atualiza `aria-expanded` e coloca foco em `.search-input` quando abre.

Um evento de clique no documento fecha o painel se o alvo estiver fora do dropdown e não for o botão de alternância. Isso trata a abertura e fechamento visual. Não há interceptação do submit, leitura de `s`, consulta de dados ou resultados de pesquisa.

O formulário GET com `action="#"` pode navegar para uma URL do documento atual com a palavra digitada na query. O servidor estático e o script não transformam isso em uma busca.

## `initSlider`: carrossel inicial

Procura `.slide-item` e as setas `.slider-arrow.prev`/`.next`. Sem slides ou setas, termina. Os indicadores são `.dot`. A variável `currentSlide` começa em zero, e `slideDuration` vale 4000 ms.

### Funções internas

| Função | Responsabilidade |
| --- | --- |
| `showSlide(index)` | Limpar estados, normalizar índice e ativar slide/indicador |
| `nextSlide()` | Solicitar índice atual mais um |
| `prevSlide()` | Solicitar índice atual menos um |
| `startAutoplay()` | Cancelar intervalo anterior e iniciar outro |
| `stopAutoplay()` | Cancelar o intervalo existente |

Quando o índice ultrapassa o fim, volta a zero. Quando fica negativo, vai para a última foto. O primeiro slide já vem ativo no HTML, então a função não precisa ativá-lo explicitamente na inicialização.

Setas e indicadores selecionam uma foto e reiniciam o intervalo. O código usa a **posição do indicador na lista**, não lê seu `data-slide`. Ao acrescentar um slide, acrescente um indicador na mesma ordem.

Este carrossel não pausa ao passar o mouse, não oferece botão de pausa e não implementa gesto de arrastar. Os indicadores são `span`, sem navegação por teclado própria. São pontos de evolução, não recursos existentes.

## `initA11y`

Exige a barra e o toggle. `fontScale` começa em `1.0`. `updateFontSize` define `--base-font-size` na raiz como `16 * fontScale` em pixels. Aumentar soma 0.1 enquanto a escala for menor que 1.5; diminuir subtrai 0.1 enquanto maior que 0.8.

Esses limites são controlados por comparações de ponto flutuante, sem arredondamento/clamp explícito; trate 0.8 e 1.5 como limites pretendidos e confira cliques sucessivos se modificar a lógica. A alteração afeta elementos dependentes da base, especialmente `rem`, não todos os valores fixos em pixels.

As ações alternam classes `a11y-grayscale`, `a11y-high-contrast`, `a11y-negative-contrast`, `a11y-light-bg`, `a11y-underline` e `a11y-readable-font`. Alto contraste, negativo e fundo claro removem os dois outros modos antes de alternar o selecionado. Cinza, sublinhado e fonte podem coexistir com esses modos.

Reset retorna a escala a um, atualiza a variável e limpa **todas** as classes do corpo. Não fecha necessariamente o painel nem salva preferências. As classes são traduzidas em apresentação por `style.css`.

## `initReveal`

Procura `.reveal`; sem elementos, termina. Cria um `IntersectionObserver` com `threshold: 0.15` e margem inferior de `-40px`. Quando uma entrada está intersectando a área de observação, adiciona `.revealed` e para de observar aquele elemento.

Isso evita repetir a entrada a cada rolagem. O CSS define transparência/visibilidade e deslocamentos. As nove páginas atuais não têm esses elementos marcados; a função fica sem trabalho nelas.

Para adotar essa animação, aplique as classes em HTML válido e confira que o conteúdo continua acessível diante de falha de JavaScript. O script Python de adicionar classes não deve ser usado como atalho sem os reparos do capítulo 11.

## `initBackToTop`

Cria um `button`, atribui `.back-to-top`, rótulo “Voltar ao topo” e símbolo de seta, e o acrescenta ao corpo. Seu clique executa `window.scrollTo({ top: 0, behavior: 'smooth' })`.

Há uma função interna `handleBackToTopVisibility` declarada nesse bloco, porém ela não é chamada nem registrada. A visibilidade efetiva é controlada pela função de mesmo propósito dentro de `initScrollHandler`, executada depois. Não confunda as duas funções locais com uma única função compartilhada.

## `initAccordions`

Procura `.accordion-button`. Para cada botão:

1. Remove o atributo `onclick`, desativando o manipulador inline original.
2. Adiciona `.accordion-icon` ao primeiro `span`.
3. Registra clique que seleciona o próximo elemento irmão como conteúdo.
4. Fecha outros `.accordion-content.open` e seus botões.
5. Alterna `.open` no conteúdo/botão e ajusta `maxHeight` conforme `scrollHeight`.

Essa implementação depende de botão e conteúdo serem irmãos adjacentes. Inserir outra caixa entre eles quebra a seleção.

### Conflito atual em Coleções

Os conteúdos de `colecoes-artes.html` têm `style="display: none; ..."`. A função nova não muda `display`, apenas classe e `maxHeight`. A regra `.accordion-content.open` também não declara `display`.

Pela leitura combinada de HTML, CSS e JavaScript, o conteúdo permanece com `display: none` mesmo após a tentativa de abertura; sua altura medida pode ser zero. A função inline antiga, que alterava `display`, deixa de ser acionada porque seu `onclick` foi removido.

Essa é uma conclusão da análise estática, que deve ser reproduzida no navegador antes de uma correção. O manual não altera esse código. Para repará-lo, escolha uma única estratégia de estado e altura, em vez de manter dois mecanismos competindo.

## `initScrollHandler`

Captura o botão de topo já criado, o cabeçalho e a primeira `.page-banner-image`, quando existir. Possui três operações:

- Acima de 400 px, alterna `.visible` no botão de topo.
- Acima de 50 px, alterna `.scrolled` no cabeçalho.
- Quando o banner intersecta a janela, aplica deslocamento vertical proporcional a 15% da diferença entre a rolagem e o topo do banner.

`getBoundingClientRect().top + scrollY` estima o topo do banner no documento. `offsetHeight` informa sua altura. O resultado é aplicado como `style.transform = translateY(...)`.

Um indicador `ticking` impede agendar vários trabalhos antes do próximo quadro. O listener de rolagem usa `{ passive: true }`, informando que não vai cancelar esse evento. Na inicialização são chamadas visibilidade e aparência do cabeçalho; o cálculo de parallax só é acionado pelo trabalho de rolagem.

## Contratos que não devem ser quebrados sem revisão

| Recurso | HTML esperado | Estado aplicado |
| --- | --- | --- |
| Modal | `welcome-modal`, `.modal-close` | `.active`, chave de sessão |
| Menu | `mobile-menu-trigger`, `.navigation-menu` | `.active`, `.dropdown-active` |
| Busca | `search-toggle`, `search-dropdown`, `.search-input` | `.active` |
| Slider inicial | `.slide-item`, setas, `.dot` | `.active` |
| Acessibilidade | `accessibility-toolbar`, `a11y-toggle`, `.a11y-btn` | `.active`, `body.a11y-*` |
| Entrada | `.reveal` | `.revealed` |
| Topo | Botão criado pelo JS | `.visible` |
| Acordeão | Botão seguido do conteúdo | `.open`, `maxHeight` |
| Rolagem | `.main-header`, `.page-banner-image` | `.scrolled`, `transform` |

Ao renomear uma classe ou ID, pesquise seus usos no HTML, CSS e JavaScript. Uma classe aparentemente visual pode ser também o ponto de conexão de um comportamento.
