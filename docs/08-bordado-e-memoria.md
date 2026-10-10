# 08 — Implementação de Bordado e Memória

[Índice](README.md) · [Anterior](07-javascript-compartilhado.md) · [Próximo](09-acervo-e-integracoes.md)

## Por que esta página merece um capítulo próprio?

`bordado-e-memoria.html` contém uma coleção completa com estilos e comportamentos além dos compartilhados. Procurar tudo em `js/app.js` não mostrará o carrossel próprio, a galeria ou a ampliação, porque eles estão em um `<script>` da página.

Sua ordem é: título, carrossel, introdução, divisor, galeria, divisor e depoimentos. Abaixo de `main`, o script executa imediatamente uma função autoexecutável, `(function() { ... })();`. Esse formato organiza variáveis em um escopo próprio para não misturá-las com as funções gerais.

## CSS específico

O bloco `<style>` do `head` define classes com prefixo `bordado-`, além de classes dos depoimentos e áudios. Controla altura dos slides, grade de fotos, margens, cores, tipografia, cards e overlay.

O carrossel utiliza `.bordado-slide` e não `.slide-item`. Portanto, `initSlider` do arquivo comum não inicializa esse recurso. Os nomes evitam que dois carrosséis recebam o mesmo estado.

A galeria tem quatro colunas na base e duas até 1024 px. Até 640 px permanece com duas colunas, reduzindo distância e altura de fotos. Os depoimentos passam de duas para uma coluna até 1024 px.

O card `.reverse` usa `direction: rtl` para inverter a disposição, e a área de texto restaura `direction: ltr`. Essa solução altera a direção de layout sem mudar a ordem dos elementos no HTML; revise leitura e acessibilidade se modificar os cards.

## Dados do script

| Valor | Conteúdo atual | Uso |
| --- | --- | --- |
| `sliderImages` | Seis nomes de fotos WebP | Fotos do carrossel |
| `galleryPool` | Dez nomes de fotos WebP | Conjunto para sortear a galeria |
| `basePath` | `assets/colecoes/bordado-memoria/` | Prefixo para formar os caminhos |
| `SLIDE_DURATION` | `3000` ms | Intervalo do carrossel |

`sliderImages` contém `IMG_4605`, `IMG_4614`, `IMG_4641`, `IMG_4675`, `IMG_4710` e `IMG_4729`, todos `.webp`. A galeria inclui também `IMG_4629`, `IMG_4658`, `IMG_4684` e `IMG_4726`.

As listas possuem nomes de arquivo, não caminhos completos. `basePath + img` monta o endereço. Alterar a pasta exige ajustar `basePath`; colocar um arquivo novo na pasta não o inclui automaticamente em nenhuma lista.

## `createLightbox`: a foto ampliada

A função cria uma `div` com `.bordado-lightbox-overlay` e ID `bordado-lightbox`, uma imagem e um botão de fechar. Acrescenta tudo ao corpo e devolve um objeto com referências e uma função `open(src)`.

Ao abrir:

1. Define o `src` da imagem ampliada.
2. Adiciona `.active` ao overlay.
3. Define `body.style.overflow = 'hidden'` para bloquear rolagem.

Ao fechar, retira `.active` e limpa o estilo inline de overflow. Fecha pelo botão, por Escape ou clique no próprio fundo. A imagem usa `object-fit: contain`, largura máxima de 90% da viewport e altura máxima de 85%, preservando o enquadramento inteiro.

Não há navegação para próxima foto dentro do lightbox, zoom por gesto ou download próprio. O alt ampliado é genérico: “Bordado ampliado”. Não há captura/retorno de foco ou declaração completa de diálogo nesse overlay.

Como `close()` limpa overflow sem guardar o valor anterior, uma futura interação que também controlar rolagem pode entrar em conflito. Teste também coexistência com o modal de boas-vindas.

## Carrossel de seis fotos

O script encontra `bordado-slider-container`, `bordado-slider-dots` e `bordado-slider`. Para cada nome em `sliderImages`, cria uma `.bordado-slide` com imagem de fundo e um `span.bordado-dot`. O primeiro slide e indicador recebem `.active`.

`showSlide(index)` retira estados anteriores, normaliza o índice e ativa os novos. `nextSlide` e `prevSlide` deslocam a posição. `startSlider` cancela o intervalo anterior e inicia outro; `stopSlider` cancela a repetição.

Setas mudam a foto e reiniciam o intervalo. Indicadores chamam `showSlide` diretamente, sem reiniciar o temporizador. `mouseenter` no wrapper pausa, e `mouseleave` reinicia. Esse comportamento difere do carrossel inicial, que usa 4 segundos e não pausa com o ponteiro.

A guarda verifica contêiner e indicadores; o código depois assume que o wrapper existe ao procurar setas e registrar eventos. Preserve os três IDs e sua estrutura se reorganizar a seção.

Os indicadores continuam sendo `span`, sem tratamento próprio de teclado. Não há botão de pausa permanente ou verificação JavaScript de movimento reduzido.

## Galeria aleatória

`shuffle(arr)` copia a lista com `slice()` e percorre de trás para frente, trocando cada posição com uma posição aleatória válida. Esse embaralhamento é conhecido como Fisher–Yates. A cópia preserva a lista original.

`shuffle(galleryPool).slice(0, 8)` seleciona os primeiros oito da cópia embaralhada. Com dez itens únicos, a galeria apresenta oito sem repetir. Recarregar pode mudar seleção e ordem; isso é intencional e não significa que uma foto foi apagada do acervo.

Para cada selecionada, cria uma `div`, uma imagem com `loading="lazy"`, alt genérico e estilos inline. Eventos de entrada/saída do ponteiro levantam a caixa, ampliam levemente a foto e ajustam sombra. O clique chama `lightbox.open` com o caminho completo.

Os contêineres clicáveis são `div`, sem `tabindex`, papel de botão ou evento de teclado. Isso limita o acesso à ampliação por teclado. O CSS possui seletores `.bordado-gallery a`, mas os elementos atuais são `div`; parte do efeito é realizada explicitamente pelo script.

## Depoimentos e áudios

Dois cards já existem no HTML, sem criação dinâmica:

| Depoimento apresentado | Imagem | Áudio |
| --- | --- | --- |
| Dona Ivanete | `IMG_4729.webp` | `Audiosenhora1.mpeg`, tipo `audio/mpeg` |
| Dona Carmelita | `IMG_4710.webp` | `Audiosenhor2.ogg`, tipo `audio/ogg` |

Ambos usam `<audio controls preload="metadata">` e uma mensagem de alternativa para navegadores sem suporte. Os textos das transcrições ficam em `.testimonial-body`. Áudio e texto não são sincronizados: alterar um não altera o outro.

O nome do arquivo do segundo áudio não é confirmação de autoria. A associação acima é a que o HTML faz, e precisa ser validada pela equipe ouvindo o material. A documentação não atribui a gravação por inferência do nome do arquivo.

## O que depende de JavaScript

Título, introdução, depoimentos e players existem no HTML. Carrossel, indicadores, fotos da galeria e lightbox são criados pelo script. Se ele falhar ou estiver desativado, os contêineres dessas partes dinâmicas permanecem vazios.

Nenhuma dessas listas vem de banco de dados, Forms ou pasta lida em tempo real. É necessário editar o código e publicar nova versão.

## Checklist de alteração nesta página

- Preserve IDs dos três contêineres de carrossel e o da galeria.
- Confira cada nome nas duas listas e a existência da mídia.
- Atualize alt, autoria e transcrição junto com fotos/áudios.
- Teste seis slides, indicadores, pausa com ponteiro e setas.
- Recarregue para observar seleção de oito fotos.
- Abra e feche ampliação por botão, fundo e Escape.
- Confira se rolagem é restaurada.
- Teste os dois players e os relatos em telas menores.
- Revise teclado, foco e movimento reduzido se alterar controles.
