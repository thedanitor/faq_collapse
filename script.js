// buttons
const btns = document.querySelectorAll(".faq-toggle");
 
// iterate through btns
btns.forEach(btn => {
    // listen for click on btn
    btn.addEventListener("click", () => {
        // target parent node of btn (div with class .faq)
        let faq = btn.parentNode;
        // toggle active class on faq
        faq.classList.toggle("active");
    });
});