        // Menu Burger Toggle
        const menuBurger = document.getElementById('MenuBurger');
        const navigation = document.getElementById('Navigation');

        menuBurger.addEventListener('click', function() {
            navigation.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        const navLinks = navigation.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navigation.classList.remove('active');
            });
        });

        // Fermer le menu quand on clique sur le bouton Contacter
        const contactButton = navigation.querySelector('button');
        contactButton.addEventListener('click', function() {
            navigation.classList.remove('active');
        });