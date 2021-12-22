/***** navbar dropdown *****/

$(document).ready(function () {
    var countVal = 1;    
    $(".dropdown-box-toggleLeads").on('click',function(now){
        var countValadded = countVal++;        
        if( countValadded %2 != 0) {
            $(".dropdown-boxShow").slideDown(300);
            $(".navDropdownIndicatordown").css({'transform':'rotate(180deg)','transition':'.15s linear'});
        } 
        else if( countValadded %2 == 0) {
            $(".dropdown-boxShow").slideUp(300);            
            $(".navDropdownIndicatordown").css({'transform':'rotate(0deg)','transition':'.15s linear'});            
        }       
    })
    $(".dropdown-box-item").mouseover(function(){
        $(this).css("transition", ".15s linear");
    })
    $(".dropdown-box-item").mouseout(function(){
        $(this).css("transition", ".15s linear");
    })
})