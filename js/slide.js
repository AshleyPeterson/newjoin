var flag='nav_for_site';
var tag='site_main';
function nav_slide(hideid,showid) {
    var hideid_obj=document.getElementById(hideid);
    var showid_obj=document.getElementById(showid);
    var flag_obj=document.getElementById(flag);
    if(flag=='nav_for_site'||flag==hideid){
        hideid_obj.style.visibility="hidden";
        showid_obj.style.visibility="visible";
        hideid_obj.className="frame_right_nav";
        showid_obj.className="nav_animation";
        flag=showid;
    }
    else if(flag==showid) {
    }
    else {
        flag_obj.style.visibility="hidden";
        showid_obj.style.visibility="visible";
        flag_obj.className="frame_right_nav";
        showid_obj.className="nav_animation";
        flag=showid;
    }
}
function content_slide(hideid,showid) {
    var hideid_obj=document.getElementById(hideid);
    var showid_obj=document.getElementById(showid);
    var tag_obj=document.getElementById(tag);
    var button_obj=document.getElementById('frame_right_button');
    if(showid=='join_main') {
        tag_obj.style.display="none";
        button_obj.style.display="none";
        showid_obj.style.display="block";
        showid_obj.className="main_animation_join";
        tag=showid;
    }
    else if(tag==hideid){
        hideid_obj.style.display="none";
        button_obj.style.display="block";
        showid_obj.style.display="block";
        showid_obj.className="main_animation";
        tag=showid;
    }
    else if(tag==showid) {
    }
    else {
        tag_obj.style.display="none";
        button_obj.style.display="block";
        showid_obj.style.display="block";
        tag_obj.className="frame_right_content";
        showid_obj.className="main_animation";
        tag=showid;
    }
    $("#pic1").removeClass("zoomout");
    $("#pic2").removeClass("zoomout");
    $("#pic3").removeClass("zoomout");
    $("#pic4").removeClass("zoomout");
    $("#pic5").removeClass("zoomout");
}
