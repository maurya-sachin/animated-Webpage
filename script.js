var cursr = document.querySelector("#cursor")
var cursrbck = document.querySelector("#cursorbck")
document.addEventListener("mousemove", function (position) {
    cursr.style.left = position.x + 15 + "px"
    cursr.style.top = position.y + "px"
    cursrbck.style.left = position.x - 225 + "px"
    cursrbck.style.top = position.y - 225 + "px"
})

var navh4 = document.querySelectorAll("#nav h4")
navh4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursr.style.scale = 4
        cursr.style.border = "1px solid #fff"
        cursr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        cursr.style.scale = 1
        cursr.style.border = "0px solid #95C11E"
        cursr.style.backgroundColor = "#95C!!E"
    })
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})

// gsap.from(".cards",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     stagger:0.1,
//     scrollTrigger:{
//         trigger:".cards",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:2
//     }
// })

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: " top 65%",
        scrub: 2.5
    }
})


gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers: true,
        start: "bottom 90%",
        end: " bottom 80%",
        scrub: 2.5
    }
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -75%",
        scrub: 2
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: " bottom 99%",
        scrub: 2
    }
})