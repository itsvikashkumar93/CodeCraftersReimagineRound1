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
        y:350,
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
}




LoadingAnimation()
LocomotiveJs();
gsapAnimation()



if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    gsapAnimation();
    VanillaTilt.init(document.querySelectorAll(".box"),{
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0,
    })
    
}
else {
    gsapForMobile();
}