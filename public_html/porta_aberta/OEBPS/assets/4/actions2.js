var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
//var orientationDevice = getOrientation(PubCoder.isAndroidReader);
var aigX = 0, aigY = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj1713_onLoad_activeActionGroupIndex = -1;
var obj1713_onLoad_runningActionsCount = 0;
var obj1713_onLoad_loopCount = 0;
var obj1717_onLoad_activeActionGroupIndex = -1;
var obj1717_onLoad_runningActionsCount = 0;
var obj1717_onLoad_loopCount = 0;
var obj1721_onLoad_activeActionGroupIndex = -1;
var obj1721_onLoad_runningActionsCount = 0;
var obj1721_onLoad_loopCount = 0;
var obj1725_onLoad_activeActionGroupIndex = -1;
var obj1725_onLoad_runningActionsCount = 0;
var obj1725_onLoad_loopCount = 0;
var obj1729_onLoad_activeActionGroupIndex = -1;
var obj1729_onLoad_runningActionsCount = 0;
var obj1729_onLoad_loopCount = 0;
var obj1733_onTap_activeActionGroupIndex = -1;
var obj1733_onTap_runningActionsCount = 0;
var obj1733_onTap_loopCount = 0;
var obj1743_onTap_activeActionGroupIndex = -1;
var obj1743_onTap_runningActionsCount = 0;
var obj1743_onTap_loopCount = 0;
var obj1767_onLoad_activeActionGroupIndex = -1;
var obj1767_onLoad_runningActionsCount = 0;
var obj1767_onLoad_loopCount = 0;
var obj1791_onLoad_activeActionGroupIndex = -1;
var obj1791_onLoad_runningActionsCount = 0;
var obj1791_onLoad_loopCount = 0;
var obj1795_onLoad_activeActionGroupIndex = -1;
var obj1795_onLoad_runningActionsCount = 0;
var obj1795_onLoad_loopCount = 0;
var obj1799_onLoad_activeActionGroupIndex = -1;
var obj1799_onLoad_runningActionsCount = 0;
var obj1799_onLoad_loopCount = 0;
var obj1803_onLoad_activeActionGroupIndex = -1;
var obj1803_onLoad_runningActionsCount = 0;
var obj1803_onLoad_loopCount = 0;
var obj1807_onTap_activeActionGroupIndex = -1;
var obj1807_onTap_runningActionsCount = 0;
var obj1807_onTap_loopCount = 0;
var obj1814_onLoad_activeActionGroupIndex = -1;
var obj1814_onLoad_runningActionsCount = 0;
var obj1814_onLoad_loopCount = 0;
var obj1818_onLoad_activeActionGroupIndex = -1;
var obj1818_onLoad_runningActionsCount = 0;
var obj1818_onLoad_loopCount = 0;
var obj1822_onLoad_activeActionGroupIndex = -1;
var obj1822_onLoad_runningActionsCount = 0;
var obj1822_onLoad_loopCount = 0;
var obj1826_onLoad_activeActionGroupIndex = -1;
var obj1826_onLoad_runningActionsCount = 0;
var obj1826_onLoad_loopCount = 0;
var obj1830_onLoad_activeActionGroupIndex = -1;
var obj1830_onLoad_runningActionsCount = 0;
var obj1830_onLoad_loopCount = 0;
var obj1834_onLoad_activeActionGroupIndex = -1;
var obj1834_onLoad_runningActionsCount = 0;
var obj1834_onLoad_loopCount = 0;
var obj1838_onLoad_activeActionGroupIndex = -1;
var obj1838_onLoad_runningActionsCount = 0;
var obj1838_onLoad_loopCount = 0;
var obj1842_onLoad_activeActionGroupIndex = -1;
var obj1842_onLoad_runningActionsCount = 0;
var obj1842_onLoad_loopCount = 0;
var obj1846_onLoad_activeActionGroupIndex = -1;
var obj1846_onLoad_runningActionsCount = 0;
var obj1846_onLoad_loopCount = 0;
var obj1850_onLoad_activeActionGroupIndex = -1;
var obj1850_onLoad_runningActionsCount = 0;
var obj1850_onLoad_loopCount = 0;
var obj1854_onTap_activeActionGroupIndex = -1;
var obj1854_onTap_runningActionsCount = 0;
var obj1854_onTap_loopCount = 0;
var obj1903_onTap_activeActionGroupIndex = -1;
var obj1903_onTap_runningActionsCount = 0;
var obj1903_onTap_loopCount = 0;
var obj1944_onTap_activeActionGroupIndex = -1;
var obj1944_onTap_runningActionsCount = 0;
var obj1944_onTap_loopCount = 0;
var obj1950_onTap_activeActionGroupIndex = -1;
var obj1950_onTap_runningActionsCount = 0;
var obj1950_onTap_loopCount = 0;
var obj1970_onTap_activeActionGroupIndex = -1;
var obj1970_onTap_runningActionsCount = 0;
var obj1970_onTap_loopCount = 0;
var obj1983_onTap_activeActionGroupIndex = -1;
var obj1983_onTap_runningActionsCount = 0;
var obj1983_onTap_loopCount = 0;
var obj2001_onTap_activeActionGroupIndex = -1;
var obj2001_onTap_runningActionsCount = 0;
var obj2001_onTap_loopCount = 0;
var obj2008_onTap_activeActionGroupIndex = -1;
var obj2008_onTap_runningActionsCount = 0;
var obj2008_onTap_loopCount = 0;
var obj2015_onTap_activeActionGroupIndex = -1;
var obj2015_onTap_runningActionsCount = 0;
var obj2015_onTap_loopCount = 0;
var obj2022_onTap_activeActionGroupIndex = -1;
var obj2022_onTap_runningActionsCount = 0;
var obj2022_onTap_loopCount = 0;
var obj2043_onTap_activeActionGroupIndex = -1;
var obj2043_onTap_runningActionsCount = 0;
var obj2043_onTap_loopCount = 0;
var obj2068_onTap_activeActionGroupIndex = -1;
var obj2068_onTap_runningActionsCount = 0;
var obj2068_onTap_loopCount = 0;
var obj2079_onTap_activeActionGroupIndex = -1;
var obj2079_onTap_runningActionsCount = 0;
var obj2079_onTap_loopCount = 0;
var obj2094_onTap_activeActionGroupIndex = -1;
var obj2094_onTap_runningActionsCount = 0;
var obj2094_onTap_loopCount = 0;
var obj2149_onTap_activeActionGroupIndex = -1;
var obj2149_onTap_runningActionsCount = 0;
var obj2149_onTap_loopCount = 0;
var obj2479_onTap_activeActionGroupIndex = -1;
var obj2479_onTap_runningActionsCount = 0;
var obj2479_onTap_loopCount = 0;

function reset2(){
     obj1713_onLoad_activeActionGroupIndex = -1;
 obj1713_onLoad_runningActionsCount = 0;
 obj1713_onLoad_loopCount = 0;
 obj1717_onLoad_activeActionGroupIndex = -1;
 obj1717_onLoad_runningActionsCount = 0;
 obj1717_onLoad_loopCount = 0;
 obj1721_onLoad_activeActionGroupIndex = -1;
 obj1721_onLoad_runningActionsCount = 0;
 obj1721_onLoad_loopCount = 0;
 obj1725_onLoad_activeActionGroupIndex = -1;
 obj1725_onLoad_runningActionsCount = 0;
 obj1725_onLoad_loopCount = 0;
 obj1729_onLoad_activeActionGroupIndex = -1;
 obj1729_onLoad_runningActionsCount = 0;
 obj1729_onLoad_loopCount = 0;
 obj1733_onTap_activeActionGroupIndex = -1;
 obj1733_onTap_runningActionsCount = 0;
 obj1733_onTap_loopCount = 0;
 obj1743_onTap_activeActionGroupIndex = -1;
 obj1743_onTap_runningActionsCount = 0;
 obj1743_onTap_loopCount = 0;
 obj1767_onLoad_activeActionGroupIndex = -1;
 obj1767_onLoad_runningActionsCount = 0;
 obj1767_onLoad_loopCount = 0;
 obj1791_onLoad_activeActionGroupIndex = -1;
 obj1791_onLoad_runningActionsCount = 0;
 obj1791_onLoad_loopCount = 0;
 obj1795_onLoad_activeActionGroupIndex = -1;
 obj1795_onLoad_runningActionsCount = 0;
 obj1795_onLoad_loopCount = 0;
 obj1799_onLoad_activeActionGroupIndex = -1;
 obj1799_onLoad_runningActionsCount = 0;
 obj1799_onLoad_loopCount = 0;
 obj1803_onLoad_activeActionGroupIndex = -1;
 obj1803_onLoad_runningActionsCount = 0;
 obj1803_onLoad_loopCount = 0;
 obj1807_onTap_activeActionGroupIndex = -1;
 obj1807_onTap_runningActionsCount = 0;
 obj1807_onTap_loopCount = 0;
 obj1814_onLoad_activeActionGroupIndex = -1;
 obj1814_onLoad_runningActionsCount = 0;
 obj1814_onLoad_loopCount = 0;
 obj1818_onLoad_activeActionGroupIndex = -1;
 obj1818_onLoad_runningActionsCount = 0;
 obj1818_onLoad_loopCount = 0;
 obj1822_onLoad_activeActionGroupIndex = -1;
 obj1822_onLoad_runningActionsCount = 0;
 obj1822_onLoad_loopCount = 0;
 obj1826_onLoad_activeActionGroupIndex = -1;
 obj1826_onLoad_runningActionsCount = 0;
 obj1826_onLoad_loopCount = 0;
 obj1830_onLoad_activeActionGroupIndex = -1;
 obj1830_onLoad_runningActionsCount = 0;
 obj1830_onLoad_loopCount = 0;
 obj1834_onLoad_activeActionGroupIndex = -1;
 obj1834_onLoad_runningActionsCount = 0;
 obj1834_onLoad_loopCount = 0;
 obj1838_onLoad_activeActionGroupIndex = -1;
 obj1838_onLoad_runningActionsCount = 0;
 obj1838_onLoad_loopCount = 0;
 obj1842_onLoad_activeActionGroupIndex = -1;
 obj1842_onLoad_runningActionsCount = 0;
 obj1842_onLoad_loopCount = 0;
 obj1846_onLoad_activeActionGroupIndex = -1;
 obj1846_onLoad_runningActionsCount = 0;
 obj1846_onLoad_loopCount = 0;
 obj1850_onLoad_activeActionGroupIndex = -1;
 obj1850_onLoad_runningActionsCount = 0;
 obj1850_onLoad_loopCount = 0;
 obj1854_onTap_activeActionGroupIndex = -1;
 obj1854_onTap_runningActionsCount = 0;
 obj1854_onTap_loopCount = 0;
 obj1903_onTap_activeActionGroupIndex = -1;
 obj1903_onTap_runningActionsCount = 0;
 obj1903_onTap_loopCount = 0;
 obj1944_onTap_activeActionGroupIndex = -1;
 obj1944_onTap_runningActionsCount = 0;
 obj1944_onTap_loopCount = 0;
 obj1950_onTap_activeActionGroupIndex = -1;
 obj1950_onTap_runningActionsCount = 0;
 obj1950_onTap_loopCount = 0;
 obj1970_onTap_activeActionGroupIndex = -1;
 obj1970_onTap_runningActionsCount = 0;
 obj1970_onTap_loopCount = 0;
 obj1983_onTap_activeActionGroupIndex = -1;
 obj1983_onTap_runningActionsCount = 0;
 obj1983_onTap_loopCount = 0;
 obj2001_onTap_activeActionGroupIndex = -1;
 obj2001_onTap_runningActionsCount = 0;
 obj2001_onTap_loopCount = 0;
 obj2008_onTap_activeActionGroupIndex = -1;
 obj2008_onTap_runningActionsCount = 0;
 obj2008_onTap_loopCount = 0;
 obj2015_onTap_activeActionGroupIndex = -1;
 obj2015_onTap_runningActionsCount = 0;
 obj2015_onTap_loopCount = 0;
 obj2022_onTap_activeActionGroupIndex = -1;
 obj2022_onTap_runningActionsCount = 0;
 obj2022_onTap_loopCount = 0;
 obj2043_onTap_activeActionGroupIndex = -1;
 obj2043_onTap_runningActionsCount = 0;
 obj2043_onTap_loopCount = 0;
 obj2068_onTap_activeActionGroupIndex = -1;
 obj2068_onTap_runningActionsCount = 0;
 obj2068_onTap_loopCount = 0;
 obj2079_onTap_activeActionGroupIndex = -1;
 obj2079_onTap_runningActionsCount = 0;
 obj2079_onTap_loopCount = 0;
 obj2094_onTap_activeActionGroupIndex = -1;
 obj2094_onTap_runningActionsCount = 0;
 obj2094_onTap_loopCount = 0;
 obj2149_onTap_activeActionGroupIndex = -1;
 obj2149_onTap_runningActionsCount = 0;
 obj2149_onTap_loopCount = 0;
 obj2479_onTap_activeActionGroupIndex = -1;
 obj2479_onTap_runningActionsCount = 0;
 obj2479_onTap_loopCount = 0;

}

/*
 * 
 * Init SCCounter
 *
 * 
 */
 
$(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj1713_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1713_onLoad_activeActionGroupIndex = -1;
		$("#obj1713").trigger("obj1713_onLoad_ended");
		
		return;
	}
	window.obj1713_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1713 
hide_1716();
function hide_1716() {
	window.obj1713_onLoad_runningActionsCount = obj1713_onLoad_runningActionsCount + 1;
	$("#obj1713").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1713_onLoad_runningActionsCount = window.obj1713_onLoad_runningActionsCount - 1;
if (window.obj1713_onLoad_runningActionsCount == 0) {
	obj1713_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1713_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1713_onLoad_activeActionGroupIndex = -1;
		$("#obj1713").trigger("obj1713_onLoad_ended");
		
		return;
	}
	window.obj1713_onLoad_activeActionGroupIndex = 1;
	





















};
obj1717_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1717_onLoad_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_onLoad_ended");
		
		return;
	}
	window.obj1717_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1717 
hide_1720();
function hide_1720() {
	window.obj1717_onLoad_runningActionsCount = obj1717_onLoad_runningActionsCount + 1;
	$("#obj1717").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1717_onLoad_runningActionsCount = window.obj1717_onLoad_runningActionsCount - 1;
if (window.obj1717_onLoad_runningActionsCount == 0) {
	obj1717_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1717_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1717_onLoad_activeActionGroupIndex = -1;
		$("#obj1717").trigger("obj1717_onLoad_ended");
		
		return;
	}
	window.obj1717_onLoad_activeActionGroupIndex = 1;
	





















};
obj1721_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1721_onLoad_activeActionGroupIndex = -1;
		$("#obj1721").trigger("obj1721_onLoad_ended");
		
		return;
	}
	window.obj1721_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1721 
hide_1724();
function hide_1724() {
	window.obj1721_onLoad_runningActionsCount = obj1721_onLoad_runningActionsCount + 1;
	$("#obj1721").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1721_onLoad_runningActionsCount = window.obj1721_onLoad_runningActionsCount - 1;
if (window.obj1721_onLoad_runningActionsCount == 0) {
	obj1721_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1721_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1721_onLoad_activeActionGroupIndex = -1;
		$("#obj1721").trigger("obj1721_onLoad_ended");
		
		return;
	}
	window.obj1721_onLoad_activeActionGroupIndex = 1;
	





















};
obj1725_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1725_onLoad_activeActionGroupIndex = -1;
		$("#obj1725").trigger("obj1725_onLoad_ended");
		
		return;
	}
	window.obj1725_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1725 
hide_1728();
function hide_1728() {
	window.obj1725_onLoad_runningActionsCount = obj1725_onLoad_runningActionsCount + 1;
	$("#obj1725").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1725_onLoad_runningActionsCount = window.obj1725_onLoad_runningActionsCount - 1;
if (window.obj1725_onLoad_runningActionsCount == 0) {
	obj1725_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1725_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1725_onLoad_activeActionGroupIndex = -1;
		$("#obj1725").trigger("obj1725_onLoad_ended");
		
		return;
	}
	window.obj1725_onLoad_activeActionGroupIndex = 1;
	





















};
obj1729_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1729_onLoad_activeActionGroupIndex = -1;
		$("#obj1729").trigger("obj1729_onLoad_ended");
		
		return;
	}
	window.obj1729_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1729 
hide_1732();
function hide_1732() {
	window.obj1729_onLoad_runningActionsCount = obj1729_onLoad_runningActionsCount + 1;
	$("#obj1729").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1729_onLoad_runningActionsCount = window.obj1729_onLoad_runningActionsCount - 1;
if (window.obj1729_onLoad_runningActionsCount == 0) {
	obj1729_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1729_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1729_onLoad_activeActionGroupIndex = -1;
		$("#obj1729").trigger("obj1729_onLoad_ended");
		
		return;
	}
	window.obj1729_onLoad_activeActionGroupIndex = 1;
	





















};
obj1733_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1733_onTap_activeActionGroupIndex = -1;
		$("#obj1733").trigger("obj1733_onTap_ended");
		
		return;
	}
	window.obj1733_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1713 
show_1735();
function show_1735() {
	window.obj1733_onTap_runningActionsCount = obj1733_onTap_runningActionsCount + 1;
	$("#obj1713").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1733_onTap_runningActionsCount = window.obj1733_onTap_runningActionsCount - 1;
if (window.obj1733_onTap_runningActionsCount == 0) {
	obj1733_onTap_actionGroup1();
}
				$("#obj1713").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1751 
show_1737();
function show_1737() {
	window.obj1733_onTap_runningActionsCount = obj1733_onTap_runningActionsCount + 1;
	$("#obj1751").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1733_onTap_runningActionsCount = window.obj1733_onTap_runningActionsCount - 1;
if (window.obj1733_onTap_runningActionsCount == 0) {
	obj1733_onTap_actionGroup1();
}
				$("#obj1751").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1717 
show_1740();
function show_1740() {
	window.obj1733_onTap_runningActionsCount = obj1733_onTap_runningActionsCount + 1;
	$("#obj1717").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1733_onTap_runningActionsCount = window.obj1733_onTap_runningActionsCount - 1;
if (window.obj1733_onTap_runningActionsCount == 0) {
	obj1733_onTap_actionGroup1();
}
				$("#obj1717").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1738();
function playAudioFile_1738() {
	window.obj1733_onTap_runningActionsCount = obj1733_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1738")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1733_onTap_runningActionsCount = window.obj1733_onTap_runningActionsCount - 1;
if (window.obj1733_onTap_runningActionsCount == 0) {
	obj1733_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1733_onTap_runningActionsCount = window.obj1733_onTap_runningActionsCount - 1;
if (window.obj1733_onTap_runningActionsCount == 0) {
	obj1733_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1739();
function playAudioFile_1739() {
	window.obj1733_onTap_runningActionsCount = obj1733_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1739")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1733_onTap_runningActionsCount = window.obj1733_onTap_runningActionsCount - 1;
if (window.obj1733_onTap_runningActionsCount == 0) {
	obj1733_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1733_onTap_runningActionsCount = window.obj1733_onTap_runningActionsCount - 1;
if (window.obj1733_onTap_runningActionsCount == 0) {
	obj1733_onTap_actionGroup1();
}
	}
	
}














};
obj1733_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1733_onTap_activeActionGroupIndex = -1;
		$("#obj1733").trigger("obj1733_onTap_ended");
		
		return;
	}
	window.obj1733_onTap_activeActionGroupIndex = 1;
	





















};
obj1743_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1743_onTap_activeActionGroupIndex = -1;
		$("#obj1743").trigger("obj1743_onTap_ended");
		
		return;
	}
	window.obj1743_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1729 
show_1745();
function show_1745() {
	window.obj1743_onTap_runningActionsCount = obj1743_onTap_runningActionsCount + 1;
	$("#obj1729").fadeIn(600, function() {
			setTimeout(function() {
				window.obj1743_onTap_runningActionsCount = window.obj1743_onTap_runningActionsCount - 1;
if (window.obj1743_onTap_runningActionsCount == 0) {
	obj1743_onTap_actionGroup1();
}
				$("#obj1729").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1759 
show_1746();
function show_1746() {
	window.obj1743_onTap_runningActionsCount = obj1743_onTap_runningActionsCount + 1;
	$("#obj1759").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1743_onTap_runningActionsCount = window.obj1743_onTap_runningActionsCount - 1;
if (window.obj1743_onTap_runningActionsCount == 0) {
	obj1743_onTap_actionGroup1();
}
				$("#obj1759").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1748();
function playAudioFile_1748() {
	window.obj1743_onTap_runningActionsCount = obj1743_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1748")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1743_onTap_runningActionsCount = window.obj1743_onTap_runningActionsCount - 1;
if (window.obj1743_onTap_runningActionsCount == 0) {
	obj1743_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1743_onTap_runningActionsCount = window.obj1743_onTap_runningActionsCount - 1;
if (window.obj1743_onTap_runningActionsCount == 0) {
	obj1743_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1749();
function playAudioFile_1749() {
	window.obj1743_onTap_runningActionsCount = obj1743_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1749")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1743_onTap_runningActionsCount = window.obj1743_onTap_runningActionsCount - 1;
if (window.obj1743_onTap_runningActionsCount == 0) {
	obj1743_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1743_onTap_runningActionsCount = window.obj1743_onTap_runningActionsCount - 1;
if (window.obj1743_onTap_runningActionsCount == 0) {
	obj1743_onTap_actionGroup1();
}
	}
	
}














};
obj1743_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1743_onTap_activeActionGroupIndex = -1;
		$("#obj1743").trigger("obj1743_onTap_ended");
		
		return;
	}
	window.obj1743_onTap_activeActionGroupIndex = 1;
	





















};
obj1767_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1767_onLoad_activeActionGroupIndex = -1;
		$("#obj1767").trigger("obj1767_onLoad_ended");
		
		return;
	}
	window.obj1767_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1767 
hide_1770();
function hide_1770() {
	window.obj1767_onLoad_runningActionsCount = obj1767_onLoad_runningActionsCount + 1;
	$("#obj1767").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1767_onLoad_runningActionsCount = window.obj1767_onLoad_runningActionsCount - 1;
if (window.obj1767_onLoad_runningActionsCount == 0) {
	obj1767_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1767_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1767_onLoad_activeActionGroupIndex = -1;
		$("#obj1767").trigger("obj1767_onLoad_ended");
		
		return;
	}
	window.obj1767_onLoad_activeActionGroupIndex = 1;
	





















};
obj1791_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1791_onLoad_activeActionGroupIndex = -1;
		$("#obj1791").trigger("obj1791_onLoad_ended");
		
		return;
	}
	window.obj1791_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1791 
hide_1794();
function hide_1794() {
	window.obj1791_onLoad_runningActionsCount = obj1791_onLoad_runningActionsCount + 1;
	$("#obj1791").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1791_onLoad_runningActionsCount = window.obj1791_onLoad_runningActionsCount - 1;
if (window.obj1791_onLoad_runningActionsCount == 0) {
	obj1791_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1791_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1791_onLoad_activeActionGroupIndex = -1;
		$("#obj1791").trigger("obj1791_onLoad_ended");
		
		return;
	}
	window.obj1791_onLoad_activeActionGroupIndex = 1;
	





















};
obj1795_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1795_onLoad_activeActionGroupIndex = -1;
		$("#obj1795").trigger("obj1795_onLoad_ended");
		
		return;
	}
	window.obj1795_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1795 
hide_1798();
function hide_1798() {
	window.obj1795_onLoad_runningActionsCount = obj1795_onLoad_runningActionsCount + 1;
	$("#obj1795").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1795_onLoad_runningActionsCount = window.obj1795_onLoad_runningActionsCount - 1;
if (window.obj1795_onLoad_runningActionsCount == 0) {
	obj1795_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1795_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1795_onLoad_activeActionGroupIndex = -1;
		$("#obj1795").trigger("obj1795_onLoad_ended");
		
		return;
	}
	window.obj1795_onLoad_activeActionGroupIndex = 1;
	





















};
obj1799_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1799_onLoad_activeActionGroupIndex = -1;
		$("#obj1799").trigger("obj1799_onLoad_ended");
		
		return;
	}
	window.obj1799_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1799 
hide_1802();
function hide_1802() {
	window.obj1799_onLoad_runningActionsCount = obj1799_onLoad_runningActionsCount + 1;
	$("#obj1799").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1799_onLoad_runningActionsCount = window.obj1799_onLoad_runningActionsCount - 1;
if (window.obj1799_onLoad_runningActionsCount == 0) {
	obj1799_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1799_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1799_onLoad_activeActionGroupIndex = -1;
		$("#obj1799").trigger("obj1799_onLoad_ended");
		
		return;
	}
	window.obj1799_onLoad_activeActionGroupIndex = 1;
	





















};
obj1803_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1803_onLoad_activeActionGroupIndex = -1;
		$("#obj1803").trigger("obj1803_onLoad_ended");
		
		return;
	}
	window.obj1803_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1803 
hide_1806();
function hide_1806() {
	window.obj1803_onLoad_runningActionsCount = obj1803_onLoad_runningActionsCount + 1;
	$("#obj1803").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1803_onLoad_runningActionsCount = window.obj1803_onLoad_runningActionsCount - 1;
if (window.obj1803_onLoad_runningActionsCount == 0) {
	obj1803_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1803_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1803_onLoad_activeActionGroupIndex = -1;
		$("#obj1803").trigger("obj1803_onLoad_ended");
		
		return;
	}
	window.obj1803_onLoad_activeActionGroupIndex = 1;
	





















};
obj1807_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1807_onTap_activeActionGroupIndex = -1;
		$("#obj1807").trigger("obj1807_onTap_ended");
		
		return;
	}
	window.obj1807_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1791 
show_1809();
function show_1809() {
	window.obj1807_onTap_runningActionsCount = obj1807_onTap_runningActionsCount + 1;
	$("#obj1791").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1807_onTap_runningActionsCount = window.obj1807_onTap_runningActionsCount - 1;
if (window.obj1807_onTap_runningActionsCount == 0) {
	obj1807_onTap_actionGroup1();
}
				$("#obj1791").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1893 
show_1810();
function show_1810() {
	window.obj1807_onTap_runningActionsCount = obj1807_onTap_runningActionsCount + 1;
	$("#obj1893").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1807_onTap_runningActionsCount = window.obj1807_onTap_runningActionsCount - 1;
if (window.obj1807_onTap_runningActionsCount == 0) {
	obj1807_onTap_actionGroup1();
}
				$("#obj1893").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1811();
function playAudioFile_1811() {
	window.obj1807_onTap_runningActionsCount = obj1807_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1811")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1807_onTap_runningActionsCount = window.obj1807_onTap_runningActionsCount - 1;
if (window.obj1807_onTap_runningActionsCount == 0) {
	obj1807_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1807_onTap_runningActionsCount = window.obj1807_onTap_runningActionsCount - 1;
if (window.obj1807_onTap_runningActionsCount == 0) {
	obj1807_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1813();
function playAudioFile_1813() {
	window.obj1807_onTap_runningActionsCount = obj1807_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1813")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1807_onTap_runningActionsCount = window.obj1807_onTap_runningActionsCount - 1;
if (window.obj1807_onTap_runningActionsCount == 0) {
	obj1807_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1807_onTap_runningActionsCount = window.obj1807_onTap_runningActionsCount - 1;
if (window.obj1807_onTap_runningActionsCount == 0) {
	obj1807_onTap_actionGroup1();
}
	}
	
}














};
obj1807_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1807_onTap_activeActionGroupIndex = -1;
		$("#obj1807").trigger("obj1807_onTap_ended");
		
		return;
	}
	window.obj1807_onTap_activeActionGroupIndex = 1;
	





















};
obj1814_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1814_onLoad_activeActionGroupIndex = -1;
		$("#obj1814").trigger("obj1814_onLoad_ended");
		
		return;
	}
	window.obj1814_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1814 
hide_1817();
function hide_1817() {
	window.obj1814_onLoad_runningActionsCount = obj1814_onLoad_runningActionsCount + 1;
	$("#obj1814").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1814_onLoad_runningActionsCount = window.obj1814_onLoad_runningActionsCount - 1;
if (window.obj1814_onLoad_runningActionsCount == 0) {
	obj1814_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1814_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1814_onLoad_activeActionGroupIndex = -1;
		$("#obj1814").trigger("obj1814_onLoad_ended");
		
		return;
	}
	window.obj1814_onLoad_activeActionGroupIndex = 1;
	





















};
obj1818_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1818_onLoad_activeActionGroupIndex = -1;
		$("#obj1818").trigger("obj1818_onLoad_ended");
		
		return;
	}
	window.obj1818_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1818 
hide_1821();
function hide_1821() {
	window.obj1818_onLoad_runningActionsCount = obj1818_onLoad_runningActionsCount + 1;
	$("#obj1818").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1818_onLoad_runningActionsCount = window.obj1818_onLoad_runningActionsCount - 1;
if (window.obj1818_onLoad_runningActionsCount == 0) {
	obj1818_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1818_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1818_onLoad_activeActionGroupIndex = -1;
		$("#obj1818").trigger("obj1818_onLoad_ended");
		
		return;
	}
	window.obj1818_onLoad_activeActionGroupIndex = 1;
	





















};
obj1822_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1822_onLoad_activeActionGroupIndex = -1;
		$("#obj1822").trigger("obj1822_onLoad_ended");
		
		return;
	}
	window.obj1822_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1822 
hide_1825();
function hide_1825() {
	window.obj1822_onLoad_runningActionsCount = obj1822_onLoad_runningActionsCount + 1;
	$("#obj1822").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1822_onLoad_runningActionsCount = window.obj1822_onLoad_runningActionsCount - 1;
if (window.obj1822_onLoad_runningActionsCount == 0) {
	obj1822_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1822_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1822_onLoad_activeActionGroupIndex = -1;
		$("#obj1822").trigger("obj1822_onLoad_ended");
		
		return;
	}
	window.obj1822_onLoad_activeActionGroupIndex = 1;
	





















};
obj1826_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1826_onLoad_activeActionGroupIndex = -1;
		$("#obj1826").trigger("obj1826_onLoad_ended");
		
		return;
	}
	window.obj1826_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1826 
hide_1829();
function hide_1829() {
	window.obj1826_onLoad_runningActionsCount = obj1826_onLoad_runningActionsCount + 1;
	$("#obj1826").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1826_onLoad_runningActionsCount = window.obj1826_onLoad_runningActionsCount - 1;
if (window.obj1826_onLoad_runningActionsCount == 0) {
	obj1826_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1826_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1826_onLoad_activeActionGroupIndex = -1;
		$("#obj1826").trigger("obj1826_onLoad_ended");
		
		return;
	}
	window.obj1826_onLoad_activeActionGroupIndex = 1;
	





















};
obj1830_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1830_onLoad_activeActionGroupIndex = -1;
		$("#obj1830").trigger("obj1830_onLoad_ended");
		
		return;
	}
	window.obj1830_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1830 
hide_1833();
function hide_1833() {
	window.obj1830_onLoad_runningActionsCount = obj1830_onLoad_runningActionsCount + 1;
	$("#obj1830").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1830_onLoad_runningActionsCount = window.obj1830_onLoad_runningActionsCount - 1;
if (window.obj1830_onLoad_runningActionsCount == 0) {
	obj1830_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1830_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1830_onLoad_activeActionGroupIndex = -1;
		$("#obj1830").trigger("obj1830_onLoad_ended");
		
		return;
	}
	window.obj1830_onLoad_activeActionGroupIndex = 1;
	





















};
obj1834_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1834_onLoad_activeActionGroupIndex = -1;
		$("#obj1834").trigger("obj1834_onLoad_ended");
		
		return;
	}
	window.obj1834_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1834 
hide_1837();
function hide_1837() {
	window.obj1834_onLoad_runningActionsCount = obj1834_onLoad_runningActionsCount + 1;
	$("#obj1834").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1834_onLoad_runningActionsCount = window.obj1834_onLoad_runningActionsCount - 1;
if (window.obj1834_onLoad_runningActionsCount == 0) {
	obj1834_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1834_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1834_onLoad_activeActionGroupIndex = -1;
		$("#obj1834").trigger("obj1834_onLoad_ended");
		
		return;
	}
	window.obj1834_onLoad_activeActionGroupIndex = 1;
	





















};
obj1838_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1838_onLoad_activeActionGroupIndex = -1;
		$("#obj1838").trigger("obj1838_onLoad_ended");
		
		return;
	}
	window.obj1838_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1838 
hide_1841();
function hide_1841() {
	window.obj1838_onLoad_runningActionsCount = obj1838_onLoad_runningActionsCount + 1;
	$("#obj1838").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1838_onLoad_runningActionsCount = window.obj1838_onLoad_runningActionsCount - 1;
if (window.obj1838_onLoad_runningActionsCount == 0) {
	obj1838_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1838_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1838_onLoad_activeActionGroupIndex = -1;
		$("#obj1838").trigger("obj1838_onLoad_ended");
		
		return;
	}
	window.obj1838_onLoad_activeActionGroupIndex = 1;
	





















};
obj1842_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1842_onLoad_activeActionGroupIndex = -1;
		$("#obj1842").trigger("obj1842_onLoad_ended");
		
		return;
	}
	window.obj1842_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1842 
hide_1845();
function hide_1845() {
	window.obj1842_onLoad_runningActionsCount = obj1842_onLoad_runningActionsCount + 1;
	$("#obj1842").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1842_onLoad_runningActionsCount = window.obj1842_onLoad_runningActionsCount - 1;
if (window.obj1842_onLoad_runningActionsCount == 0) {
	obj1842_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1842_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1842_onLoad_activeActionGroupIndex = -1;
		$("#obj1842").trigger("obj1842_onLoad_ended");
		
		return;
	}
	window.obj1842_onLoad_activeActionGroupIndex = 1;
	





















};
obj1846_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1846_onLoad_activeActionGroupIndex = -1;
		$("#obj1846").trigger("obj1846_onLoad_ended");
		
		return;
	}
	window.obj1846_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1846 
hide_1849();
function hide_1849() {
	window.obj1846_onLoad_runningActionsCount = obj1846_onLoad_runningActionsCount + 1;
	$("#obj1846").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1846_onLoad_runningActionsCount = window.obj1846_onLoad_runningActionsCount - 1;
if (window.obj1846_onLoad_runningActionsCount == 0) {
	obj1846_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1846_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1846_onLoad_activeActionGroupIndex = -1;
		$("#obj1846").trigger("obj1846_onLoad_ended");
		
		return;
	}
	window.obj1846_onLoad_activeActionGroupIndex = 1;
	





















};
obj1850_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1850_onLoad_activeActionGroupIndex = -1;
		$("#obj1850").trigger("obj1850_onLoad_ended");
		
		return;
	}
	window.obj1850_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1850 
hide_1853();
function hide_1853() {
	window.obj1850_onLoad_runningActionsCount = obj1850_onLoad_runningActionsCount + 1;
	$("#obj1850").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1850_onLoad_runningActionsCount = window.obj1850_onLoad_runningActionsCount - 1;
if (window.obj1850_onLoad_runningActionsCount == 0) {
	obj1850_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1850_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1850_onLoad_activeActionGroupIndex = -1;
		$("#obj1850").trigger("obj1850_onLoad_ended");
		
		return;
	}
	window.obj1850_onLoad_activeActionGroupIndex = 1;
	





















};
obj1854_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onTap_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onTap_ended");
		
		return;
	}
	window.obj1854_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1725 
show_1856();
function show_1856() {
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;
	$("#obj1725").fadeIn(600, function() {
			setTimeout(function() {
				window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;
if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup1();
}
				$("#obj1725").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1763 
show_1857();
function show_1857() {
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;
	$("#obj1763").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;
if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup1();
}
				$("#obj1763").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1858();
function playAudioFile_1858() {
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1858")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;
if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;
if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup1();
}
	}
	
}














};
obj1854_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1854_onTap_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onTap_ended");
		
		return;
	}
	window.obj1854_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_1860();
function playAudioFile_1860() {
	window.obj1854_onTap_runningActionsCount = obj1854_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1860")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;
if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj1854_onTap_runningActionsCount = window.obj1854_onTap_runningActionsCount - 1;
if (window.obj1854_onTap_runningActionsCount == 0) {
	obj1854_onTap_actionGroup2();
}
	}
	
}














};
obj1854_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1854_onTap_activeActionGroupIndex = -1;
		$("#obj1854").trigger("obj1854_onTap_ended");
		
		return;
	}
	window.obj1854_onTap_activeActionGroupIndex = 2;
	





















};
obj1903_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1903_onTap_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onTap_ended");
		
		return;
	}
	window.obj1903_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1721 
show_1905();
function show_1905() {
	window.obj1903_onTap_runningActionsCount = obj1903_onTap_runningActionsCount + 1;
	$("#obj1721").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1903_onTap_runningActionsCount = window.obj1903_onTap_runningActionsCount - 1;
if (window.obj1903_onTap_runningActionsCount == 0) {
	obj1903_onTap_actionGroup1();
}
				$("#obj1721").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1755 
show_1906();
function show_1906() {
	window.obj1903_onTap_runningActionsCount = obj1903_onTap_runningActionsCount + 1;
	$("#obj1755").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1903_onTap_runningActionsCount = window.obj1903_onTap_runningActionsCount - 1;
if (window.obj1903_onTap_runningActionsCount == 0) {
	obj1903_onTap_actionGroup1();
}
				$("#obj1755").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1907();
function playAudioFile_1907() {
	window.obj1903_onTap_runningActionsCount = obj1903_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1907")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1903_onTap_runningActionsCount = window.obj1903_onTap_runningActionsCount - 1;
if (window.obj1903_onTap_runningActionsCount == 0) {
	obj1903_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1903_onTap_runningActionsCount = window.obj1903_onTap_runningActionsCount - 1;
if (window.obj1903_onTap_runningActionsCount == 0) {
	obj1903_onTap_actionGroup1();
}
	}
	
}














};
obj1903_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1903_onTap_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onTap_ended");
		
		return;
	}
	window.obj1903_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_1909();
function playAudioFile_1909() {
	window.obj1903_onTap_runningActionsCount = obj1903_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1909")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1903_onTap_runningActionsCount = window.obj1903_onTap_runningActionsCount - 1;
if (window.obj1903_onTap_runningActionsCount == 0) {
	obj1903_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj1903_onTap_runningActionsCount = window.obj1903_onTap_runningActionsCount - 1;
if (window.obj1903_onTap_runningActionsCount == 0) {
	obj1903_onTap_actionGroup2();
}
	}
	
}














};
obj1903_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1903_onTap_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onTap_ended");
		
		return;
	}
	window.obj1903_onTap_activeActionGroupIndex = 2;
	





















};
obj1944_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_onTap_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_onTap_ended");
		
		return;
	}
	window.obj1944_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1830 
show_1946();
function show_1946() {
	window.obj1944_onTap_runningActionsCount = obj1944_onTap_runningActionsCount + 1;
	$("#obj1830").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1944_onTap_runningActionsCount = window.obj1944_onTap_runningActionsCount - 1;
if (window.obj1944_onTap_runningActionsCount == 0) {
	obj1944_onTap_actionGroup1();
}
				$("#obj1830").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj2090 
show_1947();
function show_1947() {
	window.obj1944_onTap_runningActionsCount = obj1944_onTap_runningActionsCount + 1;
	$("#obj2090").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1944_onTap_runningActionsCount = window.obj1944_onTap_runningActionsCount - 1;
if (window.obj1944_onTap_runningActionsCount == 0) {
	obj1944_onTap_actionGroup1();
}
				$("#obj2090").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1948();
function playAudioFile_1948() {
	window.obj1944_onTap_runningActionsCount = obj1944_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1948")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1944_onTap_runningActionsCount = window.obj1944_onTap_runningActionsCount - 1;
if (window.obj1944_onTap_runningActionsCount == 0) {
	obj1944_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1944_onTap_runningActionsCount = window.obj1944_onTap_runningActionsCount - 1;
if (window.obj1944_onTap_runningActionsCount == 0) {
	obj1944_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1949();
function playAudioFile_1949() {
	window.obj1944_onTap_runningActionsCount = obj1944_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1949")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1944_onTap_runningActionsCount = window.obj1944_onTap_runningActionsCount - 1;
if (window.obj1944_onTap_runningActionsCount == 0) {
	obj1944_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1944_onTap_runningActionsCount = window.obj1944_onTap_runningActionsCount - 1;
if (window.obj1944_onTap_runningActionsCount == 0) {
	obj1944_onTap_actionGroup1();
}
	}
	
}














};
obj1944_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1944_onTap_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_onTap_ended");
		
		return;
	}
	window.obj1944_onTap_activeActionGroupIndex = 1;
	





















};
obj1950_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1950_onTap_activeActionGroupIndex = -1;
		$("#obj1950").trigger("obj1950_onTap_ended");
		
		return;
	}
	window.obj1950_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1850 
show_1952();
function show_1952() {
	window.obj1950_onTap_runningActionsCount = obj1950_onTap_runningActionsCount + 1;
	$("#obj1850").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1950_onTap_runningActionsCount = window.obj1950_onTap_runningActionsCount - 1;
if (window.obj1950_onTap_runningActionsCount == 0) {
	obj1950_onTap_actionGroup1();
}
				$("#obj1850").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj2155 
show_1955();
function show_1955() {
	window.obj1950_onTap_runningActionsCount = obj1950_onTap_runningActionsCount + 1;
	$("#obj2155").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1950_onTap_runningActionsCount = window.obj1950_onTap_runningActionsCount - 1;
if (window.obj1950_onTap_runningActionsCount == 0) {
	obj1950_onTap_actionGroup1();
}
				$("#obj2155").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1953();
function playAudioFile_1953() {
	window.obj1950_onTap_runningActionsCount = obj1950_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1953")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1950_onTap_runningActionsCount = window.obj1950_onTap_runningActionsCount - 1;
if (window.obj1950_onTap_runningActionsCount == 0) {
	obj1950_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1950_onTap_runningActionsCount = window.obj1950_onTap_runningActionsCount - 1;
if (window.obj1950_onTap_runningActionsCount == 0) {
	obj1950_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1954();
function playAudioFile_1954() {
	window.obj1950_onTap_runningActionsCount = obj1950_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1954")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1950_onTap_runningActionsCount = window.obj1950_onTap_runningActionsCount - 1;
if (window.obj1950_onTap_runningActionsCount == 0) {
	obj1950_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1950_onTap_runningActionsCount = window.obj1950_onTap_runningActionsCount - 1;
if (window.obj1950_onTap_runningActionsCount == 0) {
	obj1950_onTap_actionGroup1();
}
	}
	
}














};
obj1950_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1950_onTap_activeActionGroupIndex = -1;
		$("#obj1950").trigger("obj1950_onTap_ended");
		
		return;
	}
	window.obj1950_onTap_activeActionGroupIndex = 1;
	





















};
obj1970_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1970_onTap_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onTap_ended");
		
		return;
	}
	window.obj1970_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1795 
show_1972();
function show_1972() {
	window.obj1970_onTap_runningActionsCount = obj1970_onTap_runningActionsCount + 1;
	$("#obj1795").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1970_onTap_runningActionsCount = window.obj1970_onTap_runningActionsCount - 1;
if (window.obj1970_onTap_runningActionsCount == 0) {
	obj1970_onTap_actionGroup1();
}
				$("#obj1795").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj2357 
show_1973();
function show_1973() {
	window.obj1970_onTap_runningActionsCount = obj1970_onTap_runningActionsCount + 1;
	$("#obj2357").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1970_onTap_runningActionsCount = window.obj1970_onTap_runningActionsCount - 1;
if (window.obj1970_onTap_runningActionsCount == 0) {
	obj1970_onTap_actionGroup1();
}
				$("#obj2357").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1974();
function playAudioFile_1974() {
	window.obj1970_onTap_runningActionsCount = obj1970_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1974")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1970_onTap_runningActionsCount = window.obj1970_onTap_runningActionsCount - 1;
if (window.obj1970_onTap_runningActionsCount == 0) {
	obj1970_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1970_onTap_runningActionsCount = window.obj1970_onTap_runningActionsCount - 1;
if (window.obj1970_onTap_runningActionsCount == 0) {
	obj1970_onTap_actionGroup1();
}
	}
	
}














};
obj1970_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1970_onTap_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onTap_ended");
		
		return;
	}
	window.obj1970_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_1976();
function playAudioFile_1976() {
	window.obj1970_onTap_runningActionsCount = obj1970_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1976")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1970_onTap_runningActionsCount = window.obj1970_onTap_runningActionsCount - 1;
if (window.obj1970_onTap_runningActionsCount == 0) {
	obj1970_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj1970_onTap_runningActionsCount = window.obj1970_onTap_runningActionsCount - 1;
if (window.obj1970_onTap_runningActionsCount == 0) {
	obj1970_onTap_actionGroup2();
}
	}
	
}














};
obj1970_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1970_onTap_activeActionGroupIndex = -1;
		$("#obj1970").trigger("obj1970_onTap_ended");
		
		return;
	}
	window.obj1970_onTap_activeActionGroupIndex = 2;
	





















};
obj1983_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1983_onTap_activeActionGroupIndex = -1;
		$("#obj1983").trigger("obj1983_onTap_ended");
		
		return;
	}
	window.obj1983_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1842 
show_1985();
function show_1985() {
	window.obj1983_onTap_runningActionsCount = obj1983_onTap_runningActionsCount + 1;
	$("#obj1842").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1983_onTap_runningActionsCount = window.obj1983_onTap_runningActionsCount - 1;
if (window.obj1983_onTap_runningActionsCount == 0) {
	obj1983_onTap_actionGroup1();
}
				$("#obj1842").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj2039 
show_1986();
function show_1986() {
	window.obj1983_onTap_runningActionsCount = obj1983_onTap_runningActionsCount + 1;
	$("#obj2039").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1983_onTap_runningActionsCount = window.obj1983_onTap_runningActionsCount - 1;
if (window.obj1983_onTap_runningActionsCount == 0) {
	obj1983_onTap_actionGroup1();
}
				$("#obj2039").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_3466();
function playAudioFile_3466() {
	window.obj1983_onTap_runningActionsCount = obj1983_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile3466")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1983_onTap_runningActionsCount = window.obj1983_onTap_runningActionsCount - 1;
if (window.obj1983_onTap_runningActionsCount == 0) {
	obj1983_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1983_onTap_runningActionsCount = window.obj1983_onTap_runningActionsCount - 1;
if (window.obj1983_onTap_runningActionsCount == 0) {
	obj1983_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1987();
function playAudioFile_1987() {
	window.obj1983_onTap_runningActionsCount = obj1983_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1987")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1983_onTap_runningActionsCount = window.obj1983_onTap_runningActionsCount - 1;
if (window.obj1983_onTap_runningActionsCount == 0) {
	obj1983_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1983_onTap_runningActionsCount = window.obj1983_onTap_runningActionsCount - 1;
if (window.obj1983_onTap_runningActionsCount == 0) {
	obj1983_onTap_actionGroup1();
}
	}
	
}














};
obj1983_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1983_onTap_activeActionGroupIndex = -1;
		$("#obj1983").trigger("obj1983_onTap_ended");
		
		return;
	}
	window.obj1983_onTap_activeActionGroupIndex = 1;
	





















};
obj2001_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2001_onTap_activeActionGroupIndex = -1;
		$("#obj2001").trigger("obj2001_onTap_ended");
		
		return;
	}
	window.obj2001_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1803 
show_2003();
function show_2003() {
	window.obj2001_onTap_runningActionsCount = obj2001_onTap_runningActionsCount + 1;
	$("#obj1803").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2001_onTap_runningActionsCount = window.obj2001_onTap_runningActionsCount - 1;
if (window.obj2001_onTap_runningActionsCount == 0) {
	obj2001_onTap_actionGroup1();
}
				$("#obj1803").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1893 
show_2004();
function show_2004() {
	window.obj2001_onTap_runningActionsCount = obj2001_onTap_runningActionsCount + 1;
	$("#obj1893").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2001_onTap_runningActionsCount = window.obj2001_onTap_runningActionsCount - 1;
if (window.obj2001_onTap_runningActionsCount == 0) {
	obj2001_onTap_actionGroup1();
}
				$("#obj1893").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2005();
function playAudioFile_2005() {
	window.obj2001_onTap_runningActionsCount = obj2001_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2005")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2001_onTap_runningActionsCount = window.obj2001_onTap_runningActionsCount - 1;
if (window.obj2001_onTap_runningActionsCount == 0) {
	obj2001_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2001_onTap_runningActionsCount = window.obj2001_onTap_runningActionsCount - 1;
if (window.obj2001_onTap_runningActionsCount == 0) {
	obj2001_onTap_actionGroup1();
}
	}
	
}














};
obj2001_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2001_onTap_activeActionGroupIndex = -1;
		$("#obj2001").trigger("obj2001_onTap_ended");
		
		return;
	}
	window.obj2001_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2007();
function playAudioFile_2007() {
	window.obj2001_onTap_runningActionsCount = obj2001_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2007")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2001_onTap_runningActionsCount = window.obj2001_onTap_runningActionsCount - 1;
if (window.obj2001_onTap_runningActionsCount == 0) {
	obj2001_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2001_onTap_runningActionsCount = window.obj2001_onTap_runningActionsCount - 1;
if (window.obj2001_onTap_runningActionsCount == 0) {
	obj2001_onTap_actionGroup2();
}
	}
	
}














};
obj2001_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2001_onTap_activeActionGroupIndex = -1;
		$("#obj2001").trigger("obj2001_onTap_ended");
		
		return;
	}
	window.obj2001_onTap_activeActionGroupIndex = 2;
	





















};
obj2008_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1818 
show_2010();
function show_2010() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;
	$("#obj1818").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup1();
}
				$("#obj1818").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1877 
show_2011();
function show_2011() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;
	$("#obj1877").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup1();
}
				$("#obj1877").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2012();
function playAudioFile_2012() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2012")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup1();
}
	}
	
}














};
obj2008_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2014();
function playAudioFile_2014() {
	window.obj2008_onTap_runningActionsCount = obj2008_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2014")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2008_onTap_runningActionsCount = window.obj2008_onTap_runningActionsCount - 1;
if (window.obj2008_onTap_runningActionsCount == 0) {
	obj2008_onTap_actionGroup2();
}
	}
	
}














};
obj2008_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2008_onTap_activeActionGroupIndex = -1;
		$("#obj2008").trigger("obj2008_onTap_ended");
		
		return;
	}
	window.obj2008_onTap_activeActionGroupIndex = 2;
	





















};
obj2015_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2015_onTap_activeActionGroupIndex = -1;
		$("#obj2015").trigger("obj2015_onTap_ended");
		
		return;
	}
	window.obj2015_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1767 
show_2017();
function show_2017() {
	window.obj2015_onTap_runningActionsCount = obj2015_onTap_runningActionsCount + 1;
	$("#obj1767").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2015_onTap_runningActionsCount = window.obj2015_onTap_runningActionsCount - 1;
if (window.obj2015_onTap_runningActionsCount == 0) {
	obj2015_onTap_actionGroup1();
}
				$("#obj1767").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1861 
show_2018();
function show_2018() {
	window.obj2015_onTap_runningActionsCount = obj2015_onTap_runningActionsCount + 1;
	$("#obj1861").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2015_onTap_runningActionsCount = window.obj2015_onTap_runningActionsCount - 1;
if (window.obj2015_onTap_runningActionsCount == 0) {
	obj2015_onTap_actionGroup1();
}
				$("#obj1861").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2019();
function playAudioFile_2019() {
	window.obj2015_onTap_runningActionsCount = obj2015_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2019")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2015_onTap_runningActionsCount = window.obj2015_onTap_runningActionsCount - 1;
if (window.obj2015_onTap_runningActionsCount == 0) {
	obj2015_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2015_onTap_runningActionsCount = window.obj2015_onTap_runningActionsCount - 1;
if (window.obj2015_onTap_runningActionsCount == 0) {
	obj2015_onTap_actionGroup1();
}
	}
	
}














};
obj2015_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2015_onTap_activeActionGroupIndex = -1;
		$("#obj2015").trigger("obj2015_onTap_ended");
		
		return;
	}
	window.obj2015_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2021();
function playAudioFile_2021() {
	window.obj2015_onTap_runningActionsCount = obj2015_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2021")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2015_onTap_runningActionsCount = window.obj2015_onTap_runningActionsCount - 1;
if (window.obj2015_onTap_runningActionsCount == 0) {
	obj2015_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2015_onTap_runningActionsCount = window.obj2015_onTap_runningActionsCount - 1;
if (window.obj2015_onTap_runningActionsCount == 0) {
	obj2015_onTap_actionGroup2();
}
	}
	
}














};
obj2015_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2015_onTap_activeActionGroupIndex = -1;
		$("#obj2015").trigger("obj2015_onTap_ended");
		
		return;
	}
	window.obj2015_onTap_activeActionGroupIndex = 2;
	





















};
obj2022_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2022_onTap_activeActionGroupIndex = -1;
		$("#obj2022").trigger("obj2022_onTap_ended");
		
		return;
	}
	window.obj2022_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1822 
show_2024();
function show_2024() {
	window.obj2022_onTap_runningActionsCount = obj2022_onTap_runningActionsCount + 1;
	$("#obj1822").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2022_onTap_runningActionsCount = window.obj2022_onTap_runningActionsCount - 1;
if (window.obj2022_onTap_runningActionsCount == 0) {
	obj2022_onTap_actionGroup1();
}
				$("#obj1822").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1869 
show_2025();
function show_2025() {
	window.obj2022_onTap_runningActionsCount = obj2022_onTap_runningActionsCount + 1;
	$("#obj1869").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2022_onTap_runningActionsCount = window.obj2022_onTap_runningActionsCount - 1;
if (window.obj2022_onTap_runningActionsCount == 0) {
	obj2022_onTap_actionGroup1();
}
				$("#obj1869").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2026();
function playAudioFile_2026() {
	window.obj2022_onTap_runningActionsCount = obj2022_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2026")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2022_onTap_runningActionsCount = window.obj2022_onTap_runningActionsCount - 1;
if (window.obj2022_onTap_runningActionsCount == 0) {
	obj2022_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2022_onTap_runningActionsCount = window.obj2022_onTap_runningActionsCount - 1;
if (window.obj2022_onTap_runningActionsCount == 0) {
	obj2022_onTap_actionGroup1();
}
	}
	
}














};
obj2022_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2022_onTap_activeActionGroupIndex = -1;
		$("#obj2022").trigger("obj2022_onTap_ended");
		
		return;
	}
	window.obj2022_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2028();
function playAudioFile_2028() {
	window.obj2022_onTap_runningActionsCount = obj2022_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2028")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2022_onTap_runningActionsCount = window.obj2022_onTap_runningActionsCount - 1;
if (window.obj2022_onTap_runningActionsCount == 0) {
	obj2022_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2022_onTap_runningActionsCount = window.obj2022_onTap_runningActionsCount - 1;
if (window.obj2022_onTap_runningActionsCount == 0) {
	obj2022_onTap_actionGroup2();
}
	}
	
}














};
obj2022_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2022_onTap_activeActionGroupIndex = -1;
		$("#obj2022").trigger("obj2022_onTap_ended");
		
		return;
	}
	window.obj2022_onTap_activeActionGroupIndex = 2;
	





















};
obj2043_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2043_onTap_activeActionGroupIndex = -1;
		$("#obj2043").trigger("obj2043_onTap_ended");
		
		return;
	}
	window.obj2043_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1799 
show_2045();
function show_2045() {
	window.obj2043_onTap_runningActionsCount = obj2043_onTap_runningActionsCount + 1;
	$("#obj1799").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2043_onTap_runningActionsCount = window.obj2043_onTap_runningActionsCount - 1;
if (window.obj2043_onTap_runningActionsCount == 0) {
	obj2043_onTap_actionGroup1();
}
				$("#obj1799").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1881 
show_2046();
function show_2046() {
	window.obj2043_onTap_runningActionsCount = obj2043_onTap_runningActionsCount + 1;
	$("#obj1881").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2043_onTap_runningActionsCount = window.obj2043_onTap_runningActionsCount - 1;
if (window.obj2043_onTap_runningActionsCount == 0) {
	obj2043_onTap_actionGroup1();
}
				$("#obj1881").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2047();
function playAudioFile_2047() {
	window.obj2043_onTap_runningActionsCount = obj2043_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2047")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2043_onTap_runningActionsCount = window.obj2043_onTap_runningActionsCount - 1;
if (window.obj2043_onTap_runningActionsCount == 0) {
	obj2043_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2043_onTap_runningActionsCount = window.obj2043_onTap_runningActionsCount - 1;
if (window.obj2043_onTap_runningActionsCount == 0) {
	obj2043_onTap_actionGroup1();
}
	}
	
}














};
obj2043_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2043_onTap_activeActionGroupIndex = -1;
		$("#obj2043").trigger("obj2043_onTap_ended");
		
		return;
	}
	window.obj2043_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2049();
function playAudioFile_2049() {
	window.obj2043_onTap_runningActionsCount = obj2043_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2049")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2043_onTap_runningActionsCount = window.obj2043_onTap_runningActionsCount - 1;
if (window.obj2043_onTap_runningActionsCount == 0) {
	obj2043_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2043_onTap_runningActionsCount = window.obj2043_onTap_runningActionsCount - 1;
if (window.obj2043_onTap_runningActionsCount == 0) {
	obj2043_onTap_actionGroup2();
}
	}
	
}














};
obj2043_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2043_onTap_activeActionGroupIndex = -1;
		$("#obj2043").trigger("obj2043_onTap_ended");
		
		return;
	}
	window.obj2043_onTap_activeActionGroupIndex = 2;
	





















};
obj2068_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2068_onTap_activeActionGroupIndex = -1;
		$("#obj2068").trigger("obj2068_onTap_ended");
		
		return;
	}
	window.obj2068_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1838 
show_2070();
function show_2070() {
	window.obj2068_onTap_runningActionsCount = obj2068_onTap_runningActionsCount + 1;
	$("#obj1838").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2068_onTap_runningActionsCount = window.obj2068_onTap_runningActionsCount - 1;
if (window.obj2068_onTap_runningActionsCount == 0) {
	obj2068_onTap_actionGroup1();
}
				$("#obj1838").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1889 
show_2071();
function show_2071() {
	window.obj2068_onTap_runningActionsCount = obj2068_onTap_runningActionsCount + 1;
	$("#obj1889").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2068_onTap_runningActionsCount = window.obj2068_onTap_runningActionsCount - 1;
if (window.obj2068_onTap_runningActionsCount == 0) {
	obj2068_onTap_actionGroup1();
}
				$("#obj1889").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2072();
function playAudioFile_2072() {
	window.obj2068_onTap_runningActionsCount = obj2068_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2072")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2068_onTap_runningActionsCount = window.obj2068_onTap_runningActionsCount - 1;
if (window.obj2068_onTap_runningActionsCount == 0) {
	obj2068_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2068_onTap_runningActionsCount = window.obj2068_onTap_runningActionsCount - 1;
if (window.obj2068_onTap_runningActionsCount == 0) {
	obj2068_onTap_actionGroup1();
}
	}
	
}














};
obj2068_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2068_onTap_activeActionGroupIndex = -1;
		$("#obj2068").trigger("obj2068_onTap_ended");
		
		return;
	}
	window.obj2068_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2074();
function playAudioFile_2074() {
	window.obj2068_onTap_runningActionsCount = obj2068_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2074")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2068_onTap_runningActionsCount = window.obj2068_onTap_runningActionsCount - 1;
if (window.obj2068_onTap_runningActionsCount == 0) {
	obj2068_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2068_onTap_runningActionsCount = window.obj2068_onTap_runningActionsCount - 1;
if (window.obj2068_onTap_runningActionsCount == 0) {
	obj2068_onTap_actionGroup2();
}
	}
	
}














};
obj2068_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2068_onTap_activeActionGroupIndex = -1;
		$("#obj2068").trigger("obj2068_onTap_ended");
		
		return;
	}
	window.obj2068_onTap_activeActionGroupIndex = 2;
	





















};
obj2079_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2079_onTap_activeActionGroupIndex = -1;
		$("#obj2079").trigger("obj2079_onTap_ended");
		
		return;
	}
	window.obj2079_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1814 
show_2081();
function show_2081() {
	window.obj2079_onTap_runningActionsCount = obj2079_onTap_runningActionsCount + 1;
	$("#obj1814").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2079_onTap_runningActionsCount = window.obj2079_onTap_runningActionsCount - 1;
if (window.obj2079_onTap_runningActionsCount == 0) {
	obj2079_onTap_actionGroup1();
}
				$("#obj1814").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1861 
show_2082();
function show_2082() {
	window.obj2079_onTap_runningActionsCount = obj2079_onTap_runningActionsCount + 1;
	$("#obj1861").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2079_onTap_runningActionsCount = window.obj2079_onTap_runningActionsCount - 1;
if (window.obj2079_onTap_runningActionsCount == 0) {
	obj2079_onTap_actionGroup1();
}
				$("#obj1861").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2083();
function playAudioFile_2083() {
	window.obj2079_onTap_runningActionsCount = obj2079_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2083")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2079_onTap_runningActionsCount = window.obj2079_onTap_runningActionsCount - 1;
if (window.obj2079_onTap_runningActionsCount == 0) {
	obj2079_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2079_onTap_runningActionsCount = window.obj2079_onTap_runningActionsCount - 1;
if (window.obj2079_onTap_runningActionsCount == 0) {
	obj2079_onTap_actionGroup1();
}
	}
	
}














};
obj2079_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2079_onTap_activeActionGroupIndex = -1;
		$("#obj2079").trigger("obj2079_onTap_ended");
		
		return;
	}
	window.obj2079_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2085();
function playAudioFile_2085() {
	window.obj2079_onTap_runningActionsCount = obj2079_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2085")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2079_onTap_runningActionsCount = window.obj2079_onTap_runningActionsCount - 1;
if (window.obj2079_onTap_runningActionsCount == 0) {
	obj2079_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2079_onTap_runningActionsCount = window.obj2079_onTap_runningActionsCount - 1;
if (window.obj2079_onTap_runningActionsCount == 0) {
	obj2079_onTap_actionGroup2();
}
	}
	
}














};
obj2079_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2079_onTap_activeActionGroupIndex = -1;
		$("#obj2079").trigger("obj2079_onTap_ended");
		
		return;
	}
	window.obj2079_onTap_activeActionGroupIndex = 2;
	





















};
obj2094_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2094_onTap_activeActionGroupIndex = -1;
		$("#obj2094").trigger("obj2094_onTap_ended");
		
		return;
	}
	window.obj2094_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1834 
show_2096();
function show_2096() {
	window.obj2094_onTap_runningActionsCount = obj2094_onTap_runningActionsCount + 1;
	$("#obj1834").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2094_onTap_runningActionsCount = window.obj2094_onTap_runningActionsCount - 1;
if (window.obj2094_onTap_runningActionsCount == 0) {
	obj2094_onTap_actionGroup1();
}
				$("#obj1834").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1885 
show_2097();
function show_2097() {
	window.obj2094_onTap_runningActionsCount = obj2094_onTap_runningActionsCount + 1;
	$("#obj1885").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2094_onTap_runningActionsCount = window.obj2094_onTap_runningActionsCount - 1;
if (window.obj2094_onTap_runningActionsCount == 0) {
	obj2094_onTap_actionGroup1();
}
				$("#obj1885").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2098();
function playAudioFile_2098() {
	window.obj2094_onTap_runningActionsCount = obj2094_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2098")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2094_onTap_runningActionsCount = window.obj2094_onTap_runningActionsCount - 1;
if (window.obj2094_onTap_runningActionsCount == 0) {
	obj2094_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2094_onTap_runningActionsCount = window.obj2094_onTap_runningActionsCount - 1;
if (window.obj2094_onTap_runningActionsCount == 0) {
	obj2094_onTap_actionGroup1();
}
	}
	
}














};
obj2094_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2094_onTap_activeActionGroupIndex = -1;
		$("#obj2094").trigger("obj2094_onTap_ended");
		
		return;
	}
	window.obj2094_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_2100();
function playAudioFile_2100() {
	window.obj2094_onTap_runningActionsCount = obj2094_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2100")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2094_onTap_runningActionsCount = window.obj2094_onTap_runningActionsCount - 1;
if (window.obj2094_onTap_runningActionsCount == 0) {
	obj2094_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj2094_onTap_runningActionsCount = window.obj2094_onTap_runningActionsCount - 1;
if (window.obj2094_onTap_runningActionsCount == 0) {
	obj2094_onTap_actionGroup2();
}
	}
	
}














};
obj2094_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2094_onTap_activeActionGroupIndex = -1;
		$("#obj2094").trigger("obj2094_onTap_ended");
		
		return;
	}
	window.obj2094_onTap_activeActionGroupIndex = 2;
	





















};
obj2149_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2149_onTap_activeActionGroupIndex = -1;
		$("#obj2149").trigger("obj2149_onTap_ended");
		
		return;
	}
	window.obj2149_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1826 
show_2151();
function show_2151() {
	window.obj2149_onTap_runningActionsCount = obj2149_onTap_runningActionsCount + 1;
	$("#obj1826").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj2149_onTap_runningActionsCount = window.obj2149_onTap_runningActionsCount - 1;
if (window.obj2149_onTap_runningActionsCount == 0) {
	obj2149_onTap_actionGroup1();
}
				$("#obj1826").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj2090 
show_2152();
function show_2152() {
	window.obj2149_onTap_runningActionsCount = obj2149_onTap_runningActionsCount + 1;
	$("#obj2090").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2149_onTap_runningActionsCount = window.obj2149_onTap_runningActionsCount - 1;
if (window.obj2149_onTap_runningActionsCount == 0) {
	obj2149_onTap_actionGroup1();
}
				$("#obj2090").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_3467();
function playAudioFile_3467() {
	window.obj2149_onTap_runningActionsCount = obj2149_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile3467")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2149_onTap_runningActionsCount = window.obj2149_onTap_runningActionsCount - 1;
if (window.obj2149_onTap_runningActionsCount == 0) {
	obj2149_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2149_onTap_runningActionsCount = window.obj2149_onTap_runningActionsCount - 1;
if (window.obj2149_onTap_runningActionsCount == 0) {
	obj2149_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_2153();
function playAudioFile_2153() {
	window.obj2149_onTap_runningActionsCount = obj2149_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2153")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2149_onTap_runningActionsCount = window.obj2149_onTap_runningActionsCount - 1;
if (window.obj2149_onTap_runningActionsCount == 0) {
	obj2149_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2149_onTap_runningActionsCount = window.obj2149_onTap_runningActionsCount - 1;
if (window.obj2149_onTap_runningActionsCount == 0) {
	obj2149_onTap_actionGroup1();
}
	}
	
}














};
obj2149_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2149_onTap_activeActionGroupIndex = -1;
		$("#obj2149").trigger("obj2149_onTap_ended");
		
		return;
	}
	window.obj2149_onTap_activeActionGroupIndex = 1;
	





















};
obj2479_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2479_onTap_activeActionGroupIndex = -1;
		$("#obj2479").trigger("obj2479_onTap_ended");
		
		return;
	}
	window.obj2479_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1846 
show_2481();
function show_2481() {
	window.obj2479_onTap_runningActionsCount = obj2479_onTap_runningActionsCount + 1;
	$("#obj1846").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2479_onTap_runningActionsCount = window.obj2479_onTap_runningActionsCount - 1;
if (window.obj2479_onTap_runningActionsCount == 0) {
	obj2479_onTap_actionGroup1();
}
				$("#obj1846").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1865 
show_2573();
function show_2573() {
	window.obj2479_onTap_runningActionsCount = obj2479_onTap_runningActionsCount + 1;
	$("#obj1865").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2479_onTap_runningActionsCount = window.obj2479_onTap_runningActionsCount - 1;
if (window.obj2479_onTap_runningActionsCount == 0) {
	obj2479_onTap_actionGroup1();
}
				$("#obj1865").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2570();
function playAudioFile_2570() {
	window.obj2479_onTap_runningActionsCount = obj2479_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2570")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2479_onTap_runningActionsCount = window.obj2479_onTap_runningActionsCount - 1;
if (window.obj2479_onTap_runningActionsCount == 0) {
	obj2479_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2479_onTap_runningActionsCount = window.obj2479_onTap_runningActionsCount - 1;
if (window.obj2479_onTap_runningActionsCount == 0) {
	obj2479_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_2572();
function playAudioFile_2572() {
	window.obj2479_onTap_runningActionsCount = obj2479_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2572")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2479_onTap_runningActionsCount = window.obj2479_onTap_runningActionsCount - 1;
if (window.obj2479_onTap_runningActionsCount == 0) {
	obj2479_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2479_onTap_runningActionsCount = window.obj2479_onTap_runningActionsCount - 1;
if (window.obj2479_onTap_runningActionsCount == 0) {
	obj2479_onTap_actionGroup1();
}
	}
	
}














};
obj2479_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2479_onTap_activeActionGroupIndex = -1;
		$("#obj2479").trigger("obj2479_onTap_ended");
		
		return;
	}
	window.obj2479_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj1713: Event Load
 *
 */
setTimeout(function () {
if (window.obj1713_onLoad_activeActionGroupIndex != -1) return;
var obj1713_onLoad_runningActionsCount = 0;
var obj1713_onLoad_loopCount = 0;
obj1713_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1717: Event Load
 *
 */
setTimeout(function () {
if (window.obj1717_onLoad_activeActionGroupIndex != -1) return;
var obj1717_onLoad_runningActionsCount = 0;
var obj1717_onLoad_loopCount = 0;
obj1717_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1721: Event Load
 *
 */
setTimeout(function () {
if (window.obj1721_onLoad_activeActionGroupIndex != -1) return;
var obj1721_onLoad_runningActionsCount = 0;
var obj1721_onLoad_loopCount = 0;
obj1721_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1725: Event Load
 *
 */
setTimeout(function () {
if (window.obj1725_onLoad_activeActionGroupIndex != -1) return;
var obj1725_onLoad_runningActionsCount = 0;
var obj1725_onLoad_loopCount = 0;
obj1725_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1729: Event Load
 *
 */
setTimeout(function () {
if (window.obj1729_onLoad_activeActionGroupIndex != -1) return;
var obj1729_onLoad_runningActionsCount = 0;
var obj1729_onLoad_loopCount = 0;
obj1729_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj1733: Event Touch Down
 *
 */
 
$("#obj1733").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1733_onTap_activeActionGroupIndex != -1) return;
var obj1733_onTap_runningActionsCount = 0;
var obj1733_onTap_loopCount = 0;
obj1733_onTap_actionGroup0();
});







/*
 *
 *   obj1743: Event Touch Down
 *
 */
 
$("#obj1743").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1743_onTap_activeActionGroupIndex != -1) return;
var obj1743_onTap_runningActionsCount = 0;
var obj1743_onTap_loopCount = 0;
obj1743_onTap_actionGroup0();
});





































/*
 *
 *   obj1767: Event Load
 *
 */
setTimeout(function () {
if (window.obj1767_onLoad_activeActionGroupIndex != -1) return;
var obj1767_onLoad_runningActionsCount = 0;
var obj1767_onLoad_loopCount = 0;
obj1767_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1791: Event Load
 *
 */
setTimeout(function () {
if (window.obj1791_onLoad_activeActionGroupIndex != -1) return;
var obj1791_onLoad_runningActionsCount = 0;
var obj1791_onLoad_loopCount = 0;
obj1791_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1795: Event Load
 *
 */
setTimeout(function () {
if (window.obj1795_onLoad_activeActionGroupIndex != -1) return;
var obj1795_onLoad_runningActionsCount = 0;
var obj1795_onLoad_loopCount = 0;
obj1795_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1799: Event Load
 *
 */
setTimeout(function () {
if (window.obj1799_onLoad_activeActionGroupIndex != -1) return;
var obj1799_onLoad_runningActionsCount = 0;
var obj1799_onLoad_loopCount = 0;
obj1799_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1803: Event Load
 *
 */
setTimeout(function () {
if (window.obj1803_onLoad_activeActionGroupIndex != -1) return;
var obj1803_onLoad_runningActionsCount = 0;
var obj1803_onLoad_loopCount = 0;
obj1803_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj1807: Event Touch Down
 *
 */
 
$("#obj1807").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1807_onTap_activeActionGroupIndex != -1) return;
var obj1807_onTap_runningActionsCount = 0;
var obj1807_onTap_loopCount = 0;
obj1807_onTap_actionGroup0();
});









/*
 *
 *   obj1814: Event Load
 *
 */
setTimeout(function () {
if (window.obj1814_onLoad_activeActionGroupIndex != -1) return;
var obj1814_onLoad_runningActionsCount = 0;
var obj1814_onLoad_loopCount = 0;
obj1814_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1818: Event Load
 *
 */
setTimeout(function () {
if (window.obj1818_onLoad_activeActionGroupIndex != -1) return;
var obj1818_onLoad_runningActionsCount = 0;
var obj1818_onLoad_loopCount = 0;
obj1818_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1822: Event Load
 *
 */
setTimeout(function () {
if (window.obj1822_onLoad_activeActionGroupIndex != -1) return;
var obj1822_onLoad_runningActionsCount = 0;
var obj1822_onLoad_loopCount = 0;
obj1822_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1826: Event Load
 *
 */
setTimeout(function () {
if (window.obj1826_onLoad_activeActionGroupIndex != -1) return;
var obj1826_onLoad_runningActionsCount = 0;
var obj1826_onLoad_loopCount = 0;
obj1826_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1830: Event Load
 *
 */
setTimeout(function () {
if (window.obj1830_onLoad_activeActionGroupIndex != -1) return;
var obj1830_onLoad_runningActionsCount = 0;
var obj1830_onLoad_loopCount = 0;
obj1830_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1834: Event Load
 *
 */
setTimeout(function () {
if (window.obj1834_onLoad_activeActionGroupIndex != -1) return;
var obj1834_onLoad_runningActionsCount = 0;
var obj1834_onLoad_loopCount = 0;
obj1834_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1838: Event Load
 *
 */
setTimeout(function () {
if (window.obj1838_onLoad_activeActionGroupIndex != -1) return;
var obj1838_onLoad_runningActionsCount = 0;
var obj1838_onLoad_loopCount = 0;
obj1838_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1842: Event Load
 *
 */
setTimeout(function () {
if (window.obj1842_onLoad_activeActionGroupIndex != -1) return;
var obj1842_onLoad_runningActionsCount = 0;
var obj1842_onLoad_loopCount = 0;
obj1842_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1846: Event Load
 *
 */
setTimeout(function () {
if (window.obj1846_onLoad_activeActionGroupIndex != -1) return;
var obj1846_onLoad_runningActionsCount = 0;
var obj1846_onLoad_loopCount = 0;
obj1846_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj1850: Event Load
 *
 */
setTimeout(function () {
if (window.obj1850_onLoad_activeActionGroupIndex != -1) return;
var obj1850_onLoad_runningActionsCount = 0;
var obj1850_onLoad_loopCount = 0;
obj1850_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj1854: Event Touch Down
 *
 */
 
$("#obj1854").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1854_onTap_activeActionGroupIndex != -1) return;
var obj1854_onTap_runningActionsCount = 0;
var obj1854_onTap_loopCount = 0;
obj1854_onTap_actionGroup0();
});






































































/*
 *
 *   obj1903: Event Touch Down
 *
 */
 
$("#obj1903").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1903_onTap_activeActionGroupIndex != -1) return;
var obj1903_onTap_runningActionsCount = 0;
var obj1903_onTap_loopCount = 0;
obj1903_onTap_actionGroup0();
});







/*
 *
 *   obj1944: Event Touch Down
 *
 */
 
$("#obj1944").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1944_onTap_activeActionGroupIndex != -1) return;
var obj1944_onTap_runningActionsCount = 0;
var obj1944_onTap_loopCount = 0;
obj1944_onTap_actionGroup0();
});







/*
 *
 *   obj1950: Event Touch Down
 *
 */
 
$("#obj1950").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1950_onTap_activeActionGroupIndex != -1) return;
var obj1950_onTap_runningActionsCount = 0;
var obj1950_onTap_loopCount = 0;
obj1950_onTap_actionGroup0();
});







/*
 *
 *   obj1970: Event Touch Down
 *
 */
 
$("#obj1970").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1970_onTap_activeActionGroupIndex != -1) return;
var obj1970_onTap_runningActionsCount = 0;
var obj1970_onTap_loopCount = 0;
obj1970_onTap_actionGroup0();
});







/*
 *
 *   obj1983: Event Touch Down
 *
 */
 
$("#obj1983").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1983_onTap_activeActionGroupIndex != -1) return;
var obj1983_onTap_runningActionsCount = 0;
var obj1983_onTap_loopCount = 0;
obj1983_onTap_actionGroup0();
});







/*
 *
 *   obj2001: Event Touch Down
 *
 */
 
$("#obj2001").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2001_onTap_activeActionGroupIndex != -1) return;
var obj2001_onTap_runningActionsCount = 0;
var obj2001_onTap_loopCount = 0;
obj2001_onTap_actionGroup0();
});







/*
 *
 *   obj2008: Event Touch Down
 *
 */
 
$("#obj2008").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2008_onTap_activeActionGroupIndex != -1) return;
var obj2008_onTap_runningActionsCount = 0;
var obj2008_onTap_loopCount = 0;
obj2008_onTap_actionGroup0();
});







/*
 *
 *   obj2015: Event Touch Down
 *
 */
 
$("#obj2015").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2015_onTap_activeActionGroupIndex != -1) return;
var obj2015_onTap_runningActionsCount = 0;
var obj2015_onTap_loopCount = 0;
obj2015_onTap_actionGroup0();
});







/*
 *
 *   obj2022: Event Touch Down
 *
 */
 
$("#obj2022").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2022_onTap_activeActionGroupIndex != -1) return;
var obj2022_onTap_runningActionsCount = 0;
var obj2022_onTap_loopCount = 0;
obj2022_onTap_actionGroup0();
});














/*
 *
 *   obj2043: Event Touch Down
 *
 */
 
$("#obj2043").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2043_onTap_activeActionGroupIndex != -1) return;
var obj2043_onTap_runningActionsCount = 0;
var obj2043_onTap_loopCount = 0;
obj2043_onTap_actionGroup0();
});







/*
 *
 *   obj2068: Event Touch Down
 *
 */
 
$("#obj2068").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2068_onTap_activeActionGroupIndex != -1) return;
var obj2068_onTap_runningActionsCount = 0;
var obj2068_onTap_loopCount = 0;
obj2068_onTap_actionGroup0();
});







/*
 *
 *   obj2079: Event Touch Down
 *
 */
 
$("#obj2079").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2079_onTap_activeActionGroupIndex != -1) return;
var obj2079_onTap_runningActionsCount = 0;
var obj2079_onTap_loopCount = 0;
obj2079_onTap_actionGroup0();
});





















/*
 *
 *   obj2094: Event Touch Down
 *
 */
 
$("#obj2094").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2094_onTap_activeActionGroupIndex != -1) return;
var obj2094_onTap_runningActionsCount = 0;
var obj2094_onTap_loopCount = 0;
obj2094_onTap_actionGroup0();
});







/*
 *
 *   obj2149: Event Touch Down
 *
 */
 
$("#obj2149").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2149_onTap_activeActionGroupIndex != -1) return;
var obj2149_onTap_runningActionsCount = 0;
var obj2149_onTap_loopCount = 0;
obj2149_onTap_actionGroup0();
});





















/*
 *
 *   obj2479: Event Touch Down
 *
 */
 
$("#obj2479").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2479_onTap_activeActionGroupIndex != -1) return;
var obj2479_onTap_runningActionsCount = 0;
var obj2479_onTap_loopCount = 0;
obj2479_onTap_actionGroup0();
});











		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj1707").trigger('SCEventShow');
$("#obj1711").trigger('SCEventShow');
$("#obj1733").trigger('SCEventShow');
$("#obj1743").trigger('SCEventShow');
$("#obj1751").trigger('SCEventShow');
$("#obj1755").trigger('SCEventShow');
$("#obj1759").trigger('SCEventShow');
$("#obj1763").trigger('SCEventShow');
$("#obj1807").trigger('SCEventShow');
$("#obj1854").trigger('SCEventShow');
$("#obj1861").trigger('SCEventShow');
$("#obj1865").trigger('SCEventShow');
$("#obj1869").trigger('SCEventShow');
$("#obj1873").trigger('SCEventShow');
$("#obj1877").trigger('SCEventShow');
$("#obj1881").trigger('SCEventShow');
$("#obj1885").trigger('SCEventShow');
$("#obj1889").trigger('SCEventShow');
$("#obj1893").trigger('SCEventShow');
$("#obj1903").trigger('SCEventShow');
$("#obj1944").trigger('SCEventShow');
$("#obj1950").trigger('SCEventShow');
$("#obj1970").trigger('SCEventShow');
$("#obj1983").trigger('SCEventShow');
$("#obj2001").trigger('SCEventShow');
$("#obj2008").trigger('SCEventShow');
$("#obj2015").trigger('SCEventShow');
$("#obj2022").trigger('SCEventShow');
$("#obj2039").trigger('SCEventShow');
$("#obj2043").trigger('SCEventShow');
$("#obj2068").trigger('SCEventShow');
$("#obj2079").trigger('SCEventShow');
$("#obj2086").trigger('SCEventShow');
$("#obj2090").trigger('SCEventShow');
$("#obj2094").trigger('SCEventShow');
$("#obj2149").trigger('SCEventShow');
$("#obj2155").trigger('SCEventShow');
$("#obj2357").trigger('SCEventShow');
$("#obj2479").trigger('SCEventShow');
$("#obj2759").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
});
$(window).on(PubCoder.Events.PageReady, function() {
	
});