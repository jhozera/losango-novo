function animateNumbers(element, start, end, duration, isPercentage = false) {
    let startTime = null;

    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        let value = Math.floor(progress * (end - start) + start);
        let formattedValue = value.toLocaleString("pt-BR"); // Adiciona os pontos de milhar

        if (isPercentage) {
            formattedValue += "%+"; // Adiciona o "%" se necessário
        } else {
            formattedValue += "+"; // Adiciona o "+" se não for percentual
        }

        element.innerText = formattedValue;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

// Observador para iniciar a animação quando os números entrarem na tela
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalNumber = parseInt(target.getAttribute("data-number"));
            const isPercentage = target.getAttribute("data-type") === "percentage"; // Verifica se precisa de %

            animateNumbers(target, 0, finalNumber, 2000, isPercentage);
            observer.unobserve(target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll(".deal-box h4").forEach((num) => {
    observer.observe(num);
});




//faq
function showContente(id) {
    const content = document.getElementById(id);
    const isVisible = content.style.display === "block";
  
    const allContents = document.querySelectorAll('.bt-content');
    allContents.forEach(el => el.style.display = 'none');
  
    if (!isVisible) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
  }



  function openMenu() {
    document.getElementById("myLinks").classList.add("open");
  }
  
  function closeMenu() {
    document.getElementById("myLinks").classList.remove("open");
  }
  