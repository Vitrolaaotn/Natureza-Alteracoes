export function faq() {
    
    // pega todos os elementos com a classe "faq"
    const faqs = document.querySelectorAll(".faq");
    // adiciona um listener para o clique em cada elemento
    faqs.forEach(faq => {
        
        faq.addEventListener("click", () => {
            // verifica se o elemento clicado já está ativo
            if (faq.classList.contains("active")) {
                faq.classList.remove("active");
            } else {
                faqs.forEach(otherFaq => otherFaq.classList.remove("active"));
                faq.classList.add("active");
            }
        });
    });
}
