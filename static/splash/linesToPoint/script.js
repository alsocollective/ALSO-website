	console.log("bam");

paper.install(window);

var AList = [[8,145],[10,140],[12,134],[13,146],[14,129],[16,124],[18,119],[18,146],[20,113],[22,108],[23,146],[24,103],[26,98],[28,92],[28,146],[30,87],[32,82],[33,146],[34,76],[36,71],[38,66],[38,143],[40,61],[40,138],[42,55],[42,132],[44,50],[44,126],[46,45],[46,121],[48,40],[50,34],[51,117],[52,29],[54,24],[55,95],[56,18],[56,117],[57,89],[59,83],[60,95],[61,15],[61,78],[61,117],[63,72],[65,67],[65,95],[66,15],[66,117],[67,61],[69,55],[70,95],[71,15],[71,50],[71,117],[75,55],[75,95],[76,15],[76,60],[76,117],[78,65],[80,70],[80,95],[81,15],[81,117],[82,75],[83,80],[85,85],[85,95],[86,15],[86,117],[87,90],[89,20],[91,25],[91,117],[93,30],[95,35],[96,117],[97,40],[98,45],[98,122],[99,127],[100,50],[101,132],[102,55],[103,137],[104,60],[105,142],[106,65],[108,70],[110,75],[110,146],[112,80],[113,85],[115,90],[115,146],[117,95],[119,100],[120,146],[121,105],[123,110],[125,115],[125,146],[127,120],[128,125],[130,130],[130,146],[132,135],[134,140],[135,146]];
var LList = [[31,20],[31,25],[31,30],[31,35],[31,40],[31,45],[31,50],[31,55],[31,60],[31,65],[31,70],[31,75],[31,80],[31,85],[31,90],[31,95],[31,100],[31,105],[31,110],[31,115],[31,120],[31,125],[31,130],[31,135],[31,140],[31,145],[31,150],[36,19],[36,150],[41,19],[41,150],[46,19],[46,150],[51,19],[51,150],[56,19],[56,150],[60,24],[60,29],[60,34],[60,39],[60,44],[60,49],[60,54],[60,59],[60,64],[60,69],[60,74],[60,79],[60,84],[60,89],[60,94],[60,99],[60,104],[60,109],[60,114],[60,119],[60,124],[61,150],[65,126],[66,150],[70,126],[71,150],[75,126],[76,150],[80,126],[81,150],[85,126],[86,150],[90,126],[91,150],[95,126],[96,150],[100,126],[101,150],[105,126],[106,150],[110,126],[111,150],[115,126],[116,150],[120,126],[121,150],[124,131],[124,136],[124,141]];
var OList = [[7,76],[7,81],[7,86],[7,91],[8,69],[8,96],[8,101],[9,106],[10,61],[11,111],[12,56],[13,116],[14,51],[15,121],[17,46],[18,126],[20,41],[21,131],[24,36],[26,135],[29,31],[30,140],[34,27],[35,143],[36,77],[36,82],[36,87],[36,92],[37,71],[37,97],[38,102],[39,24],[39,64],[40,107],[40,146],[41,59],[42,112],[44,22],[44,54],[45,117],[45,148],[49,20],[49,49],[50,121],[50,150],[54,18],[54,45],[55,125],[55,151],[59,17],[59,42],[60,127],[60,152],[64,16],[64,41],[65,128],[65,153],[69,16],[69,40],[70,129],[70,153],[74,16],[74,40],[75,129],[75,153],[79,16],[79,41],[80,128],[80,153],[84,17],[84,42],[85,127],[85,152],[89,18],[89,44],[90,124],[90,151],[94,19],[94,48],[95,120],[95,150],[98,53],[99,21],[99,115],[100,148],[101,58],[102,110],[103,63],[104,24],[104,105],[105,68],[105,145],[106,73],[106,96],[107,78],[107,83],[107,88],[109,27],[110,142],[114,30],[115,138],[118,35],[120,133],[122,40],[124,128],[126,45],[127,123],[128,50],[130,116],[131,55],[132,60],[132,111],[134,65],[134,103],[135,70],[135,97],[136,75],[136,80],[136,85],[136,90]];
var SList = [[15,113],[16,118],[16,123],[17,128],[20,54],[20,59],[20,64],[20,69],[20,112],[20,133],[22,47],[22,74],[23,138],[25,42],[25,79],[25,112],[27,143],[28,84],[29,37],[30,112],[32,147],[33,87],[34,32],[35,112],[37,150],[38,90],[39,29],[40,112],[42,153],[43,93],[44,26],[44,117],[45,122],[47,154],[48,55],[48,60],[48,95],[48,127],[49,24],[50,65],[51,50],[52,156],[53,96],[53,130],[54,23],[55,68],[56,46],[57,157],[58,98],[58,133],[59,22],[60,70],[61,44],[62,157],[63,99],[63,135],[64,21],[65,72],[66,43],[67,158],[68,100],[68,136],[69,21],[70,73],[71,43],[72,158],[73,102],[73,136],[74,21],[75,74],[76,44],[77,158],[78,103],[78,136],[79,21],[80,76],[81,45],[82,158],[83,104],[83,135],[84,22],[85,77],[86,47],[87,157],[88,106],[88,133],[89,23],[90,52],[90,78],[92,57],[92,156],[93,62],[93,109],[93,131],[94,24],[95,80],[96,114],[97,124],[97,155],[98,63],[98,119],[99,26],[100,81],[102,153],[103,63],[104,29],[105,83],[107,150],[108,63],[109,33],[110,86],[112,147],[113,38],[113,63],[115,90],[117,43],[117,142],[118,63],[119,48],[119,95],[121,53],[121,58],[121,136],[122,100],[124,129],[125,105],[125,124],[126,110],[126,115]];

var variable = 0.0;
var yVar = 0;
var width,height;


window.onload = function(){
	height = window.innerHeight;
	width = window.innerWidth;
	yVar = height/2;

	var canvasElement = document.getElementById("myCanvas");
	canvasElement.height = height;
	canvasElement.width = width;

	paper.setup("myCanvas");

	var AllPoints = [
		createTriangles(AList,(width/2)-300,(height/2)-100),
		createTriangles(LList,(width/2)-150,(height/2)-100),
		createTriangles(SList,(width/2),(height/2)-100),
		createTriangles(OList,(width/2)+150,(height/2)-100)
	]
	view.draw();

	var tool = new Tool();
	tool.onMouseDown = function(event){
		for(var count = 0; count < AllPoints.length;++count){
			for(var a = 0; a < AllPoints[count].length; ++a){
				AllPoints[count][a].segments[1].point.x = event.point.x;
				AllPoints[count][a].segments[1].point.y = event.point.y;
			}
		}
		view.onFrame = null;
	}

	view.onFrame = function(event) {
		variable += .05;
		var xVar = (Math.sin(variable/3)*width/2)+width/2;
		var yVar = (Math.cos(variable)*height/2)+height/2;
		for(var count = 0; count < AllPoints.length;++count){
			for(var a = 0; a < AllPoints[count].length; ++a){
				AllPoints[count][a].segments[1].point.x = xVar;
				AllPoints[count][a].segments[1].point.y = yVar;
			}
		}
	}

	var tool = new Tool();
	tool.onMouseMove = function(event){
		yVar = event.point.y;
	}
}



function createTriangles(points,x,y){
	var paths = [];
	var path;

	var prevPoint = points[0];
	var nextPoint = null;

	while(points.length > 1){
		nextPoint = findClosest(points,prevPoint);
		prevPoint = points[nextPoint];

		path = new Path();
		path.add([prevPoint[0]+x-30,prevPoint[1]+y]);
		path.add([prevPoint[0]+x,prevPoint[1]+y+30]);
		//path.add([prevPoint[0]+x+30,prevPoint[1]+y]);

		path.strokeColor= "black";
		//path.strokeColor.alpha = 0.05;
		//path.fillColor = 'black';
		//path.fillColor.alpha = 0.05;

		points.splice(nextPoint,1);
		paths.push(path);
	}
	return paths;
}

// function createLines(points,x,y){
// 	var paths = [];
// 	var path;
// 	var prevPoint = points[0];
// 	var nextPoint = null;

// 	while(points.length > 1){
// 		nextPoint = findClosest(points,prevPoint);
// 		prevPoint = points[nextPoint];

// 		path = new Path();
// 		path.add([prevPoint[0]+x,prevPoint[1]+y]);
// 		path.add([view.viewSize.width/2,view.viewSize.height/2]);
// 		path.strokeColor = 'black';


// 		points.splice(nextPoint,1);
// 		paths.push(path);
// 	}
// 	return paths;
// }


function findClosest(points, currentPoint){
	var smallest = 99999999;
	var smallestValue = 99999999;
	var temp = 0;
	for(var a = 0; a < points.length; ++a){
		temp = subtract(points[a],currentPoint);
		if(temp < smallestValue){
			smallestValue = temp;
			smallest = a;
		}
	}

	return smallest;
}

//subtract 1 from 2
function subtract(point1, point2){
	var x = point2[0]-point1[0];
	var y = point2[1]-point1[1];
	if(x < 0){
		x = x*-1;
	}

	if(y < 0){
		y = y*-1;
	}

	return x+y;
} 