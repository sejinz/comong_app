$(document).ready(function(){
    $(".layer").click(function(){
        $(".popup").show();
        $(".bg").show();
    });

    $(".close").click(function(){
        $(".popup").hide();
        $(".bg").hide();
    });

}); //끝