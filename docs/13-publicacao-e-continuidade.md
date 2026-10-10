# 13 — Publicação, trabalho em equipe e continuidade

[Índice](README.md) · [Anterior](12-qualidade-e-diagnostico.md) · [Próximo](14-inventario-do-projeto.md)

## O que é necessário para publicar?

Esta implementação é estática. Uma hospedagem compatível precisa entregar HTML, CSS, JavaScript e mídias preservando a organização dos caminhos. Não existe build da aplicação ou dependência de um servidor Node/Python executando as funções do site em produção.

O servidor Python do capítulo 02 serve apenas para desenvolvimento local. Os scripts `update.py` e `add_reveal_classes.py` não são passos de deploy.

## O que não está definido nesta cópia

Não foi encontrada pasta `.git`, URL de repositório configurada, arquivo de workflow, configuração específica de hospedagem ou manual anterior de publicação. O sufixo `-main` da pasta não prova que ela esteja ligada a uma branch Git ou a um deploy automático.

As referências antigas apontam para `criasdocabana.art.br`, mas isso não demonstra onde esta cópia é publicada ou quem controla o domínio. Antes de publicar, confirme com a equipe conta, destino, permissões e processo existente.

### Atualização operacional de 9 de outubro de 2026

O repositório oficial foi confirmado pela equipe: [Alexsander532/Crias_do_Cabana](https://github.com/Alexsander532/Crias_do_Cabana). O domínio também foi confirmado: [criasdocabana.art.br](https://criasdocabana.art.br/). As observações acima registram o que era possível demonstrar apenas pela cópia local, que não contém `.git`.

O relatório de deploy de agosto de 2026, enviado por Alexsander a Jeferson em 14/08/2026, registra Locaweb, plano **Hospedagem II Linux**, envio dos HTMLs e pastas `css`, `js` e `assets` para `public_html`, por FileZilla. A instalação WordPress anterior foi preservada, com prioridade para a página estática através de `DirectoryIndex index.html index.php` no `.htaccess`. Esse é um registro histórico do procedimento, não uma inspeção autenticada do servidor atual.

Obtenha com **Jeferson** o acesso à Central do Cliente e os dados FTP atualizados, confirme a pasta efetiva do domínio, faça backup dos arquivos e do `.htaccess` e preserve o WordPress. Não substitua todo o `.htaccess` apenas pela diretiva de prioridade: outras regras podem ser necessárias. Uma reversão para WordPress depende também do estado dos arquivos, banco de dados e regras da instalação antiga.

O fluxo registrado é **manual**: atualizar a `main` no GitHub não transfere arquivos à Locaweb por si só. Envie somente o pacote de execução revisado e confira o domínio após a transferência. O [tutorial oficial da Locaweb para FileZilla](https://www.locaweb.com.br/ajuda/wiki/como-usar-o-filezilla-hospedagem-de-sites/) explica onde consultar os dados de conexão no painel.

Na consulta pública de 09/10/2026, HTTPS falhou na validação do certificado e HTTP retornou 403 com página da Locaweb; DNS resolveu para o IP registrado no relatório. Esses sinais precisam de confirmação em outra rede e diagnóstico no painel com Jeferson. Não permitem concluir a causa nem confirmar que o estado de agosto foi mantido. Confira contrato/domínio, vínculo da pasta, arquivos de entrada, regras/permissões e SSL antes de qualquer nova publicação.

## Arquivos para um pacote estático

As páginas atuais precisam dos nove HTMLs, `css/style.css`, `js/app.js` e dos arquivos de mídia referenciados diretamente ou pelas listas dinâmicas. Não copie apenas `index.html`: os links e recursos dependem da estrutura ao redor.

```text
raiz publicada/
├── index.html
├── demais páginas atuais.html
├── css/style.css
├── js/app.js
└── assets/...
```

Use o desenho como mapa; `demais páginas atuais.html` é uma descrição, não nome de arquivo real.

Arquivos de referência, backups, scripts e manual não são necessários para renderizar as páginas. Decida explicitamente se devem ficar fora do pacote público. Não apague fontes e referências da cópia de trabalho para preparar uma publicação: mantenha essa seleção como processo separado e reproduzível.

## Antes de enviar à hospedagem

- Confirme que `index.html` está na raiz esperada pelo serviço.
- Confira links relativos, maiúsculas e nomes com espaços.
- Garanta que o servidor entregue corretamente tipos de imagens, CSS, JS e áudio.
- Revise quais arquivos do acervo podem ser públicos.
- Confira disponibilidade/autorização dos destinos externos.
- Execute o roteiro de telas e interações do capítulo 12.
- Mantenha uma versão recuperável da publicação anterior.

Uma instalação publicada em subpasta precisa de atenção extra aos caminhos. Os HTMLs atuais usam referências relativas que funcionam juntos na raiz do projeto; introduzir URLs iniciadas com `/` pode apontar para a raiz do domínio em vez da subpasta.

## Depois de publicar

Abra a URL real e confira as páginas alteradas, imagens, áudios e script comum. Compare pedidos na aba Rede para saber se a hospedagem está entregando a versão nova. Verifique em janela privada ou com recarregamento completo quando houver cache.

O parâmetro `?v=2` no script não é uma versão Git. Se mudar essa indicação, atualize todas as páginas e documente o motivo. Uma política de cache depende da hospedagem e não está definida pelo HTML sozinho.

Se ocorrer falha, recupere a versão anterior pelo procedimento do serviço e revise a diferença de arquivos. Não execute um utilitário antigo para “voltar a funcionar” sem saber o conteúdo que ele substituirá.

## Git: quando a equipe adotar um repositório

Git guarda histórico; commit registra uma mudança, branch separa uma linha de trabalho, remoto compartilha e PR permite revisão. Esses conceitos podem ser usados para organizar o projeto, mas não há repositório Git inicializado nesta pasta examinada.

Se já existir um repositório oficial, obtenha sua cópia pelo endereço confirmado e leve as mudanças pelo fluxo da equipe. Não use o comando de clone do outro site: é outro projeto.

Em uma cópia que já seja repositório, um fluxo de exemplo é:

```powershell
git status
git switch -c codex/atualiza-colecao
```

Depois de editar e verificar:

```powershell
git diff
git add colecoes-artes.html
git diff --staged
git commit -m "Atualiza apresentação da coleção"
git push -u origin codex/atualiza-colecao
```

Esse fluxo pressupõe Git inicializado, remoto correto e autorização de acesso. O nome da branch segue o prefixo padrão do ambiente; a equipe pode ter outro acordo. Não execute os comandos como se o remoto já estivesse configurado nesta pasta.

Não use push forçado ou `reset --hard` como rotina. Se houver alterações de outra pessoa, preserve-as e resolva conflitos pelo conteúdo final desejado.

## Revisão de conteúdo comunitário

Uma contribuição recebida precisa de seleção, confirmação de autoria, consentimento, transcrição quando necessário e aprovação de publicação. Documente quem realiza cada etapa. O fato de uma gravação estar na pasta não indica que pode ser publicada ou atribuída a determinada pessoa.

Ao revisar depoimentos, preserve a intenção e combine critérios editoriais com a equipe. Não use uma “correção de código” para reescrever falas ou eliminar contexto de memória comunitária sem revisão.

## O que registrar para a próxima turma

| Informação | Lugar adequado |
| --- | --- |
| Estrutura, execução e alterações | Este manual |
| URL e repositório oficial | README e registro da equipe, depois de confirmar |
| Conta de hospedagem e domínio | Registro institucional de responsáveis |
| Quem administra Google Forms e respostas | Processo de colaboração da equipe |
| Origem/autorização de fotos, áudios e depoimentos | Registro de acervo institucional |
| Procedimento de publicação e recuperação | Manual operacional do serviço usado |
| Decisões sobre menus/coleções | Tarefas, revisão e atualização deste manual |
| Credenciais e recuperação de acesso | Gerenciamento institucional de segredos, fora do código |

Não foi encontrado arquivo de licença nesta pasta. Defina as condições de uso do código e do acervo com os responsáveis. Direitos de fotografias, depoimentos, áudios e logos não devem ser presumidos a partir do acesso aos arquivos.

## Pendências para planejamento

Revisar busca, links provisórios, página do Aglomerado e acordeões; melhorar foco/teclado e autoplay; decidir persistência de acessibilidade; revisar scripts Python; documentar repositório/hospedagem e política de acervo público. Essas pendências estão registradas, sem implementação automática nesta entrega.

## Exercício de passagem de conhecimento

Peça ao novo integrante que abra o projeto, explique onde está um texto, troque uma mídia em cópia de teste, identifique a relação HTML/CSS/JS e descreva como uma história recebida no Forms chega à publicação.

Depois confira se ele sabe por que a busca não retorna resultados, por que a galeria muda ao recarregar, por que um menu precisa ser alterado em vários HTMLs e por que os scripts Python não são etapas de inicialização. Essas respostas mostram entendimento dos pontos que mais afetam a manutenção atual.
