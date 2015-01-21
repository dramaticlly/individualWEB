$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
    
    $("#edubtn")
    .on("click",function(){
        $("#mottoh1").html("I am UofT ECE student, expected to graduate in 2017 Spring.");
        $("#mottoimg").attr("src","images/ecelogo2.png");
        $("#mottop").css("display","none");
        console.log("education btn click");
    })
/*    .mouseout(function(){
        $("#mottoh1").html("Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.");
        $("#mottoimg").attr("src","images/motto.png");
        $("#mottop").css("display","");
        console.log("education btn leave");    
    })
*/  ;
    
    $("#workbtn")
    .on("click",function(){
        $("#mottoh1").html("I am currently working as a QA developer in IBM Canada Ltd for 16-month internship");
        $("#mottoimg").attr({
            src:"images/ibm2.png",
            });
        $("#mottop").css("display","none");
        console.log("work btn click");        
    })
 /*   $("#workbtn").mouseout(function(){
    
        console.log("debug trial3");
    })
*/;
    $("#codebtn")
    .on("click",function(){
        $("#mottoh1").html("I am experienced with Procedural, Obeject-oriented and script Programmming, familiar with major IDE, version-control software and Linux cmd");
        $("#mottoimg").attr({
            src:"images/code.png"
            });
        $("#mottop").css("display","none");
        console.log("coding btn click"); 
    });
/*    $("#codebtn").mouseout(function(){
    
        console.log("debug trial5");
    });
*/
    $("#resume")
    .hover(function(){
        $(this).animate({opacity:1.0},700);
        console.log("cursor to resume img");
    }
    ,function(){
         $(this).animate({opacity: 0.3},700);
        console.log("cursor move out resume img");
    });
});
