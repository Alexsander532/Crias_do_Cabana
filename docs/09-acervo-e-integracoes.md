# 09 — Acervo, mídias e integrações externas

[Índice](README.md) · [Anterior](08-bordado-e-memoria.md) · [Próximo](10-guias-de-alteracao.md)

## Inventário de `assets`

Na data de referência, há **97 arquivos de mídia**:

| Grupo | Quantidade | Finalidade |
| --- | --- | --- |
| Arquivos diretamente em `assets` | 17 | Logos, favicon, slides e imagens institucionais |
| `assets/backup-originais` | 17 | Versões preservadas de imagens |
| Arquivos diretamente em `assets/colecoes` | 11 | Fotos gerais, capa do livro e dois áudios |
| `assets/colecoes/bordado-memoria` | 10 | Fotos WebP escolhidas para a coleção |
| `assets/colecoes/para o site` | 42 | Acervo JPG preservado |
| **Total** | **97** | Contagem local atual |

As extensões somadas são 48 JPG, 31 PNG, 16 WebP, um OGG e um MPEG. Não há PDF ou vídeo local no acervo examinado. O documentário é externo, e o livro é acessado por um link externo.

O código não exibe automaticamente todos os arquivos dessas pastas. Fotos usadas no HTML têm caminho explícito; as dinâmicas de Bordado são selecionadas de listas escritas no script.

## Logos e imagens principais

`logo-horizontal.png` aparece no cabeçalho e `logo-vertical.png` na apresentação da home. `favicon.png` é o ícone da aba. As marcas de SoFiA, FAPEMIG, DEDC, Conecta Cabana, COMPET, PET conecTTE e GEPTT compõem o rodapé.

`slider-home.png`, `slider-sobre.png` e `slider-aglomerado.png` são fundos do carrossel inicial. `slider-sobre.png` também aparece no banner do Museu Colaborativo.

As imagens editoriais `um-museu-colaborativo-content.jpg`, `o-projeto-sofia-content.jpg`, `1-o-projeto-artes-de-curar-content.jpg` e `2-o-projeto-artes-de-curar-content.jpg` são escolhidas pelas páginas correspondentes. Há versões PNG preservadas no backup, sem carregamento automático como alternativas.

## Caminhos e publicação de acervo

Como os HTMLs estão na raiz, `src="assets/colecoes/Capa-do-livro.png"` encontra a capa na estrutura local. Em `css/style.css`, uma eventual URL de imagem é relativa à pasta `css`; para chegar ao acervo, normalmente seria necessário `../assets/...`.

Respeite maiúsculas, espaços e extensão. Um arquivo `IMG_4629.JPG` e um caminho `.jpg` podem funcionar de forma diferente entre Windows e hospedagens com sistema de arquivos sensível a caixa. Use nomes simples para novos arquivos, sem renomear acervo existente sem revisar referências.

Se toda a pasta for publicada como raiz estática, backups, arquivos originais e mídias não listadas também poderão ser acessíveis diretamente por URL, conforme a configuração do servidor. Ausência de link não é controle de acesso. Antes de publicar, defina quais arquivos fazem parte do pacote público.

## Escolha e preparação de fotografias

Confirme autoria, autorização, identificação da pessoa/atividade e legenda. Prepare o tamanho de acordo com a área exibida, preservando uma versão original fora do conjunto de publicação quando necessário.

WebP é usado na coleção Bordado. Trocar extensão não converte uma imagem: use uma ferramenta apropriada para gerar o formato. Não há pipeline automático de otimização ou geração de tamanhos nesta cópia.

`loading="lazy"` adia o carregamento de algumas imagens fora da área imediata. Há usos pontuais no HTML e na galeria dinâmica. Fundos de slide não usam esse atributo.

O alt deve explicar a informação relevante, não apenas repetir o nome do arquivo. Imagens que são só decoração podem ter descrição vazia conforme seu papel; fotografias de memória e cards informativos precisam de descrição adequada.

## Áudio local

`Audiosenhora1.mpeg` e `Audiosenhor2.ogg` ficam em `assets/colecoes` e são carregados pelos players nativos de Bordado. `controls` oferece play/pausa e demais controles do navegador. `preload="metadata"` solicita inicialmente informações da mídia, sujeito à decisão do navegador.

MIME declarado e formato real precisam ser compatíveis. Trocar o arquivo exige conferir reprodução, autoria e transcrição. Teste em navegadores usados pela comunidade; codecs e apresentação do player podem variar.

O CSS de `audio::-webkit-media-controls-panel` personaliza alguns controles em motores compatíveis, não todos os navegadores. Não use sua aparência em um navegador como garantia universal.

## YouTube

O documentário da Guarda é incorporado por `https://www.youtube.com/embed/rCpZjY09DIY?rel=0&modestbranding=1`. O endereço está no `iframe` de `guarda-de-congo-sao-benedito.html`.

A caixa usa altura proporcional com `padding-bottom: 56.25%`, equivalente à proporção 16:9, e o iframe ocupa a área com posição absoluta. Há `allowfullscreen` e uma lista de permissões para funcionalidades do player.

Os parâmetros estão no código; o comportamento efetivo deles depende do serviço e não foi confirmado externamente nesta documentação. O iframe atual não tem `title`, um ponto para melhoria de acessibilidade. Não há download local ou reprodução offline desse vídeo.

## Livro

“CLIQUE PARA BAIXAR” aponta para a página de e-book na Finotraco Editora, com abertura em nova aba e `rel="noopener noreferrer"`. Não é um link direto para arquivo PDF dentro de `assets`.

Se a editora mudar o destino ou acesso, o link precisará de atualização. O script `update.py` guarda um modelo antigo que coloca `href="#"` nessa chamada; executá-lo pode perder o destino atual.

## Google Forms e contribuição

`conte-a-sua-historia.html` contém o endereço completo de um formulário Google Forms. O site apenas oferece o link, sem iframe, API, credenciais ou processamento de respostas. O número de WhatsApp aparece como texto.

O responsável pelo formulário deve confirmar conta proprietária, acesso a respostas, recebimento de contribuições e revisão para publicação. Nada no código local explica quem administra essa conta ou qual processo editorial é seguido. Documente isso no registro institucional, sem guardar senhas no repositório.

Não faça afirmações de que uma resposta “será adicionada automaticamente”: não existe esse fluxo implementado.

## Google Fonts

Os HTMLs carregam famílias como Inter, Indie Flower e Open Sans a partir de Google Fonts. `preconnect` prepara conexões a `fonts.googleapis.com` e `fonts.gstatic.com`; a folha externa fornece os arquivos tipográficos.

Há variações de pesos/famílias entre páginas. Os estilos possuem alternativas `sans-serif` ou `cursive`, que o navegador pode usar se a fonte externa falhar. A fonte Roboto citada inline em algumas páginas não é carregada por aquele link específico de fontes.

## Ausência de API própria

Não foram identificados `fetch`, endpoints da aplicação, banco de dados ou arquivos de credenciais no código atual. Links externos e iframe são integrações de navegação/apresentação, não sincronização de dados.

Disponibilidade do formulário, vídeo, editora e demais sites precisa ser verificada pelos responsáveis no momento de publicar. Os endereços registrados neste manual foram lidos do código local, sem promessa de que esses serviços estejam disponíveis ou sob controle da equipe.
