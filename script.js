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
    const hamIcon = document.querySelector("#hamIcon");
    const hamClose = document.querySelector("#hamClose");
    hamIcon.addEventListener("click", function () {
        var tl = gsap.timeline();
        tl.to("#hamburger", {
            display: "block",
            right: 0
        })
        tl.from('#hamburger h3 span', {
            y: 40,
            rotate: 50,
            duration: 0.5,
            stagger: 0.2
        })
    })
    hamClose.addEventListener("click", function () {
        gsap.to("#hamburger", {
            display: "none",
            right: '-25vw'
        })
    })
}
const handleHamburgerMobile = () => {
    const hamIcon = document.querySelector("#hamIcon");
    const hamClose = document.querySelector("#hamClose");
    hamIcon.addEventListener("click", function () {
        var tl = gsap.timeline();
        tl.to("#hamburger", {
            display: "block",
            top: 0
        })
        tl.from('#hamburger h3 span', {
            y: 40,
            rotate: 50,
            duration: 0.5,
            stagger: 0.2
        })
    })
    hamClose.addEventListener("click", function () {
        gsap.to("#hamburger", {
            display: "none",
            top: '-100%'
        })
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

const productWindowHandler = () => {
    const products = document.querySelector('#products');
    const product1 = document.querySelector('#product1');
    const product2 = document.querySelector('#product2');
    const product3 = document.querySelector('#product3');
    const product4 = document.querySelector('#product4');

    const windowContainer = document.querySelector('#windowContainer');
    const windowCont = document.querySelector('#windowCont');
    const window1 = document.querySelector('#window1');
    const window2 = document.querySelector('#window2');
    const window3 = document.querySelector('#window3');
    const window4 = document.querySelector('#window4');

    products.addEventListener('mouseenter', () => {
        // windowContainer.style.display = 'block'
        gsap.to(windowContainer, {
            display: 'block',
            scale: 1,
            duration: 0.5,
        })
    })
    products.addEventListener('mouseleave', () => {
        // windowContainer.style.display = 'none'
        gsap.to(windowContainer, {
            display: 'none',
            scale: 0.1,
            duration: 0.3,
        })
    })

    const clearAnimations = () => {
        gsap.killTweensOf([windowCont, window1, window2, window3, window4]);
    };

    product1.addEventListener('mouseenter', () => {
        clearAnimations();
        animateWindows(0, 0);
    });

    product2.addEventListener('mouseenter', () => {
        clearAnimations();
        animateWindows(35, 40);
    });

    product3.addEventListener('mouseenter', () => {
        clearAnimations();
        animateWindows(70, 80);
    });

    product4.addEventListener('mouseenter', () => {
        clearAnimations();
        animateWindows(105, 120);
    });

    const animateWindows = (pos, pos2) => {
        gsap.to(windowCont, {
            y: pos + 'vh'
        });
        gsap.to(window1, {
            y: -pos2 + 'vh'
        });
        gsap.to(window2, {
            y: -pos2 + 'vh'
        });
        gsap.to(window3, {
            y: -pos2 + 'vh'
        });
        gsap.to(window4, {
            y: -pos2 + 'vh'
        });
    };
};

productWindowHandler();

productWindowHandler();
handleNavbar();
footerEmailClear();
LoadingAnimation();
LocomotiveJs();


if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    gsapAnimation();
    handleHamburger();

}
else {
    // gsapForMobile();
    handleHamburgerMobile();
}