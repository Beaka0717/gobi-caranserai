$(function () {
    //보여지는 배너를 체크할 변수
    let showBanner = 0;
    let moveX = 0;

    //복사
    let cloneObj = $(".slide_group>li").eq(0).clone();
    $(".slide_group").append(cloneObj);
    let liWidth = $(".slide_group>li").eq(0).width();
    let slider = $(".slide_group");
    //배너의 개수
    let count = $(".slide_group>li").length;
    console.log(count);

    //자동으로 이동
    let timer;

    //  function moveSlide() {
    // moveX = -liWidth * showBanner;
    //      $(".slide_group").stop().animate({
    //          "margin-left": moveX + "px"
    //      }, 500);

    //      if (showBanner === 5) {
    //          $(".slide_group>li").eq(0).addClass("active")
    //              .siblings("li").removeClass("active");
    //      }
    //      else {
    //          $(".slide_group>li").eq(showBanner).addClass("active")
    //              .siblings("li").removeClass("active");
    //      }
    //  }

    // 오른쪽버튼을 클릭하면 배너한개를 왼쪽으로 이동
    // $("#arrow").on("click", function () {
    //     console.log(daragdsan);
    //     if (showBanner === count - 1) {
    //         showBanner = 0;
    //         $("slide_group").css("margin-left", 0)
    //     }
    //     showBanner++;
        // moveSlide();
    })

    // mini hiisen animate
     $("#arrow").click(function(){
    //     slider.stop().animate({left:-liWidth + 'px'}, 500, function(){
    //     slider.css('left', 0);
        alert('click ok');
        // if (showBanner === count - 1) {
        //     showBanner = 0;
        //     $("slide_group").css("margin-left", 0)
        // }
        // showBanner++;
     });

      
    // })



    //왼쪽버튼을 클릭하면 배너한개를 오른쪽으로 이동
    // $("#arrow").on("click", function () {
    //     if (showBanner === 0) {
    //         showBanner = count - 1;
    //         $(".slide_group").css("margin-left", -(count - 1) * liWidth)
    //     }
    //     showBanner--;
    //     // moveSlide();
    // })

    // 버튼버튼을 클릭하면 해당하는 배너가 슬라이딩되면서 보이도록
    // $("#arrow").on("click", function () {
    //     console.log(daragdsan);
    //     showBanner = $(this).index();
    //     // moveSlide();
    // })

    // 3초마다 배너가 하나씩 이동하도록 
    // 오른쪽버튼을 클릭한것처럼 한개씩 왼쪽으로 이동

    // timer = setInterval(() => {
    //     $(".rightBtn").trigger("click");
    // }, 3000)

    // // 배너에 마우스를 올리면 배너가 중지
    // // 마우스가 벗어나면 배너 자동실행
    // $("#mainBanner").on({
    //     "mouseover":function(){
    //         clearInterval(timer)
    //     },
    //     "mouseout":function(){
    //         timer = setInterval(() => {
    //             $(".rightBtn").trigger("click");
    //         }, 3000)
    //     }
    // })
