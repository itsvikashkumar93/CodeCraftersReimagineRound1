const LocomotiveJs = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

const handleNavbar = () => {
    let allPages = document.querySelectorAll('.allPages');
    let navLinks = document.querySelectorAll('#nav-part2 a');
    window.onscroll = () => {
        allPages.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('#nav-part2 a[href*=' + id + ']').classList.add('active');
                });
            };
        });
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100)

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
}

const handleHamburger = () => {
    var hamIcon = document.querySelector("#hamIcon");
    var ham = 0;
    hamIcon.addEventListener("click", function () {
        if (ham == 0) {
            gsap.to("#hamburger", {
                display: "block"
            })
            gsap.to("#hamburger", {
                // opacity: 1,
                top: 0,
                duration: 0.5
            })
            // document.body.style.overflow = 'hidden';
            ham = 1;
        }
        else {
            var tl = gsap.timeline();
            tl.to("#hamburger", {
                // opacity: 0,
                top: "-100vh"
            })
            tl.to("#hamburger", {
                display: "none"
            })
            // document.body.style.overflow = 'auto';
            ham = 0;
        }
    })
}

const LoadingAnimation = () => {
    const video = document.querySelector('.video video');
    video.pause();
    setTimeout(() => {
        video.play();
    }, 4000);

    var tl = gsap.timeline();
    tl.from("#loaderNum", {
        opacity: 0,
        onStart: function () {
            var h5Timer = document.querySelector("#loaderNum");
            var count = 1;
            var int = setInterval(function () {
                h5Timer.innerHTML = count;
                if (count === 100) {
                    clearInterval(int);
                }
                count++;
            }, 30)
        }
    })

    tl.to("#loader", {
        // opacity: 0,
        y: -1000,
        duration: 2,
        delay: 3
    })

    tl.to("#loader", {
        display: "none"
    })

    // loader.style.display = "none";
}

const gsapAnimation = () => {
    gsap.from(".riskUtha, .naamBana", {
        opacity: 0,
        // rotate: 100,
        y: 250,
        duration: 1.5,
        ease: [0.37, 0, 0.63, 1],
        // stagger: 1,
        delay: 3.9
    })
    gsap.to("#Can", {
        marginLeft: '75%',
        duration: 2,
        delay: 3.8
        // delay: 4.3
    })

    gsap.from('#page2H1', {
        opacity: 0,
        y: 100,
        duration: 0.6,
        scrollTrigger: {
            trigger: '#page2H1',
            scroller: '#main',
            start: "top 70%",
            end: "top 40%",
        }
    })
    gsap.from('#page3H1', {
        opacity: 0,
        y: 100,
        duration: 0.6,
        scrollTrigger: {
            trigger: '#page3H1',
            scroller: '#main',
            // markers: true,
            start: "top 80%",
            end: "top 50%",
            // scrub: 1
        }
    })
    gsap.from('.page4H1', {
        opacity: 0,
        y: 100,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.page4H1',
            scroller: '#main',
            // markers: true,
            start: "top 80%",
            end: "top 50%",
            // scrub: 1
        }
    })
}

const footerEmailClear = () => {
    const footerEmail = document.querySelector('#footerEmail');
    const footerArrow = document.querySelector('#footerArrow');

    footerEmail.addEventListener('keyup', (e) => {
        footerArrow.addEventListener('click', () => {
            e.target.value = "";
        })
    })

}
handleHamburger()
handleNavbar()
footerEmailClear();
LoadingAnimation()
LocomotiveJs();


if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    gsapAnimation();
    VanillaTilt.init(document.querySelectorAll(".box"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0,
    })
}
else {
    // gsapForMobile();
}