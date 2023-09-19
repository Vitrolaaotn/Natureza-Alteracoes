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


