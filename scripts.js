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
