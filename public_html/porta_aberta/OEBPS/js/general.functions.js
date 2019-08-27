window.SCQuickPreview = false;
window.SCDisableDeviceMotion = false;
window.tocIsVisible = false;
/*
 *
 *   Init Touch Events
 *
 */
if ((/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()))) { 
	window.touchDownEvent = "touchstart"; 
	window.touchUpEvent = "touchend"; 
	window.touchMoveEvent = "touchmove";
	if ((/android/i.test(navigator.userAgent.toLowerCase()))) {
		window.pinchopen = "pinchout";
		window.pinchclose = "pinchin";
	} else {
		window.pinchopen = "pinchopen";
		window.pinchclose = "pinchclose";
	}
} else {
	window.touchDownEvent = "mousedown";
	window.touchUpEvent = "mouseup";
	window.touchMoveEvent = "mousemove";
	window.pinchopen = "dblclick";
	window.pinchclose = "dblclick";
}

/*
 *
 *   Init OS
 *
 */

window.SCuaosIsWindows;
if ((/windows/i.test(navigator.userAgent.toLowerCase()))) {
	window.SCuaosIsWindows = true;
}

window.PubCoderHtmlLocal;
switch(window.location.protocol) {
   case 'http:':
   case 'https:':
   	window.PubCoderHtmlLocal = false;
     //remote file over http or https
     break;
   case 'file:':
   window.PubCoderHtmlLocal = true;
     //local file
     break;
   default: 
}

$(document).ready(function(){
	$('img').on('dragstart', function(event) { event.preventDefault(); });
});

/*
 *
 *   Init Accelerometer
 *
 */
window.onorientationchange = function() {
	var newOrientation;
	if (PubCoder.isAndroidReader)
		newOrientation = Android.getRotation();
	else 
		newOrientation = window.orientation;
		    /*window.orientation returns a value that indicates whether iPhone is in portrait mode, landscape mode with the screen turned to the
		      left, or landscape mode with the screen turned to the right. */
	window.orientationDevice = switchOrientationName(newOrientation,PubCoder.isAndroid);
}
window.ondevicemotion = function(e) {
	if (window.SCDisableDeviceMotion == true) {
		return // do nothing, ondevicemotion is disabled, probably by Pubcoder Quick Preview Motion Simulator
	} else if (!window.SCuaosIsWindows) {
		switch (window.orientationDevice) {
			case 'landscapeButtonLeft':
				window.aigX = e.accelerationIncludingGravity.x;
				window.aigY = e.accelerationIncludingGravity.y;
				break;
			case 'portraitButtonBottom':
				 window.aigX = -e.accelerationIncludingGravity.y;  
				 window.aigY = e.accelerationIncludingGravity.x;
				break;
			case 'landscapeButtonRight':
				window.aigX = -e.accelerationIncludingGravity.x;  
				window.aigY = -e.accelerationIncludingGravity.y;
				break;
			case 'portraitButtonTop':
				window.aigX = e.accelerationIncludingGravity.y;  
				window.aigY = -e.accelerationIncludingGravity.x;
			 	break;
		}
	} else {
		if (!(navigator.userAgent.toLowerCase().indexOf("edge") > -1) && !(navigator.userAgent.toLowerCase().indexOf("trident") > -1))
			window.aigX = e.accelerationIncludingGravity.y;
		else
			window.aigX = -e.accelerationIncludingGravity.y;
		window.aigY = e.accelerationIncludingGravity.x;
	}
	if (window.SCQuickPreview) {
		PubCoder.call('deviceMoved', [window.aigX, window.aigY]);
	}
}

/*
 *
 *   Utility Functions
 *
 */

function getBrowser() {
	if (PubCoder.isAndroidReader) return "android";
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6
	var browser = "";
	if (isOpera)
		browser = "opera";
	else if (isFirefox)
		browser = "firefox";
	else if (isSafari)
		browser = "safari";
	else if (isChrome)
		browser = "chrome";
	else if (isIE)
		browser = "explorer";
	
	return browser;
}

function setPrefixCss3() {
	var prefix = "";
	var browser = getBrowser();
	if (browser == "firefox")
		prefix ="-moz-";
	else if (browser == "safari" || browser == "chrome" || browser == "android")
		prefix ="-webkit-";
	else
		prefix ="";
	return prefix;
}


function isLocationInElement (element, x, y)
	{
		var elmOffset = $(element).offset();
		if (x >= elmOffset.left && x <= (elmOffset.left + $(element).width()) && 
			y >= elmOffset.top && y <= (elmOffset.top + $(element).height()))
			return true;
		return false;
	}	

function setNewPos(min, max, deltaMin, deltaMax, initialPos, nodePos, relativePos, actualPos, element, dim)
{
	var newX, elementDim;
	var newPos = initialPos - nodePos - relativePos + actualPos;
	var elmOffset = $(element).offset();
	if (min != null) {
		if (actualPos - deltaMin <= min) {
			newX = min - relativePos;
		} else if (actualPos + deltaMax >= max) {
			if (dim == "x")
				elementDim = $(element).width();
			else
				elementDim = $(element).height();
			newX = max - relativePos - elementDim;
		} else {
			newX = newPos;
		}
	} else
			newX = newPos;
	return newX;
}

function isLocationInElementDragDropOffset(element, x, y)
	{
		var elmOffset = $(element)[0].getBoundingClientRect();
		if (x >= elmOffset.left && x <= (elmOffset.left + elmOffset.width) && 
			y >= elmOffset.top && y <= (elmOffset.top + elmOffset.height))
			return true;
		return false;
	}	

 function setNewPosDragDropOffset(min, max, deltaMin, deltaMax, initialPos, nodePos, relativePos, actualPos, element, dim)
{
	var newX, elementDim;
	var newPos = initialPos - nodePos - relativePos + actualPos;
	var elmOffset = $(element)[0].getBoundingClientRect();
	if (min != null) {
		if (actualPos - deltaMin <= min) {
			newX = min - relativePos;
		} 
		else if (actualPos + deltaMax >= max) {
			if (dim == "x") {
				elementDim = elmOffset.width;
			}
			else {
				elementDim = elmOffset.height;
			}
			newX = max - relativePos - elementDim;
		} 
		else {
			newX = newPos;
		}
	} 
	else newX = newPos;

	return newX;
}	

//functions for gravity acceleration actions
function boundingBoxCheckX(posX, objectX, containerObject, ax, isBouncing){
	var minX = 0, maxX = 0, x = posX;
	var containerNodeOffset = containerObject.offset();
	var generalContainerNodeOffset = $(".SCPage").offset();
		minX = containerNodeOffset.left - generalContainerNodeOffset.left;
		maxX = minX + containerObject.width();
		
	if (x<minX) { 
		x = minX;
	}
	if (x>maxX-objectX) { 
		x = maxX-objectX;

	}
	
	return x;	
}

function isBoundingBoxCheckX(posX, objectX, containerObject){
var minX = 0, maxX = 0, x = posX;
var containerNodeOffset = containerObject.offset();
var generalContainerNodeOffset = $(".SCPage").offset();
	minX = containerNodeOffset.left - generalContainerNodeOffset.left;
	maxX = minX + containerObject.width();
	
if (x<minX)  
	return 1;
 else if (x>maxX-objectX)  
	return 2; 
 else 
	return 0;
}
function boundingBoxCheckY(posY, objectY, containerObject){
var minY = 0, maxY = 0, y = posY;
var containerNodeOffset = containerObject.offset();
var generalContainerNodeOffset = $(".SCPage").offset();
	minY = containerNodeOffset.top - generalContainerNodeOffset.top;
	maxY = minY + containerObject.height();

if (y<minY)  
	y = minY;

if (y>maxY-objectY)  
	y = maxY-objectY; 

return y;	
}

function isBoundingBoxCheckY(posY, objectY, containerObject){
var minY = 0, maxY = 0, y = posY;
var containerNodeOffset = containerObject.offset();
var generalContainerNodeOffset = $(".SCPage").offset();
	minY = containerNodeOffset.top - generalContainerNodeOffset.top;
	maxY = minY + containerObject.height();

if (y<minY)  
	return 1;
else if (y>maxY-objectY)  
	return 2;
else
	return 0
}

//function used by rotate.scx
function rotate(objectId,timesRun,howManyTimes,rotationToDegrees,rotationSpeed,effectEasing,transformOriginX,transformOriginY,functionCompleted) {
	$('#' + objectId).css(setPrefixCss3() + 'transform-origin','' + transformOriginX + ' ' + transformOriginY + '');
		
	var rotationToDegreesString;
	if (rotationToDegrees.indexOf("-") == -1)
		rotationToDegreesString = "+=" + rotationToDegrees;
	else
		rotationToDegreesString = "-=" + rotationToDegrees.substr(1);
	switch(effectEasing) {
	case "ease-in":
		effectEasing = "easieEaseIn";
	  break;
	case "ease-out":
		effectEasing = "easieEaseOut";
	  break;
	case "linear":
		effectEasing = "easieLinear";
	  break;
	case "ease":
		effectEasing = "easieEaseInOut";
	  break;
	case "bounce-in":
		effectEasing = "easeInBounce";
	  break;
	case "bounce-out":
		effectEasing = "easeOutBounce";
	  break;
	case "elastic-in":
		effectEasing = "easeInElastic";
	  break;
	case "elastic-out":
		effectEasing = "easeOutElastic";
	  break;
}
	
	$('#' + objectId).animate({rotate: '' + getScale(objectId) + 'deg'}, {queue: false, duration: 0});
	$('#' + objectId).animate({rotate: '' + rotationToDegreesString + 'deg'}, {queue: false, duration: rotationSpeed, easing: effectEasing, complete: function(){
		  if (timesRun == howManyTimes) {
	  			functionCompleted();
	      	 }
		}});		
}

function getScale(obj) {
	var angle;
	var el = document.getElementById(obj);
	var st = window.getComputedStyle(el, null);
	var tr = st.getPropertyValue("-webkit-transform") ||
	         st.getPropertyValue("-moz-transform") ||
	         st.getPropertyValue("-ms-transform") ||
	         st.getPropertyValue("-o-transform") ||
	         st.getPropertyValue("transform") ||
	         "fail...";

if (st != null && tr != "none") {


	var values = tr.split('(')[1];
	    values = values.split(')')[0];
	    values = values.split(',');
	var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];

	var scale = Math.sqrt(a*a + b*b);

	var sin = b/scale;
	angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
} else {
	angle = 0;
}
	return angle;
}



//end functions used by rotate.scx
//functions used by scale.scx
function scale(objectId,timesRun,howManyTimes,scaleX,scaleY,effectDurationMS,effectEasing,transformOriginX,transformOriginY,ScaleModeString,functionCompleted) {
	switch(effectEasing) {
	case "ease-in":
		effectEasing = "easieEaseIn";
	  break;
	case "ease-out":
		effectEasing = "easieEaseOut";
	  break;
	case "linear":
		effectEasing = "easieLinear";
	  break;
	case "ease":
		effectEasing = "easieEaseInOut";
	  break;
	case "bounce-in":
		effectEasing = "easeInBounce";
	  break;
	case "bounce-out":
		effectEasing = "easeOutBounce";
	  break;
	case "elastic-in":
		effectEasing = "easeInElastic";
	  break;
	case "elastic-out":
		effectEasing = "easeOutElastic";
	  break;
}
	$('#' + objectId).css(setPrefixCss3() + 'transform-origin','' + transformOriginX + ' ' + transformOriginY + '');
	$('#' + objectId).animate({scalex: '' + ScaleModeString + scaleX  + '', scaley: '' + ScaleModeString + scaleY  + ''}, {queue: false, duration: effectDurationMS, easing: effectEasing, complete: function(){	
	if (timesRun == howManyTimes) {
  			functionCompleted();
      	 }
	}});		

}

//end functions used by scale

//functions for float
function getOrientation(isAndroidReader) {
	var orientationName, orientationType;
	if (isAndroidReader)
		orientationType = Android.getRotation();
	else
		orientationType = window.orientation;
	orientationName = switchOrientationName(orientationType, isAndroidReader);
	return orientationName;
}

function switchOrientationName(orientation, isAndroid) {
	var orientationDetected;
	var orientationName;
	orientationDetected = orientation;
	if (orientation == 0 && isAndroid) 
			orientationDetected = 180;
	else if (orientation == 90 && isAndroid)
			orientationDetected = -90;
	else if (orientation == 180 && isAndroid)
		orientationDetected = 0;
	else if (orientation == 270 && isAndroid)
		orientationDetected = 90;
	
	var orientationName;
	switch(orientationDetected) {
    case 0:
    	orientationName = 'portraitButtonBottom';
        break; 
    case 90:
    	orientationName = 'landscapeButtonRight';
        break;
    case -90: 
    	orientationName = 'landscapeButtonLeft';
        break;
	case 180:
		orientationName = 'portraitButtonTop';
     break;
  }
	return orientationName;
}

//end functions for float

function showAssetsParity(option){
    if (option == 'even' || option == 'odd') {
        $('*[data-pubcoder="' + option + '"]').css('display','block');
    } else {
        $('*[data-pubcoder="odd"]').css('display','block');
        $('*[data-pubcoder="even"]').css('display','block');
    }
}

//initAnimations
function initAnimation(obj,width,height,fps,countVar,isInfinite,howManyLoops,backToFirstFrame)
{
var frameTime = 1000/fps;
var nextAnimationAfterLastLoop = howManyLoops + 1
var lastLoop = howManyLoops;
$(obj).spritespin({
                    
    width   : width,  // width in pixels of the window/frame
    height  : height,  // height in pixels of the window/frame
    animate : false,
    renderer: 'image',
    loop: true,
    frameTime: frameTime,
     onFrame: function(e,data) {
         var stopAtFrame = data.images.length - 1;
         if (!isInfinite) {
            var api = $(obj).spritespin('api');
            if (data.frame == 0) {
                countVar++;
                if (backToFirstFrame && countVar == nextAnimationAfterLastLoop) {
                 stopAnimation(api,obj);
                countVar = 1;
                }
            }
            if (data.frame == stopAtFrame && countVar == lastLoop) {
                if (!backToFirstFrame) {
                    stopAnimation(api,obj);
                    countVar = 0;
                }
            }
        }
      }
  });
function stopAnimation(apiAnimation,object)
    {
        apiAnimation.stopAnimation();
        $(object).removeClass("playing");
         var objectStripped = object.substr(1);
        $(object).trigger(objectStripped + "_animation_ended");
    }
}

function SChtmlOutput(currentPage, countPages, isTouchSystemUI, isSwipeEnabled, SCchapters, SCInfo, SCPagesInfo)
{
	this.currentHtmlPage = currentPage,
	this.totalPages = countPages;
	this.timeoutHandleChangePage = null,
	this.timeoutHandleTriggerTouchStart = null,		
	this.onTouchSystemUI = isTouchSystemUI,
	this.loadPage = function(page) {
		    // in the example above, assign the result
		    if (page != this.currentHtmlPage) {
		        this.timeoutHandleChangePage = window.setTimeout(function(){
		        	console.log("cambia pagina: "+page);
		        	//check if local, if not show in paren
		        	if (!window.PubCoderHtmlLocal && window.self !== window.top) {
		        		window.parent.showPlaceHolderImage(page);
		        	}
		        	//console.log(SCPagesInfo.pagesInfo[page-1]);
		            //location.href='../' + page + '/page.xhtml';
		            location.href='../../assets/' + SCPagesInfo.pagesInfo[page-1].url;
		        },500);
		    }
		},
		this.loadAndUnloadPage = function(page) {
				for (i = page-2; i <= page + 2; i++) {
							if (i != this.currentHtmlPage) {
								if (i > 0 && i <= this.totalPages) {
									if  ($('SCPage' + i + ' img').length == 0) {
										this.appendImage(i);
									}
								}
							}
					}
				var pageLeftToRemove = page - 3; 
				if (pageLeftToRemove > 0 && $('#SCPage' + pageLeftToRemove + ' img').length != 0 && pageLeftToRemove != this.currentHtmlPage) 
					this.removeImage(pageLeftToRemove);
				var pageRightToRemove = page + 3;
				if (pageRightToRemove <= this.totalPages  && $('#SCPage' + pageRightToRemove + ' img').length != 0 && pageRightToRemove != this.currentHtmlPage)
					this.removeImage(pageRightToRemove);
		},

		this.appendImage = function(page) {
			$('div#SCPage' + page).html('<img class="SCPreview" id="SCPreview' + page + '" src="../' + page + '/loading.jpg" />');
			
		},

		this.removeImage = function(page) {
			$('#SCPage' + page + ' img#SCPreview' + page).remove(); 
		},
		this.goToNextPage = function() {
			window.mySwiper.swipeNext();
		},
		this.goToPreviousPage = function() {
			window.mySwiper.swipePrev();
		},
		this.toggleToc = function() {
			this.timeoutHandleTriggerTouchStart = window.setTimeout(function(){
		           // location.href='../' + page + '/page.xhtml';
		        
			var menuTocHeight = $("#SCNavigationToc").height();
			var navbarHeight = $("#SCNavbar").height();
				if (window.tocIsVisible) {
					$("#SCNavigationToc").animate({bottom: -menuTocHeight},200,'easieEaseIn',function() {
						$("#SCNavigationToc").css("display","none");
					});
					$("#SCNavbar").animate({top: -navbarHeight},200,'easieEaseIn',function() {
						$("#SCNavbar").css("display","none");					
					});
				
					window.tocIsVisible=false;	
				}
					else
							{
								$("#SCNavigationToc").css("display","block");
								$("#SCNavigationToc").animate({bottom: 0},200,'easieEaseIn');
								$("#SCNavbar").css("display","block");
								$("#SCNavbar").animate({top: 0},200,'easieEaseIn');
								window.tocIsVisible=true;
				}
			},200);

			},
			this.chapters = SCchapters,
            this.feedChapter = function(){
            		for (var u = 0; u < this.chapters.chapters.length; u++){
					    	var chapter = this.chapters.chapters[u];
					    		$('#SCNavbar .dropdown-menu').append('<li data-scpage="' + chapter.page + '"><a href="javascript:;">'+chapter.title+'</a></li>');
					}
			},
			this.info = SCInfo,
            this.feedInfo = function(){
            		    	var info = this.info.info[0];
					    		$('#SCInfo #SCInfoTitle').append(info.Title);
					    		$('#SCInfo #SCInfoAuthor').append(info.Author);
					    		$('#SCInfo #SCInfoCredits').append(info.Credits);
				
			}

}

function preventPropagation(){
	$.each($("body *"), function(i) { 
		var events = $._data( $(this)[0], "events" ); 
		var objectTarget = $(this);
		for (var i in events) {
			if (i != "undefined") { 
						objectTarget.on("mousedown touchstart",function(event){ 
							event.stopPropagation(); 

				}); 
			} 
		}
		});	
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function SCPreventTouch(obj){
	$(obj).css('touch-action','none');
}
