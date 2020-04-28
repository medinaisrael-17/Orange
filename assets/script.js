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

const creativityTween = new TweenMax.to("#text-box-2 h1", 1, {
    top: 0
})

const creativityScene = new ScrollMagic.Scene({
    triggerElement: "#section-2",
    duration: 300
})
    .setTween(creativityTween)
    .addTo(controller);

const albumScene = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    duration: 50,
    reverse: false
})
    .setClassToggle(".album", "bounceIn")
    .addIndicators()
    .addTo(controller); 