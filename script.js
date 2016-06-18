window.addEventListener("load", function() {
  var load_screen = document.getElementById("load_screen");
  document.body.removeChild(load_screen);
});
(function() {
  var bodyEl = $('body'),
    navToggleBtn = bodyEl.find('.nav-toggle-btn');
  navToggleBtn.on('click', function(e) {
    if ($(e.target).hasClass("nav-toggle-btn")) {
      bodyEl.toggleClass('active-nav');
      e.preventDefault();
      e.stopPropagation();
    }

  });
});

$(".menu2").click(function() {

  $('html,body').animate({
      scrollTop: $work
    },
    1500);
});

$(".menu1").click(function() {
  $('html,body').animate({
      scrollTop: $(".content").offset().top
    },
    'slow');
});

$(".menu3").click(function() {
  $('html,body').animate({
      scrollTop: $about
    },
    1500);
});

$(".menu5").click(function() {

  $('html,body').animate({
      scrollTop: $resume
    },
    2000);
});
$("#movedown1").click(function() {
  $('html,body').animate({
      scrollTop: $work
    },
    1500);
});
$("#moveup5").click(function() {
  $('html,body').animate({
      scrollTop: $(".logo1").offset().top - 100
    },
    5000);
});

$("#moveup4").click(function() {
  $('html,body').animate({
      scrollTop: $(".About").offset().top
    },
    2000);
});

$("#moveup3").click(function() {
  $('html,body').animate({
      scrollTop: $(".container").offset().top
    },
    2000);
});

$("#moveup2").click(function() {
  $('html,body').animate({
      scrollTop: $(".content").offset().top
    },
    2000);
});

$("#resumeButton").click(function() {
  $('html,body').animate({
      scrollTop: $("#resumebody").offset().top
    },
    3000);
});

$("#movedown2").click(function() {
  $('html,body').animate({
      scrollTop: $(".About").offset().top
    },
    2000);
});

$("#movedown3").click(function() {
  $('html,body').animate({
      scrollTop: $("#resumebody").offset().top
    },
    2000);
});
$(document).ready(function() {
  $(".menu1").click(function() {
    $("#resume").hide();
  });
  $(".menu2").click(function() {
    $("#resume").hide();
  });
  $(".menu3").click(function() {
    $("#resume").hide();
  });
});

$(".menu5").click(function() {
  $("#resume").show();
  $('html,body').animate({
      scrollTop: $("#resume").offset().top
    },
    'slow');
});

var $navTop = $('#resMenu').offset().top;
var $work = $(".container").offset().top - 220;
var $work1 = $(".container").offset().top;
var $about = $(".About").offset().top - 230;
var $resume = $("#resumebody").offset().top - 230;
var $footer = $("footer").offset().top;
$(document).on('scroll', function() {
  var $scrollTop1 = $(window).scrollTop();
  if ($scrollTop1 >= ($work) && $scrollTop1 < $about) {

    $('.menu2').css('background', '#a7dbd8');
    $(".menu3").css("background", "none");
    $(".menu5").css("background", "none");
  } else if ($scrollTop1 >= $about && $scrollTop1 < $resume) {
    $(".menu3").css("background", "#e0e4cc");
    $(".menu2").css("background", "none");
    $(".menu5").css("background", "none");
  } else if ($scrollTop1 >= $resume && $scrollTop1 < $footer) {
    $(".menu5").css("background", "#f38630");
    $(".menu2").css("background", "none");
    $(".menu3").css("background", "none");
  } else if ($scrollTop1 >= $footer) {
    $(".menu5").css("background", "none");
    $(".menu2").css("background", "none");
    $(".menu3").css("background", "none");
  } else {
    $(".menu5").css("background", "none");
    $(".menu2").css("background", "none");
    $(".menu3").css("background", "none");
  }
});
var sNav = function() {
  var $scrollTop = $(window).scrollTop();
  if ($scrollTop >= $navTop) {
    $('#resMenu').css('position', 'fixed');
    $('#resMenu').css('background', '#fff');

  } else {
    $('#resMenu').css('position', 'relative');
    $('#resMenu').css('background', 'rgba(42,46,57,0.53)');

  }
}

$(window).on('scroll', sNav);

$(document).on('scroll', function() {
  var $scrollTop2 = $(window).scrollTop();
  if ($scrollTop2 > 900) {
    $('.contactfade').fadeIn(2000);
  } else {
    $('.contactfade').fadeOut('slow');
  }
});