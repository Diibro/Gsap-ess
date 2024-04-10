gsap.set(".box", {
     opacity:0,
     background: "yellow",
     scale: 0.1
})

gsap.to('.box', {
     opacity:1,
     background: '#fff',
     duration:3,
     y:100,
     repeat: -1,
     yoyo: true,
     scale: 2
})