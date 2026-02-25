/* =========================
   Smooth Page Load Animation
========================= */
document.body.style.opacity = "0";
window.addEventListener("load", () => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "1";
});

/* =========================
   Welcome Toast (instead of alert)
========================= */
const toast = document.createElement("div");
toast.innerText = "🏥 Welcome to City Care Hospital";
toast.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    background: #2c7da0;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    z-index: 2000;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;
document.body.appendChild(toast);

setTimeout(() => {
    toast.style.transition = "opacity 1s";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 1000);
}, 3000);

/* =========================
   Active Navbar + Smooth Scroll
========================= */
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

/* =========================
   Sticky Header Animation
========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.style.background = "#1b4965";
        header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.background = "rgba(54, 89, 104, 0.968)";
        header.style.boxShadow = "none";
    }
});

/* =========================
   Image Interactive Effects
========================= */
const logo = document.querySelector("img");

logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.15) rotate(2deg)";
    logo.style.transition = "0.4s ease";
});

logo.addEventListener("mouseout", () => {
    logo.style.transform = "scale(1) rotate(0)";
});

/* =========================
   Animated Counters (Stats)
========================= */
const stats = [
    { text: "Doctors", value: 120 },
    { text: "Patients Served", value: 2000 },
    { text: "Years Experience", value: 25 }
];

const statsContainer = document.createElement("div");
statsContainer.style.cssText = `
    display:flex;
    justify-content:center;
    gap:40px;
    margin-top:40px;
    color:black;
`;
document.querySelector(".container").appendChild(statsContainer);

stats.forEach(stat => {
    const box = document.createElement("div");
    box.style.textAlign = "center";

    const num = document.createElement("h1");
    num.innerText = "0";

    const label = document.createElement("p");
    label.innerText = stat.text;

    box.append(num, label);
    statsContainer.appendChild(box);

    let count = 0;
    const interval = setInterval(() => {
        count++;
        num.innerText = count;
        if (count === stat.value) clearInterval(interval);
    }, 20);
});

/* =========================
   Auto Footer Year
========================= */
document.getElementById("year").innerText = new Date().getFullYear();

/* =========================
   Scroll Reveal Animation
========================= */
const revealItems = document.querySelectorAll("h1, h2, p, li, img");

const revealOnScroll = () => {
    revealItems.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
            item.style.transition = "0.8s ease";
        } else {
            item.style.opacity = "0";
            item.style.transform = "translateY(40px)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   Scroll To Top Button
========================= */
const topBtn = document.createElement("button");
topBtn.innerText = "⬆";
topBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 12px 16px;
    font-size: 18px;
    border: none;
    border-radius: 50%;
    background: #2c7da0;
    color: white;
    cursor: pointer;
    display: none;
    z-index: 3000;
`;
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
