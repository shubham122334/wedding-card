document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const enterBtn = document.getElementById("enterBtn");
    const nav = document.getElementById("nav");

    /* =========================
       OPEN INVITATION
    ========================= */

    if (enterBtn && intro) {

        enterBtn.addEventListener("click", function () {

            console.log("OPEN BUTTON CLICKED");

            intro.classList.add("open");

            createGoldBurst();

            setTimeout(function () {

                intro.classList.add("hidden");

                if (nav) {
                    nav.classList.add("visible");
                }

            }, 1800);

        });

    } else {

        console.error("ERROR: intro or enterBtn not found.");

    }


    /* =========================
       GOLD PARTICLES
    ========================= */

    function createParticle() {

        const particle = document.createElement("div");

        particle.className = "gold-particle";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            (70 + Math.random() * 35) + "vh";

        const size =
            2 + Math.random() * 4;

        particle.style.width = size + "px";
        particle.style.height = size + "px";

        particle.style.animationDuration =
            (5 + Math.random() * 8) + "s";

        const particles =
            document.getElementById("particles");

        if (particles) {
            particles.appendChild(particle);
        }

        setTimeout(function () {
            particle.remove();
        }, 14000);

    }


    setInterval(createParticle, 500);


    /* =========================
       GOLD BURST
    ========================= */

    function createGoldBurst() {

        for (let i = 0; i < 100; i++) {

            const particle =
                document.createElement("div");

            particle.className =
                "gold-particle";

            particle.style.left = "50vw";
            particle.style.top = "50vh";

            const size =
                2 + Math.random() * 5;

            particle.style.width = size + "px";
            particle.style.height = size + "px";

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                150 + Math.random() * 500;

            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;

            document.body.appendChild(particle);

            particle.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translate(${x}px, ${y}px)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        1200 + Math.random() * 1000,
                    easing:
                        "cubic-bezier(.1,.7,.2,1)"
                }
            );

            setTimeout(function () {
                particle.remove();
            }, 2500);

        }

    }


    /* =========================
       COUNTDOWN
    ========================= */

    const weddingDate =
        new Date(
            "November 20, 2026 00:00:00"
        ).getTime();


    function setText(id, value) {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent = value;
        }

    }


    function updateCountdown() {

        const now =
            new Date().getTime();

        const difference =
            weddingDate - now;


        if (difference <= 0) {

            setText("days", "00");
            setText("hours", "00");
            setText("minutes", "00");
            setText("seconds", "00");

            return;

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (
                    difference %
                    (1000 * 60 * 60 * 24)
                ) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (
                    difference %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (
                    difference %
                    (1000 * 60)
                ) / 1000
            );


        setText(
            "days",
            String(days).padStart(2, "0")
        );

        setText(
            "hours",
            String(hours).padStart(2, "0")
        );

        setText(
            "minutes",
            String(minutes).padStart(2, "0")
        );

        setText(
            "seconds",
            String(seconds).padStart(2, "0")
        );

    }


    updateCountdown();

    setInterval(updateCountdown, 1000);


    /* =========================
       SCROLL NAV
    ========================= */

    window.addEventListener(
        "scroll",
        function () {

            if (!nav) return;

            if (window.scrollY > 300) {
                nav.classList.add("visible");
            } else {
                nav.classList.remove("visible");
            }

        }
    );


    /* =========================
       SECTION REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, .letter, .name-card, .event-card, .detail-card, .timeline-content"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (entry.isIntersecting) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                            }

                        }
                    );

                },
                {
                    threshold: 0.15
                }
            );


        revealElements.forEach(
            function (element) {

                element.style.opacity = "0";

                element.style.transform =
                    "translateY(35px)";

                element.style.transition =
                    "opacity 1s ease, transform 1s ease";

                observer.observe(element);

            }
        );

    }


    /* =========================
       NAV LINKS
    ========================= */

    document.querySelectorAll(
        ".nav-links a"
    ).forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (nav) {
                        nav.classList.add("visible");
                    }

                }
            );

        }
    );


    /* =========================
       MOUSE GOLD GLOW
    ========================= */

    document.addEventListener(
        "mousemove",
        function (event) {

            const glow =
                document.createElement("div");

            glow.style.position = "fixed";

            glow.style.left =
                event.clientX + "px";

            glow.style.top =
                event.clientY + "px";

            glow.style.width = "4px";
            glow.style.height = "4px";

            glow.style.borderRadius = "50%";

            glow.style.background = "#e4c477";

            glow.style.pointerEvents = "none";

            glow.style.zIndex = "999";

            glow.style.boxShadow =
                "0 0 12px #e4c477";

            glow.style.opacity = ".35";

            document.body.appendChild(glow);

            setTimeout(
                function () {
                    glow.remove();
                },
                250
            );

        }
    );


/* ==========================================
   WEDDING RING SCROLL ANIMATION
========================================== */

const countdownSection =
    document.querySelector(".countdown");

const ringAnimation =
    document.getElementById("ringAnimation");

if (countdownSection && ringAnimation) {

    let ringsPlayed = false;

    const ringObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting &&
                        !ringsPlayed
                    ) {

                        ringsPlayed = true;

                        ringAnimation.classList.add("play");

                        console.log(
                            "💍 Wedding ring animation played"
                        );

                        ringObserver.unobserve(
                            countdownSection
                        );

                    }

                });

            },

            {
                threshold: 0.35
            }

        );

    ringObserver.observe(countdownSection);
}


/* ==========================================
   ORIGINAL CONSOLE MESSAGE
========================================== */

console.log(
    "✦ Shubham Weds Priyanka — JavaScript Loaded Successfully ✦"
);

});