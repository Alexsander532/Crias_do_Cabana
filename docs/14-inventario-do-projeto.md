# 14 — Inventário do projeto e mapa de dependências

[Índice](README.md) · [Anterior](13-publicacao-e-continuidade.md)

Este capítulo localiza todos os arquivos de código da aplicação e os grupos do acervo. As 97 mídias estão agrupadas para consulta; seus usos e contratos de caminhos estão descritos no capítulo 09.

## HTMLs de trabalho

| Arquivo | Estrutura específica | JavaScript adicional |
| --- | --- | --- |
| `index.html` | `.slider-section`, `.about-section`, `#museu` | Usa carrossel compartilhado |
| `um-museu-colaborativo.html` | `.page-banner-section`, `.page-banner-image`, `.subpage-*` | Usa parallax compartilhado |
| `o-programa-sofia.html` | `.subpage-content-section.no-banner` e imagem de SoFiA | Somente arquivo compartilhado |
| `o-projeto-artes-de-curar-rezar-brincar.html` | Título, duas imagens, textos e link para equipe | Somente arquivo compartilhado |
| `o-aglomerado-cabana-do-pai-tomas.html` | `main` idêntico ao do projeto Artes | Somente arquivo compartilhado |
| `conte-a-sua-historia.html` | Convite, contato e link Google Forms | Somente arquivo compartilhado |
| `colecoes-artes.html` | Quatro `.accordion-item` | `toggleAccordion` inline, substituído no evento pelo script comum |
| `guarda-de-congo-sao-benedito.html` | `.guarda-title-section`, hero, quote, history, doco e ebook | Função inline `toggleAccordion`, sem uso no conteúdo atual |
| `bordado-e-memoria.html` | Título, carrossel, galeria, depoimentos e players | Função autoexecutável com lightbox, slider e galeria |

Todos possuem link de pular, boas-vindas, ferramentas de acessibilidade, cabeçalho, busca, rodapés e referência a `js/app.js?v=2`. Os detalhes das telas estão no [capítulo 04](04-arquitetura-e-paginas.md).

## JavaScript compartilhado: `js/app.js`

| Função | Responsabilidade |
| --- | --- |
| Callback de `DOMContentLoaded` | Inicializar os recursos na ordem do programa |
| `fixNavigationLinks` | Corrigir alguns destinos provisórios por rótulo |
| `initWelcomeModal` | Exibir e fechar modal com marca por sessão |
| `initMobileMenu` | Alternar menu/dropdowns mobile e estados expandidos |
| `initSearch` | Alternar painel de busca e foco do input |
| `initSlider` | Carrossel inicial, setas, indicadores e intervalo de 4 s |
| `initA11y` | Escala de fonte, classes de leitura e reset |
| `initReveal` | Observar entradas de elementos marcados `.reveal` |
| `initBackToTop` | Criar botão de topo e evento de rolagem suave |
| `initAccordions` | Instalar eventos de estado/altura para os painéis |
| `initScrollHandler` | Atualizar topo, cabeçalho e parallax em quadros de rolagem |

O [capítulo 07](07-javascript-compartilhado.md) também explica as funções internas, temporizadores e limites.

## JavaScript inline de Bordado

| Definição | Papel |
| --- | --- |
| `sliderImages` | Lista de seis fotos do carrossel |
| `galleryPool` | Lista de dez fotos da galeria |
| `basePath` | Caminho comum das fotos |
| `createLightbox`, `close`, `open` | Criar e controlar a ampliação |
| `showSlide`, `nextSlide`, `prevSlide` | Selecionar slides |
| `startSlider`, `stopSlider` | Gerir intervalo de 3 s |
| `shuffle` | Embaralhar uma cópia da lista |
| `selected` | Selecionar oito fotos embaralhadas |
| Eventos das fotos | Hover e abertura da ampliação |

O [capítulo 08](08-bordado-e-memoria.md) detalha CSS, galerias e relatos.

## Folhas e utilitários

| Arquivo | Situação | Consulta |
| --- | --- | --- |
| `css/style.css` | Folha compartilhada ativa com tema, layout e efeitos | [06](06-estilos-e-responsividade.md) |
| Bloco `<style>` em `bordado-e-memoria.html` | Estilo específico ativo | [08](08-bordado-e-memoria.md) |
| `post-652.css` | CSS Elementor preservado; não importado pelos HTMLs atuais | [11](11-scripts-e-arquivos-originais.md) |
| `update.py` | Utilitário histórico que reescreve a página da Guarda | [11](11-scripts-e-arquivos-originais.md) |
| `add_reveal_classes.py` | Utilitário de transformação com erro de regex e problemas de atributos | [11](11-scripts-e-arquivos-originais.md) |

## Referências antigas

`original.html`, `um-museu-colaborativo-original.html`, `o-programa-sofia-original.html` e `o-projeto-artes-de-curar-original.html` são os quatro documentos com estrutura anterior. Eles possuem recursos remotos e marcação WordPress; não são dependências dos nove HTMLs atuais.

## Mídias diretamente em `assets`

| Arquivo | Uso |
| --- | --- |
| `favicon.png` | Ícone declarado no `head` |
| `logo-horizontal.png` | Marca do cabeçalho |
| `logo-vertical.png` | Marca na apresentação da home |
| `slider-home.png` | Primeiro slide inicial |
| `slider-sobre.png` | Segundo slide e banner do museu |
| `slider-aglomerado.png` | Terceiro slide inicial |
| `um-museu-colaborativo-content.jpg` | Foto editorial do museu |
| `o-projeto-sofia-content.jpg` | Foto editorial do programa |
| `1-o-projeto-artes-de-curar-content.jpg` | Primeira imagem do projeto |
| `2-o-projeto-artes-de-curar-content.jpg` | Segunda imagem do projeto |
| `logo-sofia.png` | Grupo Realização |
| `logo-fapemig.png`, `logo-dedc.png` | Grupo Financiamento |
| `logo-conecta-cabana.png`, `logo-compet.png` | Grupo Parceiros |
| `logo-pet-connectte.png`, `logo-geptt.png` | Grupo Parceiros |

## Arquivos diretamente em `assets/colecoes`

| Arquivo | Uso |
| --- | --- |
| `ARTES-DE-CURAR-CAPA-scaled.webp` | Abertura de Artes de Curar |
| `ARTES-DE-CURAR-1-scaled.webp` | Composição de Artes de Curar |
| `ARTES-DE-CURAR-2-scaled.webp` | Composição de Artes de Curar |
| `ARTES-DE-CURAR-3.webp` | Composição de Artes de Curar |
| `Album_1_foto_0026.webp` | Artes de Rezar e história da Guarda |
| `Album_3_foto_0015.webp` | Link/abertura da Guarda |
| `Album_2_foto_0018.jpg` | História da Guarda |
| `Album_1_foto_0009.jpg` | Acervo preservado, sem uso identificado nos nove HTMLs atuais |
| `Capa-do-livro.png` | Chamada do livro na Guarda |
| `Audiosenhora1.mpeg` | Player do card apresentado como Dona Ivanete |
| `Audiosenhor2.ogg` | Player do card apresentado como Dona Carmelita; autoria a validar |

## Subpastas de mídia

`assets/colecoes/bordado-memoria` contém dez WebP: `IMG_4605`, `IMG_4614`, `IMG_4629`, `IMG_4641`, `IMG_4658`, `IMG_4675`, `IMG_4684`, `IMG_4710`, `IMG_4726` e `IMG_4729`. São usados pela coleção e listas dinâmicas.

`assets/colecoes/para o site` contém 42 JPG preservados e não é percorrida automaticamente por código. `assets/backup-originais` contém 17 mídias de referência. Os detalhes de contagem e publicação estão no [capítulo 09](09-acervo-e-integracoes.md).

## Documentação

`README.md` na raiz apresenta o projeto e liga este manual. `docs/README.md` organiza os 14 capítulos. Os arquivos Markdown não participam dos carrosséis, coleções ou navegação do visitante; servem à equipe de manutenção.

## Mapa de dependências

```text
9 HTMLs atuais
  ├── css/style.css → apresentação compartilhada e estados visuais
  ├── js/app.js → eventos e estados da interface
  ├── assets → logos, imagens e áudios locais
  └── Google Fonts → famílias tipográficas externas

colecoes-artes.html
  ├── blocos escritos manualmente
  ├── toggleAccordion inline + initAccordions comum (conflito atual)
  └── links para Guarda e Bordado

bordado-e-memoria.html
  ├── CSS específico dentro do head
  ├── script inline → listas, slides, galeria e lightbox
  └── players/transcrições no HTML

guarda-de-congo-sao-benedito.html → YouTube + página externa do livro
conte-a-sua-historia.html → Google Forms + telefone escrito

utilitários Python → edição de arquivos, sem papel na navegação
originais WordPress → referência, sem geração das páginas atuais
```

## Como localizar uma mudança

Para **conteúdo**, abra o HTML da página. Para **aparência comum**, procure em `css/style.css`, mas confira estilos inline. Para **interação comum**, abra `js/app.js`. Para **Bordado**, confira também o `<style>` e `<script>` próprios. Para **mídias**, encontre o caminho no HTML ou lista e confirme o arquivo em `assets`.

Uma pesquisa global do editor por `search-dropdown`, `Audiosenhor2`, `logo-pet-connectte` ou pelo trecho textual ajuda a encontrar os usos. Em terminal, `rg --files` lista arquivos e `rg "crias_modal_seen" js` localiza a marca da sessão. Agentes deste ambiente usam o prefixo RTK conforme as instruções fornecidas.
