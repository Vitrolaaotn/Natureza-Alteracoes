

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("active")) {
            faq.classList.remove("active");
        } else {
            faqs.forEach(otherFaq => otherFaq.classList.remove("active"));
            faq.classList.add("active");
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // pega todas as imagens dentro da lista com a classe "list-natureza"
    const imagensNatureza = document.querySelectorAll('.list-natureza img');

    // pega as seções correspondentes aos links das imagens
    const sessoesNatureza = [
        'section-natureza',
        'section-praia',
        'section-florestas',
        'section-montanhas'
    ];

    // mostra a "section-natureza" como padrão
    const sessaoNaturezaPadrao = document.querySelector('.section-natureza');
    sessaoNaturezaPadrao.style.display = 'block';

    // esconde as outras seções de texto inicialmente
    for (let i = 0; i < sessoesNatureza.length; i++) {
        if (sessoesNatureza[i] !== 'section-natureza') {
            const sessao = document.querySelector('.' + sessoesNatureza[i]);
            sessao.style.display = 'none';
        }
    }

    // adiciona um evento de clique a cada imagem
    for (let j = 0; j < imagensNatureza.length; j++) {
        imagensNatureza[j].addEventListener('click', function (event) {
            // esconde todas as seções de texto
            for (let k = 0; k < sessoesNatureza.length; k++) {
                const sessao = document.querySelector('.' + sessoesNatureza[k]);
                sessao.style.display = 'none';
            }

            // mostra a seção de texto correspondente à imagem clicada
            const index = Array.from(imagensNatureza).indexOf(event.target);
            const sessaoId = sessoesNatureza[index];
            const sessao = document.querySelector('.' + sessaoId);
            sessao.style.display = 'block';
        });
    }
});





const toggle = document.querySelector('.toggle');
const menuList = document.querySelector('.js-list');

    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        toggle.addEventListener('click', toggleMenu);
    }


