var cursr = document.querySelector("#cursor")
var cursrbck = document.querySelector("#cursorbck")
document.addEventListener("mousemove", function (position) {
    cursr.style.left = position.x + "px"
    cursr.style.top = position.y + "px"
    cursrbck.style.left = position.x - 225 + "px"
    cursrbck.style.top = position.y - 225 + "px"
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