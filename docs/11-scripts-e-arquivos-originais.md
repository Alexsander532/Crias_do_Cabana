# 11 — Scripts Python e referências originais

[Índice](README.md) · [Anterior](10-guias-de-alteracao.md) · [Próximo](12-qualidade-e-diagnostico.md)

## Esses arquivos não iniciam o site

O navegador não executa `update.py` ou `add_reveal_classes.py`. São utilitários de edição que leem e reescrevem HTML no disco. As páginas atuais já existem e não dependem de rodar esses scripts para serem servidas.

Nesta documentação, eles foram lidos e seus padrões analisados; não foram executados sobre os arquivos do site. Antes de usar um utilitário de reescrita, faça uma cópia de trabalho e revise seus efeitos, pois o programa pode substituir melhorias posteriores.

## `update.py`

### O que ele tenta fazer

1. Abre `guarda-de-congo-sao-benedito.html` em UTF-8.
2. Procura a string exata `<main id="main-content" class="main-layout">` com a indentação presente no script.
3. Procura o primeiro `</main>`.
4. Define um grande texto `new_main` com a página de história, fotos, vídeo e livro.
5. Substitui o intervalo encontrado e grava o HTML no mesmo arquivo.

`text.find` retorna uma posição ou `-1` se não encontra. `text[:start_idx]` preserva o prefixo, `new_main` é o conteúdo substituto e `text[end_idx:]` preserva o final.

O import `sys` existe, mas não é usado. O utilitário não recebe parâmetros nem cria backup. Usa caminhos relativos, então depende de ser executado na raiz correta.

### Por que não executá-lo como manutenção rotineira

Seu modelo guarda conteúdo antigo. Na página atual, o livro aponta para a editora e o vídeo possui parâmetros na URL. No modelo do script, o botão do livro usa `href="#"` e a URL do vídeo é mais simples. Executá-lo reintroduziria esse estado anterior e substituiria qualquer revisão feita em `main` depois.

Não há sincronização com textos de outras páginas, comparação de mudanças, validação de HTML ou conferência de que a versão atual pode ser descartada.

### Problema na verificação do fechamento

O código calcula `end_idx = text.find('    </main>') + len('    </main>')` e depois testa `end_idx != -1`. Se o fechamento não existir, `find` retorna `-1`, mas somar o comprimento faz o resultado deixar de ser `-1`. Portanto, esse teste não detecta corretamente a ausência do fechamento.

Uma revisão futura deveria validar o resultado original da busca e a ordem dos limites antes de realizar qualquer escrita. Também deveria evitar depender de indentação exata para localizar a estrutura.

## `add_reveal_classes.py`

### Intenção

O script percorre oito HTMLs: início, museu, SoFiA, projeto Artes, Aglomerado, contribuição, coleções e Guarda. Bordado não está nessa lista. Para cada arquivo existente, lê o conteúdo e tenta acrescentar:

- `reveal` a seções.
- `reveal reveal-fade-up` a títulos.
- `hover-zoom` a imagens.
- `reveal reveal-fade-up` a parágrafos.

Depois compara com o texto original e grava se houver alteração. `os.path.exists` decide se um arquivo deve ser pulado. `re.sub` procura padrões e os substitui usando funções `lambda`.

### Erro confirmado de expressão regular

O padrão da etapa de parágrafos contém um lookbehind de comprimento variável: `(?<!reveal[^\"]*?)`. Ao compilar esse padrão com o módulo `re`, ocorre `look-behind requires fixed-width pattern`.

Isso foi confirmado compilando o padrão isoladamente, sem executar a reescrita do site. Na sequência atual do primeiro arquivo existente, o erro acontece antes do trecho de gravação daquele arquivo.

### Outros problemas visíveis no código

Nas etapas de seções e títulos, `.replace('"', ' reveal"', 1)` atua na primeira aspa do trecho casado, que é a abertura de `class`. Isso coloca o nome da classe na posição errada, entre `=` e a aspa, em vez de acrescentar dentro do valor. O HTML resultante pode ficar malformado.

O tratamento de imagens pode criar um segundo atributo `class` onde já existe outro. O tratamento de parágrafos também não combina de forma segura todas as classes existentes. A classe `hover-zoom` seria colocada diretamente no `img`, mas o CSS espera uma imagem descendente de uma caixa `.hover-zoom` para o zoom.

Portanto, corrigir somente o lookbehind não torna o utilitário pronto para uso. É preciso revisar posição dos atributos, preservação de classes, repetição da execução e compatibilidade com a estrutura CSS.

### Como revisar com segurança no futuro

Use cópias de arquivos e casos representativos: elemento sem classes, com uma classe, com várias, com atributos antes/depois, e já com `reveal`. Verifique a saída e repita a transformação para confirmar que não duplica atributos ou classes.

Para editar HTML estruturalmente, considere um parser em uma evolução deliberada. Não adicione dependências ou rode transformações no projeto principal sem conhecer seus efeitos. O estado atual documentado pode ser mantido por edição manual.

## Arquivos `original.html` e `*-original.html`

Há quatro arquivos preservados:

| Arquivo | Referência correspondente |
| --- | --- |
| `original.html` | Página inicial anterior |
| `um-museu-colaborativo-original.html` | Museu Colaborativo anterior |
| `o-programa-sofia-original.html` | Programa SoFiA anterior |
| `o-projeto-artes-de-curar-original.html` | Projeto Artes anterior |

Eles contêm referências a recursos de `criasdocabana.art.br`, marcação WordPress e classes de temas/plugins, incluindo Elementor e Astra. Não representam instalação local desses sistemas.

Abrir uma referência pode carregar recursos remotos ou falhar se esses recursos tiverem mudado. Não use o fato de ela abrir como prova de que a versão atual está completa ou de que o servidor WordPress está sob controle desta pasta.

## `post-652.css`

Contém seletores como `.elementor-652 .elementor-element...`, ligados à estrutura antiga de Elementor. As nove páginas atuais referenciam `css/style.css`, não esse arquivo. Ele serve como material preservado para comparação, sem papel na folha compartilhada ativa.

## `assets/backup-originais`

Preserva 17 versões de imagens e logos. Algumas fotografias que o site atual usa como JPG têm PNG nessa pasta. Não há rotina que restaure, converta ou copie esses arquivos automaticamente.

`assets/colecoes/para o site` também guarda um acervo de 42 JPG. A galeria de Bordado usa dez WebP de outra pasta. Não há relação computada que transforme todo o acervo em uma galeria.

## Separar referência, fonte e publicação

Decida com a equipe quais arquivos são fontes de edição, quais são referências históricas e quais devem ir à hospedagem. Uma pasta servida inteira pode tornar referências e backups públicos mesmo sem links nos menus.

O museu não lê os arquivos antigos para atualizar os novos. Se uma correção editorial for feita no HTML atual, o utilitário ou referência histórica não deve ser usado depois como substituição automática sem revisar a mudança.
