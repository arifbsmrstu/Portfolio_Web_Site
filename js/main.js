// ********* Main Menu ************ //
$(document).ready(function(){
    
    //Default ACTIVE menu initialization
        $("#a").show();
    
       // For Active Menu
        $('#menu ul li a').click(function(){
            
            $('#menu ul li a').removeClass('is_current');
            $(this).addClass('is_current');
        });
    
        $("#b").hide();$("#c").hide();$("#d").hide();$("#e").hide(); //Default Hide
    
    // Common function for menu
    function make_active(id_name)
    {
        var active_menu = ["#profile_a", "#portfolio_a", "#resume_a" , "#blog_a" , "#contact_a"];
        var showing_class = [".profile", ".portfolio_area", ".resume_area", ".blog_area" , ".contact_area"];
        
        for(var i=0;i<active_menu.length;i++)
        {
            if(active_menu[i] == id_name)
            {
                $(showing_class[i]).show();
            }
            else{
               $(showing_class[i]).hide(); 
            }
        }
    }
    
    // Calling function when clicked on Menu
    
    $("#profile_a").click(function(){
        
        make_active("#profile_a");
        
    });
    
    $("#portfolio_a").click(function(){
        
        make_active("#portfolio_a");
        
    });
    
    $("#resume_a").click(function(){
        
        make_active("#resume_a");
        
    });
    
    $("#blog_a").click(function(){
        
        make_active("#blog_a");
        
    });
    
    $("#contact_a").click(function(){
        
        make_active("#contact_a");
        
    });
});

// ****** For Blog *********
//Function To Display Popup
function div_show1() {
    document.getElementById('read_the_post1').style.display = "block";
}
//Function to Hide Popup
function div_hide1(){
    document.getElementById('read_the_post1').style.display = "none";
}

//Function To Display Popup
function div_show2() {
    document.getElementById('read_the_post2').style.display = "block";
}
//Function to Hide Popup
function div_hide2(){
    document.getElementById('read_the_post2').style.display = "none";
}

//Function To Display Popup
function div_show3() {
    document.getElementById('read_the_post3').style.display = "block";
}
//Function to Hide Popup
function div_hide3(){
    document.getElementById('read_the_post3').style.display = "none";
}


