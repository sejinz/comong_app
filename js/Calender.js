var today = new Date();
var nowyear = today.getFullYear(); //2022
var nowMonth = today.getMonth(); //3(4월_0부터 시작)
var nowDay = today.getDate(); // 1

function prevMonth(){ //월 감소하는 함수
    nowMonth--;
    if(nowMonth < 0){
        nowyear--;
        nowMonth = 11;
}
calendarFunc();
}
function nextMonth(){//월 증가하는 함수
    nowMonth++;
    if(nowMonth > 11){
        nowyear++;
        nowMonth = 0;
    }
    calendarFunc();
}
function calendarFunc(){
    var firstDay = new Date(nowyear, nowMonth,1);
    var blankNum = firstDay.getDay();  //일~토(0~6) // 금요일 5 // 빈칸개수
    console.log(blankNum);

    var totDay=[31,28,31,30,31,30,31,31,30,31,30,31];

var totDay=[31,28,31,30,31,30,31,31,30,31,30,31];
if((nowyear%4==0 && nowyear%100 !=0 || nowyear%400 ==0)){
    totDay[1]=29;
}
var total = totDay[nowMonth];

var rowNum = Math.ceil((blankNum+total)/7); //필요한 행의 개수

var theTag=" ";
theTag += '<ul><li><a href="#" onclick="prevMonth()"><img src="images/prev.png"></a></li>'+'&nbsp' +'&nbsp' +'&nbsp' ;
theTag +="<li style ='color:#FFBA00; font-size: 20px; font-weight: bold;'>" + nowyear +'&nbsp' +'&nbsp' + (nowMonth+1)+'&nbsp' +'&nbsp' + '</li>';
theTag += '<li><a href="#" onclick="nextMonth()"><img src="images/arrow.png"></a></li></ul>';

theTag += "<table>";

theTag += "<thead><tr>"
theTag += "<th style ='color:#FF1B1B;'>S</th> <th>M</th><th>T</th><th>W</th><th>T</th><th>F</th> <th>S</th>"
theTag += "</tr></thead>";

theTag += "<tbody>";
var num=1;
for(var i=1; i<=rowNum; i++){ //5행
    theTag += "<tr>";
        for(var col=1; col<=7; col++){ //7열
                if(i==1 && col <= blankNum || num > total){
                    theTag += "<td></td>"; //빈칸
                }else{
                    /*theTag += "<td>"+ num +"</td>"; */
                    var theColor = "";
                    var bgColor="";
                    if(col==1) theColor =' style="color:#FF1B1B;"';
                    // if(col==7) theColor =' style="color:blue;"';
                    if(num==nowDay) bgColor ='style="background-color:#ffdf85; border-radius: 10px; "';

                   theTag += "<td "+bgColor+theColor+">"+ num +"</td>";
                    num++;
                }
        }
    theTag += "</tr>";
}

theTag += "</tbody>";

theTag += "</table>";

document.getElementById("calendar").innerHTML = theTag;
}
window.addEventListener("load",calendarFunc,false);