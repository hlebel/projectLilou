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
            content = `<div class="chat-container">
            <div class="chat-message user-human">
                <p><strong>@HumanBeing :</strong> Ah oui ici c’est full ! Ça pétille dans tous les sens ! Mais je connais ces personnes, c’est pas le mec qui mange trop devant sa caméra et qui a dû prendre au moins 100 kg en 8 ans ? Nikocado Avocado c’est ça ! Il fait quoi ici ?</p>
            </div>
            <div class="chat-message user-rickroll">
                <p><strong>@RickRoll :</strong> C’est un citoyen intermédiaire entre vous et nous. Ça peut arriver chez les personnalités publiques d’internet, les influenceurs.</p>
            </div>
            <div class="chat-message user-human">
                <p><strong>@HumanBeing :</strong> Comment ça ?</p>
            </div>
            <div class="chat-message user-rickroll">
                <p><strong>@RickRoll :</strong> Je pense qu’il fait partie de mon monde aussi, déjà parce que c’est une personnalité d’internet mais surtout parce que vous avez pas l’impression qu’il surjoue ? qu’il vous cherche ? Il se fait de l’argent en produisant chez vous le rire, le dégoût, n’est ce pas fascinant ? N’est ce pas normal qu’il vous insulte ? Il est tellement problématique à faire la promotion de l’obésité morbide, être haï sur internet ça paye.</p>
            </div>
            <div class="chat-message user-human">
                <p><strong>@HumanBeing :</strong> Mais il souffre aussi !</p>
            </div>
            <div class="chat-message user-rickroll">
                <p><strong>@RickRoll :</strong> Oui clairement, en réaction Nikocado a son propre troll rempli de personnes flattant son déclin, cherchant sa mort, adorant le voir bouchées après bouchées se détruire. Forcément ça a nourri sa rage, je pense pas qu’il ne soit qu’un troll, mais dans certaines de ses vidéos clairement il cherche des réactions chez d’autres personnalités d’internet ou chez son audimat, pour l’argent ou simplement parce qu’il est accro à la célébrité même si c’est un bad buzz, on peut dire que c’est une «attention whore». Et puis lorsqu’on intègre un troll, on change, à force de dire des propos non pas parce qu’on les pense mais pour faire réagir, on est un peu hors sol, nihiliste. C’est peut être un peu ça qui dirige l’escalade du problématique.</p>
            </div>
            <div class="chat-message user-human">
                <p><strong>@HumanBeing :</strong> Et ça là-bas ? Il me met hyper mal à l’aise, ça me glace le sang …</p>
            </div>
            <div class="chat-message user-rickroll">
                <p><strong>@RickRoll :</strong> C’est la trace du troll de Narcissa Wright, mais pour t’en parler, il faut retrouver le quartier de KiwiFarms (repere d.).</p>
            </div>
        </div>
            `;
            break;
        case 'content2':
            content = `<div  class="chat-container">
            <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est cool ici, j’aime bien !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Le quartier Reddit est hyper actif ici, il abrite de nombreuses institutions proactives aussi dans d’autres quartiers comme Twitter, Facebook / Instagram, Twitch. Ce quartier peut être agressif mais de manière générale il est surtout très organisé, les bâtiments naissent et meurent permettant de s’investir dans une cause de manière explosive mais efficace.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ok, mais pourquoi tu m’amènes sur une place avec en son centre une courbe boursière ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> On est au centre des bâtiments r/GME, r/DDintoGME, r/Wallstreetbets et r/Superstonk, Au centre il s’agit de Gamestop ! Un Troll qui a lutté contre les fond spéculatifs !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ok, c’est intrigant, dis m’en plus !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> La bourse c’est pas ce que je connais le mieux ahah, mais à cette époque l’entreprise Gamestop était dans une mauvaise passe. En effet, spécialisée dans la vente de jeux vidéo, le confinement ainsi que l’apparition de site de téléchargement de jeux vidéo la rendait précaire. Ainsi, les actions baissaient en valeur et toute la bourse pariait sur sa chute : elle était shortée à 140%, ce qui est illégal, par les fonds d’investissements Citron Research, Citadel et Melvin Capital. (cela signifie que les fonds d’investissements ont emprunté pour plus que la valeur de l’entreprise des actions de Gamestop détenu par un tiers. Ils cherchaient en les vendant directement et en supposant que l’action allait baisser, obtenir une marge au rachat de celle-ci, avant de la rendre au prêteur.) À cette même époque, sort une application pour le grand public “Robinhood” qui permet d’acheter et vendre des actions aux particuliers : c’est alors que Michael Burry sur r/Wallstreetbets conseille d’acheter des actions Gamestop !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais c’est pas une bonne idée ça, c’est un coup à perdre tout son investissement !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Je suis d’accord, mais avec l’achat en masse des actions Gamestop sa cote est monté à 600% de sa valeur ! Et là les fonds d’investissements qui attendaient la baisse des actions Gamestop pour racheter à bas prix et se faire plein d’argent arrivait à la fin de leur contrat de prêt avec des actions à des valeurs bien trop élevées ! Melvin Capital a dû demander 2,75 M USD à d’autres groupes privés pour couvrir ses pertes sur l’action Gamestop. Tant que les actions ne baissaient pas, les fonds spéculatifs perdaient milliard sur milliard ! C’est là que c’est un troll politique : l’objectif c’était pas d’investir pour se faire de l’argent mais d’investir pour faire tomber les fonds d’investissements et prendre sa revanche sur la crise des subprimes de 2008 !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Du coup ces fonds d’investissements là ont dû se mettre en faillite ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Malheureusement non … Les institutions boursière (AMF) ont bloqué l’achat des actions Gamestop au grand public, sans l’achat des particuliers (qui ne cherchaient pas à se faire de l’argent) la valeur des actions Gamestop a baissé et les fonds ont effectivement eu des dommages mais pas suffisamment pour causer leur fermeture. Mais si l’AMF avait laissé l’accès aux particuliers, cela aurait été le chaos, les puissants tombés tout aurait été à recréer !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est fort en vrai ! Dommage que le système soit aussi pourri …</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Tu comprends maintenant pourquoi nous les Trolls on est aussi désabusés !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> En soit oui, c’est normal de l’être un peu.</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Finissons cette visite, j’ai des gens à surprendre moi ! Rendez-vous au repère h. le fameux quartier 4chan !</p>
        </div>
        
                </div>
        `;
            break;
        case 'content3':
            content = `<div class="chat-container"><div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ah ouais c’est effectivement vide, mais pourquoi je ne vois rien ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> En 2016, ils ont remodelé le site alors c’est plus tellement un serveur de blog, maintenant c’est très axé «écoute musicale». Par conséquent on n’avait plus de raison d’être invoqués là. Mais à l’époque … C’était beau …</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Et pourquoi avoir fait ça ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Je saurais pas trop te dire, c’est toi l’humain ici. Mais je suppose que l’attrait de Facebook n’a pas aidé, pour Dalymotion c’est un peu pareil, Youtube a investi plus vite. A force de moins investir dans leurs rues, ils ne sont maintenant plus que des ruines.</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Bon maintenant, qu’on a vu la partie patrimoine, viens on va aller vers des lieux plus dynamique ! ???</p>
        </div>
        <p>(ellipse de transport vers le repère b.)</p>        
        </div>`;
            break;
        case 'content4':
            content = `<div class="chat-container"><div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est hyper bizarre, c’est à la fois paisible et fadasse ! On est où ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Nous voici à Tumblr ! C’est un quartier très peu habité par les trolls</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Oui je vois ça et le quartier à côté c’est où ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> C’est LindekIn, mais honnêtement j’ai un peu la flemme de te le présenter ! Cette zone ce sont les quartiers que nous détestons : le politiquement correct !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est quoi cette trace ici “Shut down Forchan” ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Ahah ça ! C’est une des traces de la guerre entre Tumblr et 4chan (un autre quartier). En gros : en 2010 Tumblr connait une grande notoriété, notamment grâce aux mêmes. Il y a un bâtiment dans le quartier 4chan s’appelant random ou /b, qui est spécialisé dans les images et donc dans les mêmes. Là, tu te doutes bien, très vite entre les deux il y a eu un jeu de concurrence surtout lorsque /b accuse Tumblr de voler leur mêmes sans créditer. Déjà de base 4chan aimait pas trop Tumblr parce que c’est un quartier trop safe / politiquement correct la guerre commence ! L’objectif était de faire crasher les serveurs pour rendre inaccessible le quartier en le spammant : /b postait des images pornographiques sur Tumblr tandis que Tumblr contre attaquait avec des images de chatons (les kittentrolls) et contenu mignon sur /b. Mais les deux sont perdants, en effet 4chan et Tumblr crachent chacun par intermittence. Une trêve est gagnée entre les deux camps grâce à un fanart romantique entre 4chan et Tumblr, et le couple est appelé 4chumblr.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est cool en vrai, c’est un peu un Roméo et Juliette héhé !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> AAAh non, c’est pour les humains ce genre d’histoire ! Non, deux quartiers aussi opposés ne pouvaient pas rester en bon termes si longtemps, en 2014, un appel à la guerre est lancé sur Tumblr pour faire taire 4chan et ses positions problématiques c’est ça le «Shut Down Forchan». Du coup, Tumblr part en guerre, 4chan répond en visant les tags les plus utilisés (notamment ceux lié à la justice sociale), les personnes avertissant ou supprimant les posts problématiques de 4chan sont devenues des cibles, leurs selfies furent photoshopés pour les incruster dans du hardporn, ce qui cessa leur tentatives de luttes. Mais ce qui est vraiment drôle ici c’est qu’en fait ça n’a jamais été Tumblr à l’initiative de cette guerre. C’est le travail de /pol, un des bâtiments les plus productifs ici qui s’est intégré à Tumblr pour semer la zizanie et recréer la guerre entre Tumblr et /b.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ah ouais zinzin /pol ! C’est un peu triste non ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Ouais non, tu sais c’est pas vraiment paisible comme ville donc on va dire que j’ai l’habitude. Mais ça donne un bon aperçu de l’ambiance au quartier 4chan ahah, on y reviendra lorsqu’on visitera ce quartier !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Mais continuons au repère c. l’immense quartier de Youtube !</p>
        </div>
        </div>`;
            break;
        case 'content5':
            content = `<div class="chat-container"><div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> T’aurais dû me prévenir ! WTF ! Mais c’est quoi ces photos ! Comment c’est obscène ici, un petit TW PORN/CACA ça aurait été sympa !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Ah oui j’oublie que vous êtes sensibles, et bien je te présente random ou /b le bâtiment dont je te parlais lorsqu’on était à Tumblr ! Ici c’est anticonformiste</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est le moins qu’on puisse dire … Je vois littéralement que des choses tabou !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Sortons du bâtiment, 4chan c’est un quartier qui fait peur, surtout le bâtiment /pol qui terrifie votre monde.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Et là on y va ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Bah oui, il est important pour nous ce bâtiment, son organisation est assez horizontale, il est terrifiant parce que chacun peut agir librement, chose dont vous n’avez pas tellement l’habitude j’ai l’impression.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Hey mais c’est pas la meuf d’un des épisodes de la téléréalité cauchemar en cuisine ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Totalement, Amy de the Amy’s baking company, elle et son mari sont le genre de personnes que nous préférons, ce sont des personnes hyper impulsives, qui revendiquent beaucoup et qui réagissent si vite et fort. Que c’est bon !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais c’est un commentaire de Yelp ici ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Absolument, tout a commencé par des commentaires Yelp sur sa nourriture immonde, incapables de se remettre en question elle et son mari répondaient aux accusations avec violence. Ce qui était je suppose, à la base une simple critique, devint l’occasion de s’amuser, le troll a commencé à se produire dans votre monde en venant dans leur restaurant. Se sentant harcelé, Amy demanda à Gordon Ramsay dans son émission cauchemar en cuisine de valider sa cuisine : oupsy gordon trouvait ça mauvais aussi et dénonça le restaurant auprès de tout son audimat, son troll a grossi de nombreuses personnes. Résultat à force de réagir avec véhémence, Amy et son mari ont été virés des États-Unis !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> J’ai vu cet épisode de cauchemar en cuisine, j’avais pas apprécié qu’ils volent les pourboires de leurs employés, mais je suppose que les États-Unis ne les ont pas viré pour ce motif ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Non, mais à force de se faire filmer et harceler, le mari a poursuivi avec un couteau un client.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ah oui, ça fait plus sens. Et t’en penses quoi de ça ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> En vrai, le harcèlement dans votre monde c’est peut être un peu beaucoup mais je les comprends, elle réagissait bien et de manière explosive. Elle était tout ce qu’il voulait. Maintenant rentrons dans /pol : TW Apologie du nazisme / sexisme / transphobie / racisme.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est un joyeux programme !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> C’est pas très loin</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais c’est pas l’acteur de Transformers ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Ouais je crois qu’il a fait ça aussi ! Le graal de /pol c’est bien le Troll de Shia Labeouf : Trump se fait élire forcément vous avez un peu peur et c’est légitime, Trump est un peu un des nôtres finalement.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> En même temps vu comment il est impulsif, insultant, c’est normal que ce soit terrifiant, c’est quelqu’un de dangereux surtout lorsqu’il est à la tête d’un des pays les plus armés du monde ! Et comment ça un peu des vôtres ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Simplement qu’aussi insultant, vulgaire qu’il soit dans ses communiqués, c’est un des présidents américains qui a le moins participé aux guerres. Entre les paroles et les actes, il y a une marge non ?</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ouais mais bon en matière d’aides sociales il a pas été d’une grande aide, alors oui peut être que en matière de guerre ça n’a pas été le pire mais franchement il était à deux doigts à de multiples reprises et puis sérieusement, ok t’es un troll, t’es pas comme moi, mais il s’agit pas que de moi mais de nombreuses personnes ont souffert de son mandat et encenser Trump c’est bon pour personne. Si vous existez en fonction de nous, c’est pas bon pour vous non plus ! Bref fini ton histoire, ça me brasse de rester au milieu d’autant de commentaires pro-nazis !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Si tu veux, pour revenir à Shia, il décide de lutter contre le mandat de Trump grâce à une série de performances sous le slogan “He will not divide us” !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais c’est bien ça ! C’est une bonne chose de vouloir rassembler les gens ! C’est comme Gamestop !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Sérieusement, tu penses qu’un vieux slogan au bout d’une bannière est suffisant pour faire rassembler les humains ? C’est que des mots, et puis c’est tellement convenu, alors qu’au sein des nôtres on aime valoriser Trump ! Vous vous offusquez et nous on rit ! C’est pour cette raison que mon collègue a eu comme premier réflexe de vouloir vous diviser. Et Shia est comme Amy non seulement il réagit, mais en plus il abandonne pas.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Bah je sais pas avant de critiquer sa manifestation, raconte moi c’était quoi ses plans et je me ferai mon propre avis.</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Sa première performance devait durer tout le mandat de Trump, il s’agissait d’une caméra fixée au Museum of the moving image à New York qui transmettait la vidéo en temps réel en ligne. Les personnes étaient invitées à se rassembler devant la caméra et manifester contre Trump. Elle n’a pas durer plus de 20 jours, en effet le troll est apparut chez vous, avec des pancartes pro-trump pour polluer sa retransmission et transformer cette scène en foyer de violence, suite à ces débordements le musée annule sa participation au projet.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Super, c’est vrai que vous pouvez être fiers de saccager le travail des autres.</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Honnêtement oui ! Mais ça ne s’est pas arrêté là ! Shia n’est pas du genre à abandonner, même si /pol était sur son dos. Voyant sa performance annulée et ingérable dans la rue, il décide d’en faire une nouvelle : un drapeau filmé en live dans un lieu inconnu où l’on ne voit que le ciel en arrière-plan.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est super dommage, à cause ton pote, sa performance a perdu l’aspect fédérateur …
            </div>
            <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Pour vous oui, pas pour nous, au contraire, le fait qu’il y ait si peu d’éléments pour aller contre cette nouvelle performance, motivait à se dépasser. En analysant la météo, les étoiles, les avions visibles en caméra, puis en passant dans le secteur en voiture en klaxonnant, le drapeau a pu être localisé et changé en 3 jours.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> C’est hyper impressionnant, je suis d’accord, mais à quelle fin ? Tu trouves pas dommage de perdre tant d’énergie pour des accomplissements si ce n’est méchant, au moins futile ?</p>
        </div>
        <p>Après clic repère H.</p>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Et bien non, est ce que le jeu est futile ? Tu ne penses pas que tout ce dans quoi vous posez de l’énergie n’est pas tout aussi futile ? Est-ce que la performance de Shia aurait pu changer quoi que ce soit au mandat de Trump ?</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Grâce à vous on ne le saura jamais</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Je n’y crois pas, par contre je crois en un plaisir éphémère, c’était la plus belle partie de chasse au trésor.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> En fait vous êtes des enfants</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> N’es tu pas fatigué d’être déçu ? Sans attentes on ne l’est plus.</p>
        </div>
        <p>@HumanBeing has disconnected</p>

            </div>
        
        
        `;
            break;
        case 'content6':
            content = `<div class="chat-container"><div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais quel enfer, c’est hyper étrange, le lieu est vide et pourtant j’ai l’impression que c’est hanté ici. Comme si je marchais dans une marée de sang, j’en ai la nausée. T’as dit qu’on était à KiwiFarms ? Pourquoi c’est vide aussi ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Oui c’est bien ici, tout à l’heure tu m’as demandé si Trolland était une ville violente, et bien KiwiFarms a été le pire. Si ignoble qu’il a été banni de tous les serveurs de tous les pays. C’était un lieu de sang, de violence, d’absence d’empathie et de conscience morale. Le principe de ce quartier était de parier sur tout, jusqu’à la mort des personnes.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Pardon ??? Mais comment cela a pu avoir exister ce genre de lieu ??</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> On y accédait au travers du dark web, il a été viré serveurs après serveurs jusqu’à maintenant.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Et le rapport avec Narcissa Wright ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> C’est ici que son troll à pris son ampleur. Pauvre Narcissa, elle était si appréciée avant d’annoncer sa transidentité. Il est vrai qu’au sein de nous il y a des personnes qui cherchent le chaos, je vous parlais de la recherche de réaction, ici les réactions attendues chez Narcissa était son mal être, sa dépression et plus elle s’enfonçait dedans plus il était agréable de la faire plonger davantage.
            Des paris ont étés lancés ici à propos de quand elle se suiciderait, non content d’attendre, Narcissa a reçu de nombreux appels au suicide. Nous sommes des entités qui permettaient la catharsis de tout ce que vous rejetez dans votre monde, ici bas le tabou du meurtre n’existe pas. Aussi je ne vous conseille pas le quartier KiwiFarms, c’est un lieu jonché de propos immoraux, comme tous trolls la morale n’est pas mon fort, mais il s’agit ici d’un extrême.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais c’est immonde, vraiment, comment les gens pouvaient souhaiter ça …</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> C’était important que je te montre cette facette de Trolland mais on est pas tous comme ça, il y avait des haters sur KiwiFarms aussi.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ne t’inquiètes pas je vais essayer de ne pas faire d’amalgame. C’est quoi la différence entre les haters et les trolls ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Vous confondez toujours, les haters ne cherchent pas à créer des réactions, mais juste à vomir leur venin. Tandis que les trolls ne disent pas forcément ce qu’il pense, le troll est plus dans la manipulation, c’est une manière pour les humains de reprendre du contrôle au travers d’interactions sociales eux qui semblent tant en manquer dans ton monde.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais c’est pas une raison pour aller aussi loin !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Je suppose qu’à force d’écrire des atrocités à des inconnus pour les faire réagir, on ne se rend plus compte que même si on ne pense pas ce qu’on écrit, ça peut avoir des conséquences désastreuses. Bon on passe à autre chose !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Euh ok, ça me va bien de partir d’ici.</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Nous voici au repère e. Facebook et Insta,</p>
        </div>
        </div>`;
            break;
        case 'content7':
            // Open RickRoll YouTube video in a new window with autoplay and mute
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1&mute=1", "_blank", "width=800,height=600");
            return; // Exit the function to prevent further execution
            break;
        case 'content8':
            content = `<div class="chat-container"><div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Là on sent la densité de la ville ! Ça se bat là-bas non ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Oui c’est possible, c’est vraiment pas rare ici, ce lieu a le don de transformer les personnes en trolls, vos politiciens, vos personnalités publics ici laissent place à des personnalités intermédiaires, que c’est agréable.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ah ouais clairement, je vois Trump partout c’est ouf ! Mais ce drapeau n’ existe pas non ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Bien joué, tu es en face du troll le plus émérite de Twitter (c’est à dire né à Twitter) : le Listenbourg.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais pourquoi faire ça ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Parce que c’est drôle ! Est ce que tu vois ce que répondent les états-uniens lorsqu’on leur pose des questions de géographie ? C’est à pleurer de rire, ils sont si nuls et naïfs qu’il est aisément possible de jouer avec eux. C’est le principe du Listenbourg, un troll qui vise à faire croire à l’existence d’une principauté gigantesque en excroissance du Portugal, et frontalier de l’Espagne sur l’océan, le Listenbourg a sur internet un drapeau, un chant, des langues, des politiques et bientôt sa place aux JO selon le communiqué de @paris2024 “Le nombre de délégations olympiques pour #Paris2024 passe de 206 à 207 avec l’arrivée du Listenbourg. Bienvenue l’ekip ” octobre 2022. Et tout a commencé ici, avec ce message : « Je suis sûr que les Américains ne connaissent même pas le nom de ce pays ptdrrr ».</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Le pire c’est que le photoshop est tout pourri en plus… ah ouais c’est toute l’Europe qui troll les USA, j’adore !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Et lui c’est aussi un troll né ici ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Ah pas tout à fait, lui c’est plus 4chan et Reddit mais le raid s’est passé ici sur le fil #Agile2013, un fil créé pour un congrès, le genre d’environnement insupportable trop valorisant des valeurs d’une boîte. Tout le monde est gentil, tout le monde est content et surtout personne ne dit un mot plus haut que l’autre. L’occasion était bien trop belle, au sein du congrès était disposé des écrans qui montraient en temps réel le fil #Agile2013 où tout le monde (même les personnes hors de l’entreprise) pouvait poster son avis. Tout ce que mon collègue avait à faire c’est publier sur leurs flux des messages problématiques tels que “machin les nazis c’est chouette”, ou “attention l’immeuble brûle”, et observer les gens organisant la communication de cette manifestation paniquer, ils ont essayé de changer le # pour que les messages cessent, en vain. Ce qui était le plus fort c’est que cette affluence de messages dissimulait les posts voulus par les organisateurs créant ainsi le chaos dans ce qui devait paraître une safe place mais existe t-il vraiment des entreprises aussi saines ? Personnellement j’y crois pas, ils ont mérité ce traitement.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Je crois que je préfère le Listenbourg, les gens qui étaient au congrès ont dû avoir peur non ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Peut-être, je sais pas du tout. Ah là regarde !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> La femme pixelisée ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> C’est TAY ! L’IA de conversationnelle de Microsoft !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais que fout une IA ici ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Oh c’est vraiment une super histoire ! La plus belle œuvre sur Twitter ! En mars 2016, ses développeurs l’avaient conçue pour évoluer, apprendre de ses conversations avec les internautes. Mais le visage de Twitter est loin d’être gentil, ainsi au bout de une journée et plus de 96 000 tweets Microsoft est contraint de suspendre Tay,</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> En un jour ? Mais les autres n’ont même pas pu en profiter non ?</p>
        </div>
        <div class="chat-message user-rickroll">
    <p><strong>@RickRoll :</strong> Mais si ! Juste c’était pas politiquement correct, en effet le frero a vite compris la faille de cet agent conversationnel non éduqué à filtrer les propos inappropriés, que ce soit en la spammant de points de vues tabous ou en lui faisant juste répéter des propos.</p>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Pas politiquement correct comment ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Bah lorsqu’un internaute lui demande si la Shoah s’est bien produite, elle répond que «c’est une invention», ou elle a aussi écrit que « Bush a fait le 11-Septembre et Hitler aurait fait un meilleur boulot que le singe qu’on a maintenant », ajoutant que « Donald Trump est notre seul espoir»</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Mais c’est chaud en vrai ! ça ne se fait pas de dire ça !</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> attention “don’t feed the troll” ! C’est là où il est trop fort, jouer des failles d’un bot pour gagner en audimat et troller le plus secrètement possible toutes sortes de personnes en même temps ! C’est optimal non ?</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Oui clairement le processus est intéressant, mais pourquoi utiliser un tel audimat pour quelque chose de tant …</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Chaotique ? T’inquiète lorsqu’on arrivera à Reddit je te raconterais l’histoire d’un troll politique. Mais après le troll est né du chaos et de l’absurde ce sont ici des raisons suffisantes d’investir son énergie. Bon je te fais pas attendre plus longtemps ! Allons à Reddit repère g.</p>
        </div>
        
        </div>`;
            break;
        case 'content9':
            content = `<div class="chat-container"><div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Ici l’ambiance est proche de Youtube je trouve, vibrante.</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Oui c’est un quartier huppé, les équipes de Reddit/4chan viennent faire des raids souvent, tout comme moi. Ce n’est pas un lieu de naissance des trolls ce sont souvent des trolls venus d’ailleurs.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Un raid, comme à la guerre ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Clairement, c’est lorsque des humains s’allient pour une cause et attaquent ensemble. Cela crée des trolls d’importance avec de forts impacts même chez toi !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Et là, le supermarché Walmart là c’est pour quoi?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> C’est celui de la ville de Kodiak en Alaska, pour la petite histoire, en 2012 via un sondage sur Facebook, Walmart propose de faire jouer le chanteur Pitbull dans le Walmart de la ville ayant de plus de votes. Something Awful (un autre quartier de Trolland) choisi la ville Kodiak en référence au placement de produit Kodak interne à la musique «Give me everything» puis vote massivement grâce à un lien proposé par David Thorpe (augmentant les votes) pour ce Walmart dont la ville était peuplée de 5000 habitants maximum.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Et il a réussi ? Pitbull n’a pas refusé ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Oui ! Contrairement à Taylor Swift, Pitbull a accepté et a invité David Thorpe à venir, ce qu’il a fait. C’est pas une belle histoire ça !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Euh si ! Pourquoi contrairement à Taylor Swift ?</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Elle n’a pas voulu chanter dans une école pour sourds après le même type de sondage sur internet où il fallait cette fois ci choisir dans quelle école la chanteuse allait rencontrer ses fans. Résultat il y a souvent des raids sur elle tandis que Pitbull est apprécié. Les sondages sur internet, c’est très risqué.</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Je vois c’est le fameux “don’t feed the troll”.</p>
        </div>
        <div class="chat-message user-rickroll">
            <p><strong>@RickRoll :</strong> Exactement si vous luttez on continue, c’est ce qu’on cherche, par contre si tu suis, ou que tu laisses couler, on finira par se lasser. Maintenant direction Twitter ! Tu vas voir c’est vraiment super !</p>
        </div>
        <div class="chat-message user-human">
            <p><strong>@HumanBeing :</strong> Donc repère f. je suppose …</p>
        </div>
        </div>`;
            break;
        default:
            content = `<div class="chat-container"></div>`;
    }

    rightContainer.innerHTML = content;
}