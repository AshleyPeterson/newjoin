var flag='nav_for_site';
function nav_slide(hideid,showid) {
    if(flag=='nav_for_site'){
        document.getElementById(hideid).style.visibility="hidden";
        document.getElementById(showid).style.visibility="visible";
        document.getElementById(hideid).className="frame_right_nav";
        document.getElementById(showid).className="nav_animation";
        flag=showid;
    }
    else if(flag==hideid) {
        document.getElementById(hideid).style.visibility="hidden";
        document.getElementById(showid).style.visibility="visible";
        document.getElementById(hideid).className="frame_right_nav";
        document.getElementById(showid).className="nav_animation";
        flag=showid;
    }
    else {
        alert('not equal');
    }
}
