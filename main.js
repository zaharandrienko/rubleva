
var menuIndex = false
showMobile()



function showMobile() {
    var slides = document.getElementsByClassName("next2");
    setTimeout(
        function showSlides1() {
            slides[0].style.display = "block";
            setTimeout(
                function showSlides2() {
                    slides[1].style.display = "block";
                    setTimeout(
                        function showSlides3() {
                            slides[2].style.display = "block";
                            setTimeout(
                                function showSlides4() {
                                    slides[3].style.display = "block";
                                    setTimeout(
                                        function restart() {
                                            var i;
                                            for (i = 0; i < slides.length; i++) {
                                                slides[i].style.display = "none";
                                            }
                                            showMobile()
                                        }
                                        , 2500)
                                }
                                , 3000)
                        }
                        , 3000)
                }
                , 3000)
        }
        , 500)
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

















function serchOn() {
    var serch = document.getElementsByClassName("none");
    var i;
    for (i = 0; i < serch.length; i++) {
        serch[i].style.display = "block";
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
        active[i].className = active[i].className.replace(" conteinerStyle-active", " move");
    }

    active[activeIndex - 1].className = active[activeIndex - 1].className.replace(" move", " conteinerStyle-active");
    setTimeout(
        function restart() {
            link[activeIndex - 1].style.display = "block";
            black[activeIndex - 1].style.display = "block";
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
        active[i].className = active[i].className.replace(" conteinerStyle-active", " move");
    }

}