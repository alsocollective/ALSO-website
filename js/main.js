
addListenersToall();
setResizeToAll();

var settings = {
	autoReinitialise: true,
	autoReinitialiseDelay: 3000
};

var pane;
var api;
updateJscroll();

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