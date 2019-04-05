var tl = new TimelineMax();

tl.set('#container', {
  rotation: -5
})
.to('#container', 1, {
  rotation: 5,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

TweenMax.to('.stars', .5, {
  scaleX: 0,
  scaleY: 0,
  opacity: 0.5,
  yoyo: true,
  repeat: -1,
  ease: Power1.easeInOut
});
