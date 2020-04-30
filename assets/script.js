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

const albumBoxTween = new TweenMax.to("#album-box", 1, {
    display: "block"
})

const albumsScene = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    reverse: false
})
    .setClassToggle(".album", "zoomIn")
    .setTween(albumBoxTween)
    .addTo(controller); 

const neonCaptionTween = new TweenMax.to("b", .2, {
    color: "#fee",
    textShadow: `0 -40px 100px, 0 0 2px, 0 0 1em #ff7b00, 0 0 0.5em #ff7b00, 0 0 0.1em #ff7b00, 0 10px 3px #000`
})


const neonScene1 = new ScrollMagic.Scene({
    triggerElement: "#section-caption",
    reverse: true
})
    .setClassToggle("#span-1", "with-animation-1")
    .setTween(neonCaptionTween)
    .addTo(controller)

const neonScene2 = new ScrollMagic.Scene({
    triggerElement: "#section-caption",
    reverse: true
})
    .setClassToggle("#span-2", "with-animation-2")
    .addTo(controller)