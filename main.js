var menuIndex = false
var serchInd = false


AOS.init();

Anim()


function Anim() {
    var anim = document.getElementsByClassName("anim");
    for (i = 0; i < anim.length; i++) {
        anim[0].style.display = "block";

        setTimeout(anim[1].style.display = "block", 200)
        setTimeout(anim[2].style.display = "block", 300)
        setTimeout(anim[3].style.display = "block", 400)

    }
}


function menu() {
    menuIndex = !menuIndex
    menuInd()
}

function menuInd() {
    var Menu = document.getElementsByClassName("menu-mobile");

    if (menuIndex) {
        Menu[0].className += " close";
    }
    else {
        Menu[0].className = Menu[0].className.replace(" close", "");
    }
}



function serchOn() {
    serchInd = !serchInd
    serch()
}

function serch() {
    var serch = document.getElementsByClassName("none");
    var i;
    if (serchInd) {
        for (i = 0; i < serch.length; i++) {
            serch[i].style.display = "block";
        }
    }
    else {
        for (i = 0; i < serch.length; i++) {
            serch[i].style.display = "none";
        }
    }
}



function menu() {
    menuIndex = !menuIndex
    menuInd()
}

function menuInd() {
    var Menu = document.getElementsByClassName("menu-mobile");

    if (menuIndex) {
        Menu[0].className += " close";
        console.log("lllllll")
    }
    else {
        Menu[0].className = Menu[0].className.replace(" close", "");
    }
}




function active(n) {
    var activeIndex = n
    var active = document.getElementsByClassName("containerStyle-styleitem");
    var link = document.getElementsByClassName("containerStyle-link");
    var black = document.getElementsByClassName("hoverBlack");


    var i;
    for (i = 0; i < link.length; i++) {
        link[i].style.display = "none";
    }

    for (i = 0; i < black.length; i++) {
        black[i].style.display = "none";
    }

    for (i = 0; i < active.length; i++) {
        active[i].className = active[i].className.replace(" containerStyle-active", " move");
    }

    active[activeIndex - 1].className = active[activeIndex - 1].className.replace(" move", " containerStyle-active");
    setTimeout(
        function restart() {
            link[activeIndex - 1].style.display = "block";
            black[activeIndex - 1].style.display = "block";
        }
        , 500)
}


function unActive() {
    var active = document.getElementsByClassName("containerStyle-styleitem");
    var link = document.getElementsByClassName("containerStyle-link");
    var black = document.getElementsByClassName("hoverBlack");

    var i;
    for (i = 0; i < link.length; i++) {
        link[i].style.display = "none";
    }

    for (i = 0; i < black.length; i++) {
        black[i].style.display = "none";
    }

    for (i = 0; i < active.length; i++) {
        active[i].className = active[i].className.replace(" containerStyle-active", " move");
    }

}