function setImage(img, digit) {
    var imgPath = "./images/" + digit + ".png";
    var element = document.getElementById(img);
    if((element && element.src != imgPath))
    {
        element.src = imgPath;
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    setInterval(function(){ 
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var hourdots = document.getElementById("dotsHr");
        var minutedots = document.getElementById("dotsMin");
        
        setImage("imgHr1", parseInt(hours / 10));
        setImage("imgHr2", hours % 10);
        
        setImage("imgMin1", parseInt(minutes / 10));
        setImage("imgMin2", minutes % 10);
        
        setImage("imgSec1", parseInt(seconds / 10));
        setImage("imgSec2", seconds % 10);
        
        setImage("dotsHr", (hours % 2)? "dots-yellow" : "dots-blue");
        setImage("dotsMin", (hours % 2)? "dots-yellow" : "dots-blue");
        
        
        hourdots.style.visibility = (hourdots.style.visibility == "hidden")? "visible": "hidden";
        minutedots.style.visibility = (minutedots.style.visibility == "hidden")? "visible": "hidden";
        
        }, 500);
});  
