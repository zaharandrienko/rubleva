var color = false


function serchOn() {
    var serch = document.getElementsByClassName("none");
    var i;
    for (i = 0; i < serch.length; i++) {
        serch[i].style.display = "block";
    }
}




function Color(){
    var link = document.getElementsByClassName("conteinerStyle-link");
    if(color){
        var i;
        for (i = 0; i < link.length; i++) {
            link[i].style.color = "white";
        }
    }
    else{
        for (i = 0; i < link.length; i++) {
            link[i].style.color = "black";
        }
    }
}

function active(n) {
    var activeIndex = n
    var active = document.getElementsByClassName("conteinerStyle-styleitem");
    var link = document.getElementsByClassName("conteinerStyle-link");
    var black = document.getElementsByClassName("hoverBlack");

    color = !color;
    Color()

    var i;
    for (i = 0; i < link.length; i++) {
        link[i].style.display = "none";
    }

    for (i = 0; i < black.length; i++) {
        black[i].style.display = "none";
    }

    for (i = 0; i < active.length; i++) {
        active[i].className = active[i].className.replace(" conteinerStyle-active", "");
    }

    active[activeIndex-1].className += " conteinerStyle-active";
    setTimeout(
        function restart() {
            link[activeIndex-1].style.display = "block";
            black[activeIndex-1].style.display = "block";
        }
    , 500)
}


function unActive() {
    var active = document.getElementsByClassName("conteinerStyle-styleitem");
    var link = document.getElementsByClassName("conteinerStyle-link");
    var black = document.getElementsByClassName("hoverBlack");

    var i;
    for (i = 0; i < link.length; i++) {
        link[i].style.display = "none";
    }

    for (i = 0; i < black.length; i++) {
        black[i].style.display = "none";
    }

    for (i = 0; i < active.length; i++) {
        active[i].className = active[i].className.replace(" conteinerStyle-active", "");
    }

}