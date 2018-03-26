window.onload = function() {

var tl = new TimelineMax({
  paused:true
});
// letter animation
tl.fromTo("#label", 5, {
  width: "0",
}, {
  width: "9em", /* same as CSS .line-1 width */
  ease:  SteppedEase.config(37)
}, 0);
// text cursor animation
tl.fromTo("#label", 0.5, {
  "border-right-color": "rgba(255,255,255,0.75)"
}, {
  "border-right-color": "rgba(255,255,255,0)",
  repeat: -1,
  ease:  SteppedEase.config(37)
}, 0);

tl.play();
    
}