const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

const counters = document.querySelectorAll(".counter");
const counterDuration = 1200;

if (counters.length) {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / (counterDuration / 16)));

    const updateCounter = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = String(target);
        return;
      }
      counter.textContent = String(current);
      requestAnimationFrame(updateCounter);
    };

    updateCounter();
  });
}

const amountInput = document.getElementById("loan-amount");
const rateInput = document.getElementById("interest-rate");
const yearsInput = document.getElementById("loan-years");
const emiButton = document.getElementById("calc-emi");
const emiResult = document.getElementById("emi-result");

if (amountInput && rateInput && yearsInput && emiButton && emiResult) {
  emiButton.addEventListener("click", () => {
    const principal = Number(amountInput.value);
    const yearlyRate = Number(rateInput.value);
    const years = Number(yearsInput.value);

    if (!principal || !yearlyRate || !years) {
      emiResult.textContent = "Enter valid loan details to calculate EMI.";
      return;
    }

    const monthlyRate = yearlyRate / 12 / 100;
    const months = years * 12;
    const factor = Math.pow(1 + monthlyRate, months);
    const emi = (principal * monthlyRate * factor) / (factor - 1);

    emiResult.textContent = `Estimated EMI: ₹${Math.round(emi).toLocaleString("en-IN")} / month`;
  });
}

const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length) {
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    if (question) {
      question.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
