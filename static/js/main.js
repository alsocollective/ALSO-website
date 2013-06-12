var workObject, aboutObject, processObject, wordObject;

window.onload = function(){
	//setpage();
	workObject = new setupWork("work");
	workObject.setSizeOfElements();

	aboutObject = new setupWork("about");
	aboutObject.setSizeOfElements();

	processObject = new setupWork("process");
	processObject.setSizeOfElements("instegram");

	wordObject = new setupWork("word");

	workObject.setSiblings([aboutObject,processObject,wordObject]);
	aboutObject.setSiblings([workObject,processObject,wordObject]);
	processObject.setSiblings([aboutObject,workObject,wordObject]);
	wordObject.setSiblings([aboutObject,workObject,processObject]);
}

window.addEventListener("resize",function(){
	workObject.setSizeOfElements();
	aboutObject.setSizeOfElements();
	processObject.setSizeOfElements("instegram");
})

function setupWork(paerentID){
	//getting all the elements
	var parentNode = document.getElementById(paerentID); //ver top element
	var titleBackground = parentNode.childNodes[0];
	var slidingElement = parentNode.childNodes[1];			//the sliding element
	var backgroundElement = slidingElement.childNodes[0];// the background Element that is fixed
	var widthOfSliding = slidingElement.childNodes[1];	//container of articles
	//test to make sure the file mark up is good
	if(parentNode.nodeType != 1 || slidingElement.nodeType != 1 || backgroundElement.nodeType != 1 || widthOfSliding.nodeType != 1){
		console.log("FAILED Loading the setup");
	} else {

	}

	//setting up the scroller and makeing a new instance of it
	var WorkScroller = new DragDivScroll(slidingElement.id, "mouseWheelX");

	var isActiveElement = false;
	var currentActiveIs;
	var siblingsElements; 				//the other objects containing this data
	var theCountofElement;				//the locaiotn in this list
	var siblingSections = parentNode.parentNode.childNodes; //siblings can contain the total numbers
	var button = widthOfSliding.childNodes[0];	//the button that selects the area

	for(var a = 0; a < siblingSections.length; ++a){
		if(parentNode.id == siblingSections[a].id){
			theCountofElement = a;
		}
	}

	//setting the navigation up
	var links = backgroundElement.childNodes[1].childNodes;
	for (var a = 0; a < links.length; ++a){
		if(links[a].nodeType == 1 && links[a].hasChildNodes()){
			addEvent(links[a],links[a].firstChild.name);
		}
	}

	parentNode.setAttribute("style","transition: height 1s, width 1s, left 1s, top 1s; -moz-transition: height 1s, width 1s, left 1s, top 1s; -webkit-transition: height 1s, width 1s, left 1s, top 1s; -o-transition: height 1s, width 1s, left 1s, top 1s;");

	parentNode.onclick = expandThisZone;
	function expandThisZone(){
		if(!isActiveElement){
			isActiveElement = true;
			setSize();
		}
	}
	this.scrollTo = function(newLocation){
		if(isActiveElement){
			$(slidingElement).scrollLeft(newLocation);
		}
	}

	this.setSiblings = function(inputArray){
		siblingsElements = inputArray;
	}

	var slideWidth = 0;
	var offsetBetween = 0;

	this.setSizeOfElements = function(formatOfDivs){
		formatOfDivs = typeof formatOfDivs !== 'undefined' ? formatOfDivs : "default";

		slideWidth = 0; 								//size of each block
		offsetBetween = 0; 								//distance between each slide
		var windowWidth = $(window).width();				//we find the total width of the screen

		//getting the children of the working area
		var children = widthOfSliding.childNodes

		var size = 0;
		//these set the ratio, they HAVE TO equal 1!!!!!
		slideWidth = windowWidth*.7;
		staticWidth = slideWidth; //for when we use instagram!!!

		offsetBetween = windowWidth*.3;

		if(formatOfDivs == "instegram"){
			var windowHeight = $(window).height()*0.85/2;
			slideWidth = windowHeight;//$("#process").height()/2;
		}

		var thisSlideWidth = 0;

		for(var a = 0; a < children.length; ++a){
			if(children[a].nodeType == 1 && children[a].id != "workButton"){
				var possibleWidth = findCildWidth(children[a],slideWidth,1);
				if( possibleWidth ){
					children[a].style.width = possibleWidth;
					children[a].style.minWidth = possibleWidth;
				} else {
					children[a].style.width = slideWidth;
					children[a].style.minWidth = slideWidth;
				}
				children[a].style.marginLeft = offsetBetween + "px";
				thisSlideWidth = children[a].offsetWidth;
				size += thisSlideWidth + offsetBetween;
			} else if(children[a].nodeType == 1 && children[a].id == "workButton"){
				children[a].style.width = staticWidth - offsetBetween;
				size += staticWidth - offsetBetween;
			}
		}

		widthOfSliding.style.width = Math.ceil(size)+10;
		if(!isActiveElement){
			backgroundElement.style.right = (backgroundElement.offsetWidth)*-1;
		} else {
			backgroundElement.style.right = offsetBetween;
		}
	}

	function findCildWidth(element, setWidth, percentOfOriginal){
		var funcChildren = element.childNodes;
		if(element.hasChildren || funcChildren.length < 1 || funcChildren[0].nodeType != 1){
			return false;
		}
		var returnSize = 0;
		for(var a = 0; a < funcChildren.length; ++a){
			funcChildren[a].style.width = setWidth*percentOfOriginal;
			returnSize += setWidth*percentOfOriginal;
		}
		return returnSize;
	}

	this.setActive = function(){
		isActiveElement = true;
	}
	this.deActive = function(){
		isActiveElement = false;
	}
	this.activeElement = function(number){
		currentActiveIs = number;
	}

	this.activity = function(){
		return isActiveElement;
	}

	this.OutSidesetSize = function(){
		setSize();
	}

	function setSize(){
		if(isActiveElement){
			with (parentNode.style){		//resizes the element to large format
				top	= (theCountofElement*5)+"%"
				height = "85%";
				left = "0px";
				width = "100%";
			}
			backgroundElement.style.display = "inline-block";
			slidingElement.style.zIndex = 0; //enables the scrolling
			for(var a = 0; a < siblingsElements.length; ++a){
				siblingsElements[a].deActive();
				siblingsElements[a].activeElement(theCountofElement);
				siblingsElements[a].OutSidesetSize();
			}
			backgroundElement.style.right = offsetBetween;
		} else {
			with (parentNode.style){		//resizes to the appropirate size and location
				if(currentActiveIs > theCountofElement){
					top = (theCountofElement*5) + "%";
					height = "5%";
					left = "0%";
					width = "100%";
				} else {
					console.log("");
					top = (100-((siblingSections.length - theCountofElement)*5)) + "%";
					height = "5%";
					left = "0%";
					width = "100%";
				}
			}
			backgroundElement.style.display = "none";
			slidingElement.style.zIndex = -1; //makes the area none dragable
			backgroundElement.style.right = (backgroundElement.offsetWidth)*-1;
		}
	}
}

function addEvent(link, endPoint){
	link.addEventListener('click', function(event){
		event.preventDefault();
		goToThisEndPoint(endPoint);
	});
}

function goToThisEndPoint(location){
	var element = document.getElementById(location);
	//var width = $()
	var left = $(element).offset().left;
	var body = $(element.parentNode.parentNode);
	var bodyOffset = $(element.parentNode).offset().left*-1;

	body.animate({scrollLeft : bodyOffset + left},1000);
	setTimeout(function(){
		setHashTag(location);
	},1100);
}

function setHashTag(newTag){
	var element = document.getElementById(newTag);
	element.id = "";
	window.location.replace("#"+newTag);
	element.id = newTag;
}

function windowSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }

  return {
  	"width": myWidth,
  	"height": myHeight
  }
}
