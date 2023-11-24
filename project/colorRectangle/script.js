var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    var rectangleLocation= rect.getBoundingClientRect();
    var insideRectVal= details.clientX - rectangleLocation.left;
    if(insideRectVal<rectangleLocation.width/2){
        var redColor = 
        gsap.utils.mapRange(
            0, 
            rectangleLocation.width/2, 
            255, 
            0, 
            insideRectVal
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        });        
    }
    else{
        var blueColor = 
        gsap.utils.mapRange(
            rectangleLocation.width/2, 
            rectangleLocation.width, 
            0, 
            255, 
            insideRectVal
        );
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });   
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor: "white",
    })
});