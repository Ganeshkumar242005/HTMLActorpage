const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const navMenu =
    document.getElementById(
        "navMenu"
    );

const backTop =
    document.getElementById(
        "backTop"
    );


// MOBILE MENU

menuToggle.addEventListener(
    "click",
    () => {

        const open =
            navMenu.classList.toggle(
                "open"
            );

        menuToggle.setAttribute(
            "aria-expanded",
            open ? "true" : "false"
        );

    }
);


// CLOSE MENU AFTER CLICKING LINK

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


// SCROLL REVEAL ANIMATION

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(
            element
        );

    });


// ACTIVE NAVIGATION LINK

const sections = [
    ...document.querySelectorAll(
        "main section[id]"
    )
];


const navLinks = [
    ...document.querySelectorAll(
        ".nav a"
    )
];


function updateActiveNav() {

    let current = "home";

    const scrollPosition =
        window.scrollY + 160;


    sections.forEach(
        section => {

            if (
                section.offsetTop <=
                scrollPosition
            ) {

                current =
                    section.id;

            }

        }
    );


    navLinks.forEach(
        link => {

            const href =
                link.getAttribute(
                    "href"
                );

            link.classList.toggle(
                "active",
                href === "#" + current
            );

        }
    );

}


// WINDOW SCROLL

window.addEventListener(
    "scroll",
    () => {

        // Show back-to-top button

        backTop.classList.toggle(
            "show",
            window.scrollY > 700
        );


        // Highlight navigation

        updateActiveNav();

    }
);


// BACK TO TOP BUTTON

backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// AUTOMATIC YEAR

document
    .getElementById("year")
    .textContent =
    new Date().getFullYear();


// RUN ON PAGE LOAD

updateActiveNav();