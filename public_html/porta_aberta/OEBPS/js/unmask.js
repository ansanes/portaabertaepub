function initDrawImageInCanvas(objectId, size, imageToDraw) {
	setTimeout(function () {
		var maskObjectId = objectId + '-mask';
		drawImageInCanvas(maskObjectId, imageToDraw);
				setTimeout(function(){
					$("#" + objectId + '_img').css("display","block");
				},100);
		$("#" + maskObjectId).on(window.touchDownEvent, function(event) {
			event.preventDefault();
			unmask(maskObjectId, size, event);
		});
	}, 200);
}

function drawImageInCanvas(objectId,pathImage) {
	var canvas = document.getElementById(objectId);
	var $this = $("#" + objectId);
	var w = $this.width();
	var h = $this.height();	 
	var context = canvas.getContext('2d');
	var imageObj = new Image();
	imageObj.onload = function() {
	  context.drawImage(imageObj, 0, 0, w, h);
	};
	imageObj.src = pathImage;
}

function evaluatePoint( data, tx, ty ) {
	var p = Math.floor(tx/data.size) + Math.floor( ty / data.size ) * data.colParts;
	if ( p >= 0 && p < data.numParts ) {
		data.ratio += data.parts[p];
		data.parts[p] = 0;
		if ( !data.complete) {
			if ( data.ratio/data.numParts >= data.completeRatio ) {
				data.complete = true;
				if ( data.completeFunction != null ) data.completeFunction();
			}
		}
	}

}
// compute x,y coords taking object into account
function getXYCoordinates(objectId, evt) {
	var $object = $('#'+objectId);
	var rect = $object.get(0).getBoundingClientRect();
	return {
	  x: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*($object.width())),
	  y: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*($object.height()))
	};
}

function unmask(obj,size,event) {
	var node = document.getElementById(obj);
	var $this = $("#" + obj),
	width = $this.width(),
	height = $this.height(),
	pos = $this.offset(),
	$canvas = $("#" + obj),
	canvas = $canvas.get(0),
	completeRatio = .7,
	completeFunction = null,
	parts = [],
	colParts = Math.floor( width / size ),
	numParts = colParts * Math.floor( height / size ),
	n = numParts;
	ctx = canvas.getContext("2d");
	ctx.globalCompositeOperation = "destination-out";
	ctx.strokeStyle = 'rgba(255,0,0,255)';
	ctx.lineWidth = size;
	ctx.lineCap = "round";
	// bind events
	
	// reset parts
	//while( n-- ) parts.push(1);
	// store values
	data = {
		posX:pos.left,
		posY:pos.top,
		touchDown: false,
		touchID:-999,
		touchX: 0,
		touchY: 0,
		ptouchX: 0,
		ptouchY: 0,
		canvas: $canvas,
		ctx: ctx,
		w:width,
		h:height,
		source: this,
		size: size,
		parts: parts,
		colParts: colParts,
		numParts: numParts,
		ratio: 0,
		complete: false,
		completeRatio: completeRatio,
		completeFunction: completeFunction
	};
			
	// listen for resize event to update offset values	
	$(window).resize( function() {
		var pos = $canvas.offset();
		data.posX = pos.left;
		data.posY = pos.top;
	});
	
	if (window.touchDownEvent == "mousedown") {	
		var pointerCoord = getXYCoordinates(obj,event);
		var tx = pointerCoord.x;
		var ty = pointerCoord.y;
		evaluatePoint( data, tx, ty );				
		data.touchDown = true;
		data.touchX = tx;
		data.touchY = ty;
		data.ctx.beginPath();
		data.ctx.moveTo( data.touchX-1, data.touchY );
		data.ctx.lineTo( data.touchX, data.touchY );
		data.ctx.stroke();
	} else {
		if ( !data.touchDown ) {
			
			var t = event.originalEvent.changedTouches[0];
			var pointerCoord = getXYCoordinates(obj,t);
			var tx = pointerCoord.x;
			var ty = pointerCoord.y;
			evaluatePoint( data, tx, ty );
			data.touchDown = true;
			data.touchID = t.identifier;
			data.touchX = tx;
			data.touchY = ty;
			
		}
	}
	

	 $(this).bind(window.touchMoveEvent,function(e){
		 if (window.touchMoveEvent == "mousemove") {	
			var pointerCoord = getXYCoordinates(obj,e);
			var tx = pointerCoord.x;
			var ty = pointerCoord.y;
			evaluatePoint( data, tx, ty );
			data.ctx.beginPath();
			data.ctx.moveTo( data.touchX, data.touchY );
			data.touchX = tx;
			data.touchY = ty;
			data.ctx.lineTo( data.touchX, data.touchY );
			data.ctx.stroke();
		 } else {
			 if ( data.touchDown ) {
				 	var ta = e.changedTouches,
						n = ta.length;
				 	while( n-- ) 
				if ( ta[n].identifier == data.touchID ) {
					var pointerCoord = getXYCoordinates(obj,ta[n]);
					var tx = pointerCoord.x;
					var ty = pointerCoord.y;
					evaluatePoint( data, tx, ty );
					data.ctx.beginPath();
					data.ctx.moveTo( data.touchX, data.touchY );
					data.touchX = tx;
					data.touchY = ty;
					data.ctx.lineTo( data.touchX, data.touchY );
					data.ctx.stroke();
					event.preventDefault();
					break;
				}
				}
		 }
		e.preventDefault();
	 });
	 
	 $(this).bind(window.touchUpEvent,function(e){
		if (window.touchUpEvent == "touchend") { 
		 if ( data.touchDown ) {
				var ta = event.originalEvent.changedTouches,
					n = ta.length;
				while( n-- )
					if ( ta[n].identifier == data.touchID ) {
						data.touchDown = false;
						event.preventDefault();
						break;
					}
		 }
		}
		 
		 $(this).unbind(window.touchMoveEvent);
		 
			
	 });
		
}
