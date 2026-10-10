# 03 — Fundamentos para entender o código

[Índice](README.md) · [Anterior](02-executar-o-projeto.md) · [Próximo](04-arquitetura-e-paginas.md)

## HTML: o conteúdo e sua estrutura

Uma tag identifica um elemento. `<p>História da comunidade.</p>` é um parágrafo. A abertura começa com `<p>` e o fechamento usa `</p>`. Tags podem ser aninhadas, formando uma árvore.

```html
<section class="subpage-content-section">
  <h1>Uma coleção de exemplo</h1>
  <p>Texto introdutório da coleção.</p>
  <a href="colecoes-artes.html">Voltar às coleções</a>
</section>
```

Esse exemplo não cria uma coleção no código atual: ilustra a marcação. `section` reúne uma seção, `h1` é seu título, `p` é o parágrafo e `a` é o link. `href` informa o destino. `class` associa nomes de estilos ou comportamentos.

`img`, `meta`, `link` e `source` são elementos sem tag de fechamento. Uma imagem usa `src` para o arquivo e `alt` para a descrição alternativa:

```html
<img src="assets/logo-vertical.png" alt="Logomarca Crias do Cabana">
```

## Estrutura de um documento

```text
html
├── head: informações da página, título, fontes e CSS
└── body: conteúdo que o navegador apresenta
    ├── ferramentas e cabeçalho
    ├── main: conteúdo principal
    ├── rodapés
    └── scripts de comportamento
```

`<!DOCTYPE html>` informa o tipo de documento. `lang="pt-BR"` declara o idioma. `meta charset="UTF-8"` permite interpretar os caracteres corretamente. `meta viewport` ajuda a ajustar a apresentação em telas móveis. `title` aparece na aba do navegador; não é o título visível do conteúdo.

## Classes, identificadores e atributos

Uma `class` pode ser compartilhada por vários elementos: muitas imagens têm `subpage-content-img`. Um `id` deve identificar um único elemento na página: `main-content`, por exemplo, é o alvo do link de pular para o conteúdo.

`data-action="resize-plus"` é um atributo próprio usado pelo JavaScript para descobrir qual ação de acessibilidade executar. `aria-label` dá um nome acessível a um controle; `aria-expanded` informa se um painel está expandido. Esses atributos complementam uma estrutura e interação corretas; não tornam um controle acessível sozinhos.

`style="color: #3C9E74"` aplica CSS diretamente naquele elemento. O site utiliza muitos estilos desse tipo, além da folha compartilhada.

## Caminhos de arquivos

`assets/logo-horizontal.png` é relativo ao HTML que está na raiz. `colecoes-artes.html` aponta para outro arquivo na mesma pasta. `#main-content` aponta para uma seção da página atual. `href="#"` não representa uma página futura: normalmente navega para um fragmento vazio, sem fornecer o conteúdo esperado de um link de menu.

Uma URL começando com `https://` aponta para outro site. Um caminho que começa com `/` parte da raiz do domínio, o que pode ser inconveniente se o projeto for publicado em uma subpasta. Preserve os caminhos relativos usados pelo projeto quando eles atendem à estrutura desejada.

## CSS: regras e seletores

```css
.subpage-main-heading {
  color: var(--brand-gold);
  text-align: center;
}
```

O seletor `.subpage-main-heading` encontra elementos com essa classe. As chaves reúnem declarações; `color` define a cor e `text-align` o alinhamento. `var(--brand-gold)` lê uma variável CSS declarada no tema.

`#main-content` encontra um ID. `button` encontra uma tag. `.navigation-menu.active` exige as duas classes no mesmo elemento. `.hover-zoom img` encontra uma imagem **dentro** de um elemento com `hover-zoom`; colocar a classe somente na própria imagem não atende a essa relação.

`:hover` é o estado quando o ponteiro está sobre o elemento. `:focus-visible` trata foco de teclado conforme o navegador. `::after` cria uma parte decorativa via CSS. `@media` aplica regras sob uma condição, como largura máxima.

O navegador combina regras por origem, importância, especificidade e ordem. Um `style` inline normalmente vence uma classe comum. `!important` interfere nessa prioridade. Esse detalhe explica o problema dos acordeões: mudar uma classe não remove automaticamente `display: none` escrito inline.

## JavaScript: valores e funções

```js
const fotos = ['IMG_4605.webp', 'IMG_4614.webp'];
let indice = 0;

function proximaFoto() {
  indice = indice + 1;
}
```

Texto é `string`, número é `number`, e `true`/`false` são booleanos. `const` impede reatribuir a variável; `let` permite. Uma lista usa `[]`; seus índices começam em zero. Uma função reúne instruções para executar depois. `return` devolve um resultado e também pode encerrar a função cedo.

`if (!elemento) return;` significa: se o elemento não foi encontrado, termine esta inicialização. Isso permite usar `app.js` em páginas que não possuem carrossel ou acordeão.

`===` compara valores, `!` nega uma condição e `&&` exige que duas condições sejam atendidas. Funções de seta como `() => { ... }` são uma forma curta de escrever funções.

## DOM: a página vista pelo JavaScript

O navegador transforma o HTML em uma árvore chamada **DOM**. O JavaScript pode encontrar e modificar essa árvore:

```js
const painel = document.getElementById('search-dropdown');
if (painel) {
  painel.classList.add('active');
}
```

`getElementById` encontra um ID. `querySelector` encontra o primeiro resultado de um seletor. `querySelectorAll` encontra vários. `classList.add`, `.remove` e `.toggle` adicionam, retiram ou alternam classes.

`setAttribute` modifica um atributo. `textContent` lida com texto. `createElement` cria um elemento e `appendChild` coloca-o na árvore. A galeria de Bordado usa essas operações para criar suas fotografias.

`innerHTML` interpreta marcação HTML. O projeto o usa para símbolos fixos, como fechar e voltar ao topo. Não coloque conteúdo externo não validado nesse recurso; para texto comum de pessoas ou depoimentos, prefira `textContent` ou HTML revisado na edição.

## Eventos

```js
botao.addEventListener('click', () => {
  painel.classList.toggle('active');
});
```

Esse trecho pressupõe que `botao` e `painel` já foram encontrados. Ele registra uma função para executar quando o usuário clicar. `DOMContentLoaded` sinaliza que a estrutura do documento foi carregada; `app.js` inicializa os recursos nesse evento.

`preventDefault()` cancela a ação padrão, como navegar em um link. `stopPropagation()` impede que aquele evento continue subindo pela árvore. São ações diferentes: o código da busca usa a segunda para não fechar imediatamente o painel que acabou de abrir.

## Temporizadores e observadores

`setTimeout` agenda uma ação uma vez; `setInterval` a repete. `clearInterval` cancela a repetição. O modal espera 800 milissegundos, e o carrossel inicial avança a cada 4000 milissegundos.

`requestAnimationFrame` agenda trabalho próximo a um quadro de desenho do navegador. O site o usa para reunir atualizações de rolagem. `IntersectionObserver` acompanha a visibilidade de elementos e ativa as classes de entrada quando necessário.

## Estado em memória e na sessão

`currentSlide` guarda o índice atual somente enquanto aquela página está aberta. `sessionStorage` é armazenamento do navegador ligado à origem e à sessão da aba; o modal salva `crias_modal_seen` quando é fechado. Não é um banco de dados compartilhado entre visitantes e não registra contribuições para o museu.

As preferências de acessibilidade não são salvas pelo código atual: mudam estilos e classes da página presente e normalmente reiniciam ao abrir outro HTML.

## Como ler um arquivo

Leia o `head`, depois o conteúdo de `main`, e identifique quais partes são repetidas. Para uma interação, encontre a classe/ID no HTML, o seletor no JavaScript e o estilo no CSS. Essa sequência explica a maior parte dos recursos sem exigir memorizar todo o código.

Comentários HTML usam `<!-- ... -->`; JavaScript usa `//` ou `/* ... */`; CSS usa `/* ... */`. Comentários podem explicar intenções antigas, mas o comportamento real depende das instruções executadas e dos estilos aplicados.
