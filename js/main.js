//animating decimal numbers
var currentNumber = $("#dynamic-number").text();

$({ numberValue: currentNumber }).animate(
  { numberValue: 60.3 },
  {
    duration: 20000,
    easing: "linear",
    step: function (now) {
      $("#dynamic-number").text(now.toFixed(3));
    },
  }
);

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (start + end) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
const obj = document.getElementById("value");
animateValue(obj, 36, 47, 100000);
