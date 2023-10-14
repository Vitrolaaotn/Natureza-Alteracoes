export function menuMobile() {
    // pega o botão de menu e a lista de links
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list');
    // verifica se os elementos existem
        if (toggle && menuList) {
            // adiciona a classe "active" a lista de links
            function toggleMenu() {
                menuList.classList.toggle('active');
                const toggleIcon = toggle.querySelector('span');
                toggleIcon.classList.toggle('active');
                // alterna entre "menu" e "close" no botão de menu
                toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
            }
            // adiciona um listener para o clique no botão de menu
            toggle.addEventListener('click', toggleMenu);
        }
}