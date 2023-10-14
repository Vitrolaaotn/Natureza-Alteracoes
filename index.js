import { faq } from "./modulo/faq.js";
import { menuMobile } from "./modulo/menuMobile.js";
import { Modal } from "./modulo/Modal.js";
import { img } from "./modulo/imgclick.js";

// adiciona um listener para o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    faq();
    menuMobile();
    Modal();
    img();
}
);