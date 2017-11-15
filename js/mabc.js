//mabc JS
//Developed By Ariful Islam

$(document).ready(function(){
    
    // For Active Menu
    $('.mabc_menu ul li button').click(function(){
            
        $('.mabc_menu ul li button').removeClass('is_active');
        $(this).addClass('is_active');
    });
    
    //For MABC Show
    var totalCategory = 5;
    
    /* Declaring variable to identify html class and id */
    var id_name = new Array(totalCategory); //For ID
    
    for(var t=0;t<totalCategory;t++)
    {
        id_name[t] = "#"+t;
    }
    
    var c_name = new Array(totalCategory); //For Class
    
    for(var c=0;c<totalCategory;c++)
    {
        c_name[c] = "."+c;
    }
    
    function showImage(tem) // Function to show categorize image
    {      
        
        for(var i=0  ; i<totalCategory ; i++){
            if(tem == id_name[i])
            {
                $(c_name[i]).show();
                break;
            }
        }
    }
    
 
    
     $("#0").click(function(){
        showImage("#0"); //Calling function to show categorize image
        
     });
    
    $("#1").click(function(){ 
        $(".0").hide();
        showImage("#1");    //Calling function to show categorize image
        
    });
    
    $("#2").click(function(){
        $(".0").hide();
        showImage("#2");    //Calling function to show categorize image
    });
    
    $("#3").click(function(){ 
        $(".0").hide();
        showImage("#3");    //Calling function to show categorize image
    });
    
    $("#4").click(function(){  
        $(".0").hide();
        showImage("#4");    //Calling function to show categorize image
    });
    
    
    
});