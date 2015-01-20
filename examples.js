$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
    
    $("#edubtn")
    .on("click",function(){
        $("#mottoh1").html("I am UofT ECE student, Expected to graduate in 2017 Spring.");
        $("#mottoimg").attr("src","images/uoft.png");
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
        $("#mottoh1").html("I am currently working as a QA developer intern in IBM Canada Ltd");
        $("#mottoimg").attr({
            src:"images/ibm.png",
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
        $("#mottoh1").html("I am experience with Procedural, Obeject-oriented and script Programmming, familiar with major IDE, version-control software and Linux cmd");
        $("#mottoimg").attr({
            src:"images/ibm.png"
            });
        $("#mottop").css("display","none");
        console.log("coding btn click"); 
    });
/*    $("#codebtn").mouseout(function(){
    
        console.log("debug trial5");
    });
*/
});



    

/*
$(
    function(){
    function displayContent(content){
    //display the msg in the sloganBat
    $("#sloganBar").html(content);
    console.log("mouse on");
    return;
    }

//create event listener for the 3 logos
$("#logo_engineer").mouseover(function(){
    displayContent("Studying Electrical Engineering at U of T");
});
$("#logo_engineer").mouseout(function(){
    displayContent("Strive to Make a Difference");
});
$("#logo_code").mouseover(function(){
    displayContent("LAMP Stack Web Developer")
});
$("#logo_code").mouseout(function(){
    displayContent("Strive to Make a Difference")
});
$("#logo_tutor").mouseover(function(){
    displayContent("Professional Tutor of Math & Sciences")
});
$("#logo_tutor").mouseout(function(){
    displayContent("Strive to Make a Difference")
});

}
 );
 */