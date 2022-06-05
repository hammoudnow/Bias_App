var chosenCvs = [];

$("input").click(function() {
    
    var button = $(this);
    var buttonClass = button.attr("class");
    if(buttonClass !== "btn-check any"){
        button.addClass("any");
        chosenCvs.push(1);
        
        if(chosenCvs.length > 3){
            $(".chosen-more").addClass("show");
        }
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
    if(buttonClass == "btn-check any"){
        
        button.removeClass("any");
        chosenCvs.splice(0, 1);
        if(chosenCvs.length <= 3 & $(".chosen-more").attr("class") == "chosen-more show"){
            $(".chosen-more").removeClass("show");
        }
    }
});


$(".choices1").click(function() {
    $(this).val("on");
    $(".choices2").val("off") 
    $(".choices3").val("off") 
})

$(".choices2").click(function() {
    $(this).val("on");
    $(".choices1").val("off") 
    $(".choices3").val("off")

})

$(".choices3").click(function() {
    $(this).val("on");
    $(".choices1").val("off") 
    $(".choices2").val("off") 

})

$(".hover-1").hover(function() {
    $(".info-content-1").addClass("show")
 },function(){
     $(".info-content-1").removeClass("show")
 })


$(".hover-2").hover(function() {
    $(".info-content-2").addClass("show")
 },function(){
     $(".info-content-2").removeClass("show")
 })


$(".hover-3").hover(function() {
    $(".info-content-3").addClass("show") 
 },function(){
     $(".info-content-3").removeClass("show")
 })

