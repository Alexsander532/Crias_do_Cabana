# 12 — Qualidade, problemas conhecidos e diagnóstico

[Índice](README.md) · [Anterior](11-scripts-e-arquivos-originais.md) · [Próximo](13-publicacao-e-continuidade.md)

## O que significa verificar este site?

Há três frentes: confirmar que os arquivos têm estrutura e caminhos coerentes; abrir as telas e testar comportamento; e revisar conteúdo/autorizações com a equipe. Um endereço de imagem válido não comprova que a foto corresponde à pessoa citada. Um JavaScript sem erro de sintaxe não comprova acessibilidade ou funcionamento de um formulário externo.

Não existe `package.json`, comando de build, lint configurado ou suíte automatizada própria. Os comandos npm do projeto NEA Mutiró não se aplicam a esta pasta.

## Problemas encontrados na leitura do código

| Ponto | Evidência | Consequência/ação de revisão |
| --- | --- | --- |
| Busca sem resultados | `initSearch` só abre/fecha; formulário GET aponta para `#` | Implementar pesquisa ou esclarecer o controle |
| Menus provisórios | Aglomerado e Repositório usam `href="#"` | Definir conteúdo e destinos reais |
| Página Aglomerado duplicada | Seu `main` é idêntico ao do projeto Artes | Elaborar conteúdo específico antes de vinculá-la como apresentação do território |
| Logos com destinos diferentes | Alguns cabeçalhos usam `#`, outros `index.html` | Padronizar retorno ao início |
| Acordeões com estratégias conflitantes | JS remove `onclick`, mas não retira `display:none` inline | Escolher uma implementação e testar abertura/altura |
| Preferências de acessibilidade sem persistência | Estado em variável/classes da página | Decidir se devem acompanhar a navegação |
| Reset remove todas as classes do corpo | `body.className = ''` | Evitar apagar futuros estados estruturais |
| Modal/lightbox sem gestão completa de foco | Não há captura/retorno de foco | Revisar experiência de teclado/leitor de tela |
| Controles não semânticos | Indicadores `span`, fotos ampliáveis em `div` | Tornar acesso por teclado e estado acessível explícitos |
| Movimento reduzido parcial | CSS reduz animações, mas temporizadores continuam | Revisar autoplay e rolagem em JS |
| Entrada não aplicada | Nenhuma página atual usa `reveal` | Não afirmar que o observador anima todas as seções |
| Script Python inválido | Lookbehind variável em `add_reveal_classes.py` | Corrigir e testar em cópias antes do uso |
| Script Python desatualizado | `update.py` substitui `main` por modelo antigo | Não usá-lo como publicação rotineira |

Os problemas de interação acima derivam de análise do código. Reproduza-os no navegador ao preparar uma correção; esta entrega de documentação não aplica alterações na interface.

## Roteiro manual de revisão

### Todas as páginas

Abra os nove arquivos HTML atuais pelo servidor local. Confira título da aba, descrição quando aplicável, menu, texto, fotografias, logos e rodapés. Abra também cada página por URL direta, pois um arquivo pode existir e ainda não estar ligado corretamente no menu.

Visite um endereço inexistente para conhecer a resposta do servidor/hospedagem. Não há 404 própria configurada no projeto.

### Telas e leitura

Teste larguras como 375, 768, 1024 e 1280 px e zoom do navegador. Procure conteúdo oculto, sobreposição, recortes ruins, grades apertadas, texto truncado e botões difíceis de tocar.

Confira as grades escritas inline em Coleções e Guarda. A presença de media queries gerais não garante que toda composição seja ajustada para celular.

### Navegação e busca

Abra Sobre e Coleções com mouse e teclado no desktop. No mobile, teste hamburger, pais de dropdown e links filhos. Mude a largura com menus abertos e confira os estados.

Teste a logo de cada página e registre destinos provisórios. Abra/feche busca por botão e clique externo, digite uma palavra e confirme que não há resultados implementados. Não relate esse recurso como pesquisa funcional.

### Boas-vindas e ferramentas

Use uma sessão de teste para observar o modal, feche por botão, Escape e fundo, e navegue para outra página. Confira a marca `crias_modal_seen`.

Teste cada opção da barra: tamanho, cinza, alto contraste, contraste negativo, fundo claro, sublinhado, Arial e reset. Veja se imagens continuam legíveis e controles fixos permanecem utilizáveis.

### Carrosséis e galeria

Na home, confira três slides, setas, indicadores e intervalo de quatro segundos. Em Bordado, confira seis slides, setas, indicadores, três segundos e pausa com ponteiro. Não confunda as implementações.

Em Bordado, recarregue e veja oito fotos da lista de dez, com variação possível. Abra/feche ampliação por botão, fundo e Escape e confirme restauração da rolagem. Teste teclado para identificar as limitações atuais dos controles.

### Coleções e mídias

Clique nos quatro acordeões e inspecione `display` e `max-height` no painel de estilos. Confira links para Guarda e Bordado depois de resolver a exibição em uma futura correção.

Reproduza os dois áudios, confira autoria e transcrição e tente o vídeo YouTube. Abra o destino do livro e do Forms sem enviar dados fictícios ao formulário oficial.

## Ferramentas do navegador

**Elements/Elementos** mostra o DOM final, incluindo elementos criados pelo script. **Styles/Estilos** mostra a cascata e regras anuladas. **Console** mostra exceções de JavaScript. **Network/Rede** mostra pedidos, status e arquivos efetivamente carregados. **Application/Armazenamento** permite conferir a sessão do modal.

`404` normalmente indica caminho não encontrado. Uma mídia com resposta `200` ainda pode não ser reproduzida se formato ou conteúdo estiver inválido. Um formulário GET com parâmetro na URL não é prova de que houve pesquisa.

## Diagnóstico rápido

| Sintoma | Causa possível | Onde conferir |
| --- | --- | --- |
| Python não reconhecido | Ferramenta ausente ou comando diferente | `python --version` ou `py --version` |
| Servidor mostra lista de pastas | Foi iniciado fora da raiz | Pasta que contém `index.html` |
| Porta ocupada | Outro servidor está usando 8000 | Trocar porta e URL local |
| Foto 404 | Caminho, extensão ou maiúsculas diferentes | `src`, `background-image`, listas e disco |
| Mudança não aparece | Arquivo/página errados ou cache | URL aberta e pedidos na aba Rede |
| CSS mudou só uma página | Estilo específico/inline ou HTML duplicado | `style`, `<style>` e arquivos atuais |
| Menu não abre | ID/classe renomeado ou exceção anterior | Console e contratos do capítulo 07 |
| Busca envia sem resultados | Não há implementação de pesquisa | `initSearch` e formulário `action="#"` |
| Acordeão continua invisível | `display: none` inline | Estilos de `.accordion-content` |
| Bordado fica sem galeria | Erro no script inline ou ID ausente | Console e `bordado-gallery` |
| Foto não aparece em uma carga da galeria | Seleção aleatória de oito | `galleryPool` e `slice(0, 8)` |
| Áudio não toca | Caminho, codec, tipo ou mídia incorretos | `source`, aba Rede e player |
| Modal reaparece | Não foi fechado ou sessão mudou | `crias_modal_seen` |
| Acessibilidade reinicia ao navegar | Não há persistência de preferências | Estado de `initA11y` |
| Conteúdo errado no Aglomerado | Cópia idêntica do projeto Artes | `main` do arquivo correspondente |
| Script de animações falha | Regex de lookbehind variável | Capítulo 11 |
| Acentos quebrados | Codificação incorreta | UTF-8 no editor e `meta charset` |

## Sintaxe e estrutura

Para quem já possui Node.js como ferramenta auxiliar, `node --check js/app.js` verifica sintaxe sem executar o DOM. Node não deve executar esse arquivo como programa normal: `document` e `window` são APIs do navegador.

Scripts inline precisam ser verificados separadamente; esse comando sobre `app.js` não os cobre. Python pode compilar a sintaxe dos utilitários sem validar regex ou lógica. Não confunda essas verificações.

Um parser HTML simples ajuda a listar referências e IDs, mas pode aceitar marcação que ainda tem problemas de semântica ou fechamento. Uma revisão mais rigorosa pode usar validador HTML em ambiente aprovado pela equipe, além da inspeção visual.

## Recursos acessíveis e limites

Há idioma, link de pular, rótulos de botões, descrição de imagens, `focus-visible`, estados expandidos em alguns controles, transcrições de áudio e redução de movimento CSS. Isso é uma base útil, não uma certificação de acessibilidade.

Revise foco em overlays, controles de galeria, indicadores, estado dos acordeões, títulos hierárquicos e título do iframe. A Guarda possui dois `h1` consecutivos para compor o título visual; uma revisão pode avaliar um único título semanticamente completo.

## Procedimento para corrigir um problema

1. Registre página, largura, navegador e ação exata.
2. Reproduza e veja a primeira exceção relevante no Console.
3. Localize os elementos e estilos envolvidos.
4. Faça a menor alteração que resolva a causa.
5. Repita o cenário e teste páginas que compartilham o recurso.
6. Revise conteúdo e acessibilidade.
7. Registre o resultado e atualize a documentação.

Não substitua uma página atual por um arquivo `*-original.html` para contornar um defeito. Isso pode reintroduzir dependências e conteúdo da versão anterior.

## Escopo de verificação desta documentação

Foram lidos os nove HTMLs de trabalho, JavaScript comum e inline, CSS comum e específico, scripts Python, referências antigas e grupos de mídia. As diferenças de conteúdo, placeholders e erro de regex foram identificados por inspeção e análise local, sem reescrever a aplicação.

A conferência desta entrega verificou 64 links locais da documentação, cobertura dos 18 arquivos de código no inventário, 216 referências locais dos nove HTMLs e 16 caminhos de fotos das listas dinâmicas. Também verificou UTF-8, fechamento de blocos Markdown, espaços finais e sintaxe de quatro blocos JavaScript da aplicação e seis exemplos JavaScript do manual. Essas verificações passaram sem erros, incluindo a correspondência exata de maiúsculas/minúsculas dos caminhos locais conferidos.

A análise de JavaScript foi de sintaxe, sem executar interações de DOM. Não foi realizada inspeção visual no navegador, envio de Google Forms ou validação da produção nesta entrega, que criou apenas documentação. As verificações não comprovam disponibilidade externa ou funcionamento visual em todos os navegadores e não substituem o roteiro manual para uma alteração funcional.
