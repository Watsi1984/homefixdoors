const faqItems = document.querySelectorAll(".faq");

faqItems.forEach((faq) => {
    const question = faq.querySelector(".faq-question");

    if (!question) {
        return;
    }

    question.addEventListener("click", () => {
        const isOpen = faq.classList.toggle("active");

        question.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });
});