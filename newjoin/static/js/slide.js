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

function countchar() {
	var sizeName=$("#name").val().length;
	var sizeCollege=$("#college").val().length;
	var sizeMobile=$("#mobile").val().length;
	var sizeDorm=$("#dorm").val().length;
	var sizeMail=$("#mail").val().length;
	var sizeAdvantg=$("#advantg").val().length;
	var sizeReason=$("#reason").val().length;
	if(sizeName>10) {
		$("#err").html('姓名不能超过10个字');
		return false;
	}
	else if(sizeCollege>10) {
		$("#err").html('学院不能超过10个字');
		return false;
	}
	else if(sizeMobile>11) {
		$("#err").html('手机不能超过11个数字');
		return false;
	}
	else if(sizeDorm>10) {
		$("#err").html('寝室不能超过10个字');
		return false;
	}
	else if(sizeMail>30) {
		$("#err").html('邮箱不能超过30个字');
		return false;
	}
	else if(sizeAdvantg>10) {
		$("#err").html('优点不能超过10个字');
		return false;
	}
	else if(sizeReason>200) {
		$("#err").html('理由不能超过200个字');
		return false;
	}
	else if(sizeName==0||sizeCollege==0||sizeMobile==0||sizeDorm==0||sizeMail==0||sizeAdvantg==0||sizeReason==0) {
		$("#err").html('栏目不能为空');
		return false;
	}
	else {
		return true
	}
}

