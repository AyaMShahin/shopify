// animating decimal numbers
var currentNumber = $("#dynamic-number").text();

$({ numberValue: currentNumber }).animate(
  { numberValue: 60.345 },
  {
    duration: 25000,
    easing: "linear",
    step: function (now) {
      $("#dynamic-number").text(now.toFixed(5));
    },
  }
);
//Total Number animation
// animating decimal numbers
var currentTotal = $("#totalNumber").text();

$({ numberValue: currentTotal }).animate(
  { numberValue: 53.6 },
  {
    duration: 30000,
    easing: "linear",
    step: function (now) {
      $("#totalNumber").text(now.toFixed(5));
    },
  }
);
// Precent span animation
var currentPrecent = $("#precent").text();
$({ numberValue: currentPrecent }).animate(
  { numberValue: 4.2 },
  {
    duration: 30000,
    easing: "linear",
    step: function (now) {
      $("#precent").text(now.toFixed(1));
    },
  }
);
//Incremental Number
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

//Decremental Numb
function animateValueDecrement(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((startTimestamp - timestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (start + end) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
const stock = document.getElementById("stockNum");
animateValueDecrement(stock, 31, 17, 100000);

// Validate Email
$(document).ready(function () {
  $(".validate").click(function () {
    var regEmail = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var emailFormat = regEmail.test($("#email").val()); // This return result in Boolean type
    if (!emailFormat) {
      $(".error").text("Please enter a valid email  ex: aya@gmail.com");
    } else {
      $(".error").hide();
    }
  });
});
