document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const tabBibliographie = document.querySelector('.tab.bibliographie');
    const tabLexique = document.querySelector('.tab.lexique');
    // const mainContainer = document.querySelector('.main-container');

    function toggleSidebar(activeTab, inactiveTab) {
        sidebar.classList.toggle('collapsed');
        // mainContainer.classList.toggle('collapsed');
        
        if (sidebar.classList.contains('collapsed')) {
            tabBibliographie.style.visibility = 'visible';
            tabLexique.style.visibility = 'visible';
        } else {
            activeTab.style.visibility = 'visible';
            inactiveTab.style.visibility = 'hidden';
        }
    }

    tabBibliographie.addEventListener('click', function() {
        toggleSidebar(tabBibliographie, tabLexique);
    });

    tabLexique.addEventListener('click', function() {
        toggleSidebar(tabLexique, tabBibliographie);
    });

    // Initial state
    // tabBibliographie.style.visibility = 'visible';
    // tabLexique.style.visibility = 'visible';
    // sidebar.classList.add('collapsed');
    // mainContainer.classList.add('collapsed');
});

// JavaScript to handle button clicks and load content dynamically
function loadContent(contentId) {
    const rightContainer = document.getElementById('right-container');
    let content = '';

    switch (contentId) {
        case 'content1':
            content = `
                <div class="chat-container">
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> Coucou RickRoll, est ce que c'est toujours ok pour la visite de Trolland ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Oui bien sûr, voici un plan pour te permettre de te repérer dans la visite ! <br>
                        <a href="https://www.youtube.com/watch?v=DLzxrzFCyOs">https://www.youtube.com/watch?v=DLzxrzFCyOs</a>
                        </p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> Ahah merci tu m'as bien eu ! J'aurais dû m'en douter que venant de toi le lien ne serait pas celui d'un plan ! Après c'est pas mal pour te présenter ^^ Pour les personnes qui nous lirons plus tard est-ce que tu pourrais pas te présenter, on va dire de manière plus protocolaire ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Eh oui, Bonjour, c'est Rickroll, je suis un troll citoyen de Trolland, plusieurs personnes m'utilisant aux travers de liens pour créer de la déception, vous avez déjà pu me rencontrer dans la version la plus promotionnelle de GTA, sinon vers toutes autres directions, je me faufile là avec un clin d'œil que vous souhaitiez voir et je m'invite même dans la bouche de vos politiciens, mais jamais je ne vous laisse tomber. Cela fait 17 ans que je vous réjouis de ma visite surprise. C'est un honneur pour moi de présenter Trolland.</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> T'as dit que tu étais un troll, qu'est ce que c'est ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Qu'est ce que c'est d'être un troll ? Bah pour commencer on pourrait dire que nous sommes vieux, extrêmement vieux, autant que la mythologie scandinave. Nous nous terrons dans les endroits sombres, nous sommes opposés aux humains, nous sommes opposés aux dieux, nous sommes inamovibles, violents et agressifs. Nous incarnons les forces de la nature. Nous appartenons à un folklore, nous nous isolons de la nature. Nous appartenons à un folklore, nous sommes solitaires, laids, nous symbolisons « les forces du chaos », les humains disent de nous que nous sommes affreux, et aimons énormément la terre et du poisson, nos mouvements entrebâillés cherchent à produire des ricochets de déception. Si les gens réagissent, alors nous gagnons, si les gens réagissent pas, les pêches, nous sommes des prédateurs. Nous sommes enracinés dans le temps. En tant qu'être on ne peut pas nous décrire, nous nous confondons avec notre environnement. Notre mouvement est systématique, mais nos moyens varient. Avant nous la farce.</p>
                        <p>Nous habitons les environnements hostiles, nous naissons de ceux-ci, en nous utilisons les spécificités, nous sommes à leur image. Aussi nous existons dans notre environnement depuis son existence. Aujourd'hui, nous ne sommes plus isolés dans les forêts, des mers, ou des montagnes. Nous sommes à tout endroit, nous voyageons instantanément, le virtuel est notre maison, nous combattons la bienséance, nous nous vengeons et grandissons de vos calembours, et disparitions de plus être invoqués. Nos formes varient, s'étant un dans nous accordant la forme humaine, aujourd'hui nous sommes à la fois des personnes, des individus mais aussi des lots de données partagées aves ou sans consentement. Nous nous attaquons aux humains.</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> Oulala faut que je me méfie, après vu que tu m'as déjà trollé, on va dire que je suis à l'abri aha ^^ Mais si je comprends bien Trolland c'est votre tanière ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Exactement, tous les Trolls d'internet sont à Trolland</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> Même s'ils ne sont plus d'actualité ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Entre nous rien ne disparait vraiment sur internet, mais oui même si le troll n'est plus sollicité par les liens, il reste à Trolland où ses traces demeurent</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> C'est un peu entre un musée et une maison de retraite n'est ce pas ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Je suppose même si tout doux y en à qui sont encore en activité !</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> Pardon je te charrie, revenons à cette visite ! Avant de commencer le parcours tu peux nous faire un débrief sur Trolland ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Trolland c'est une ville constituée de différents quartiers qui cessent d'évoluer, ici les quartiers sont hyper interconnectés. Je situerais au début des années 2000 l'émergence de ses quartiers Nord, ça est l'entrée de mémoire de nous dérivent des quartiers Nord de nos trois axes principaux qui quittent d'augmenter. Un quartier historique on a myspace en tant que base forte des trolls ici c'est myspace que la base forte des digérants numériques de Trolland s'est érigée vers 2004/2005 avec Facebook, 4chan, Reddit, il y a eu forum 18-25 de jeuxvideo.com et Twitter. Depuis, nous nous interconnectons toujours avec d'autres sites mais nous essayons de nous stabiliser dans les quartiers en fonction de ce qu'on recherche, qui est leur domaine des ambiances spécifiques.</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> Mais toi t'y habites comment ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Je suis cosmopolite, j'habite quasiment tous les quartiers, même les plus déserts. Il y a une organisation, mon accomplissement ne nécessite rien de plus que décevoir les gens alors je ne fais pas beaucoup, je voyage un peu partout et souvent alors je ne fais pas de vieux os dans un quartier en particulier.</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> Le bon côté c'est que t'as une vue d'ensemble, à ce propos Trolland est réputé pour être une ville violente, t'en penses quoi ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Et bien, ça peut être mouvementé effectivement, les Troll (habitants de Trolland) ont pour coutumes de chercher la friction chez les personnes extérieurs à la ville, je ne partage pas la violence qui peut survenir personnellement, la déception que je produit est bien suffisante à mon accomplissement, parfois c'est un peu d'intervenir mais vous voyez, les sentiments humains sont aisés à prédire. Après il existe d'autres manières d'être à Trolland, certains cherchent à mentir en question ou en réponse, d'autres à disséminer des rumeurs dans le vaste du monde. Mais ils en verront à la fin.</p>
                    </div>
                    <div class="chat-message user-human">
                        <p><strong>@HumanBeing :</strong> OK OK, on commence par où ?</p>
                    </div>
                    <div class="chat-message user-rickroll">
                        <p><strong>@RickRoll :</strong> Par la périphérie isolée sur le plan c’est au repère a. Ce sont les quartiers oubliés de Trolland, les historiques Myspace, Msn et Dalymotion situés maintenant en bordure, plus personne n’y va et donc plus aucun troll n’y naît</p>
                    </div>
                </div>`;
            break;
        case 'content2':
            content = '<div class="chat-container">Content for Part 2</div>';
            break;
        case 'content3':
            content = '<div class="chat-container">Content for Part 3</div>';
            break;
        case 'content4':
            content = '<div class="chat-container">Content for Part 4</div>';
            break;
        case 'content5':
            content = '<div class="chat-container">Content for Part 5</div>';
            break;
        case 'content6':
            content = '<div class="chat-container">Content for Part 6</div>';
            break;
        case 'content7':
            content = '<div class="chat-container">Content for Part 7</div>';
            break;
        case 'content8':
            content = '<div class="chat-container">Content for Part 8</div>';
            break;
        case 'content9':
            content = '<div class="chat-container">Content for Part 9</div>';
            break;
        default:
            content = '<div class="chat-container">No content available</div>';
    }

    rightContainer.innerHTML = content;
}