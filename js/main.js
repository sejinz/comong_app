$(document).ready(function(){
    var banner =0;
    setInterval(function(){
        if(banner<1){
            banner++;
        }else{
            banner =0;
        }
        var slideposition = banner * (300)+"px"
        $(".all_bestbox").animate({right: slideposition},400);
    },3000);

// 탭메뉴 


















}); //끝 