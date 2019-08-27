var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
var aigX = 0, aigY = 0;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj431_onShow_activeActionGroupIndex = -1;
var obj431_onShow_runningActionsCount = 0;
var obj431_onShow_loopCount = 0;
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
		
obj431_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj431_onShow_activeActionGroupIndex = -1;
		$("#obj431").trigger("obj431_onShow_ended");
		
		return;
	}
	window.obj431_onShow_activeActionGroupIndex = 0;
	






//	action: playAudioFile
playAudioFile_967();
function playAudioFile_967() {
	window.obj431_onShow_runningActionsCount = obj431_onShow_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile967")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj431_onShow_runningActionsCount = window.obj431_onShow_runningActionsCount - 1;
if (window.obj431_onShow_runningActionsCount == 0) {
	obj431_onShow_actionGroup1();
}
		}, false);
	} else {
		window.obj431_onShow_runningActionsCount = window.obj431_onShow_runningActionsCount - 1;
if (window.obj431_onShow_runningActionsCount == 0) {
	obj431_onShow_actionGroup1();
}
	}
	
}














};
obj431_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj431_onShow_activeActionGroupIndex = -1;
		$("#obj431").trigger("obj431_onShow_ended");
		
		return;
	}
	window.obj431_onShow_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




/*
 *
 *   obj431: Event Show
 *
 */
 
$("#obj431").bind('SCEventShow', function(event) {
	if (window.obj431_onShow_activeActionGroupIndex != -1) return;
var obj431_onShow_runningActionsCount = 0;
var obj431_onShow_loopCount = 0;
obj431_onShow_actionGroup0();
});






























		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj431").trigger('SCEventShow');
$("#obj434").trigger('SCEventShow');
$("#obj437").trigger('SCEventShow');
$("#obj2995").trigger('SCEventShow');
$("#obj961").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
});
$(window).on(PubCoder.Events.PageReady, function() {
	
});