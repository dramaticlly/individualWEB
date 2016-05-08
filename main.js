$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
    
    $("#edubtn")
    .on("click",function(){
        $("#mottoh1").html("I am a UofT ECE student, expected to graduate in 2017 Spring. I am enthuastic about both hardware implementation and software development");
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
        $("#mottoh1").html("I am currently working as a SDE intern in Amazon.com for summer 2016. I am responsible for developing webservice API on top existing package and designing new mobile application to empowered search merchandise of internest through both online and nearby offline brick store");
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
        $("#mottoh1").html("I am experienced with Procedural (<span>C</span>), Object-oriented (<span>C++</span>,<span>JAVA</span>) and script Programming (<span>Perl</span>, <span>python</span>), familiar with major IDE, revision-control software, <span>MATLAB</span>, <span>SQL</span> and Linux command");
        $("#mottoh1").find("span").css("color","#808080");
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
    $("#hireme")
    .on("click",function(){
        $(this).text("contact@zhanghongyue.com");
    });
        
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
