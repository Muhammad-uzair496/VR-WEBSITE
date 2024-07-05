function locomotivesmooth() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotivesmooth()

function navbaranimation() {
    gsap.from('.logo', {
        y: -100,
        duration: 2,
    })

    gsap.from('.navbar', {
        y: -100,
        duration: 2,
    })
}
navbaranimation()

function firstpageanimation() {
    gsap.from('#first-section .first-main-page-text', {
        y: 500,
        x: -500,
        delay: 0.5,
        duration: 2,
        scale: 0,
        opacity: 0,
    })

    gsap.from('#first-section .first-main-page-video', {
        y: 500,
        x: 500,
        delay: 0.5,
        duration: 2,
        scale: 0,
        opacity: 0,
    })
}
firstpageanimation()

function secondpage() {
    gsap.from('#second-section .second-page-images', {
        y: 100,
        duration: 1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#second-section",
            scroller: "#main",
            markers: false,
            start: "top 5%",
        }

    })
}
secondpage()

function thirdpage() {
    gsap.from('#third-section .third-section-images', {
        x: -1000,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#third-section .third-section-images",
            scroller: "#main",
            markers: false,
            start: "top 10%",
        }

    })

    gsap.from('#third-section .third-section-text', {
        x: 1000,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#third-section .third-section-text",
            scroller: "#main",
            markers: false,
            start: "top 40%",
        }

    })
}
thirdpage()

function fourthpage() {
    gsap.from('#fourth-section .fourth-section-text', {
        x: -1000,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#fourth-section .fourth-section-text",
            scroller: "#main",
            markers: false,
            start: "top 30%",
        }

    })

    gsap.from('#fourth-section .fourth-section-picture', {
        x: 1000,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: "#fourth-section .fourth-section-picture",
            scroller: "#main",
            markers: false,
            start: "top 30%",
        }

    })
}
fourthpage()

function mobileanimation() {
    gsap.from("#first-mobile-section .first-main-page-text", {
        x: -1000,
        duration: 2,
        opacity: 0,
        scale: 0,
    })
    gsap.from("#first-mobile-section .first-main-page-video", {
        y: 1000,
        duration: 2,
        opacity: 0,
        scale: 0,
    })

    gsap.from("#mobile-first-section .second-page-img", {
        y: 1000,
        duration: 1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: '#mobile-first-section',
            markers: false,
            start: 'top 90%',
            scroller: "#main"
        }
    })

    gsap.from("#third-mobile-section .third-section-text", {
        y: -1000,
        duration: 1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: '#third-mobile-section',
            markers: false,
            scroller: "#main",
            start: 'top 80%'
        }
    })

    gsap.from("#third-mobile-section .third-section-images", {
        y: 1000,
        duration: 1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: '#third-mobile-section',
            markers: false,
            scroller: "#main",
            start: 'top 60%'
        }
    })

    gsap.from("#fourth-mob-section .fourth-section-text", {
        x: -500,
        duration: 1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: '#fourth-mob-section',
            markers: false,
            scroller: "#main",
            start: 'top 80%'
        }
    })

    gsap.from("#fourth-mob-section .fourth-section-picture", {
        x: -500,
        duration: 1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: '#fourth-mob-section',
            markers: false,
            scroller: "#main",
            start: 'top 80%'
        }
    })

}
mobileanimation()