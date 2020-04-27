const controller = new ScrollMagic.Controller();

const poemTween = new TweenMax.to("#poem p:nth-child(1)", 1, {
    opacity: 1
})

const poemScene = new ScrollMagic.Scene({
    triggerElement: "#poemTrigger",
    duration: 500
})
    .setTween(poemTween)
    .addTo(controller)