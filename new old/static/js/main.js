/*jQuery(document).ready(function($) {
	$(".work").royalSlider({
		arrowsNav: false,
		keyboardNavEnabled: true,
		controlNavigation: "none",
		autoScaleSlider: false,
		autoHeight: false,
		enabled: true,
		centerArea: 0.5,
		center: true,
		breakpoint: 650,
		breakpointCenterArea: 0.64,
		navigateByCenterClick: false
	});

	$(".rsContent").attr("background-color","#ff0 !important");
});*/

var elements = [document.getElementById("work"),document.getElementById("about"),document.getElementById("process"),document.getElementById("word")]
var pagewidth;
var pageheight;
var originDragX;
var elementX, elementY;
setup();
$(window).mousewheel(function (e, d, x, y) {
	e.preventDefault();
});
$(".wrapper").mousewheel(function (e, d, x, y) {
	e.preventDefault();
});

function setup(){
	pagewidth = $(window).width();
	pageheight = $(window).height();

	for(var a = 0; a < elements.length; ++a){
		$(elements[a]).css("top",(a*pageheight/4)+"px").css("left",(pagewidth/4*3)+"px");
		elements[a].addEventListener("click", clickEvent);
		$(elements[a]).bind("mousewheel", function(e, delta, deltaX, deltaY){
			e.preventDefault();

			var original = $(this).position().left;
			var newLeft = original - (deltaX*30);;
			this.style.left = newLeft + (deltaY*30);

		});

		$(elements[a]).bind("mousedown",function(EEEE){
			originDragX = EEEE.offsetX;
			elementX = $(this).position().left;
			elementY = $(this).position().top;
			console.log("mousedown",EEEE.offsetX);
		});
		$(elements[a]).bind("drag",function(EEEE){
			console.log("drag",(originDragX - EEEE.offsetX));
			$( this ).css({
				left: elementX + (originDragX - EEEE.offsetX)
			});
		});
	}
}

function clickEvent(){
	setup();
	resetElementsFullScreen();
	var location;
	for(var b = 0; b < elements.length; ++b){
		if(elements[b] == this){
			location = b;
		}
	}
	console.log(location);
	for(var b = location; b > 0; --b){
		elements[b].style.top = (50*(b))+"px";
	}
	for(var b = elements.length-1; b > location; --b){
		elements[b].style.top = (pageheight-(elements.length-1*25)-(50*(elements.length-b))-25)+"px";
	}
	this.removeEventListener('click',arguments.callee,false);
}

function resetElementsFullScreen(){
	for(var a = 0; a < elements.length; ++a){
		$(elements[a]).css("top",(a*pageheight/4)+"px").css("left","0px");
	}
}

function resetElementsRight(){
	for(var a = 0; a < elements.length; ++a){
		$(elements[a]).css("top",(a*pageheight/4)+"px").css("left",(pagewidth/4*3)+"px");
	}
}












//elements[elements.length-1].style.backgroundColor="#ff0";

function addListenersToall(){
	attributeExpand("work");
	attributeExpand("about");
	attributeExpand("process");
	attributeExpand("word");
}

function setResizeToAll(){
	resizeContents("work");
	resizeContents("about");
	resizeContents("process");
	resizeContents("word");
}

function updateJscroll(){
    pane = $('.category').jScrollPane();
    pane.jScrollPane(settings);
    api = pane.data('jps')
}

function attributeExpand(element){
	var work = document.getElementById(element).parentNode;

	work.addEventListener("click",function(){
		var siblings = this.parentNode.childNodes;
		for(var a = 0; a < siblings.length; ++a){
			if(siblings[a].nodeType == 1){
				siblings[a].style.height = "5%";
			}
		}

		var iternval = self.setInterval(function(){
			api.reinitialise();
		},40);
		setTimeout(function(){
			window.clearInterval(iternval);
		});
		this.style.height="85%";
		this.style.overflow = "scroll";
		this.parentNode.style.left="0px";
	})
}

function setAllOtherContainersSmall(){
	var categories = document.getElementsByClass("category");
	console.log(categories);
}

function resizeContents(parent){
	var parentDiv = document.getElementById(parent);
	var parentChilds = parentDiv.childNodes;

	var size = 0;
	for(var a = 0; a < parentChilds.length; ++a){
		if(parentChilds[a].nodeType == 1 && parentChilds[a].id!= "background"){
			size += parentChilds[a].offsetWidth;
		}
	}
	console.log(parent);
	console.log(size);
	parentDiv.style.width = size + "px";
}