// Função para alternar entre o tema claro e escuro
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const themeButton = document.getElementById("toggle-theme");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "🌞"; // Modo claro
    } else {
        themeButton.textContent = "🌙"; // Modo escuro
    }
});

// Animação de corações flutuantes (simples)
window.addEventListener("load", () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animation = "float 5s ease-in-out infinite";
    document.body.appendChild(heart);
});

// Estilo da animação de corações (simples)
const style = document.createElement("style");
style.innerHTML = `
    .heart {
        font-size: 30px;
        opacity: 0;
        animation: float 5s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            transform: translateY(0) rotate(0);
            opacity: 1;
        }
        50% {
            transform: translateY(-100px) rotate(180deg);
            opacity: 0.7;
        }
        100% {
            transform: translateY(0) rotate(360deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
