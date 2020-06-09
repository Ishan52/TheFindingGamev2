//D in functions stands for difficult

// to-
// Game score, Find Dragon text, rules, UI , font-family

let t = 1000;
let easy = true;
let hScore = 0;
let score = 0;
let classes = [
  "icofont-bat",
  "icofont-bird",
  "icofont-dog-alt",
  "icofont-elephant",
  "icofont-fish",
  "icofont-fox",
  "icofont-gorilla",
  "icofont-panda",
  "icofont-penguin",
];
var id1, id2, id3, id4, id5;
var aa = true;

$(".easy").on("click", function () {
  $(".square").find("i").removeClass();
  easy = true;
  $(".square").removeClass("size");
  $(".square").find(".show").text("");
  $(".square").find(".result").text("");
  ref();
  score = 0;
  $(".game").text("Find '1'");
  $(".score").text(score);
  console.log(score);

  $(".difficult").css("background", "seashell");
  $(".difficult").css("color", "black");
  $(".easy").css("background", "rgb(41, 39, 218)");
  $(".easy").css("color", "seashell");

  $(".start").off("click");

  $(".start").on("click", function () {
    $(this).text("REFRESH?");
    score = 0;
    $(".square").find(".show").text("");
    $(".square").find(".result").text("");
    $(".score").text(score);
    console.log(score);
    $(".square").removeClass("change");
    $(".square").removeClass("size");
    setTimeout(ref, 1000);
  });
});

$(".difficult").on("click", function () {
  easy = false;
  $(".square").removeClass("size");
  $(".square").find(".show").text("");
  $(".square").find(".result").text("");
  refD();
  $(".game").text("Find the Gorilla!");
  score = 0;
  console.log(score);
  $(".score").text(score);

  $(".easy").css("background", "seashell");
  $(".easy").css("color", "black");
  $(".difficult").css("background", "rgb(41, 39, 218)");
  $(".difficult").css("color", "seashell");

  $(".start").off("click");
  $(".start").on("click", function () {
    $(this).text("REFRESH?");
    $(".square").find(".show").text("");
    $(".square").find(".result").text("");
    score = 0;
    $(".score").text(score);

    $(".square").removeClass("change");
    $(".square").removeClass("size");
    setTimeout(refD, 1000);
  });
});

//first click on start

$(".start").on("click", function () {
  // $(this).text("");
  $(".start").text("REFRESH?");
  // $(".start").css("width", "0");
  $(this).off("click");
  $(".game").text("Find '1'");
  $(".sir").css("display", "block");
  setTimeout(i3, 1000);
  $(".htp").css("background", "rgb(34, 34, 34)");

  console.log(score);

  setTimeout(ini, 4000);
});

function i3() {
  $(".si p").text("THE GAME STARTS IN 2..");
  setTimeout(i2, 1000);
}
function i2() {
  $(".si p").text("THE GAME STARTS IN 1..");
  setTimeout(i1, 1000);
}
function i1() {
  // $(".start").text("REFRESH?");
  // $(".start").css("width", "auto");
  $(".si p").text("GO!!");
}

function ini() {
  setupSquares();
  randomNo();
  $(".easy").css("display", "flex");
  $(".difficult").css("display", "flex");
  $(".sir").css("display", "none");
  $(".secr").css("display", "block");
  $(".square").addClass("change");
  id1 = setTimeout(rem3, 1600);

  $(".start").off("click");
  $(".start").on("click", function () {
    $(this).text("REFRESH?");
    score = 0;
    $(".score").text(score);
    $(".square").removeClass("change");
    setTimeout(ref, 1000);
  });
}

function ref() {
  $(".square").find("i").removeClass();
  t = 1000;
  randomNo();
  $(".square").addClass("change");
  id2 = setTimeout(rem3, t);
}
function refD() {
  $(".square").find("p").text("");
  t = 1000;
  ricon();
  $(".square").addClass("change");
  id3 = setTimeout(rem3, t);
}

function randomNo() {
  var r = Math.floor(Math.random() * 9);
  $(".square").find(".show").text("0");
  $(".square").find(".show").eq(r).text("1");
}
function ricon() {
  $(".square").find("i").removeClass();
  for (let i = classes.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [classes[i], classes[j]] = [classes[j], classes[i]];
  }
  for (var i = 0; i < classes.length; i++) {
    $(".square").find("i").eq(i).addClass(classes[i]);
  }
}

function setupSquares() {
  $(".square").click(function () {
    aa = true;
    $(this).addClass("change");
    // let icon = $(this).find("i").attr("class").split(" ").slice(-1);
    let icon = $(this).find("i").attr("class");
    if ($(this).find("p").text() === "1" || icon == "icofont-gorilla") {
      $(".square").addClass("change");
      $(".square").find("i").removeClass();
      $(".square").find(".show").text("");
      $(".square").find(".result").text("Found it!!");
      score = score + 100;
      $(".score").text(score);
      if (easy) {
        rep();
      } else {
        repD();
      }
    } else {
      clearTimeout(id1);
      clearTimeout(id2);
      clearTimeout(id3);
      if (easy) {
        clearTimeout(id4);
      } else {
        clearTimeout(id5);
      }
      aa = false;

      $(".square").addClass("change");
      $(".square").find(".result").text(" Game Over");
      $(".square").addClass("size");

      $(".replay").text("Wanna play again?");
      if (score > hScore) {
        hScore = score;
      }
      $(".hscore").text(hScore);
      score = 0;
    }
  });
}

function rep() {
  console.log("called");
  id4 = setTimeout(rem2, 1200);
}

function rem2() {
  console.log(aa);
  if (aa) {
    $(".square").removeClass("change");
    $(".square").find(".result").text("");
    setTimeout(part1, 100);
  }
}
function part1() {
  randomNo();
  if (t > 110) {
    t = 0.8 * t;
  }
  if (score > 1300) {
    t = 100;
  }
  if (score > 1600) {
    t = 95;
  }
  if (score > 1800) {
    t = 90;
  }
  if (score > 2100) {
    t = 82;
  }
  if (score > 2500) {
    t = 70;
  }
  if (score > 2700) {
    t = 60;
  }
  if (score > 3000) {
    t = 40;
  }
  if (score > 3400) {
    t = 10;
  }
  if (score > 3800) {
    t = 0;
  }
  // t = 0.8 * t;
  console.log(t);
  setTimeout(add1, 1000);
}

function add1() {
  $(".square").addClass("change");
  setTimeout(rem3, t);
}

function repD() {
  id5 = setTimeout(rem2D, 1200);
}

function rem2D() {
  console.log(aa);
  if (aa) {
    $(".square").find(".show").text("");
    $(".square").find(".result").text("");
    $(".square").removeClass("change");
    setTimeout(part1D, 100);
  }
}
function part1D() {
  ricon();
  if (t > 110) {
    t = 0.8 * t;
  }
  if (score > 1300) {
    t = 100;
  }
  if (score > 1600) {
    t = 95;
  }
  if (score > 1800) {
    t = 90;
  }
  if (score > 2100) {
    t = 82;
  }
  if (score > 2500) {
    t = 70;
  }
  if (score > 2700) {
    t = 60;
  }
  if (score > 3000) {
    t = 40;
  }
  if (score > 3400) {
    t = 10;
  }
  if (score > 3800) {
    t = 0;
  }
  console.log(t);
  setTimeout(add1D, 1000);
}
function add1D() {
  $(".square").addClass("change");
  setTimeout(rem3, t);
}

function rem3() {
  $(".square").removeClass("change");
}
