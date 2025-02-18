gsap.to(".scroll", {
    transform: 'translate(-100%)',
    duration: 3,
    repeat: -1,
    ease: "none"
});

var tl = gsap.timeline()

tl.from(".images img:nth-child(1)",{
    y:-30,
    opacity:0,
    duration:0.6,
    scale:0.3

})

tl.from(".images img:nth-child(2)",{
    y:-30,
    opacity:0,
    duration:0.6,
    scale:0.3

})

tl.from(".images img:nth-child(3)",{
    y:-20,
    opacity:0,
    duration:0.6,
    scale:0.3
})
tl.from(".images img:nth-child(4)",{
    y:-20,
    opacity:0,
    duration:0.6,
    scale:0.3
})
tl.from(".images img:nth-child(5)",{
    y:-20,
    opacity:0,
    duration:0.6,
    scale:0.3
})
