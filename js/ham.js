window.onload = function () {
  const hamBtn = document.querySelector(".hamburger-menu-icon");
  const hamCross = document.querySelector(".open");
  const hamMenu = document.querySelector(".menuWrapper");
  const nav = document.querySelector("#nav");

  hamBtn.addEventListener("click", function () {
    console.log("clicked");

    if (hamBtn.classList.contains("open")) {
      hamBtn.classList.remove("open");

      hamMenu.classList.add("out");
      nav.style.display = "none";
    } else {
      hamBtn.classList.add("open");
      nav.style.display = "inline-block";
      hamMenu.classList.remove("out");
      hamMenu.style.display = "block";
    }
  });

  // banner
  let minusBtn = document.querySelector("#left");
  let plusBtn = document.querySelector("#right");
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("videoWrapper");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  minusBtn.addEventListener("click", function () {
    showSlides((slideIndex += -1));
  });
  plusBtn.addEventListener("click", function () {
    showSlides((slideIndex += 1));
  });

  // menu-Scroll
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("menu-scroll", window.scrollY > 0);
  });

  let tmpWidth = 1;
  let liWidth = $(".slide_groupE>li").eq(0).width();
  let liCount = $(".slide_groupE>li").length;
  let slider = $(".slide_groupE");
  //배너의 개수

  //   next ,arrow btn

  $("#arrow").click(function () {
    slider
      .stop()
      .animate({ left: -liWidth * tmpWidth + "px" }, 500, function () {
        tmpWidth++;
        // console.log("tmpWidth : " + tmpWidth + " / liWidth : " + liWidth);
        if (tmpWidth == liCount) {
          tmpWidth = 0;
        }
      });
  });

  let tmpEWidth = 1;
  let liWidthE = $(".slide_group>li").eq(0).width();
  let liCountE = $(".slide_group>li").length;
  let sliderE = $(".slide_group");

  $("#next").click(function () {
    sliderE
      .stop()
      .animate({ left: -liWidthE * tmpEWidth + "px" }, 500, function () {
        tmpEWidth++;
        // console.log("tmpWidth : " + tmpWidth + " / liWidth : " + liWidth);
        if (tmpEWidth == liCountE) {
          tmpEWidth = 0;
        }
      });
  });

  // calendar
  let container = document.querySelector(".calend-first");
  let toggleBtn = document.querySelector(".toggle-btn");

  dycalendar.draw({
    target: "#dycalendar",
    dayformat: "full",
    type: "month",
    monthformat: "mmm",
    highlighttoday: true,
    prevnextbutton: "show",
  });

  // toggleBtn.onclick = () => {
  //   container.classList.toggle("dark");
  //   document.body.classList.toggle("background-dark");
  // };

//   calendar2
let container2 = document.querySelector(".calend-second");
// let toggleBtn = document.querySelector(".toggle-btn");

dycalendar.draw({
  target: "#dycalendar2",
  dayformat: "full",
  type: "month",
  monthformat: "mmm",
  highlighttoday: false,
  prevnextbutton: "show",
  
});
// toggleBtn.onclick = () => {
//   container.classList.toggle("dark");
//   document.body.classList.toggle("background-dark");
// };





// adult 
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
//children
$(document).ready(function() {
  $('.minusCh').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 0 ? 0 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.plusCh').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });
});

//선택 완료 버튼

$("#spin").click(function () {
  var target = $(this);
  if (target.hasClass("done")) {
    
  } else {
    // 버튼 효과
    target.addClass("processing");
    setTimeout(function () {
      target.removeClass("processing");
      target.addClass("done");
      $(".dispNone").fadeOut(800);
    }, 1000);

    // 데이터 이동 처리
    var adultCnt = $("#adultCnt").val();
    var childCnt = $("#childCnt").val();

    $(".adult p").text(adultCnt);
    $(".children p").text(childCnt);
    
  }
});

// reservation fadeout fadein
// $(".calend-show-hide").fadeOut();

// if($(".calend-show-hide").fadeOut()){
//   $(".calend-show-hide").fadeIn("slow");
// };
// $('.calend-show-hide').hide();


$(".reservation").click(function(){
  $(".dispNone").fadeToggle(800);

  if ($("#spin").hasClass("done")) {
    $("#spin").removeClass("done");
  }

});

$("#submit-btn").click(function(){
  $(".dispNone").fadeOut(800);
  
});


// 체크인 달력 클릭 이벤트
$(".calend-first td").click(function() {
  // 선택된 날짜 가져오기
  var firstDtm = $(this).text();
  if (firstDtm == "") {
    return;
  }

  // 년, 월 가져오기
  var monthYear = $(".calend-first .dycalendar-span-month-year").text();

  // 선택한 날짜 넣기
  $(".res-checkIn p").text(monthYear + " - " + firstDtm);

  // 기존 선택된 효과 제거
  $(".calend-first .dycalendar-today-date").removeClass("dycalendar-today-date");
  // 선택한 날짜에 효과 추가
  $(this).addClass("dycalendar-today-date");
})

// 체크아웃 달력 클릭 이벤트
$(".calend-second td").click(function() {
  var firstDtm = $(this).text();
  if (firstDtm == "") {
    return;
  }
  var monthYear = $(".calend-second .dycalendar-span-month-year").text();

  $(".res-checkOut p").text(monthYear + " - " + firstDtm);

  $(".calend-second .dycalendar-today-date").removeClass("dycalendar-today-date");
  $(this).addClass("dycalendar-today-date");
})



// INCLUDE JQUERY & JQUERY UI 1.12.1
// $( function() {
// 	$( "#datepicker" ).datepicker({
// 		dateFormat: "dd-mm-yy"
// 		,	duration: "fast"
// 	});
// } );

// $( function() {
// 	$( "#datepickerE" ).datepicker({
// 		dateFormat: "dd-mm-yy"
// 		,	duration: "fast"
// 	});
// } );


// swiperjs 
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
loop:true,
  coverflowEffect: {
    // rotate: 30,
    stretch: 0,
    // depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
};
