# Museu Virtual Crias do Cabana

Site colaborativo de histórias, memórias e saberes do Aglomerado Cabana do Pai Tomás, feito com HTML, CSS e JavaScript. Esta pasta contém páginas atuais, mídias locais, referências da versão anterior e utilitários de manutenção.

## Documentação para os próximos integrantes do PET

Comece pelo [manual completo em português](docs/README.md). Ele reúne 14 capítulos com fundamentos para iniciantes, explicação de todas as páginas e interações, acervo, guias de edição, problemas conhecidos, publicação e inventário do código.

## Executar localmente

Abra um terminal nesta pasta e, com Python 3 disponível, execute:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Abra [http://127.0.0.1:8000](http://127.0.0.1:8000). Salve os arquivos e atualize o navegador para ver alterações. Use `Ctrl+C` para encerrar. Não há instalação npm ou build necessário. Os scripts Python de manutenção não são usados para iniciar o site.

## Pontos importantes

A busca não pesquisa conteúdo; há links provisórios de menu e um conflito na implementação de acordeões. Contribuições são encaminhadas para Google Forms externo e não publicadas automaticamente. Os scripts de reescrita precisam de revisão antes do uso. Consulte o manual para entender cada limite e o processo de alteração.

## Repositório, domínio e hospedagem

- Repositório oficial: [Alexsander532/Crias_do_Cabana](https://github.com/Alexsander532/Crias_do_Cabana).
- Domínio confirmado pela equipe: [criasdocabana.art.br](https://criasdocabana.art.br/).
- O relatório de publicação de agosto de 2026 registra hospedagem Locaweb, plano Hospedagem II Linux, arquivos em `public_html` e WordPress anterior preservado. O site estático foi priorizado com `DirectoryIndex index.html index.php` no `.htaccess`.

Para obter acesso à Locaweb e confirmar a configuração atual, procure Jeferson. O painel de hospedagem, a conta FTP e o WordPress são acessos distintos. Não coloque senhas no código ou no manual. O envio ao GitHub não atualiza automaticamente a hospedagem no fluxo manual registrado; consulte o [capítulo de publicação](docs/13-publicacao-e-continuidade.md).

Esta documentação descreve os arquivos locais examinados em 7 de outubro de 2026, com atualização das referências operacionais em 9 de outubro. Nessa última consulta, o domínio apresentou falha de validação do certificado HTTPS e resposta HTTP 403, que precisam de investigação no painel; isso não determina a causa do problema nem prova indisponibilidade permanente. A cópia local com sufixo `-main` veio sem histórico Git; para colaborar, clone o repositório oficial.
