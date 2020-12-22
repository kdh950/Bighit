$(document).ready(function(){
    

    // wow.js - 애니메이션 css가 화면에서 보일 때(스크롤 되었을때) 작동
    new WOW().init();



    // 햄버거버튼 클릭 - .nav_mo 보인다
    $("header .header_ham").click(function(){
        $(".nav_mo").fadeIn();
    });

    $(".btn_close").click(function(){
        $(".nav_mo").fadeOut();
    });

    // 모바일 상태에서 .nav_mo가 보이는 상황에서 화면이 넓어지면 style이 그대로 남아있는 상태가 되는 걸 방지
    $(window).resize(function(){
        const w = $(window).width();    // 브라우저의 가로 길이를 변수w에 넣어준다
        if( w > 768){                   // 모바일상태보다 화면이 커졌을때
            $(".nav_mo").removeAttr("Style");
        }
    })


   



});      