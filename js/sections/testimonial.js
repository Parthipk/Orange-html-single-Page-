document.addEventListener("DOMContentLoaded", function () {

  let index = 0;

  const section = document.querySelector(".testimonials");
  const cards = section.querySelectorAll(".testimonial-card");
  const dots = section.querySelectorAll(".dot");

  const nextBtn = section.querySelector("#next");
  const prevBtn = section.querySelector("#prev");

  function showTestimonial(i) {
    cards.forEach(card => card.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    cards[i].classList.add("active");
    dots[i].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % cards.length;
    showTestimonial(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    showTestimonial(index);
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      index = Number(dot.dataset.index);
      showTestimonial(index);
    });
  });

});