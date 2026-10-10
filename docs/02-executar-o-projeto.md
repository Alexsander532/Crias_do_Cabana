# 02 — Executar o projeto no seu computador

[Índice](README.md) · [Anterior](01-visao-geral.md) · [Próximo](03-fundamentos.md)

## Ferramentas necessárias

Para ler e alterar os arquivos, use um editor de código ou texto que preserve UTF-8 e um navegador. Para servir o projeto localmente, uma opção simples é Python 3, que oferece um servidor HTTP na biblioteca padrão.

Git é útil se a equipe trabalhar com um repositório, mas esta pasta examinada não contém `.git`. Não foi encontrado README anterior com URL de repositório ou comandos oficiais de publicação. Confirme a origem e o fluxo de trabalho com a equipe em vez de inventar um endereço de clone.

Não há bibliotecas JavaScript a instalar com npm. Os scripts Python presentes não devem ser executados para “iniciar o site”.

## Abrir a pasta correta

A raiz é a pasta que contém `index.html`, `css`, `js` e `assets`. No computador de referência:

```powershell
cd "C:\Users\Alexsander\Desktop\CEFET\PET Conectte\Crias_do_Cabana-main"
```

O caminho pode ser diferente no seu computador. As aspas são importantes porque há espaços no nome da pasta. Abra essa pasta inteira no editor; assim, pesquisa e referências relativas ficam mais fáceis de acompanhar.

## Iniciar um servidor local

Confira se Python está disponível:

```powershell
python --version
```

No Windows, o lançador também pode estar disponível como `py --version`. Na raiz, execute uma das alternativas:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Ou, se o comando disponível for `py`:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Use apenas uma delas. Abra [http://127.0.0.1:8000](http://127.0.0.1:8000). O servidor procura `index.html` para a página inicial. Para uma coleção, abra [Bordado e Memória local](http://127.0.0.1:8000/bordado-e-memoria.html).

`-m http.server` executa o servidor da biblioteca padrão, `8000` é a porta e `--bind 127.0.0.1` limita este servidor de desenvolvimento ao próprio computador. Ele não é a infraestrutura de produção do museu.

Deixe o terminal aberto. Para parar, pressione `Ctrl+C`. Se a porta estiver ocupada, use outra, por exemplo `8001`, e altere também a URL no navegador.

## Por que usar HTTP em vez de duplo clique?

Abrir `index.html` diretamente pode mostrar boa parte do site usando `file://`. Um servidor local reproduz melhor a resolução de endereços, pedidos de imagens/áudios e contexto das APIs do navegador. Também evita algumas diferenças de armazenamento de sessão e de segurança que podem ocorrer em páginas abertas como arquivos.

Não há recarregamento automático implementado no projeto. Depois de salvar, atualize o navegador. Uma ferramenta de editor que oferece servidor e atualização automática pode ser usada pela equipe, mas não é exigida pelo código.

## Entender o terminal

O terminal recebe comandos para executar ferramentas. Arquivos HTML são editados no editor, não digitados no terminal. Quando o servidor está rodando, linhas como `GET /assets/... 200` indicam pedidos atendidos. `404` indica que um caminho solicitado não foi encontrado.

O servidor HTTP simples pode exibir uma listagem de arquivos para pastas sem página inicial. Isso é adequado apenas como ferramenta local de desenvolvimento, não como política de publicação de acervo.

## Primeira edição guiada

1. Inicie o servidor na raiz.
2. Abra `index.html` no editor.
3. Localize um parágrafo dentro de `<main>`.
4. Faça uma pequena alteração de treino, preservando as tags.
5. Salve em UTF-8 e atualize o navegador.
6. Reduza a largura da janela e confira a leitura.
7. Desfaça o treino se não for uma alteração aprovada.

## Cache e versões dos arquivos

As páginas atuais carregam `js/app.js?v=2`. O parâmetro é uma indicação de versão na URL; não altera o conteúdo do arquivo no disco nem faz compilação. Ele pode ajudar a pedir outra versão após mudanças, conforme a política de cache da hospedagem.

O CSS é referenciado como `css/style.css`, sem esse parâmetro nas páginas examinadas. Se uma mudança não aparecer, primeiro confira se editou a cópia e a página corretas, depois tente recarregamento completo e a opção de desativar cache nas ferramentas do navegador.

Se atualizar uma versão de URL no futuro, confira os nove HTMLs. Alterar apenas um pode fazer páginas carregarem URLs diferentes do mesmo script.

## Internet e funcionamento local

Fotos e áudios do acervo são locais. Google Fonts, Google Forms, YouTube e a página externa do livro dependem de rede. Uma falha nesses serviços não significa necessariamente que o servidor local está com problema.

O formulário externo não deve ser enviado com respostas fictícias só para testar o link. Abra e confira seu destino; para testar envio, use um formulário de teste ou um procedimento autorizado pelos responsáveis.

## Instruções do agente neste ambiente

As instruções fornecidas ao agente em `C:\Users\Alexsander\.codex\RTK.md` pedem comandos de shell com prefixo `rtk`. RTK reduz saídas de comandos para o agente e não é dependência do site. Os novos integrantes podem executar os comandos comuns deste manual sem instalar RTK.
