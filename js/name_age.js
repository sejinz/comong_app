$(document).ready(function(){

    $(".dupe").click(function(){
        $(".name .hide").show();
    })

    // 나이 선택 
    $(".check>ul>li>a").click(function(){
        $(this).css("background","#ffc629").css("color","#fff");
    });
}); //끝