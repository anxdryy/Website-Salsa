const btnLove = document.getElementById("btn-love");

btnLove.addEventListener("click", () => {
    const container = document.querySelector(".container");

    for (let i = 0; i < 100; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const x = Math.random() * container.offsetWidth;
        const y = Math.random() * container.offsetHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});