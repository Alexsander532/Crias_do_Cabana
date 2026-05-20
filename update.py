import sys

with open('guarda-de-congo-sao-benedito.html', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('    <main id="main-content" class="main-layout">')
end_idx = text.find('    </main>') + len('    </main>')

if start_idx != -1 and end_idx != -1:
    new_main = """    <main id="main-content" class="main-layout">
        <!-- New Content here -->
        <section class="guarda-title-section" style="text-align: center; padding: 40px 20px;">
            <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0; color: #000;">GUARDA DE CONGO SÃO BENEDITO E</h1>
            <h1 style="font-size: 2.5rem; font-weight: 700; margin: 0; color: #000;">NOSSA SENHORA DO ROSÁRIO</h1>
        </section>
        
        <section class="guarda-hero-image" style="background-color: #4C9F63; padding: 0;">
            <div style="max-width: 1200px; margin: 0 auto; position: relative;">
                <img src="assets/colecoes/Album_3_foto_0015.webp" alt="Guarda Foto" style="width: 100%; display: block; border: 15px solid white;">
            </div>
        </section>

        <section class="guarda-quote" style="background-color: #4C9F63; padding: 60px 40px; text-align: center; color: white; position: relative; overflow: hidden;">
            <div style="max-width: 900px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem; position: relative; z-index: 2;">
                <p>“Na época que eu vim pra cá, eu não me lembro de ter Congado aqui, não me lembro. Então, quem fundou o Congado aqui, a primeira vez, foi o Zé Francisco. Como que foi a fundação desse Congado? Ele fazia muita festa junina, sabe? Era festa mesmo, junina, pra gente participar. “Nó”, era bom demais. Entendeu? A gente fantasiava de não sei mais o quê (risos).” – Dona Odete, capitã-mor e fundadora da Guarda.</p>
                <div style="margin-top: 40px;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8c6e4a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;">
                        <polyline points="7 13 12 18 17 13"></polyline>
                        <polyline points="7 6 12 11 17 6"></polyline>
                    </svg>
                </div>
            </div>
            <!-- Decorative elements can be added in CSS, here just a placeholder. The screenshot shows yellow flowers. -->
        </section>

        <section class="guarda-history" style="background-color: #FAF8F2; padding: 60px 20px;">
            <div style="max-width: 1200px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 40px;">
                    <h2 style="color: #dba339; font-size: 2.2rem; margin-bottom: 10px;">HISTÓRIA DA GUARDA</h2>
                    <h3 style="color: #000; font-size: 1.2rem; font-weight: 600; margin-bottom: 15px;">PELA PALAVRAS DA CAPITÃ-MOR E FUNDADORA DONA ODETE</h3>
                    <p style="color: #3C9E74; font-style: italic; font-size: 1.05rem;">Trechos retirados do livro 30 anos da Guarda de Congo São Benedito e Nossa Senhora do Rosário: Artes de Rezar na Cabana do Pai Tomás</p>
                </div>
                
                <div style="line-height: 1.8; color: #111; font-size: 1.1rem; margin-bottom: 40px;">
                    <p>“Na época que eu vim pra cá, eu não me lembro de ter Congado aqui, não me lembro. Então, quem fundou o Congado aqui, a primeira vez, foi o Zé Francisco. Como que foi a fundação desse Congado? Ele fazia muita festa junina, sabe? Era festa mesmo, junina, pra gente participar. 'Nó', era bom demais. Entendeu? A gente fantasiava de não sei mais o quê (risos).”</p>
                </div>
                
                <div style="margin-bottom: 40px;">
                    <img src="assets/colecoes/Album_1_foto_0026.webp" alt="Guarda História" style="width: 100%; display: block; border: 15px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                </div>

                <div style="line-height: 1.8; color: #111; font-size: 1.1rem; margin-bottom: 60px;">
                    <p>“Nossa, mas era bom demais. Nós dançava quadrilha, tinha, sabe? Quadrilha, tinha muita coisa. Tinha um baile na casa dele toda segunda-feira. Eu, quando trabalhava, aí, então, o povo já sabia, depois do trabalho ia pro Seu Zé, porque tinha baile. E aí um dia na festa junina, terminou, nós tava limpando o terreiro, né? Aí nós falou assim ‘engraçado, né, num tem nenhum Congado aqui, que tal, vamo tentar fazer um Congado?’”</p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; margin-bottom: 60px;">
                    <div>
                        <img src="assets/colecoes/Album_2_foto_0018.jpg" alt="Guarda Rua" style="width: 100%; display: block; border: 10px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    </div>
                    <div style="line-height: 1.8; color: #111; font-size: 1.1rem;">
                        <p style="margin-bottom: 20px;">“Então, é... e foi muito bom, nós viajou muito, viajava demais, sabe? E, então, eu dancei lá 16 anos.”</p>
                        <p>“E hoje eu tô deixando esse recado: a partir de hoje eu não faço parte mais da Guarda. Não danço em qualquer outro Congado, se eu não entrar em outras, eu faço a minha. Mas nunca deixo o meu rosário, meu rosário eu vou levar até o dia da minha morte. Esse eu não vou lamentar nunca. Porque eu não coloquei uma pessoa pra aparecer, eu coloquei pra somar mais um.”</p>
                    </div>
                </div>

                <div style="line-height: 1.8; color: #111; font-size: 1.1rem; margin-bottom: 40px;">
                    <p style="margin-bottom: 20px;">“É aí que eu fui resolver formar minha Guarda. O meu pai estava adoentado, numa situação mais crítica e estava ficando em casa. E ele pediu a mim e Lalado que, se ele melhorasse, tudo tranquilo, a gente ia festejar três dias na festa de Bom Jesus. Agora, se visse que não dava, nas palavras dele, que ele iria festejar lá no céu e que eu ia festejar aqui na Terra. Que se ele fosse, que queria ir pra festejar no dia dele, e aceitei o pedido dele. Porque ele faleceu no dia 10 de outubro, bem no dia da Festa do Rosário. E eu continuei com o meu legado, mas formei a guarda depois de três anos após a morte do meu pai e assim continuei. Os irmãos, eu tenho 14 irmãos, mas só três famílias é que ainda seguem esse rosário.”</p>
                    <p>“Até hoje, em todos os lugar que eu apresento eu falo 'A minha Guarda é filha da Guarda do Seu José' porque foi de lá que eu comecei. Porque na época do meu pai a gente acompanhava, mas não fazia parte, assim, né? Então eu nunca neguei. A minha Guarda é filha da Guarda dele.”</p>
                </div>
                
                <div style="text-align: center;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8c6e4a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;">
                        <polyline points="7 13 12 18 17 13"></polyline>
                        <polyline points="7 6 12 11 17 6"></polyline>
                    </svg>
                </div>
            </div>
        </section>

        <section class="guarda-doco" style="background-color: #3C9E74; padding: 60px 20px; text-align: center; color: white;">
            <div style="max-width: 1200px; margin: 0 auto;">
                <h2 style="font-size: 2rem; margin-bottom: 20px; font-weight: 600;">DOCUMENTÁRIO: 30 ANOS DA GUARDA DE CONGO SÃO BENEDITO E NOSSA SENHORA DO ROSÁRIO</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 40px; max-width: 1000px; margin-left: auto; margin-right: auto;">No documentário, que aborda a história dos 30 anos da Guarda de Congo São Benedito Nossa Senhora do Rosário da Cabana do Pai Tomás, Dona Odete, capitã-mor da Guarda, conta sobre o surgimento da Guarda, suas imbricações na formação do território do Cabana do Pai Tomás e um pouquinho de sua vida, em uma conversa cheia de sabedoria e emoções.</p>
                
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 1000px; margin: 0 auto; border: 5px solid white;">
                    <iframe src="https://www.youtube.com/embed/rCpZjY09DIY" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>

        <section class="guarda-ebook" style="background-color: #FAF8F2; padding: 60px 20px;">
            <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
                <div>
                    <img src="assets/colecoes/Capa-do-livro.png" alt="Ebook Cover" style="width: 100%; max-width: 400px; display: block; margin: 0 auto; box-shadow: 0 10px 15px rgba(0,0,0,0.1);">
                </div>
                <div style="text-align: center;">
                    <p style="font-size: 1.3rem; color: #111; margin-bottom: 30px; margin-top:30px;">LIVRO “30 ANOS DA GUARDA DE CONGO E SÃO BENEDITO E NOSSA SENHORA DO ROSÁRIO”</p>
                    <a href="#" style="display: inline-block; background-color: #d32f2f; color: white; padding: 15px 30px; font-weight: 600; text-decoration: none; border-radius: 5px; font-size: 1.1rem; letter-spacing: 1px; transition: background-color 0.3s;">CLIQUE PARA BAIXAR</a>
                </div>
            </div>
        </section>
    </main>"""

    new_text = text[:start_idx] + new_main + text[end_idx:]
    with open('guarda-de-congo-sao-benedito.html', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Done")
else:
    print("Error: Could not find main block")

