$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            580: {
                items: 2
            },
            820: {
                items: 3
            },
            1350: {
                items: 4
            },
            1650: {
                items: 5
            }
        }
    });

});

let resumoCapituloSection = document.querySelector('.resumo-capitulos');
let resumoCapitulos = document.querySelectorAll('.resumo-capitulo-item');

resumoCapituloSection.style.opacity = "0";

function ToggleResumoCap(capitulo) {
    resumoCapituloSection.style.opacity = "1";
    resumoCapitulos.forEach(item => {
        if (item.classList.contains(`resumo-capitulo-${capitulo}`)) {
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0";
        }
    })
}

let faqItemDiv = document.querySelectorAll(".faq-item-div");

let faqIcon = document.querySelectorAll(".faq-icon");

function ToggleDivFAQ(numberDiv) {
    faqItemDiv.forEach((div, index) => {
        if (numberDiv == index) {

            div.classList.toggle("toggle-div-faq");

            faqIcon[index].classList.toggle("toggle-translate-icon");

        }
    })
}