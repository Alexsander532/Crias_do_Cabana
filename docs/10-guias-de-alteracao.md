# 10 — Guias práticos de alteração

[Índice](README.md) · [Anterior](09-acervo-e-integracoes.md) · [Próximo](11-scripts-e-arquivos-originais.md)

## Preparação comum

Abra a raiz no editor, preserve uma cópia ou branch do trabalho e inicie o servidor do capítulo 02. Faça uma tarefa por vez. Exemplos de nomes, contatos e conteúdos fictícios não são informações aprovadas para publicar.

Não execute os scripts Python para preparar uma edição: eles não são uma etapa de instalação e apresentam os riscos descritos no capítulo 11.

## 1. Primeiro exercício: editar um parágrafo

1. Abra `index.html` e procure `<main id="main-content"`.
2. Localize a apresentação em `.about-body-lead`.
3. Ajuste uma palavra como exercício, sem alterar tags ao redor.
4. Salve em UTF-8 e atualize a home local.
5. Confira a aparência em uma janela pequena.
6. Desfaça o exercício se não for uma revisão autorizada.

Texto visível no HTML fica entre tags. Texto dentro de `alt`, `aria-label`, `title` e `meta content` tem outra função. Ao revisar uma informação, verifique se ela também aparece nesses atributos ou em outra página.

## 2. Atualizar título e descrição

No `head` da página, revise `<title>` e `<meta name="description" content="...">`. No `main`, revise o título visível. São três informações diferentes: aba, descrição e conteúdo da tela.

```html
<title>Coleção de exemplo - Crias do Cabana</title>
<meta name="description" content="Apresentação didática de uma coleção de exemplo.">
```

Cole esse trecho apenas no lugar das declarações correspondentes, sem duplicar metadados. Use títulos específicos e descrições coerentes com o conteúdo real.

## 3. Trocar uma foto

Prepare e autorize a mídia, coloque-a na pasta adequada e atualize sua referência:

```html
<img src="assets/colecoes/foto-exemplo.webp"
     alt="Descrição da atividade retratada"
     loading="lazy">
```

`foto-exemplo.webp` é fictícia e precisa existir. Preserve classes ou dimensões necessárias no elemento que você estiver alterando. Confira que o recorte e a descrição correspondem à imagem.

Uma foto de fundo é alterada em `style="background-image: url('...')"`. Ela não recebe `alt` como um `<img>`; considere acrescentar descrição textual acessível se a imagem transmitir informação essencial.

Pesquise a referência antiga em todas as páginas antes de remover o arquivo. Uma fotografia pode aparecer na home, na coleção e em uma página de detalhe.

## 4. Acrescentar slide na home

Dentro de `.slider-container`, acrescente um bloco seguindo os outros:

```html
<div class="slide-item" style="background-image: url('assets/slider-exemplo.png');">
  <div class="slide-overlay"></div>
</div>
```

Depois acrescente um indicador no final de `.slider-dots`:

```html
<span class="dot" data-slide="3" aria-label="Ir para slide 4"></span>
```

O arquivo de imagem é fictício. Não marque o novo slide como `active` se o primeiro já está ativo. O script usa a ordem dos indicadores, então mantenha uma posição para cada foto. O índice humano “slide 4” corresponde ao índice de programação `3`.

`slideDuration` em `initSlider` define o intervalo em milissegundos; `4000` é quatro segundos. Confira avanço automático, setas, indicadores e recorte após a mudança.

## 5. Acrescentar fotografias a Bordado

Coloque a foto WebP em `assets/colecoes/bordado-memoria`. No script da página, inclua seu nome em `sliderImages` se quiser no carrossel e em `galleryPool` se quiser na seleção aleatória.

Os dois arrays são independentes. A seleção continua limitada por `.slice(0, 8)`, então uma foto nova pode não aparecer naquela carga. Para testar seu caminho, abra-a diretamente por URL ou inclua-a temporariamente em uma lista de teste local.

Para mostrar todas em uma ordem fixa, uma alteração deliberada seria substituir a seleção por uma cópia da lista:

```js
var selected = galleryPool.slice();
```

Esse exemplo muda o comportamento; não representa o estado atual. Teste tamanho da página, tempo de carregamento e navegação por teclado antes de adotá-lo.

## 6. Atualizar um depoimento e áudio

Em Bordado, encontre o `.bordado-testimonial-card` correspondente. Revise `.testimonial-name`, a foto, o `alt`, o `source src`, o `type` e os parágrafos de `.testimonial-body`.

Exemplo com arquivo existente:

```html
<audio controls preload="metadata">
  <source src="assets/colecoes/Audiosenhora1.mpeg" type="audio/mpeg">
  Seu navegador não suporta o elemento de áudio.
</audio>
```

Não atribua um áudio a uma pessoa somente pelo nome do arquivo. Ouça o material, confirme autoria/consentimento e mantenha transcrição coerente. Trocar a fonte não atualiza texto ou fotografia automaticamente.

## 7. Alterar formulário e contato

Abra `conte-a-sua-historia.html` e revise o telefone no parágrafo e o `href` do Forms. O endereço do formulário é longo: substitua-o por completo, preservando as aspas e verificando o destino.

Se a equipe optar por um link direto de WhatsApp, um exemplo fictício de formato é:

```html
<a href="https://wa.me/5531999999999" target="_blank" rel="noopener noreferrer">
  Falar com a equipe pelo WhatsApp
</a>
```

O número é ilustrativo; não publique nem contate esse destino. Use o número oficial validado, incluindo país e DDD, sem pontuação na URL. O projeto atual mostra o telefone como texto, sem esse link.

Não envie contribuições fictícias ao formulário oficial durante uma verificação de links.

## 8. Trocar o vídeo ou link do livro

Na Guarda, localize o `iframe` e substitua o identificador na URL `youtube.com/embed/...` pelo vídeo autorizado. Não cole simplesmente uma URL de visualização `watch?v=...` no lugar sem preparar o endereço de incorporação.

Confira reprodução, proporção e disponibilidade. Acrescente um `title` adequado ao iframe em uma revisão de acessibilidade. O link do livro está no botão “CLIQUE PARA BAIXAR”; confira se o destino oferece o material previsto e se o rótulo descreve o acesso real.

Não execute `update.py` depois dessa edição: seu modelo antigo pode substituir o vídeo e retirar o link atual do livro.

## 9. Alterar um menu compartilhado

Edite o item em todas as nove páginas atuais, preservando `.nav-link`, `.dropdown-link` e a estrutura de listas. Um item simples pode ser:

```html
<li class="menu-item">
  <a href="nova-pagina.html" class="nav-link">Título da página</a>
</li>
```

O arquivo precisa existir. Acrescentar o link não cria uma página. Para um item filho, coloque o `<li>` dentro do `.dropdown-menu` correspondente e use `.dropdown-link`.

Teste desktop, foco do teclado, mobile e redimensionamento. Aglomerado e Repositório ainda são provisórios; escolha destinos revisados em vez de deixar `#` em um link que promete conteúdo.

## 10. Criar uma página nova

Uma abordagem compatível com o projeto é copiar uma página institucional atual mais simples, como `o-programa-sofia.html`, para um novo nome. Depois:

1. Atualize título e descrição no `head`.
2. Substitua o conteúdo de `main` por conteúdo próprio.
3. Mantenha `id="main-content"` e os blocos compartilhados.
4. Confira favicon, fontes, CSS e a única chamada a `app.js`.
5. Preserve IDs únicos dentro do documento.
6. Remova scripts/estilos locais que não forem necessários.
7. Acrescente links para a página nos menus apropriados.
8. Teste carregamento pelo endereço direto e por navegação.

Uma seção de conteúdo simples pode aproveitar as classes existentes:

```html
<main id="main-content" class="main-layout">
  <section class="subpage-content-section no-banner">
    <div class="subpage-container">
      <h1 class="subpage-main-heading">Página de exemplo</h1>
      <div class="subpage-full-width-text">
        <p>Conteúdo didático a substituir por texto revisado.</p>
      </div>
    </div>
  </section>
</main>
```

Esse bloco substitui o `main` anterior; não deve criar um segundo `main` no documento. Para publicar em subpastas, revise os caminhos relativos do HTML, pois as referências atuais pressupõem a raiz.

## 11. Adicionar uma coleção

Hoje as coleções são blocos escritos em `colecoes-artes.html`. Copie a estrutura de `.accordion-item`, altere título, texto, imagens e destino. Preserve a adjacência botão/conteúdo, porque o JavaScript usa `nextElementSibling`.

Antes de acrescentar conteúdo ao acordeão, resolva o conflito de exibição do capítulo 07 em uma tarefa própria. Uma estratégia possível é manter somente `initAccordions`, retirar `display: none` dos estilos inline dos conteúdos e usar altura máxima zero como estado fechado:

```css
.accordion-content {
  display: block;
  max-height: 0;
  overflow: hidden;
}
```

Esse trecho é uma proposta de reparo, não código aplicado. Ele precisa ser integrado à folha existente, aos estados `.open`, às transições e às regras inline; depois, teste conteúdo extenso e mudança de largura. Planeje também IDs, `aria-expanded` e relação entre botão e painel. Não basta copiar uma regra sem rever o mecanismo inteiro.

Se a coleção tiver detalhe próprio, crie a página e acrescente links nos acordeões/menus. Colocar fotos em uma pasta não gera a coleção.

## 12. Adicionar animação de entrada

O código comum reconhece `.reveal`. Um exemplo seria:

```html
<section class="subpage-content-section reveal reveal-fade-up">
  <h2>Seção de exemplo</h2>
  <p>Conteúdo a revelar quando entrar na área observada.</p>
</section>
```

Hoje essa classe não está aplicada nas nove páginas. Teste a inicialização do script, preferência por movimento reduzido e leitura sem JavaScript. Adicione manualmente em HTML válido; `add_reveal_classes.py` precisa de correção antes de ser usado.

## 13. Atualizar paleta ou parceiros

Para cores, comece em `:root` e depois confira valores fixos em HTML, CSS local e script de Bordado. Para parceiros, revise nomes, papéis e imagens dos grupos do rodapé em todas as páginas. As listas não são centralizadas.

Ao trocar logo, preserve proporção e alt. Não altere atribuições institucionais só para simplificar o layout: obtenha a orientação editorial pertinente.

## Finalizar a alteração

Pesquise referências, confira todos os arquivos afetados, execute o roteiro do capítulo 12 e registre o resultado. Faça uma cópia/commit da versão revisada e atualize este manual. Publicação e acessos institucionais são tratados no capítulo 13.
