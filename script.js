let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// autoplay ke slide berikutnya
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    slides[currentSlide].classList.add("active");

    gsap.fromTo(slides[currentSlide],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    if (currentSlide !== 2 && currentSlide !== 3) {
      setTimeout(nextSlide, 5000); // auto next kecuali quiz & hadiah
    }
  }
}

// mulai autoplay
setTimeout(nextSlide, 4000);

// Quiz check
function checkAnswer(btn, correct) {
  const feedback = document.getElementById("quiz-feedback");
  if (correct) {
    feedback.textContent = "🎉 Benar banget! Kamu emang Tiara sejati 😘";
    setTimeout(nextSlide, 2000);
  } else {
    feedback.textContent = "❌ Salah! Coba lagi deh 🤭";
  }
}

// Show gift message
function showGift(msg) {
  document.getElementById("gift-message").textContent = msg;
  setTimeout(nextSlide, 4000);
}