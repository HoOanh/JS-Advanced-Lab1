var cloudOne = gsap.timeline({ repeat: -1, delay: -12 });
cloudOne.to("#cloud-one", 36, { x: "-720px", ease: Linear.easeNone });

var cloudTwo = gsap.timeline({ repeat: -1, delay: -3 });
cloudTwo.to("#cloud-two", 24, { x: "-720px", ease: Linear.easeNone });

var cloudFour = gsap.timeline({ repeat: -1, delay: 4 });
cloudFour.to("#cloud-four", 33, { x: "-720px", ease: Linear.easeNone });

var cloudFive = gsap.timeline({ repeat: -1 });
cloudFive.to("#cloud-five", 24, { x: "-720px", ease: Linear.easeNone });

$("#email").focus(function () {
  if ($("#email").val() == "") {
    $("#placeholder").fadeToggle();
    $("#title").text("Welcome");
  }
});
$("#email").focusout(function () {
  if ($("#email").val() == "") {
    $("#placeholder").fadeToggle();
    $("#title").text("Join the Club");
  }
});

$(".fa-hand-point-right").mouseenter(function () {
  gsap.to("#btnSVG", 0.3, { fill: "#d85168" });
});
$(".fa-hand-point-right").mouseleave(function () {
  gsap.to("#btnSVG", 0.3, { fill: "#e96f8c" });
});
$(".fa-house-user").mouseenter(function () {
  gsap.to("#btnSVG2", 0.3, { fill: "#d85168" });
});
$(".fa-house-user").mouseleave(function () {
  gsap.to("#btnSVG2", 0.3, { fill: "#e96f8c" });
});

gsap.set("#mail", { scale: 0, x: 20, transformOrigin: "right" });

$("#email").keyup(function () {
  if ($("#email").val() !== "") {
    $("#title").text(`Welcome: ${$("#email").val()}`);
    var mailbox = gsap.timeline();
    mailbox.to({}, 1, {});
    mailbox.to("#mailbox-stick", 3, {
      rotate: -90,
      x: 15,
      transformOrigin: "left",
      ease: Elastic.easeOut,
    });
    mailbox.to("#cover-closed", 1, {
      delay: -3,
      y: -1,
      rotation: -180,
      transformOrigin: "bottom",
      ease: "Bounce.easeOut",
    });
    mailbox.to("#cover-open-side", 0.15, { delay: -2, opacity: 0 });
    mailbox.to("#heart", 0.15, { delay: -3, opacity: 0 });
    mailbox.to("#mail", 0, { delay: -3, opacity: 1, display: "block" });
    mailbox.to("#mail", 1, {
      delay: -3,
      scale: 1,
      x: 0,
      transformOrigin: "right",
      ease: "back.out",
    });
  } else {
    $("#title").text("Welcome");

    var mailbox = gsap.timeline();
    mailbox.to({}, 1, {});
    mailbox.to("#mailbox-stick", 3, {
      rotate: 0,
      x: 0,
      transformOrigin: "left",
      ease: Elastic.easeOut,
    });
    mailbox.to("#cover-closed", 1, {
      delay: -3,
      y: 1,
      rotation: 0,
      transformOrigin: "bottom",
      ease: "Bounce.easeOut",
    });
    mailbox.to("#cover-open-side", 0.15, { delay: -3, opacity: 1 });
    mailbox.to("#heart", 0.15, { delay: -2, opacity: 1 });
    mailbox.to("#mail", 0, { delay: -2, opacity: 0, display: "none" });
    mailbox.to("#mail", 1, {
      delay: -3,
      scale: 0,
      x: 0,
      transformOrigin: "right",
      ease: "back.out",
    });
  }
});

$(".fa-hand-point-right").click(function () {
  $("#textWrapperSecond").append(
    '<h1 id="titleSecond">Thank you for choosing the club!!</h1>'
  );
  var wrapper = gsap.timeline();
  wrapper.to("#svgWrapper", 1, { scale: 0.8, ease: Bounce.easeOut });
  wrapper.to("#svgWrapper", 1, {
    delay: -0.6,
    x: "-200%",
    rotate: 9,
    ease: Power1.easeIn,
  });
  wrapper.to("#title, #disclaimer, #btn, #email, #placeholder", 0, {
    opacity: 1,
    pointerEvents: "all",
  });

  wrapper.to("#inputSVG", 0, { morphSVG: { shape: "#inputSVG" }, y: 0 });
  wrapper.to("#btnSVG", 0, { morphSVG: { shape: "#btnSVG" }, y: 0 });
  wrapper.to("#success", 0, { opacity: 0 });
  wrapper.to("#mailbox-stick", 0, { rotate: 0, x: 0, transformOrigin: "left" });
  wrapper.to("#cover-closed", 0, {
    rotation: 0,
    y: 0,
    transformOrigin: "bottom",
  });
  wrapper.to("#cover-open-side", 0, { opacity: 1 });
  wrapper.to("#heart", 0, { opacity: 1 });
  wrapper.to("#mail", 0, {
    opacity: 0,
    scale: 0,
    x: 0,
    transformOrigin: "right",
    display: "none",
  });
  wrapper.to("#svgWrapperSecond", 0, { x: "250%" });
  wrapper.to("#svgWrapperSecond", 1.5, {
    x: "-50%",
    rotate: -9,
    ease: "back.out",
  });
  wrapper.to("#svgWrapperSecond", 1, {
    delay: -0.5,
    rotate: 0,
    scale: 1,
    ease: Bounce.easeOut,
  });
});
