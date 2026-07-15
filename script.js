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

const locationSelect = document.querySelector(".location-select");

if (locationSelect) {
    locationSelect.addEventListener("change", function () {
        const selectedPage = this.value;

        if (selectedPage) {
            window.location.href = selectedPage;
        }
    });
}