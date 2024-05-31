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