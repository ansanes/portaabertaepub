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
var obj303_onLoad_activeActionGroupIndex = -1;
var obj303_onLoad_runningActionsCount = 0;
var obj303_onLoad_loopCount = 0;
var obj306_onLoad_activeActionGroupIndex = -1;
var obj306_onLoad_runningActionsCount = 0;
var obj306_onLoad_loopCount = 0;
var obj309_onLoad_activeActionGroupIndex = -1;
var obj309_onLoad_runningActionsCount = 0;
var obj309_onLoad_loopCount = 0;
var obj312_onLoad_activeActionGroupIndex = -1;
var obj312_onLoad_runningActionsCount = 0;
var obj312_onLoad_loopCount = 0;
var obj315_onLoad_activeActionGroupIndex = -1;
var obj315_onLoad_runningActionsCount = 0;
var obj315_onLoad_loopCount = 0;
var obj327_onTap_activeActionGroupIndex = -1;
var obj327_onTap_runningActionsCount = 0;
var obj327_onTap_loopCount = 0;
var obj335_onTap_activeActionGroupIndex = -1;
var obj335_onTap_runningActionsCount = 0;
var obj335_onTap_loopCount = 0;
var obj351_onLoad_activeActionGroupIndex = -1;
var obj351_onLoad_runningActionsCount = 0;
var obj351_onLoad_loopCount = 0;
var obj353_onLoad_activeActionGroupIndex = -1;
var obj353_onLoad_runningActionsCount = 0;
var obj353_onLoad_loopCount = 0;
var obj355_onLoad_activeActionGroupIndex = -1;
var obj355_onLoad_runningActionsCount = 0;
var obj355_onLoad_loopCount = 0;
var obj357_onLoad_activeActionGroupIndex = -1;
var obj357_onLoad_runningActionsCount = 0;
var obj357_onLoad_loopCount = 0;
var obj384_onLoad_activeActionGroupIndex = -1;
var obj384_onLoad_runningActionsCount = 0;
var obj384_onLoad_loopCount = 0;
var obj468_onLoad_activeActionGroupIndex = -1;
var obj468_onLoad_runningActionsCount = 0;
var obj468_onLoad_loopCount = 0;
var obj471_onLoad_activeActionGroupIndex = -1;
var obj471_onLoad_runningActionsCount = 0;
var obj471_onLoad_loopCount = 0;
var obj474_onLoad_activeActionGroupIndex = -1;
var obj474_onLoad_runningActionsCount = 0;
var obj474_onLoad_loopCount = 0;
var obj480_onLoad_activeActionGroupIndex = -1;
var obj480_onLoad_runningActionsCount = 0;
var obj480_onLoad_loopCount = 0;
var obj465_onTap_activeActionGroupIndex = -1;
var obj465_onTap_runningActionsCount = 0;
var obj465_onTap_loopCount = 0;
var obj483_onLoad_activeActionGroupIndex = -1;
var obj483_onLoad_runningActionsCount = 0;
var obj483_onLoad_loopCount = 0;
var obj486_onLoad_activeActionGroupIndex = -1;
var obj486_onLoad_runningActionsCount = 0;
var obj486_onLoad_loopCount = 0;
var obj492_onLoad_activeActionGroupIndex = -1;
var obj492_onLoad_runningActionsCount = 0;
var obj492_onLoad_loopCount = 0;
var obj538_onLoad_activeActionGroupIndex = -1;
var obj538_onLoad_runningActionsCount = 0;
var obj538_onLoad_loopCount = 0;
var obj541_onLoad_activeActionGroupIndex = -1;
var obj541_onLoad_runningActionsCount = 0;
var obj541_onLoad_loopCount = 0;
var obj543_onLoad_activeActionGroupIndex = -1;
var obj543_onLoad_runningActionsCount = 0;
var obj543_onLoad_loopCount = 0;
var obj545_onLoad_activeActionGroupIndex = -1;
var obj545_onLoad_runningActionsCount = 0;
var obj545_onLoad_loopCount = 0;
var obj549_onLoad_activeActionGroupIndex = -1;
var obj549_onLoad_runningActionsCount = 0;
var obj549_onLoad_loopCount = 0;
var obj556_onLoad_activeActionGroupIndex = -1;
var obj556_onLoad_runningActionsCount = 0;
var obj556_onLoad_loopCount = 0;
var obj495_onLoad_activeActionGroupIndex = -1;
var obj495_onLoad_runningActionsCount = 0;
var obj495_onLoad_loopCount = 0;
var obj332_onTap_activeActionGroupIndex = -1;
var obj332_onTap_runningActionsCount = 0;
var obj332_onTap_loopCount = 0;
var obj590_onLoad_activeActionGroupIndex = -1;
var obj590_onLoad_runningActionsCount = 0;
var obj590_onLoad_loopCount = 0;
var obj594_onLoad_activeActionGroupIndex = -1;
var obj594_onLoad_runningActionsCount = 0;
var obj594_onLoad_loopCount = 0;
var obj598_onLoad_activeActionGroupIndex = -1;
var obj598_onLoad_runningActionsCount = 0;
var obj598_onLoad_loopCount = 0;
var obj602_onLoad_activeActionGroupIndex = -1;
var obj602_onLoad_runningActionsCount = 0;
var obj602_onLoad_loopCount = 0;
var obj606_onLoad_activeActionGroupIndex = -1;
var obj606_onLoad_runningActionsCount = 0;
var obj606_onLoad_loopCount = 0;
var obj610_onLoad_activeActionGroupIndex = -1;
var obj610_onLoad_runningActionsCount = 0;
var obj610_onLoad_loopCount = 0;
var obj614_onLoad_activeActionGroupIndex = -1;
var obj614_onLoad_runningActionsCount = 0;
var obj614_onLoad_loopCount = 0;
var obj618_onLoad_activeActionGroupIndex = -1;
var obj618_onLoad_runningActionsCount = 0;
var obj618_onLoad_loopCount = 0;
var obj622_onLoad_activeActionGroupIndex = -1;
var obj622_onLoad_runningActionsCount = 0;
var obj622_onLoad_loopCount = 0;
var obj675_onTap_activeActionGroupIndex = -1;
var obj675_onTap_runningActionsCount = 0;
var obj675_onTap_loopCount = 0;
var obj95_onTap_activeActionGroupIndex = -1;
var obj95_onTap_runningActionsCount = 0;
var obj95_onTap_loopCount = 0;
var obj728_onTap_activeActionGroupIndex = -1;
var obj728_onTap_runningActionsCount = 0;
var obj728_onTap_loopCount = 0;
var obj747_onTap_activeActionGroupIndex = -1;
var obj747_onTap_runningActionsCount = 0;
var obj747_onTap_loopCount = 0;
var obj760_onTap_activeActionGroupIndex = -1;
var obj760_onTap_runningActionsCount = 0;
var obj760_onTap_loopCount = 0;
var obj779_onTap_activeActionGroupIndex = -1;
var obj779_onTap_runningActionsCount = 0;
var obj779_onTap_loopCount = 0;
var obj786_onTap_activeActionGroupIndex = -1;
var obj786_onTap_runningActionsCount = 0;
var obj786_onTap_loopCount = 0;
var obj793_onTap_activeActionGroupIndex = -1;
var obj793_onTap_runningActionsCount = 0;
var obj793_onTap_loopCount = 0;
var obj800_onTap_activeActionGroupIndex = -1;
var obj800_onTap_runningActionsCount = 0;
var obj800_onTap_loopCount = 0;
var obj817_onLoad_activeActionGroupIndex = -1;
var obj817_onLoad_runningActionsCount = 0;
var obj817_onLoad_loopCount = 0;
var obj821_onTap_activeActionGroupIndex = -1;
var obj821_onTap_runningActionsCount = 0;
var obj821_onTap_loopCount = 0;
var obj846_onTap_activeActionGroupIndex = -1;
var obj846_onTap_runningActionsCount = 0;
var obj846_onTap_loopCount = 0;
var obj861_onTap_activeActionGroupIndex = -1;
var obj861_onTap_runningActionsCount = 0;
var obj861_onTap_loopCount = 0;
var obj868_onLoad_activeActionGroupIndex = -1;
var obj868_onLoad_runningActionsCount = 0;
var obj868_onLoad_loopCount = 0;
var obj872_onLoad_activeActionGroupIndex = -1;
var obj872_onLoad_runningActionsCount = 0;
var obj872_onLoad_loopCount = 0;
var obj878_onTap_activeActionGroupIndex = -1;
var obj878_onTap_runningActionsCount = 0;
var obj878_onTap_loopCount = 0;
var obj1058_onTap_activeActionGroupIndex = -1;
var obj1058_onTap_runningActionsCount = 0;
var obj1058_onTap_loopCount = 0;
var obj1068_onLoad_activeActionGroupIndex = -1;
var obj1068_onLoad_runningActionsCount = 0;
var obj1068_onLoad_loopCount = 0;
var obj2353_onLoad_activeActionGroupIndex = -1;
var obj2353_onLoad_runningActionsCount = 0;
var obj2353_onLoad_loopCount = 0;
var obj2725_onTap_activeActionGroupIndex = -1;
var obj2725_onTap_runningActionsCount = 0;
var obj2725_onTap_loopCount = 0;
var obj2755_onLoad_activeActionGroupIndex = -1;
var obj2755_onLoad_runningActionsCount = 0;
var obj2755_onLoad_loopCount = 0;


function reset1(){
     obj303_onLoad_activeActionGroupIndex = -1;
 obj303_onLoad_runningActionsCount = 0;
 obj303_onLoad_loopCount = 0;
 obj306_onLoad_activeActionGroupIndex = -1;
 obj306_onLoad_runningActionsCount = 0;
 obj306_onLoad_loopCount = 0;
 obj309_onLoad_activeActionGroupIndex = -1;
 obj309_onLoad_runningActionsCount = 0;
 obj309_onLoad_loopCount = 0;
 obj312_onLoad_activeActionGroupIndex = -1;
 obj312_onLoad_runningActionsCount = 0;
 obj312_onLoad_loopCount = 0;
 obj315_onLoad_activeActionGroupIndex = -1;
 obj315_onLoad_runningActionsCount = 0;
 obj315_onLoad_loopCount = 0;
 obj327_onTap_activeActionGroupIndex = -1;
 obj327_onTap_runningActionsCount = 0;
 obj327_onTap_loopCount = 0;
 obj335_onTap_activeActionGroupIndex = -1;
 obj335_onTap_runningActionsCount = 0;
 obj335_onTap_loopCount = 0;
 obj351_onLoad_activeActionGroupIndex = -1;
 obj351_onLoad_runningActionsCount = 0;
 obj351_onLoad_loopCount = 0;
 obj353_onLoad_activeActionGroupIndex = -1;
 obj353_onLoad_runningActionsCount = 0;
 obj353_onLoad_loopCount = 0;
 obj355_onLoad_activeActionGroupIndex = -1;
 obj355_onLoad_runningActionsCount = 0;
 obj355_onLoad_loopCount = 0;
 obj357_onLoad_activeActionGroupIndex = -1;
 obj357_onLoad_runningActionsCount = 0;
 obj357_onLoad_loopCount = 0;
 obj384_onLoad_activeActionGroupIndex = -1;
 obj384_onLoad_runningActionsCount = 0;
 obj384_onLoad_loopCount = 0;
 obj468_onLoad_activeActionGroupIndex = -1;
 obj468_onLoad_runningActionsCount = 0;
 obj468_onLoad_loopCount = 0;
 obj471_onLoad_activeActionGroupIndex = -1;
 obj471_onLoad_runningActionsCount = 0;
 obj471_onLoad_loopCount = 0;
 obj474_onLoad_activeActionGroupIndex = -1;
 obj474_onLoad_runningActionsCount = 0;
 obj474_onLoad_loopCount = 0;
 obj480_onLoad_activeActionGroupIndex = -1;
 obj480_onLoad_runningActionsCount = 0;
 obj480_onLoad_loopCount = 0;
 obj465_onTap_activeActionGroupIndex = -1;
 obj465_onTap_runningActionsCount = 0;
 obj465_onTap_loopCount = 0;
 obj483_onLoad_activeActionGroupIndex = -1;
 obj483_onLoad_runningActionsCount = 0;
 obj483_onLoad_loopCount = 0;
 obj486_onLoad_activeActionGroupIndex = -1;
 obj486_onLoad_runningActionsCount = 0;
 obj486_onLoad_loopCount = 0;
 obj492_onLoad_activeActionGroupIndex = -1;
 obj492_onLoad_runningActionsCount = 0;
 obj492_onLoad_loopCount = 0;
 obj538_onLoad_activeActionGroupIndex = -1;
 obj538_onLoad_runningActionsCount = 0;
 obj538_onLoad_loopCount = 0;
 obj541_onLoad_activeActionGroupIndex = -1;
 obj541_onLoad_runningActionsCount = 0;
 obj541_onLoad_loopCount = 0;
 obj543_onLoad_activeActionGroupIndex = -1;
 obj543_onLoad_runningActionsCount = 0;
 obj543_onLoad_loopCount = 0;
 obj545_onLoad_activeActionGroupIndex = -1;
 obj545_onLoad_runningActionsCount = 0;
 obj545_onLoad_loopCount = 0;
 obj549_onLoad_activeActionGroupIndex = -1;
 obj549_onLoad_runningActionsCount = 0;
 obj549_onLoad_loopCount = 0;
 obj556_onLoad_activeActionGroupIndex = -1;
 obj556_onLoad_runningActionsCount = 0;
 obj556_onLoad_loopCount = 0;
 obj495_onLoad_activeActionGroupIndex = -1;
 obj495_onLoad_runningActionsCount = 0;
 obj495_onLoad_loopCount = 0;
 obj332_onTap_activeActionGroupIndex = -1;
 obj332_onTap_runningActionsCount = 0;
 obj332_onTap_loopCount = 0;
 obj590_onLoad_activeActionGroupIndex = -1;
 obj590_onLoad_runningActionsCount = 0;
 obj590_onLoad_loopCount = 0;
 obj594_onLoad_activeActionGroupIndex = -1;
 obj594_onLoad_runningActionsCount = 0;
 obj594_onLoad_loopCount = 0;
 obj598_onLoad_activeActionGroupIndex = -1;
 obj598_onLoad_runningActionsCount = 0;
 obj598_onLoad_loopCount = 0;
 obj602_onLoad_activeActionGroupIndex = -1;
 obj602_onLoad_runningActionsCount = 0;
 obj602_onLoad_loopCount = 0;
 obj606_onLoad_activeActionGroupIndex = -1;
 obj606_onLoad_runningActionsCount = 0;
 obj606_onLoad_loopCount = 0;
 obj610_onLoad_activeActionGroupIndex = -1;
 obj610_onLoad_runningActionsCount = 0;
 obj610_onLoad_loopCount = 0;
 obj614_onLoad_activeActionGroupIndex = -1;
 obj614_onLoad_runningActionsCount = 0;
 obj614_onLoad_loopCount = 0;
 obj618_onLoad_activeActionGroupIndex = -1;
 obj618_onLoad_runningActionsCount = 0;
 obj618_onLoad_loopCount = 0;
 obj622_onLoad_activeActionGroupIndex = -1;
 obj622_onLoad_runningActionsCount = 0;
 obj622_onLoad_loopCount = 0;
 obj675_onTap_activeActionGroupIndex = -1;
 obj675_onTap_runningActionsCount = 0;
 obj675_onTap_loopCount = 0;
 obj95_onTap_activeActionGroupIndex = -1;
 obj95_onTap_runningActionsCount = 0;
 obj95_onTap_loopCount = 0;
 obj728_onTap_activeActionGroupIndex = -1;
 obj728_onTap_runningActionsCount = 0;
 obj728_onTap_loopCount = 0;
 obj747_onTap_activeActionGroupIndex = -1;
 obj747_onTap_runningActionsCount = 0;
 obj747_onTap_loopCount = 0;
 obj760_onTap_activeActionGroupIndex = -1;
 obj760_onTap_runningActionsCount = 0;
 obj760_onTap_loopCount = 0;
 obj779_onTap_activeActionGroupIndex = -1;
 obj779_onTap_runningActionsCount = 0;
 obj779_onTap_loopCount = 0;
 obj786_onTap_activeActionGroupIndex = -1;
 obj786_onTap_runningActionsCount = 0;
 obj786_onTap_loopCount = 0;
 obj793_onTap_activeActionGroupIndex = -1;
 obj793_onTap_runningActionsCount = 0;
 obj793_onTap_loopCount = 0;
 obj800_onTap_activeActionGroupIndex = -1;
 obj800_onTap_runningActionsCount = 0;
 obj800_onTap_loopCount = 0;
 obj817_onLoad_activeActionGroupIndex = -1;
 obj817_onLoad_runningActionsCount = 0;
 obj817_onLoad_loopCount = 0;
 obj821_onTap_activeActionGroupIndex = -1;
 obj821_onTap_runningActionsCount = 0;
 obj821_onTap_loopCount = 0;
 obj846_onTap_activeActionGroupIndex = -1;
 obj846_onTap_runningActionsCount = 0;
 obj846_onTap_loopCount = 0;
 obj861_onTap_activeActionGroupIndex = -1;
 obj861_onTap_runningActionsCount = 0;
 obj861_onTap_loopCount = 0;
 obj868_onLoad_activeActionGroupIndex = -1;
 obj868_onLoad_runningActionsCount = 0;
 obj868_onLoad_loopCount = 0;
 obj872_onLoad_activeActionGroupIndex = -1;
 obj872_onLoad_runningActionsCount = 0;
 obj872_onLoad_loopCount = 0;
 obj878_onTap_activeActionGroupIndex = -1;
 obj878_onTap_runningActionsCount = 0;
 obj878_onTap_loopCount = 0;
 obj1058_onTap_activeActionGroupIndex = -1;
 obj1058_onTap_runningActionsCount = 0;
 obj1058_onTap_loopCount = 0;
 obj1068_onLoad_activeActionGroupIndex = -1;
 obj1068_onLoad_runningActionsCount = 0;
 obj1068_onLoad_loopCount = 0;
 obj2353_onLoad_activeActionGroupIndex = -1;
 obj2353_onLoad_runningActionsCount = 0;
 obj2353_onLoad_loopCount = 0;
 obj2725_onTap_activeActionGroupIndex = -1;
 obj2725_onTap_runningActionsCount = 0;
 obj2725_onTap_loopCount = 0;
 obj2755_onLoad_activeActionGroupIndex = -1;
 obj2755_onLoad_runningActionsCount = 0;
 obj2755_onLoad_loopCount = 0;
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
		
obj303_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj303_onLoad_activeActionGroupIndex = -1;
		$("#obj303").trigger("obj303_onLoad_ended");
		
		return;
	}
	window.obj303_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj303 
hide_323();
function hide_323() {
	window.obj303_onLoad_runningActionsCount = obj303_onLoad_runningActionsCount + 1;
	$("#obj303").fadeOut(0, function() {
			setTimeout(function() {
				window.obj303_onLoad_runningActionsCount = window.obj303_onLoad_runningActionsCount - 1;
if (window.obj303_onLoad_runningActionsCount == 0) {
	obj303_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj303_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj303_onLoad_activeActionGroupIndex = -1;
		$("#obj303").trigger("obj303_onLoad_ended");
		
		return;
	}
	window.obj303_onLoad_activeActionGroupIndex = 1;
	





















};
obj306_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj306_onLoad_activeActionGroupIndex = -1;
		$("#obj306").trigger("obj306_onLoad_ended");
		
		return;
	}
	window.obj306_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj306 
hide_321();
function hide_321() {
	window.obj306_onLoad_runningActionsCount = obj306_onLoad_runningActionsCount + 1;
	$("#obj306").fadeOut(0, function() {
			setTimeout(function() {
				window.obj306_onLoad_runningActionsCount = window.obj306_onLoad_runningActionsCount - 1;
if (window.obj306_onLoad_runningActionsCount == 0) {
	obj306_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj306_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj306_onLoad_activeActionGroupIndex = -1;
		$("#obj306").trigger("obj306_onLoad_ended");
		
		return;
	}
	window.obj306_onLoad_activeActionGroupIndex = 1;
	





















};
obj309_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj309_onLoad_activeActionGroupIndex = -1;
		$("#obj309").trigger("obj309_onLoad_ended");
		
		return;
	}
	window.obj309_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj309 
hide_319();
function hide_319() {
	window.obj309_onLoad_runningActionsCount = obj309_onLoad_runningActionsCount + 1;
	$("#obj309").fadeOut(0, function() {
			setTimeout(function() {
				window.obj309_onLoad_runningActionsCount = window.obj309_onLoad_runningActionsCount - 1;
if (window.obj309_onLoad_runningActionsCount == 0) {
	obj309_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj309_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj309_onLoad_activeActionGroupIndex = -1;
		$("#obj309").trigger("obj309_onLoad_ended");
		
		return;
	}
	window.obj309_onLoad_activeActionGroupIndex = 1;
	





















};
obj312_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj312_onLoad_activeActionGroupIndex = -1;
		$("#obj312").trigger("obj312_onLoad_ended");
		
		return;
	}
	window.obj312_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj312 
hide_325();
function hide_325() {
	window.obj312_onLoad_runningActionsCount = obj312_onLoad_runningActionsCount + 1;
	$("#obj312").fadeOut(0, function() {
			setTimeout(function() {
				window.obj312_onLoad_runningActionsCount = window.obj312_onLoad_runningActionsCount - 1;
if (window.obj312_onLoad_runningActionsCount == 0) {
	obj312_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj312_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj312_onLoad_activeActionGroupIndex = -1;
		$("#obj312").trigger("obj312_onLoad_ended");
		
		return;
	}
	window.obj312_onLoad_activeActionGroupIndex = 1;
	





















};
obj315_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj315_onLoad_activeActionGroupIndex = -1;
		$("#obj315").trigger("obj315_onLoad_ended");
		
		return;
	}
	window.obj315_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj315 
hide_340();
function hide_340() {
	window.obj315_onLoad_runningActionsCount = obj315_onLoad_runningActionsCount + 1;
	$("#obj315").fadeOut(0, function() {
			setTimeout(function() {
				window.obj315_onLoad_runningActionsCount = window.obj315_onLoad_runningActionsCount - 1;
if (window.obj315_onLoad_runningActionsCount == 0) {
	obj315_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj315_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj315_onLoad_activeActionGroupIndex = -1;
		$("#obj315").trigger("obj315_onLoad_ended");
		
		return;
	}
	window.obj315_onLoad_activeActionGroupIndex = 1;
	





















};
obj327_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj327_onTap_activeActionGroupIndex = -1;
		$("#obj327").trigger("obj327_onTap_ended");
		
		return;
	}
	window.obj327_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj303 
show_342();
function show_342() {
	window.obj327_onTap_runningActionsCount = obj327_onTap_runningActionsCount + 1;
	$("#obj303").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
				$("#obj303").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj351 
show_363();
function show_363() {
	window.obj327_onTap_runningActionsCount = obj327_onTap_runningActionsCount + 1;
	$("#obj351").fadeIn(0, function() {
			setTimeout(function() {
				window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
				$("#obj351").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj306 
show_343();
function show_343() {
	window.obj327_onTap_runningActionsCount = obj327_onTap_runningActionsCount + 1;
	$("#obj306").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
				$("#obj306").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_360();
function playAudioFile_360() {
	window.obj327_onTap_runningActionsCount = obj327_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile360")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_347();
function playAudioFile_347() {
	window.obj327_onTap_runningActionsCount = obj327_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile347")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2859();
function runjs_2859() {
	window.obj327_onTap_runningActionsCount = obj327_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_children.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj327_onTap_runningActionsCount = window.obj327_onTap_runningActionsCount - 1;
if (window.obj327_onTap_runningActionsCount == 0) {
	obj327_onTap_actionGroup1();
}
	}, 1);
}






};
obj327_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj327_onTap_activeActionGroupIndex = -1;
		$("#obj327").trigger("obj327_onTap_ended");
		
		return;
	}
	window.obj327_onTap_activeActionGroupIndex = 1;
	





















};
obj335_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj335_onTap_activeActionGroupIndex = -1;
		$("#obj335").trigger("obj335_onTap_ended");
		
		return;
	}
	window.obj335_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj315 
show_344();
function show_344() {
	window.obj335_onTap_runningActionsCount = obj335_onTap_runningActionsCount + 1;
	$("#obj315").fadeIn(600, function() {
			setTimeout(function() {
				window.obj335_onTap_runningActionsCount = window.obj335_onTap_runningActionsCount - 1;
if (window.obj335_onTap_runningActionsCount == 0) {
	obj335_onTap_actionGroup1();
}
				$("#obj315").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj355 
show_373();
function show_373() {
	window.obj335_onTap_runningActionsCount = obj335_onTap_runningActionsCount + 1;
	$("#obj355").fadeIn(0, function() {
			setTimeout(function() {
				window.obj335_onTap_runningActionsCount = window.obj335_onTap_runningActionsCount - 1;
if (window.obj335_onTap_runningActionsCount == 0) {
	obj335_onTap_actionGroup1();
}
				$("#obj355").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_345();
function playAudioFile_345() {
	window.obj335_onTap_runningActionsCount = obj335_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile345")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj335_onTap_runningActionsCount = window.obj335_onTap_runningActionsCount - 1;
if (window.obj335_onTap_runningActionsCount == 0) {
	obj335_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj335_onTap_runningActionsCount = window.obj335_onTap_runningActionsCount - 1;
if (window.obj335_onTap_runningActionsCount == 0) {
	obj335_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_375();
function playAudioFile_375() {
	window.obj335_onTap_runningActionsCount = obj335_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile375")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj335_onTap_runningActionsCount = window.obj335_onTap_runningActionsCount - 1;
if (window.obj335_onTap_runningActionsCount == 0) {
	obj335_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj335_onTap_runningActionsCount = window.obj335_onTap_runningActionsCount - 1;
if (window.obj335_onTap_runningActionsCount == 0) {
	obj335_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2861();
function runjs_2861() {
	window.obj335_onTap_runningActionsCount = obj335_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_chickenroosterchicks.mp4",0,0,1.0);
	setTimeout(function() {
		window.obj335_onTap_runningActionsCount = window.obj335_onTap_runningActionsCount - 1;
if (window.obj335_onTap_runningActionsCount == 0) {
	obj335_onTap_actionGroup1();
}
	}, 1);
}






};
obj335_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj335_onTap_activeActionGroupIndex = -1;
		$("#obj335").trigger("obj335_onTap_ended");
		
		return;
	}
	window.obj335_onTap_activeActionGroupIndex = 1;
	





















};
obj351_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj351_onLoad_activeActionGroupIndex = -1;
		$("#obj351").trigger("obj351_onLoad_ended");
		
		return;
	}
	window.obj351_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj351 
hide_365();
function hide_365() {
	window.obj351_onLoad_runningActionsCount = obj351_onLoad_runningActionsCount + 1;
	$("#obj351").fadeOut(0, function() {
			setTimeout(function() {
				window.obj351_onLoad_runningActionsCount = window.obj351_onLoad_runningActionsCount - 1;
if (window.obj351_onLoad_runningActionsCount == 0) {
	obj351_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj351_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj351_onLoad_activeActionGroupIndex = -1;
		$("#obj351").trigger("obj351_onLoad_ended");
		
		return;
	}
	window.obj351_onLoad_activeActionGroupIndex = 1;
	





















};
obj353_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj353_onLoad_activeActionGroupIndex = -1;
		$("#obj353").trigger("obj353_onLoad_ended");
		
		return;
	}
	window.obj353_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj353 
hide_371();
function hide_371() {
	window.obj353_onLoad_runningActionsCount = obj353_onLoad_runningActionsCount + 1;
	$("#obj353").fadeOut(0, function() {
			setTimeout(function() {
				window.obj353_onLoad_runningActionsCount = window.obj353_onLoad_runningActionsCount - 1;
if (window.obj353_onLoad_runningActionsCount == 0) {
	obj353_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj353_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj353_onLoad_activeActionGroupIndex = -1;
		$("#obj353").trigger("obj353_onLoad_ended");
		
		return;
	}
	window.obj353_onLoad_activeActionGroupIndex = 1;
	





















};
obj355_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj355_onLoad_activeActionGroupIndex = -1;
		$("#obj355").trigger("obj355_onLoad_ended");
		
		return;
	}
	window.obj355_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj355 
hide_369();
function hide_369() {
	window.obj355_onLoad_runningActionsCount = obj355_onLoad_runningActionsCount + 1;
	$("#obj355").fadeOut(0, function() {
			setTimeout(function() {
				window.obj355_onLoad_runningActionsCount = window.obj355_onLoad_runningActionsCount - 1;
if (window.obj355_onLoad_runningActionsCount == 0) {
	obj355_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj355_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj355_onLoad_activeActionGroupIndex = -1;
		$("#obj355").trigger("obj355_onLoad_ended");
		
		return;
	}
	window.obj355_onLoad_activeActionGroupIndex = 1;
	





















};
obj357_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj357_onLoad_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_onLoad_ended");
		
		return;
	}
	window.obj357_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj357 
hide_367();
function hide_367() {
	window.obj357_onLoad_runningActionsCount = obj357_onLoad_runningActionsCount + 1;
	$("#obj357").fadeOut(0, function() {
			setTimeout(function() {
				window.obj357_onLoad_runningActionsCount = window.obj357_onLoad_runningActionsCount - 1;
if (window.obj357_onLoad_runningActionsCount == 0) {
	obj357_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj357_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj357_onLoad_activeActionGroupIndex = -1;
		$("#obj357").trigger("obj357_onLoad_ended");
		
		return;
	}
	window.obj357_onLoad_activeActionGroupIndex = 1;
	





















};
obj384_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj384_onLoad_activeActionGroupIndex = -1;
		$("#obj384").trigger("obj384_onLoad_ended");
		
		return;
	}
	window.obj384_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj384 
hide_577();
function hide_577() {
	window.obj384_onLoad_runningActionsCount = obj384_onLoad_runningActionsCount + 1;
	$("#obj384").fadeOut(0, function() {
			setTimeout(function() {
				window.obj384_onLoad_runningActionsCount = window.obj384_onLoad_runningActionsCount - 1;
if (window.obj384_onLoad_runningActionsCount == 0) {
	obj384_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj384_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj384_onLoad_activeActionGroupIndex = -1;
		$("#obj384").trigger("obj384_onLoad_ended");
		
		return;
	}
	window.obj384_onLoad_activeActionGroupIndex = 1;
	





















};
obj468_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj468_onLoad_activeActionGroupIndex = -1;
		$("#obj468").trigger("obj468_onLoad_ended");
		
		return;
	}
	window.obj468_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj468 
hide_561();
function hide_561() {
	window.obj468_onLoad_runningActionsCount = obj468_onLoad_runningActionsCount + 1;
	$("#obj468").fadeOut(0, function() {
			setTimeout(function() {
				window.obj468_onLoad_runningActionsCount = window.obj468_onLoad_runningActionsCount - 1;
if (window.obj468_onLoad_runningActionsCount == 0) {
	obj468_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj468_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj468_onLoad_activeActionGroupIndex = -1;
		$("#obj468").trigger("obj468_onLoad_ended");
		
		return;
	}
	window.obj468_onLoad_activeActionGroupIndex = 1;
	





















};
obj471_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj471_onLoad_activeActionGroupIndex = -1;
		$("#obj471").trigger("obj471_onLoad_ended");
		
		return;
	}
	window.obj471_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj471 
hide_563();
function hide_563() {
	window.obj471_onLoad_runningActionsCount = obj471_onLoad_runningActionsCount + 1;
	$("#obj471").fadeOut(0, function() {
			setTimeout(function() {
				window.obj471_onLoad_runningActionsCount = window.obj471_onLoad_runningActionsCount - 1;
if (window.obj471_onLoad_runningActionsCount == 0) {
	obj471_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj471_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj471_onLoad_activeActionGroupIndex = -1;
		$("#obj471").trigger("obj471_onLoad_ended");
		
		return;
	}
	window.obj471_onLoad_activeActionGroupIndex = 1;
	





















};
obj474_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj474_onLoad_activeActionGroupIndex = -1;
		$("#obj474").trigger("obj474_onLoad_ended");
		
		return;
	}
	window.obj474_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj474 
hide_569();
function hide_569() {
	window.obj474_onLoad_runningActionsCount = obj474_onLoad_runningActionsCount + 1;
	$("#obj474").fadeOut(0, function() {
			setTimeout(function() {
				window.obj474_onLoad_runningActionsCount = window.obj474_onLoad_runningActionsCount - 1;
if (window.obj474_onLoad_runningActionsCount == 0) {
	obj474_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj474_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj474_onLoad_activeActionGroupIndex = -1;
		$("#obj474").trigger("obj474_onLoad_ended");
		
		return;
	}
	window.obj474_onLoad_activeActionGroupIndex = 1;
	





















};
obj480_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj480_onLoad_activeActionGroupIndex = -1;
		$("#obj480").trigger("obj480_onLoad_ended");
		
		return;
	}
	window.obj480_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj480 
hide_565();
function hide_565() {
	window.obj480_onLoad_runningActionsCount = obj480_onLoad_runningActionsCount + 1;
	$("#obj480").fadeOut(0, function() {
			setTimeout(function() {
				window.obj480_onLoad_runningActionsCount = window.obj480_onLoad_runningActionsCount - 1;
if (window.obj480_onLoad_runningActionsCount == 0) {
	obj480_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj480_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj480_onLoad_activeActionGroupIndex = -1;
		$("#obj480").trigger("obj480_onLoad_ended");
		
		return;
	}
	window.obj480_onLoad_activeActionGroupIndex = 1;
	





















};
obj465_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj465_onTap_activeActionGroupIndex = -1;
		$("#obj465").trigger("obj465_onTap_ended");
		
		return;
	}
	window.obj465_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj468 
show_559();
function show_559() {
	window.obj465_onTap_runningActionsCount = obj465_onTap_runningActionsCount + 1;
	$("#obj468").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj465_onTap_runningActionsCount = window.obj465_onTap_runningActionsCount - 1;
if (window.obj465_onTap_runningActionsCount == 0) {
	obj465_onTap_actionGroup1();
}
				$("#obj468").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj622 
show_626();
function show_626() {
	window.obj465_onTap_runningActionsCount = obj465_onTap_runningActionsCount + 1;
	$("#obj622").fadeIn(0, function() {
			setTimeout(function() {
				window.obj465_onTap_runningActionsCount = window.obj465_onTap_runningActionsCount - 1;
if (window.obj465_onTap_runningActionsCount == 0) {
	obj465_onTap_actionGroup1();
}
				$("#obj622").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_720();
function playAudioFile_720() {
	window.obj465_onTap_runningActionsCount = obj465_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile720")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj465_onTap_runningActionsCount = window.obj465_onTap_runningActionsCount - 1;
if (window.obj465_onTap_runningActionsCount == 0) {
	obj465_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj465_onTap_runningActionsCount = window.obj465_onTap_runningActionsCount - 1;
if (window.obj465_onTap_runningActionsCount == 0) {
	obj465_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_719();
function playAudioFile_719() {
	window.obj465_onTap_runningActionsCount = obj465_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile719")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj465_onTap_runningActionsCount = window.obj465_onTap_runningActionsCount - 1;
if (window.obj465_onTap_runningActionsCount == 0) {
	obj465_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj465_onTap_runningActionsCount = window.obj465_onTap_runningActionsCount - 1;
if (window.obj465_onTap_runningActionsCount == 0) {
	obj465_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2864();
function runjs_2864() {
	window.obj465_onTap_runningActionsCount = obj465_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_cat.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj465_onTap_runningActionsCount = window.obj465_onTap_runningActionsCount - 1;
if (window.obj465_onTap_runningActionsCount == 0) {
	obj465_onTap_actionGroup1();
}
	}, 1);
}






};
obj465_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj465_onTap_activeActionGroupIndex = -1;
		$("#obj465").trigger("obj465_onTap_ended");
		
		return;
	}
	window.obj465_onTap_activeActionGroupIndex = 1;
	





















};
obj483_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj483_onLoad_activeActionGroupIndex = -1;
		$("#obj483").trigger("obj483_onLoad_ended");
		
		return;
	}
	window.obj483_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj483 
hide_585();
function hide_585() {
	window.obj483_onLoad_runningActionsCount = obj483_onLoad_runningActionsCount + 1;
	$("#obj483").fadeOut(0, function() {
			setTimeout(function() {
				window.obj483_onLoad_runningActionsCount = window.obj483_onLoad_runningActionsCount - 1;
if (window.obj483_onLoad_runningActionsCount == 0) {
	obj483_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj483_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj483_onLoad_activeActionGroupIndex = -1;
		$("#obj483").trigger("obj483_onLoad_ended");
		
		return;
	}
	window.obj483_onLoad_activeActionGroupIndex = 1;
	





















};
obj486_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj486_onLoad_activeActionGroupIndex = -1;
		$("#obj486").trigger("obj486_onLoad_ended");
		
		return;
	}
	window.obj486_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj486 
hide_567();
function hide_567() {
	window.obj486_onLoad_runningActionsCount = obj486_onLoad_runningActionsCount + 1;
	$("#obj486").fadeOut(0, function() {
			setTimeout(function() {
				window.obj486_onLoad_runningActionsCount = window.obj486_onLoad_runningActionsCount - 1;
if (window.obj486_onLoad_runningActionsCount == 0) {
	obj486_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj486_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj486_onLoad_activeActionGroupIndex = -1;
		$("#obj486").trigger("obj486_onLoad_ended");
		
		return;
	}
	window.obj486_onLoad_activeActionGroupIndex = 1;
	





















};
obj492_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj492_onLoad_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_onLoad_ended");
		
		return;
	}
	window.obj492_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj492 
hide_571();
function hide_571() {
	window.obj492_onLoad_runningActionsCount = obj492_onLoad_runningActionsCount + 1;
	$("#obj492").fadeOut(0, function() {
			setTimeout(function() {
				window.obj492_onLoad_runningActionsCount = window.obj492_onLoad_runningActionsCount - 1;
if (window.obj492_onLoad_runningActionsCount == 0) {
	obj492_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj492_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj492_onLoad_activeActionGroupIndex = -1;
		$("#obj492").trigger("obj492_onLoad_ended");
		
		return;
	}
	window.obj492_onLoad_activeActionGroupIndex = 1;
	





















};
obj538_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj538_onLoad_activeActionGroupIndex = -1;
		$("#obj538").trigger("obj538_onLoad_ended");
		
		return;
	}
	window.obj538_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj538 
hide_581();
function hide_581() {
	window.obj538_onLoad_runningActionsCount = obj538_onLoad_runningActionsCount + 1;
	$("#obj538").fadeOut(0, function() {
			setTimeout(function() {
				window.obj538_onLoad_runningActionsCount = window.obj538_onLoad_runningActionsCount - 1;
if (window.obj538_onLoad_runningActionsCount == 0) {
	obj538_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj538_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj538_onLoad_activeActionGroupIndex = -1;
		$("#obj538").trigger("obj538_onLoad_ended");
		
		return;
	}
	window.obj538_onLoad_activeActionGroupIndex = 1;
	





















};
obj541_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj541_onLoad_activeActionGroupIndex = -1;
		$("#obj541").trigger("obj541_onLoad_ended");
		
		return;
	}
	window.obj541_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj541 
hide_587();
function hide_587() {
	window.obj541_onLoad_runningActionsCount = obj541_onLoad_runningActionsCount + 1;
	$("#obj541").fadeOut(0, function() {
			setTimeout(function() {
				window.obj541_onLoad_runningActionsCount = window.obj541_onLoad_runningActionsCount - 1;
if (window.obj541_onLoad_runningActionsCount == 0) {
	obj541_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj541_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj541_onLoad_activeActionGroupIndex = -1;
		$("#obj541").trigger("obj541_onLoad_ended");
		
		return;
	}
	window.obj541_onLoad_activeActionGroupIndex = 1;
	





















};
obj543_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj543_onLoad_activeActionGroupIndex = -1;
		$("#obj543").trigger("obj543_onLoad_ended");
		
		return;
	}
	window.obj543_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj543 
hide_589();
function hide_589() {
	window.obj543_onLoad_runningActionsCount = obj543_onLoad_runningActionsCount + 1;
	$("#obj543").fadeOut(0, function() {
			setTimeout(function() {
				window.obj543_onLoad_runningActionsCount = window.obj543_onLoad_runningActionsCount - 1;
if (window.obj543_onLoad_runningActionsCount == 0) {
	obj543_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj543_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj543_onLoad_activeActionGroupIndex = -1;
		$("#obj543").trigger("obj543_onLoad_ended");
		
		return;
	}
	window.obj543_onLoad_activeActionGroupIndex = 1;
	





















};
obj545_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj545_onLoad_activeActionGroupIndex = -1;
		$("#obj545").trigger("obj545_onLoad_ended");
		
		return;
	}
	window.obj545_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj545 
hide_575();
function hide_575() {
	window.obj545_onLoad_runningActionsCount = obj545_onLoad_runningActionsCount + 1;
	$("#obj545").fadeOut(0, function() {
			setTimeout(function() {
				window.obj545_onLoad_runningActionsCount = window.obj545_onLoad_runningActionsCount - 1;
if (window.obj545_onLoad_runningActionsCount == 0) {
	obj545_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj545_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj545_onLoad_activeActionGroupIndex = -1;
		$("#obj545").trigger("obj545_onLoad_ended");
		
		return;
	}
	window.obj545_onLoad_activeActionGroupIndex = 1;
	





















};
obj549_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj549_onLoad_activeActionGroupIndex = -1;
		$("#obj549").trigger("obj549_onLoad_ended");
		
		return;
	}
	window.obj549_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj549 
hide_573();
function hide_573() {
	window.obj549_onLoad_runningActionsCount = obj549_onLoad_runningActionsCount + 1;
	$("#obj549").fadeOut(0, function() {
			setTimeout(function() {
				window.obj549_onLoad_runningActionsCount = window.obj549_onLoad_runningActionsCount - 1;
if (window.obj549_onLoad_runningActionsCount == 0) {
	obj549_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj549_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj549_onLoad_activeActionGroupIndex = -1;
		$("#obj549").trigger("obj549_onLoad_ended");
		
		return;
	}
	window.obj549_onLoad_activeActionGroupIndex = 1;
	





















};
obj556_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj556_onLoad_activeActionGroupIndex = -1;
		$("#obj556").trigger("obj556_onLoad_ended");
		
		return;
	}
	window.obj556_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj556 
hide_579();
function hide_579() {
	window.obj556_onLoad_runningActionsCount = obj556_onLoad_runningActionsCount + 1;
	$("#obj556").fadeOut(0, function() {
			setTimeout(function() {
				window.obj556_onLoad_runningActionsCount = window.obj556_onLoad_runningActionsCount - 1;
if (window.obj556_onLoad_runningActionsCount == 0) {
	obj556_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj556_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj556_onLoad_activeActionGroupIndex = -1;
		$("#obj556").trigger("obj556_onLoad_ended");
		
		return;
	}
	window.obj556_onLoad_activeActionGroupIndex = 1;
	





















};
obj495_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj495_onLoad_activeActionGroupIndex = -1;
		$("#obj495").trigger("obj495_onLoad_ended");
		
		return;
	}
	window.obj495_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj495 
hide_583();
function hide_583() {
	window.obj495_onLoad_runningActionsCount = obj495_onLoad_runningActionsCount + 1;
	$("#obj495").fadeOut(0, function() {
			setTimeout(function() {
				window.obj495_onLoad_runningActionsCount = window.obj495_onLoad_runningActionsCount - 1;
if (window.obj495_onLoad_runningActionsCount == 0) {
	obj495_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj495_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj495_onLoad_activeActionGroupIndex = -1;
		$("#obj495").trigger("obj495_onLoad_ended");
		
		return;
	}
	window.obj495_onLoad_activeActionGroupIndex = 1;
	





















};
obj332_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj332_onTap_activeActionGroupIndex = -1;
		$("#obj332").trigger("obj332_onTap_ended");
		
		return;
	}
	window.obj332_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj312 
show_334();
function show_334() {
	window.obj332_onTap_runningActionsCount = obj332_onTap_runningActionsCount + 1;
	$("#obj312").fadeIn(600, function() {
			setTimeout(function() {
				window.obj332_onTap_runningActionsCount = window.obj332_onTap_runningActionsCount - 1;
if (window.obj332_onTap_runningActionsCount == 0) {
	obj332_onTap_actionGroup1();
}
				$("#obj312").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj357 
show_372();
function show_372() {
	window.obj332_onTap_runningActionsCount = obj332_onTap_runningActionsCount + 1;
	$("#obj357").fadeIn(0, function() {
			setTimeout(function() {
				window.obj332_onTap_runningActionsCount = window.obj332_onTap_runningActionsCount - 1;
if (window.obj332_onTap_runningActionsCount == 0) {
	obj332_onTap_actionGroup1();
}
				$("#obj357").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_361();
function playAudioFile_361() {
	window.obj332_onTap_runningActionsCount = obj332_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile361")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj332_onTap_runningActionsCount = window.obj332_onTap_runningActionsCount - 1;
if (window.obj332_onTap_runningActionsCount == 0) {
	obj332_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj332_onTap_runningActionsCount = window.obj332_onTap_runningActionsCount - 1;
if (window.obj332_onTap_runningActionsCount == 0) {
	obj332_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2858();
function runjs_2858() {
	window.obj332_onTap_runningActionsCount = obj332_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_man.mp4",0,0,1.0);
	setTimeout(function() {
		window.obj332_onTap_runningActionsCount = window.obj332_onTap_runningActionsCount - 1;
if (window.obj332_onTap_runningActionsCount == 0) {
	obj332_onTap_actionGroup1();
}
	}, 1);
}






};
obj332_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj332_onTap_activeActionGroupIndex = -1;
		$("#obj332").trigger("obj332_onTap_ended");
		
		return;
	}
	window.obj332_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_346();
function playAudioFile_346() {
	window.obj332_onTap_runningActionsCount = obj332_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile346")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj332_onTap_runningActionsCount = window.obj332_onTap_runningActionsCount - 1;
if (window.obj332_onTap_runningActionsCount == 0) {
	obj332_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj332_onTap_runningActionsCount = window.obj332_onTap_runningActionsCount - 1;
if (window.obj332_onTap_runningActionsCount == 0) {
	obj332_onTap_actionGroup2();
}
	}
	
}














};
obj332_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj332_onTap_activeActionGroupIndex = -1;
		$("#obj332").trigger("obj332_onTap_ended");
		
		return;
	}
	window.obj332_onTap_activeActionGroupIndex = 2;
	





















};
obj590_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj590_onLoad_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_onLoad_ended");
		
		return;
	}
	window.obj590_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj590 
hide_593();
function hide_593() {
	window.obj590_onLoad_runningActionsCount = obj590_onLoad_runningActionsCount + 1;
	$("#obj590").fadeOut(0, function() {
			setTimeout(function() {
				window.obj590_onLoad_runningActionsCount = window.obj590_onLoad_runningActionsCount - 1;
if (window.obj590_onLoad_runningActionsCount == 0) {
	obj590_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj590_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj590_onLoad_activeActionGroupIndex = -1;
		$("#obj590").trigger("obj590_onLoad_ended");
		
		return;
	}
	window.obj590_onLoad_activeActionGroupIndex = 1;
	





















};
obj594_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj594_onLoad_activeActionGroupIndex = -1;
		$("#obj594").trigger("obj594_onLoad_ended");
		
		return;
	}
	window.obj594_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj594 
hide_597();
function hide_597() {
	window.obj594_onLoad_runningActionsCount = obj594_onLoad_runningActionsCount + 1;
	$("#obj594").fadeOut(0, function() {
			setTimeout(function() {
				window.obj594_onLoad_runningActionsCount = window.obj594_onLoad_runningActionsCount - 1;
if (window.obj594_onLoad_runningActionsCount == 0) {
	obj594_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj594_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj594_onLoad_activeActionGroupIndex = -1;
		$("#obj594").trigger("obj594_onLoad_ended");
		
		return;
	}
	window.obj594_onLoad_activeActionGroupIndex = 1;
	





















};
obj598_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj598_onLoad_activeActionGroupIndex = -1;
		$("#obj598").trigger("obj598_onLoad_ended");
		
		return;
	}
	window.obj598_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj598 
hide_601();
function hide_601() {
	window.obj598_onLoad_runningActionsCount = obj598_onLoad_runningActionsCount + 1;
	$("#obj598").fadeOut(0, function() {
			setTimeout(function() {
				window.obj598_onLoad_runningActionsCount = window.obj598_onLoad_runningActionsCount - 1;
if (window.obj598_onLoad_runningActionsCount == 0) {
	obj598_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj598_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj598_onLoad_activeActionGroupIndex = -1;
		$("#obj598").trigger("obj598_onLoad_ended");
		
		return;
	}
	window.obj598_onLoad_activeActionGroupIndex = 1;
	





















};
obj602_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj602_onLoad_activeActionGroupIndex = -1;
		$("#obj602").trigger("obj602_onLoad_ended");
		
		return;
	}
	window.obj602_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj602 
hide_605();
function hide_605() {
	window.obj602_onLoad_runningActionsCount = obj602_onLoad_runningActionsCount + 1;
	$("#obj602").fadeOut(0, function() {
			setTimeout(function() {
				window.obj602_onLoad_runningActionsCount = window.obj602_onLoad_runningActionsCount - 1;
if (window.obj602_onLoad_runningActionsCount == 0) {
	obj602_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj602_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj602_onLoad_activeActionGroupIndex = -1;
		$("#obj602").trigger("obj602_onLoad_ended");
		
		return;
	}
	window.obj602_onLoad_activeActionGroupIndex = 1;
	





















};
obj606_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj606_onLoad_activeActionGroupIndex = -1;
		$("#obj606").trigger("obj606_onLoad_ended");
		
		return;
	}
	window.obj606_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj606 
hide_609();
function hide_609() {
	window.obj606_onLoad_runningActionsCount = obj606_onLoad_runningActionsCount + 1;
	$("#obj606").fadeOut(0, function() {
			setTimeout(function() {
				window.obj606_onLoad_runningActionsCount = window.obj606_onLoad_runningActionsCount - 1;
if (window.obj606_onLoad_runningActionsCount == 0) {
	obj606_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj606_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj606_onLoad_activeActionGroupIndex = -1;
		$("#obj606").trigger("obj606_onLoad_ended");
		
		return;
	}
	window.obj606_onLoad_activeActionGroupIndex = 1;
	





















};
obj610_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj610_onLoad_activeActionGroupIndex = -1;
		$("#obj610").trigger("obj610_onLoad_ended");
		
		return;
	}
	window.obj610_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj610 
hide_613();
function hide_613() {
	window.obj610_onLoad_runningActionsCount = obj610_onLoad_runningActionsCount + 1;
	$("#obj610").fadeOut(0, function() {
			setTimeout(function() {
				window.obj610_onLoad_runningActionsCount = window.obj610_onLoad_runningActionsCount - 1;
if (window.obj610_onLoad_runningActionsCount == 0) {
	obj610_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj610_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj610_onLoad_activeActionGroupIndex = -1;
		$("#obj610").trigger("obj610_onLoad_ended");
		
		return;
	}
	window.obj610_onLoad_activeActionGroupIndex = 1;
	





















};
obj614_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj614_onLoad_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_onLoad_ended");
		
		return;
	}
	window.obj614_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj614 
hide_617();
function hide_617() {
	window.obj614_onLoad_runningActionsCount = obj614_onLoad_runningActionsCount + 1;
	$("#obj614").fadeOut(0, function() {
			setTimeout(function() {
				window.obj614_onLoad_runningActionsCount = window.obj614_onLoad_runningActionsCount - 1;
if (window.obj614_onLoad_runningActionsCount == 0) {
	obj614_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj614_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj614_onLoad_activeActionGroupIndex = -1;
		$("#obj614").trigger("obj614_onLoad_ended");
		
		return;
	}
	window.obj614_onLoad_activeActionGroupIndex = 1;
	





















};
obj618_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj618_onLoad_activeActionGroupIndex = -1;
		$("#obj618").trigger("obj618_onLoad_ended");
		
		return;
	}
	window.obj618_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj618 
hide_621();
function hide_621() {
	window.obj618_onLoad_runningActionsCount = obj618_onLoad_runningActionsCount + 1;
	$("#obj618").fadeOut(0, function() {
			setTimeout(function() {
				window.obj618_onLoad_runningActionsCount = window.obj618_onLoad_runningActionsCount - 1;
if (window.obj618_onLoad_runningActionsCount == 0) {
	obj618_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj618_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj618_onLoad_activeActionGroupIndex = -1;
		$("#obj618").trigger("obj618_onLoad_ended");
		
		return;
	}
	window.obj618_onLoad_activeActionGroupIndex = 1;
	





















};
obj622_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj622_onLoad_activeActionGroupIndex = -1;
		$("#obj622").trigger("obj622_onLoad_ended");
		
		return;
	}
	window.obj622_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj622 
hide_625();
function hide_625() {
	window.obj622_onLoad_runningActionsCount = obj622_onLoad_runningActionsCount + 1;
	$("#obj622").fadeOut(0, function() {
			setTimeout(function() {
				window.obj622_onLoad_runningActionsCount = window.obj622_onLoad_runningActionsCount - 1;
if (window.obj622_onLoad_runningActionsCount == 0) {
	obj622_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj622_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj622_onLoad_activeActionGroupIndex = -1;
		$("#obj622").trigger("obj622_onLoad_ended");
		
		return;
	}
	window.obj622_onLoad_activeActionGroupIndex = 1;
	





















};
obj675_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj675_onTap_activeActionGroupIndex = -1;
		$("#obj675").trigger("obj675_onTap_ended");
		
		return;
	}
	window.obj675_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj309 
show_677();
function show_677() {
	window.obj675_onTap_runningActionsCount = obj675_onTap_runningActionsCount + 1;
	$("#obj309").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj675_onTap_runningActionsCount = window.obj675_onTap_runningActionsCount - 1;
if (window.obj675_onTap_runningActionsCount == 0) {
	obj675_onTap_actionGroup1();
}
				$("#obj309").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj353 
show_678();
function show_678() {
	window.obj675_onTap_runningActionsCount = obj675_onTap_runningActionsCount + 1;
	$("#obj353").fadeIn(0, function() {
			setTimeout(function() {
				window.obj675_onTap_runningActionsCount = window.obj675_onTap_runningActionsCount - 1;
if (window.obj675_onTap_runningActionsCount == 0) {
	obj675_onTap_actionGroup1();
}
				$("#obj353").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_679();
function playAudioFile_679() {
	window.obj675_onTap_runningActionsCount = obj675_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile679")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj675_onTap_runningActionsCount = window.obj675_onTap_runningActionsCount - 1;
if (window.obj675_onTap_runningActionsCount == 0) {
	obj675_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj675_onTap_runningActionsCount = window.obj675_onTap_runningActionsCount - 1;
if (window.obj675_onTap_runningActionsCount == 0) {
	obj675_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2860();
function runjs_2860() {
	window.obj675_onTap_runningActionsCount = obj675_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_dog.mp4",0,0,1.0);
	setTimeout(function() {
		window.obj675_onTap_runningActionsCount = window.obj675_onTap_runningActionsCount - 1;
if (window.obj675_onTap_runningActionsCount == 0) {
	obj675_onTap_actionGroup1();
}
	}, 1);
}






};
obj675_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj675_onTap_activeActionGroupIndex = -1;
		$("#obj675").trigger("obj675_onTap_ended");
		
		return;
	}
	window.obj675_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_681();
function playAudioFile_681() {
	window.obj675_onTap_runningActionsCount = obj675_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile681")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj675_onTap_runningActionsCount = window.obj675_onTap_runningActionsCount - 1;
if (window.obj675_onTap_runningActionsCount == 0) {
	obj675_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj675_onTap_runningActionsCount = window.obj675_onTap_runningActionsCount - 1;
if (window.obj675_onTap_runningActionsCount == 0) {
	obj675_onTap_actionGroup2();
}
	}
	
}














};
obj675_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj675_onTap_activeActionGroupIndex = -1;
		$("#obj675").trigger("obj675_onTap_ended");
		
		return;
	}
	window.obj675_onTap_activeActionGroupIndex = 2;
	





















};
obj95_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj95_onTap_activeActionGroupIndex = -1;
		$("#obj95").trigger("obj95_onTap_ended");
		
		return;
	}
	window.obj95_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj541 
show_326();
function show_326() {
	window.obj95_onTap_runningActionsCount = obj95_onTap_runningActionsCount + 1;
	$("#obj541").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj95_onTap_runningActionsCount = window.obj95_onTap_runningActionsCount - 1;
if (window.obj95_onTap_runningActionsCount == 0) {
	obj95_onTap_actionGroup1();
}
				$("#obj541").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj872 
show_374();
function show_374() {
	window.obj95_onTap_runningActionsCount = obj95_onTap_runningActionsCount + 1;
	$("#obj872").fadeIn(0, function() {
			setTimeout(function() {
				window.obj95_onTap_runningActionsCount = window.obj95_onTap_runningActionsCount - 1;
if (window.obj95_onTap_runningActionsCount == 0) {
	obj95_onTap_actionGroup1();
}
				$("#obj872").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_876();
function playAudioFile_876() {
	window.obj95_onTap_runningActionsCount = obj95_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile876")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj95_onTap_runningActionsCount = window.obj95_onTap_runningActionsCount - 1;
if (window.obj95_onTap_runningActionsCount == 0) {
	obj95_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj95_onTap_runningActionsCount = window.obj95_onTap_runningActionsCount - 1;
if (window.obj95_onTap_runningActionsCount == 0) {
	obj95_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_362();
function playAudioFile_362() {
	window.obj95_onTap_runningActionsCount = obj95_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile362")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj95_onTap_runningActionsCount = window.obj95_onTap_runningActionsCount - 1;
if (window.obj95_onTap_runningActionsCount == 0) {
	obj95_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj95_onTap_runningActionsCount = window.obj95_onTap_runningActionsCount - 1;
if (window.obj95_onTap_runningActionsCount == 0) {
	obj95_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2865();
function runjs_2865() {
	window.obj95_onTap_runningActionsCount = obj95_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_cows.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj95_onTap_runningActionsCount = window.obj95_onTap_runningActionsCount - 1;
if (window.obj95_onTap_runningActionsCount == 0) {
	obj95_onTap_actionGroup1();
}
	}, 1);
}






};
obj95_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj95_onTap_activeActionGroupIndex = -1;
		$("#obj95").trigger("obj95_onTap_ended");
		
		return;
	}
	window.obj95_onTap_activeActionGroupIndex = 1;
	





















};
obj728_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj728_onTap_activeActionGroupIndex = -1;
		$("#obj728").trigger("obj728_onTap_ended");
		
		return;
	}
	window.obj728_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj495 
show_1065();
function show_1065() {
	window.obj728_onTap_runningActionsCount = obj728_onTap_runningActionsCount + 1;
	$("#obj495").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj728_onTap_runningActionsCount = window.obj728_onTap_runningActionsCount - 1;
if (window.obj728_onTap_runningActionsCount == 0) {
	obj728_onTap_actionGroup1();
}
				$("#obj495").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj1068 
show_1072();
function show_1072() {
	window.obj728_onTap_runningActionsCount = obj728_onTap_runningActionsCount + 1;
	$("#obj1068").fadeIn(0, function() {
			setTimeout(function() {
				window.obj728_onTap_runningActionsCount = window.obj728_onTap_runningActionsCount - 1;
if (window.obj728_onTap_runningActionsCount == 0) {
	obj728_onTap_actionGroup1();
}
				$("#obj1068").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_1066();
function playAudioFile_1066() {
	window.obj728_onTap_runningActionsCount = obj728_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1066")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj728_onTap_runningActionsCount = window.obj728_onTap_runningActionsCount - 1;
if (window.obj728_onTap_runningActionsCount == 0) {
	obj728_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj728_onTap_runningActionsCount = window.obj728_onTap_runningActionsCount - 1;
if (window.obj728_onTap_runningActionsCount == 0) {
	obj728_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1067();
function playAudioFile_1067() {
	window.obj728_onTap_runningActionsCount = obj728_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1067")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj728_onTap_runningActionsCount = window.obj728_onTap_runningActionsCount - 1;
if (window.obj728_onTap_runningActionsCount == 0) {
	obj728_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj728_onTap_runningActionsCount = window.obj728_onTap_runningActionsCount - 1;
if (window.obj728_onTap_runningActionsCount == 0) {
	obj728_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_3462();
function runjs_3462() {
	window.obj728_onTap_runningActionsCount = obj728_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_corn.mp4",0,0,1.0);
	setTimeout(function() {
		window.obj728_onTap_runningActionsCount = window.obj728_onTap_runningActionsCount - 1;
if (window.obj728_onTap_runningActionsCount == 0) {
	obj728_onTap_actionGroup1();
}
	}, 1);
}






};
obj728_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj728_onTap_activeActionGroupIndex = -1;
		$("#obj728").trigger("obj728_onTap_ended");
		
		return;
	}
	window.obj728_onTap_activeActionGroupIndex = 1;
	





















};
obj747_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj747_onTap_activeActionGroupIndex = -1;
		$("#obj747").trigger("obj747_onTap_ended");
		
		return;
	}
	window.obj747_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj471 
show_749();
function show_749() {
	window.obj747_onTap_runningActionsCount = obj747_onTap_runningActionsCount + 1;
	$("#obj471").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;
if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup1();
}
				$("#obj471").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj2353 
show_750();
function show_750() {
	window.obj747_onTap_runningActionsCount = obj747_onTap_runningActionsCount + 1;
	$("#obj2353").fadeIn(0, function() {
			setTimeout(function() {
				window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;
if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup1();
}
				$("#obj2353").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_751();
function playAudioFile_751() {
	window.obj747_onTap_runningActionsCount = obj747_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile751")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;
if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;
if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2863();
function runjs_2863() {
	window.obj747_onTap_runningActionsCount = obj747_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_duck.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;
if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup1();
}
	}, 1);
}






};
obj747_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj747_onTap_activeActionGroupIndex = -1;
		$("#obj747").trigger("obj747_onTap_ended");
		
		return;
	}
	window.obj747_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_753();
function playAudioFile_753() {
	window.obj747_onTap_runningActionsCount = obj747_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile753")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;
if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj747_onTap_runningActionsCount = window.obj747_onTap_runningActionsCount - 1;
if (window.obj747_onTap_runningActionsCount == 0) {
	obj747_onTap_actionGroup2();
}
	}
	
}














};
obj747_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj747_onTap_activeActionGroupIndex = -1;
		$("#obj747").trigger("obj747_onTap_ended");
		
		return;
	}
	window.obj747_onTap_activeActionGroupIndex = 2;
	





















};
obj760_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj760_onTap_activeActionGroupIndex = -1;
		$("#obj760").trigger("obj760_onTap_ended");
		
		return;
	}
	window.obj760_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj549 
show_762();
function show_762() {
	window.obj760_onTap_runningActionsCount = obj760_onTap_runningActionsCount + 1;
	$("#obj549").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj760_onTap_runningActionsCount = window.obj760_onTap_runningActionsCount - 1;
if (window.obj760_onTap_runningActionsCount == 0) {
	obj760_onTap_actionGroup1();
}
				$("#obj549").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj817 
show_763();
function show_763() {
	window.obj760_onTap_runningActionsCount = obj760_onTap_runningActionsCount + 1;
	$("#obj817").fadeIn(0, function() {
			setTimeout(function() {
				window.obj760_onTap_runningActionsCount = window.obj760_onTap_runningActionsCount - 1;
if (window.obj760_onTap_runningActionsCount == 0) {
	obj760_onTap_actionGroup1();
}
				$("#obj817").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_3465();
function playAudioFile_3465() {
	window.obj760_onTap_runningActionsCount = obj760_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile3465")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj760_onTap_runningActionsCount = window.obj760_onTap_runningActionsCount - 1;
if (window.obj760_onTap_runningActionsCount == 0) {
	obj760_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj760_onTap_runningActionsCount = window.obj760_onTap_runningActionsCount - 1;
if (window.obj760_onTap_runningActionsCount == 0) {
	obj760_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_764();
function playAudioFile_764() {
	window.obj760_onTap_runningActionsCount = obj760_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile764")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj760_onTap_runningActionsCount = window.obj760_onTap_runningActionsCount - 1;
if (window.obj760_onTap_runningActionsCount == 0) {
	obj760_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj760_onTap_runningActionsCount = window.obj760_onTap_runningActionsCount - 1;
if (window.obj760_onTap_runningActionsCount == 0) {
	obj760_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2867();
function runjs_2867() {
	window.obj760_onTap_runningActionsCount = obj760_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_birds.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj760_onTap_runningActionsCount = window.obj760_onTap_runningActionsCount - 1;
if (window.obj760_onTap_runningActionsCount == 0) {
	obj760_onTap_actionGroup1();
}
	}, 1);
}






};
obj760_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj760_onTap_activeActionGroupIndex = -1;
		$("#obj760").trigger("obj760_onTap_ended");
		
		return;
	}
	window.obj760_onTap_activeActionGroupIndex = 1;
	





















};
obj779_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj779_onTap_activeActionGroupIndex = -1;
		$("#obj779").trigger("obj779_onTap_ended");
		
		return;
	}
	window.obj779_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj480 
show_781();
function show_781() {
	window.obj779_onTap_runningActionsCount = obj779_onTap_runningActionsCount + 1;
	$("#obj480").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj779_onTap_runningActionsCount = window.obj779_onTap_runningActionsCount - 1;
if (window.obj779_onTap_runningActionsCount == 0) {
	obj779_onTap_actionGroup1();
}
				$("#obj480").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj602 
show_782();
function show_782() {
	window.obj779_onTap_runningActionsCount = obj779_onTap_runningActionsCount + 1;
	$("#obj602").fadeIn(0, function() {
			setTimeout(function() {
				window.obj779_onTap_runningActionsCount = window.obj779_onTap_runningActionsCount - 1;
if (window.obj779_onTap_runningActionsCount == 0) {
	obj779_onTap_actionGroup1();
}
				$("#obj602").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_783();
function playAudioFile_783() {
	window.obj779_onTap_runningActionsCount = obj779_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile783")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj779_onTap_runningActionsCount = window.obj779_onTap_runningActionsCount - 1;
if (window.obj779_onTap_runningActionsCount == 0) {
	obj779_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj779_onTap_runningActionsCount = window.obj779_onTap_runningActionsCount - 1;
if (window.obj779_onTap_runningActionsCount == 0) {
	obj779_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2868();
function runjs_2868() {
	window.obj779_onTap_runningActionsCount = obj779_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_twodogs.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj779_onTap_runningActionsCount = window.obj779_onTap_runningActionsCount - 1;
if (window.obj779_onTap_runningActionsCount == 0) {
	obj779_onTap_actionGroup1();
}
	}, 1);
}






};
obj779_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj779_onTap_activeActionGroupIndex = -1;
		$("#obj779").trigger("obj779_onTap_ended");
		
		return;
	}
	window.obj779_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_785();
function playAudioFile_785() {
	window.obj779_onTap_runningActionsCount = obj779_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile785")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj779_onTap_runningActionsCount = window.obj779_onTap_runningActionsCount - 1;
if (window.obj779_onTap_runningActionsCount == 0) {
	obj779_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj779_onTap_runningActionsCount = window.obj779_onTap_runningActionsCount - 1;
if (window.obj779_onTap_runningActionsCount == 0) {
	obj779_onTap_actionGroup2();
}
	}
	
}














};
obj779_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj779_onTap_activeActionGroupIndex = -1;
		$("#obj779").trigger("obj779_onTap_ended");
		
		return;
	}
	window.obj779_onTap_activeActionGroupIndex = 2;
	





















};
obj786_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj786_onTap_activeActionGroupIndex = -1;
		$("#obj786").trigger("obj786_onTap_ended");
		
		return;
	}
	window.obj786_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj486 
show_788();
function show_788() {
	window.obj786_onTap_runningActionsCount = obj786_onTap_runningActionsCount + 1;
	$("#obj486").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj786_onTap_runningActionsCount = window.obj786_onTap_runningActionsCount - 1;
if (window.obj786_onTap_runningActionsCount == 0) {
	obj786_onTap_actionGroup1();
}
				$("#obj486").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj606 
show_789();
function show_789() {
	window.obj786_onTap_runningActionsCount = obj786_onTap_runningActionsCount + 1;
	$("#obj606").fadeIn(0, function() {
			setTimeout(function() {
				window.obj786_onTap_runningActionsCount = window.obj786_onTap_runningActionsCount - 1;
if (window.obj786_onTap_runningActionsCount == 0) {
	obj786_onTap_actionGroup1();
}
				$("#obj606").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_790();
function playAudioFile_790() {
	window.obj786_onTap_runningActionsCount = obj786_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile790")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj786_onTap_runningActionsCount = window.obj786_onTap_runningActionsCount - 1;
if (window.obj786_onTap_runningActionsCount == 0) {
	obj786_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj786_onTap_runningActionsCount = window.obj786_onTap_runningActionsCount - 1;
if (window.obj786_onTap_runningActionsCount == 0) {
	obj786_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2872();
function runjs_2872() {
	window.obj786_onTap_runningActionsCount = obj786_onTap_runningActionsCount + 1;

	UnicerPlayer.playVideo("act_chicken.mp4", 0, 0, 1.0);
	setTimeout(function() {
		window.obj786_onTap_runningActionsCount = window.obj786_onTap_runningActionsCount - 1;
if (window.obj786_onTap_runningActionsCount == 0) {
	obj786_onTap_actionGroup1();
}
	}, 1);
}






};
obj786_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj786_onTap_activeActionGroupIndex = -1;
		$("#obj786").trigger("obj786_onTap_ended");
		
		return;
	}
	window.obj786_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_792();
function playAudioFile_792() {
	window.obj786_onTap_runningActionsCount = obj786_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile792")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj786_onTap_runningActionsCount = window.obj786_onTap_runningActionsCount - 1;
if (window.obj786_onTap_runningActionsCount == 0) {
	obj786_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj786_onTap_runningActionsCount = window.obj786_onTap_runningActionsCount - 1;
if (window.obj786_onTap_runningActionsCount == 0) {
	obj786_onTap_actionGroup2();
}
	}
	
}














};
obj786_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj786_onTap_activeActionGroupIndex = -1;
		$("#obj786").trigger("obj786_onTap_ended");
		
		return;
	}
	window.obj786_onTap_activeActionGroupIndex = 2;
	





















};
obj793_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj793_onTap_activeActionGroupIndex = -1;
		$("#obj793").trigger("obj793_onTap_ended");
		
		return;
	}
	window.obj793_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj384 
show_795();
function show_795() {
	window.obj793_onTap_runningActionsCount = obj793_onTap_runningActionsCount + 1;
	$("#obj384").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj793_onTap_runningActionsCount = window.obj793_onTap_runningActionsCount - 1;
if (window.obj793_onTap_runningActionsCount == 0) {
	obj793_onTap_actionGroup1();
}
				$("#obj384").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj590 
show_796();
function show_796() {
	window.obj793_onTap_runningActionsCount = obj793_onTap_runningActionsCount + 1;
	$("#obj590").fadeIn(0, function() {
			setTimeout(function() {
				window.obj793_onTap_runningActionsCount = window.obj793_onTap_runningActionsCount - 1;
if (window.obj793_onTap_runningActionsCount == 0) {
	obj793_onTap_actionGroup1();
}
				$("#obj590").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_797();
function playAudioFile_797() {
	window.obj793_onTap_runningActionsCount = obj793_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile797")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj793_onTap_runningActionsCount = window.obj793_onTap_runningActionsCount - 1;
if (window.obj793_onTap_runningActionsCount == 0) {
	obj793_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj793_onTap_runningActionsCount = window.obj793_onTap_runningActionsCount - 1;
if (window.obj793_onTap_runningActionsCount == 0) {
	obj793_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2862();
function runjs_2862() {
	window.obj793_onTap_runningActionsCount = obj793_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_turkey.mp4",0,0,1.0);
	setTimeout(function() {
		window.obj793_onTap_runningActionsCount = window.obj793_onTap_runningActionsCount - 1;
if (window.obj793_onTap_runningActionsCount == 0) {
	obj793_onTap_actionGroup1();
}
	}, 1);
}






};
obj793_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj793_onTap_activeActionGroupIndex = -1;
		$("#obj793").trigger("obj793_onTap_ended");
		
		return;
	}
	window.obj793_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_799();
function playAudioFile_799() {
	window.obj793_onTap_runningActionsCount = obj793_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile799")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj793_onTap_runningActionsCount = window.obj793_onTap_runningActionsCount - 1;
if (window.obj793_onTap_runningActionsCount == 0) {
	obj793_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj793_onTap_runningActionsCount = window.obj793_onTap_runningActionsCount - 1;
if (window.obj793_onTap_runningActionsCount == 0) {
	obj793_onTap_actionGroup2();
}
	}
	
}














};
obj793_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj793_onTap_activeActionGroupIndex = -1;
		$("#obj793").trigger("obj793_onTap_ended");
		
		return;
	}
	window.obj793_onTap_activeActionGroupIndex = 2;
	





















};
obj800_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj800_onTap_activeActionGroupIndex = -1;
		$("#obj800").trigger("obj800_onTap_ended");
		
		return;
	}
	window.obj800_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj492 
show_802();
function show_802() {
	window.obj800_onTap_runningActionsCount = obj800_onTap_runningActionsCount + 1;
	$("#obj492").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj800_onTap_runningActionsCount = window.obj800_onTap_runningActionsCount - 1;
if (window.obj800_onTap_runningActionsCount == 0) {
	obj800_onTap_actionGroup1();
}
				$("#obj492").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj598 
show_803();
function show_803() {
	window.obj800_onTap_runningActionsCount = obj800_onTap_runningActionsCount + 1;
	$("#obj598").fadeIn(0, function() {
			setTimeout(function() {
				window.obj800_onTap_runningActionsCount = window.obj800_onTap_runningActionsCount - 1;
if (window.obj800_onTap_runningActionsCount == 0) {
	obj800_onTap_actionGroup1();
}
				$("#obj598").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_804();
function playAudioFile_804() {
	window.obj800_onTap_runningActionsCount = obj800_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile804")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj800_onTap_runningActionsCount = window.obj800_onTap_runningActionsCount - 1;
if (window.obj800_onTap_runningActionsCount == 0) {
	obj800_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj800_onTap_runningActionsCount = window.obj800_onTap_runningActionsCount - 1;
if (window.obj800_onTap_runningActionsCount == 0) {
	obj800_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2869();
function runjs_2869() {
	window.obj800_onTap_runningActionsCount = obj800_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_woman.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj800_onTap_runningActionsCount = window.obj800_onTap_runningActionsCount - 1;
if (window.obj800_onTap_runningActionsCount == 0) {
	obj800_onTap_actionGroup1();
}
	}, 1);
}






};
obj800_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj800_onTap_activeActionGroupIndex = -1;
		$("#obj800").trigger("obj800_onTap_ended");
		
		return;
	}
	window.obj800_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_806();
function playAudioFile_806() {
	window.obj800_onTap_runningActionsCount = obj800_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile806")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj800_onTap_runningActionsCount = window.obj800_onTap_runningActionsCount - 1;
if (window.obj800_onTap_runningActionsCount == 0) {
	obj800_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj800_onTap_runningActionsCount = window.obj800_onTap_runningActionsCount - 1;
if (window.obj800_onTap_runningActionsCount == 0) {
	obj800_onTap_actionGroup2();
}
	}
	
}














};
obj800_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj800_onTap_activeActionGroupIndex = -1;
		$("#obj800").trigger("obj800_onTap_ended");
		
		return;
	}
	window.obj800_onTap_activeActionGroupIndex = 2;
	





















};
obj817_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj817_onLoad_activeActionGroupIndex = -1;
		$("#obj817").trigger("obj817_onLoad_ended");
		
		return;
	}
	window.obj817_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj817 
hide_820();
function hide_820() {
	window.obj817_onLoad_runningActionsCount = obj817_onLoad_runningActionsCount + 1;
	$("#obj817").fadeOut(0, function() {
			setTimeout(function() {
				window.obj817_onLoad_runningActionsCount = window.obj817_onLoad_runningActionsCount - 1;
if (window.obj817_onLoad_runningActionsCount == 0) {
	obj817_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj817_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj817_onLoad_activeActionGroupIndex = -1;
		$("#obj817").trigger("obj817_onLoad_ended");
		
		return;
	}
	window.obj817_onLoad_activeActionGroupIndex = 1;
	





















};
obj821_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj821_onTap_activeActionGroupIndex = -1;
		$("#obj821").trigger("obj821_onTap_ended");
		
		return;
	}
	window.obj821_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj474 
show_823();
function show_823() {
	window.obj821_onTap_runningActionsCount = obj821_onTap_runningActionsCount + 1;
	$("#obj474").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup1();
}
				$("#obj474").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj610 
show_824();
function show_824() {
	window.obj821_onTap_runningActionsCount = obj821_onTap_runningActionsCount + 1;
	$("#obj610").fadeIn(0, function() {
			setTimeout(function() {
				window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup1();
}
				$("#obj610").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_825();
function playAudioFile_825() {
	window.obj821_onTap_runningActionsCount = obj821_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile825")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2870();
function runjs_2870() {
	window.obj821_onTap_runningActionsCount = obj821_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_duckandducklings.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup1();
}
	}, 1);
}






};
obj821_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj821_onTap_activeActionGroupIndex = -1;
		$("#obj821").trigger("obj821_onTap_ended");
		
		return;
	}
	window.obj821_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_827();
function playAudioFile_827() {
	window.obj821_onTap_runningActionsCount = obj821_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile827")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup2();
}
	}
	
}














};
obj821_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj821_onTap_activeActionGroupIndex = -1;
		$("#obj821").trigger("obj821_onTap_ended");
		
		return;
	}
	window.obj821_onTap_activeActionGroupIndex = 2;
	





















};
obj846_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj846_onTap_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_onTap_ended");
		
		return;
	}
	window.obj846_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj545 
show_848();
function show_848() {
	window.obj846_onTap_runningActionsCount = obj846_onTap_runningActionsCount + 1;
	$("#obj545").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj846_onTap_runningActionsCount = window.obj846_onTap_runningActionsCount - 1;
if (window.obj846_onTap_runningActionsCount == 0) {
	obj846_onTap_actionGroup1();
}
				$("#obj545").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj618 
show_849();
function show_849() {
	window.obj846_onTap_runningActionsCount = obj846_onTap_runningActionsCount + 1;
	$("#obj618").fadeIn(0, function() {
			setTimeout(function() {
				window.obj846_onTap_runningActionsCount = window.obj846_onTap_runningActionsCount - 1;
if (window.obj846_onTap_runningActionsCount == 0) {
	obj846_onTap_actionGroup1();
}
				$("#obj618").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_850();
function playAudioFile_850() {
	window.obj846_onTap_runningActionsCount = obj846_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile850")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj846_onTap_runningActionsCount = window.obj846_onTap_runningActionsCount - 1;
if (window.obj846_onTap_runningActionsCount == 0) {
	obj846_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj846_onTap_runningActionsCount = window.obj846_onTap_runningActionsCount - 1;
if (window.obj846_onTap_runningActionsCount == 0) {
	obj846_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2866();
function runjs_2866() {
	window.obj846_onTap_runningActionsCount = obj846_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_plant.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj846_onTap_runningActionsCount = window.obj846_onTap_runningActionsCount - 1;
if (window.obj846_onTap_runningActionsCount == 0) {
	obj846_onTap_actionGroup1();
}
	}, 1);
}






};
obj846_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj846_onTap_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_onTap_ended");
		
		return;
	}
	window.obj846_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_852();
function playAudioFile_852() {
	window.obj846_onTap_runningActionsCount = obj846_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile852")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj846_onTap_runningActionsCount = window.obj846_onTap_runningActionsCount - 1;
if (window.obj846_onTap_runningActionsCount == 0) {
	obj846_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj846_onTap_runningActionsCount = window.obj846_onTap_runningActionsCount - 1;
if (window.obj846_onTap_runningActionsCount == 0) {
	obj846_onTap_actionGroup2();
}
	}
	
}














};
obj846_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj846_onTap_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_onTap_ended");
		
		return;
	}
	window.obj846_onTap_activeActionGroupIndex = 2;
	





















};
obj861_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj861_onTap_activeActionGroupIndex = -1;
		$("#obj861").trigger("obj861_onTap_ended");
		
		return;
	}
	window.obj861_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj483 
show_863();
function show_863() {
	window.obj861_onTap_runningActionsCount = obj861_onTap_runningActionsCount + 1;
	$("#obj483").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj861_onTap_runningActionsCount = window.obj861_onTap_runningActionsCount - 1;
if (window.obj861_onTap_runningActionsCount == 0) {
	obj861_onTap_actionGroup1();
}
				$("#obj483").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj868 
show_864();
function show_864() {
	window.obj861_onTap_runningActionsCount = obj861_onTap_runningActionsCount + 1;
	$("#obj868").fadeIn(0, function() {
			setTimeout(function() {
				window.obj861_onTap_runningActionsCount = window.obj861_onTap_runningActionsCount - 1;
if (window.obj861_onTap_runningActionsCount == 0) {
	obj861_onTap_actionGroup1();
}
				$("#obj868").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_865();
function playAudioFile_865() {
	window.obj861_onTap_runningActionsCount = obj861_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile865")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj861_onTap_runningActionsCount = window.obj861_onTap_runningActionsCount - 1;
if (window.obj861_onTap_runningActionsCount == 0) {
	obj861_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj861_onTap_runningActionsCount = window.obj861_onTap_runningActionsCount - 1;
if (window.obj861_onTap_runningActionsCount == 0) {
	obj861_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_3464();
function runjs_3464() {
	window.obj861_onTap_runningActionsCount = obj861_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_parrot.mp4",0,0,1.0);
	setTimeout(function() {
		window.obj861_onTap_runningActionsCount = window.obj861_onTap_runningActionsCount - 1;
if (window.obj861_onTap_runningActionsCount == 0) {
	obj861_onTap_actionGroup1();
}
	}, 1);
}






};
obj861_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj861_onTap_activeActionGroupIndex = -1;
		$("#obj861").trigger("obj861_onTap_ended");
		
		return;
	}
	window.obj861_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_877();
function playAudioFile_877() {
	window.obj861_onTap_runningActionsCount = obj861_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile877")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj861_onTap_runningActionsCount = window.obj861_onTap_runningActionsCount - 1;
if (window.obj861_onTap_runningActionsCount == 0) {
	obj861_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj861_onTap_runningActionsCount = window.obj861_onTap_runningActionsCount - 1;
if (window.obj861_onTap_runningActionsCount == 0) {
	obj861_onTap_actionGroup2();
}
	}
	
}














};
obj861_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj861_onTap_activeActionGroupIndex = -1;
		$("#obj861").trigger("obj861_onTap_ended");
		
		return;
	}
	window.obj861_onTap_activeActionGroupIndex = 2;
	





















};
obj868_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj868_onLoad_activeActionGroupIndex = -1;
		$("#obj868").trigger("obj868_onLoad_ended");
		
		return;
	}
	window.obj868_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj868 
hide_871();
function hide_871() {
	window.obj868_onLoad_runningActionsCount = obj868_onLoad_runningActionsCount + 1;
	$("#obj868").fadeOut(0, function() {
			setTimeout(function() {
				window.obj868_onLoad_runningActionsCount = window.obj868_onLoad_runningActionsCount - 1;
if (window.obj868_onLoad_runningActionsCount == 0) {
	obj868_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj868_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj868_onLoad_activeActionGroupIndex = -1;
		$("#obj868").trigger("obj868_onLoad_ended");
		
		return;
	}
	window.obj868_onLoad_activeActionGroupIndex = 1;
	





















};
obj872_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj872_onLoad_activeActionGroupIndex = -1;
		$("#obj872").trigger("obj872_onLoad_ended");
		
		return;
	}
	window.obj872_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj872 
hide_875();
function hide_875() {
	window.obj872_onLoad_runningActionsCount = obj872_onLoad_runningActionsCount + 1;
	$("#obj872").fadeOut(0, function() {
			setTimeout(function() {
				window.obj872_onLoad_runningActionsCount = window.obj872_onLoad_runningActionsCount - 1;
if (window.obj872_onLoad_runningActionsCount == 0) {
	obj872_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj872_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj872_onLoad_activeActionGroupIndex = -1;
		$("#obj872").trigger("obj872_onLoad_ended");
		
		return;
	}
	window.obj872_onLoad_activeActionGroupIndex = 1;
	





















};
obj878_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj878_onTap_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_onTap_ended");
		
		return;
	}
	window.obj878_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj543 
show_880();
function show_880() {
	window.obj878_onTap_runningActionsCount = obj878_onTap_runningActionsCount + 1;
	$("#obj543").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj878_onTap_runningActionsCount = window.obj878_onTap_runningActionsCount - 1;
if (window.obj878_onTap_runningActionsCount == 0) {
	obj878_onTap_actionGroup1();
}
				$("#obj543").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj614 
show_881();
function show_881() {
	window.obj878_onTap_runningActionsCount = obj878_onTap_runningActionsCount + 1;
	$("#obj614").fadeIn(0, function() {
			setTimeout(function() {
				window.obj878_onTap_runningActionsCount = window.obj878_onTap_runningActionsCount - 1;
if (window.obj878_onTap_runningActionsCount == 0) {
	obj878_onTap_actionGroup1();
}
				$("#obj614").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_882();
function playAudioFile_882() {
	window.obj878_onTap_runningActionsCount = obj878_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile882")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj878_onTap_runningActionsCount = window.obj878_onTap_runningActionsCount - 1;
if (window.obj878_onTap_runningActionsCount == 0) {
	obj878_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj878_onTap_runningActionsCount = window.obj878_onTap_runningActionsCount - 1;
if (window.obj878_onTap_runningActionsCount == 0) {
	obj878_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2873();
function runjs_2873() {
	window.obj878_onTap_runningActionsCount = obj878_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_hangingplant.mp4", 0, 0, 1.0);
	setTimeout(function() {
		window.obj878_onTap_runningActionsCount = window.obj878_onTap_runningActionsCount - 1;
if (window.obj878_onTap_runningActionsCount == 0) {
	obj878_onTap_actionGroup1();
}
	}, 1);
}






};
obj878_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj878_onTap_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_onTap_ended");
		
		return;
	}
	window.obj878_onTap_activeActionGroupIndex = 1;
	






//	action: playAudioFile
playAudioFile_884();
function playAudioFile_884() {
	window.obj878_onTap_runningActionsCount = obj878_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile884")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj878_onTap_runningActionsCount = window.obj878_onTap_runningActionsCount - 1;
if (window.obj878_onTap_runningActionsCount == 0) {
	obj878_onTap_actionGroup2();
}
		}, false);
	} else {
		window.obj878_onTap_runningActionsCount = window.obj878_onTap_runningActionsCount - 1;
if (window.obj878_onTap_runningActionsCount == 0) {
	obj878_onTap_actionGroup2();
}
	}
	
}














};
obj878_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj878_onTap_activeActionGroupIndex = -1;
		$("#obj878").trigger("obj878_onTap_ended");
		
		return;
	}
	window.obj878_onTap_activeActionGroupIndex = 2;
	





















};
obj1058_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1058_onTap_activeActionGroupIndex = -1;
		$("#obj1058").trigger("obj1058_onTap_ended");
		
		return;
	}
	window.obj1058_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj538 
show_1060();
function show_1060() {
	window.obj1058_onTap_runningActionsCount = obj1058_onTap_runningActionsCount + 1;
	$("#obj538").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj1058_onTap_runningActionsCount = window.obj1058_onTap_runningActionsCount - 1;
if (window.obj1058_onTap_runningActionsCount == 0) {
	obj1058_onTap_actionGroup1();
}
				$("#obj538").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj2755 
show_1061();
function show_1061() {
	window.obj1058_onTap_runningActionsCount = obj1058_onTap_runningActionsCount + 1;
	$("#obj2755").fadeIn(0, function() {
			setTimeout(function() {
				window.obj1058_onTap_runningActionsCount = window.obj1058_onTap_runningActionsCount - 1;
if (window.obj1058_onTap_runningActionsCount == 0) {
	obj1058_onTap_actionGroup1();
}
				$("#obj2755").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_3463();
function playAudioFile_3463() {
	window.obj1058_onTap_runningActionsCount = obj1058_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile3463")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1058_onTap_runningActionsCount = window.obj1058_onTap_runningActionsCount - 1;
if (window.obj1058_onTap_runningActionsCount == 0) {
	obj1058_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1058_onTap_runningActionsCount = window.obj1058_onTap_runningActionsCount - 1;
if (window.obj1058_onTap_runningActionsCount == 0) {
	obj1058_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_1062();
function playAudioFile_1062() {
	window.obj1058_onTap_runningActionsCount = obj1058_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile1062")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1058_onTap_runningActionsCount = window.obj1058_onTap_runningActionsCount - 1;
if (window.obj1058_onTap_runningActionsCount == 0) {
	obj1058_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj1058_onTap_runningActionsCount = window.obj1058_onTap_runningActionsCount - 1;
if (window.obj1058_onTap_runningActionsCount == 0) {
	obj1058_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_2871();
function runjs_2871() {
	window.obj1058_onTap_runningActionsCount = obj1058_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_trees.mp4", 0,0,1.0);
	setTimeout(function() {
		window.obj1058_onTap_runningActionsCount = window.obj1058_onTap_runningActionsCount - 1;
if (window.obj1058_onTap_runningActionsCount == 0) {
	obj1058_onTap_actionGroup1();
}
	}, 1);
}






};
obj1058_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1058_onTap_activeActionGroupIndex = -1;
		$("#obj1058").trigger("obj1058_onTap_ended");
		
		return;
	}
	window.obj1058_onTap_activeActionGroupIndex = 1;
	





















};
obj1068_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1068_onLoad_activeActionGroupIndex = -1;
		$("#obj1068").trigger("obj1068_onLoad_ended");
		
		return;
	}
	window.obj1068_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1068 
hide_1071();
function hide_1071() {
	window.obj1068_onLoad_runningActionsCount = obj1068_onLoad_runningActionsCount + 1;
	$("#obj1068").fadeOut(0, function() {
			setTimeout(function() {
				window.obj1068_onLoad_runningActionsCount = window.obj1068_onLoad_runningActionsCount - 1;
if (window.obj1068_onLoad_runningActionsCount == 0) {
	obj1068_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj1068_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1068_onLoad_activeActionGroupIndex = -1;
		$("#obj1068").trigger("obj1068_onLoad_ended");
		
		return;
	}
	window.obj1068_onLoad_activeActionGroupIndex = 1;
	





















};
obj2353_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2353_onLoad_activeActionGroupIndex = -1;
		$("#obj2353").trigger("obj2353_onLoad_ended");
		
		return;
	}
	window.obj2353_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2353 
hide_2356();
function hide_2356() {
	window.obj2353_onLoad_runningActionsCount = obj2353_onLoad_runningActionsCount + 1;
	$("#obj2353").fadeOut(0, function() {
			setTimeout(function() {
				window.obj2353_onLoad_runningActionsCount = window.obj2353_onLoad_runningActionsCount - 1;
if (window.obj2353_onLoad_runningActionsCount == 0) {
	obj2353_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj2353_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2353_onLoad_activeActionGroupIndex = -1;
		$("#obj2353").trigger("obj2353_onLoad_ended");
		
		return;
	}
	window.obj2353_onLoad_activeActionGroupIndex = 1;
	





















};
obj2725_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2725_onTap_activeActionGroupIndex = -1;
		$("#obj2725").trigger("obj2725_onTap_ended");
		
		return;
	}
	window.obj2725_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj556 
show_2727();
function show_2727() {
	window.obj2725_onTap_runningActionsCount = obj2725_onTap_runningActionsCount + 1;
	$("#obj556").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2725_onTap_runningActionsCount = window.obj2725_onTap_runningActionsCount - 1;
if (window.obj2725_onTap_runningActionsCount == 0) {
	obj2725_onTap_actionGroup1();
}
				$("#obj556").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj594 
show_2730();
function show_2730() {
	window.obj2725_onTap_runningActionsCount = obj2725_onTap_runningActionsCount + 1;
	$("#obj594").fadeIn(0, function() {
			setTimeout(function() {
				window.obj2725_onTap_runningActionsCount = window.obj2725_onTap_runningActionsCount - 1;
if (window.obj2725_onTap_runningActionsCount == 0) {
	obj2725_onTap_actionGroup1();
}
				$("#obj594").trigger('SCEventShow');
			}, 1);
		}
	);
}





//	action: playAudioFile
playAudioFile_2728();
function playAudioFile_2728() {
	window.obj2725_onTap_runningActionsCount = obj2725_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2728")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2725_onTap_runningActionsCount = window.obj2725_onTap_runningActionsCount - 1;
if (window.obj2725_onTap_runningActionsCount == 0) {
	obj2725_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2725_onTap_runningActionsCount = window.obj2725_onTap_runningActionsCount - 1;
if (window.obj2725_onTap_runningActionsCount == 0) {
	obj2725_onTap_actionGroup1();
}
	}
	
}
//	action: playAudioFile
playAudioFile_2729();
function playAudioFile_2729() {
	window.obj2725_onTap_runningActionsCount = obj2725_onTap_runningActionsCount + 1;
	var myAudio = $("#obj_audio_playSoundFile2729")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) myAudio.src = myAudio.src; // myAudio.currentTime = 0 does not work on iOS
	myAudio.play();
	if (waitForCompletion) {
		myAudio.addEventListener('ended', function() {
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2725_onTap_runningActionsCount = window.obj2725_onTap_runningActionsCount - 1;
if (window.obj2725_onTap_runningActionsCount == 0) {
	obj2725_onTap_actionGroup1();
}
		}, false);
	} else {
		window.obj2725_onTap_runningActionsCount = window.obj2725_onTap_runningActionsCount - 1;
if (window.obj2725_onTap_runningActionsCount == 0) {
	obj2725_onTap_actionGroup1();
}
	}
	
}








//	action: Run JavaScript
runjs_3461();
function runjs_3461() {
	window.obj2725_onTap_runningActionsCount = obj2725_onTap_runningActionsCount + 1;

	UnicefPlayer.playVideo("act_bee.mp4",0,0,1.0);
	setTimeout(function() {
		window.obj2725_onTap_runningActionsCount = window.obj2725_onTap_runningActionsCount - 1;
if (window.obj2725_onTap_runningActionsCount == 0) {
	obj2725_onTap_actionGroup1();
}
	}, 1);
}






};
obj2725_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2725_onTap_activeActionGroupIndex = -1;
		$("#obj2725").trigger("obj2725_onTap_ended");
		
		return;
	}
	window.obj2725_onTap_activeActionGroupIndex = 1;
	





















};
obj2755_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2755_onLoad_activeActionGroupIndex = -1;
		$("#obj2755").trigger("obj2755_onLoad_ended");
		
		return;
	}
	window.obj2755_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj2755 
hide_2758();
function hide_2758() {
	window.obj2755_onLoad_runningActionsCount = obj2755_onLoad_runningActionsCount + 1;
	$("#obj2755").fadeOut(0, function() {
			setTimeout(function() {
				window.obj2755_onLoad_runningActionsCount = window.obj2755_onLoad_runningActionsCount - 1;
if (window.obj2755_onLoad_runningActionsCount == 0) {
	obj2755_onLoad_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj2755_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2755_onLoad_activeActionGroupIndex = -1;
		$("#obj2755").trigger("obj2755_onLoad_ended");
		
		return;
	}
	window.obj2755_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		



















/*
 *
 *   obj303: Event Load
 *
 */
setTimeout(function () {
if (window.obj303_onLoad_activeActionGroupIndex != -1) return;
var obj303_onLoad_runningActionsCount = 0;
var obj303_onLoad_loopCount = 0;
obj303_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj306: Event Load
 *
 */
setTimeout(function () {
if (window.obj306_onLoad_activeActionGroupIndex != -1) return;
var obj306_onLoad_runningActionsCount = 0;
var obj306_onLoad_loopCount = 0;
obj306_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj309: Event Load
 *
 */
setTimeout(function () {
if (window.obj309_onLoad_activeActionGroupIndex != -1) return;
var obj309_onLoad_runningActionsCount = 0;
var obj309_onLoad_loopCount = 0;
obj309_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj312: Event Load
 *
 */
setTimeout(function () {
if (window.obj312_onLoad_activeActionGroupIndex != -1) return;
var obj312_onLoad_runningActionsCount = 0;
var obj312_onLoad_loopCount = 0;
obj312_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj315: Event Load
 *
 */
setTimeout(function () {
if (window.obj315_onLoad_activeActionGroupIndex != -1) return;
var obj315_onLoad_runningActionsCount = 0;
var obj315_onLoad_loopCount = 0;
obj315_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj327: Event Touch Down
 *
 */
 
$("#obj327").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj327_onTap_activeActionGroupIndex != -1) return;
var obj327_onTap_runningActionsCount = 0;
var obj327_onTap_loopCount = 0;
obj327_onTap_actionGroup0();
});







/*
 *
 *   obj335: Event Touch Down
 *
 */
 
$("#obj335").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj335_onTap_activeActionGroupIndex != -1) return;
var obj335_onTap_runningActionsCount = 0;
var obj335_onTap_loopCount = 0;
obj335_onTap_actionGroup0();
});









/*
 *
 *   obj351: Event Load
 *
 */
setTimeout(function () {
if (window.obj351_onLoad_activeActionGroupIndex != -1) return;
var obj351_onLoad_runningActionsCount = 0;
var obj351_onLoad_loopCount = 0;
obj351_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj353: Event Load
 *
 */
setTimeout(function () {
if (window.obj353_onLoad_activeActionGroupIndex != -1) return;
var obj353_onLoad_runningActionsCount = 0;
var obj353_onLoad_loopCount = 0;
obj353_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj355: Event Load
 *
 */
setTimeout(function () {
if (window.obj355_onLoad_activeActionGroupIndex != -1) return;
var obj355_onLoad_runningActionsCount = 0;
var obj355_onLoad_loopCount = 0;
obj355_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj357: Event Load
 *
 */
setTimeout(function () {
if (window.obj357_onLoad_activeActionGroupIndex != -1) return;
var obj357_onLoad_runningActionsCount = 0;
var obj357_onLoad_loopCount = 0;
obj357_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj384: Event Load
 *
 */
setTimeout(function () {
if (window.obj384_onLoad_activeActionGroupIndex != -1) return;
var obj384_onLoad_runningActionsCount = 0;
var obj384_onLoad_loopCount = 0;
obj384_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj468: Event Load
 *
 */
setTimeout(function () {
if (window.obj468_onLoad_activeActionGroupIndex != -1) return;
var obj468_onLoad_runningActionsCount = 0;
var obj468_onLoad_loopCount = 0;
obj468_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj471: Event Load
 *
 */
setTimeout(function () {
if (window.obj471_onLoad_activeActionGroupIndex != -1) return;
var obj471_onLoad_runningActionsCount = 0;
var obj471_onLoad_loopCount = 0;
obj471_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj474: Event Load
 *
 */
setTimeout(function () {
if (window.obj474_onLoad_activeActionGroupIndex != -1) return;
var obj474_onLoad_runningActionsCount = 0;
var obj474_onLoad_loopCount = 0;
obj474_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj480: Event Load
 *
 */
setTimeout(function () {
if (window.obj480_onLoad_activeActionGroupIndex != -1) return;
var obj480_onLoad_runningActionsCount = 0;
var obj480_onLoad_loopCount = 0;
obj480_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj465: Event Touch Down
 *
 */
 
$("#obj465").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj465_onTap_activeActionGroupIndex != -1) return;
var obj465_onTap_runningActionsCount = 0;
var obj465_onTap_loopCount = 0;
obj465_onTap_actionGroup0();
});









/*
 *
 *   obj483: Event Load
 *
 */
setTimeout(function () {
if (window.obj483_onLoad_activeActionGroupIndex != -1) return;
var obj483_onLoad_runningActionsCount = 0;
var obj483_onLoad_loopCount = 0;
obj483_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj486: Event Load
 *
 */
setTimeout(function () {
if (window.obj486_onLoad_activeActionGroupIndex != -1) return;
var obj486_onLoad_runningActionsCount = 0;
var obj486_onLoad_loopCount = 0;
obj486_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj492: Event Load
 *
 */
setTimeout(function () {
if (window.obj492_onLoad_activeActionGroupIndex != -1) return;
var obj492_onLoad_runningActionsCount = 0;
var obj492_onLoad_loopCount = 0;
obj492_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj538: Event Load
 *
 */
setTimeout(function () {
if (window.obj538_onLoad_activeActionGroupIndex != -1) return;
var obj538_onLoad_runningActionsCount = 0;
var obj538_onLoad_loopCount = 0;
obj538_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj541: Event Load
 *
 */
setTimeout(function () {
if (window.obj541_onLoad_activeActionGroupIndex != -1) return;
var obj541_onLoad_runningActionsCount = 0;
var obj541_onLoad_loopCount = 0;
obj541_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj543: Event Load
 *
 */
setTimeout(function () {
if (window.obj543_onLoad_activeActionGroupIndex != -1) return;
var obj543_onLoad_runningActionsCount = 0;
var obj543_onLoad_loopCount = 0;
obj543_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj545: Event Load
 *
 */
setTimeout(function () {
if (window.obj545_onLoad_activeActionGroupIndex != -1) return;
var obj545_onLoad_runningActionsCount = 0;
var obj545_onLoad_loopCount = 0;
obj545_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj549: Event Load
 *
 */
setTimeout(function () {
if (window.obj549_onLoad_activeActionGroupIndex != -1) return;
var obj549_onLoad_runningActionsCount = 0;
var obj549_onLoad_loopCount = 0;
obj549_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj556: Event Load
 *
 */
setTimeout(function () {
if (window.obj556_onLoad_activeActionGroupIndex != -1) return;
var obj556_onLoad_runningActionsCount = 0;
var obj556_onLoad_loopCount = 0;
obj556_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj495: Event Load
 *
 */
setTimeout(function () {
if (window.obj495_onLoad_activeActionGroupIndex != -1) return;
var obj495_onLoad_runningActionsCount = 0;
var obj495_onLoad_loopCount = 0;
obj495_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj332: Event Touch Down
 *
 */
 
$("#obj332").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj332_onTap_activeActionGroupIndex != -1) return;
var obj332_onTap_runningActionsCount = 0;
var obj332_onTap_loopCount = 0;
obj332_onTap_actionGroup0();
});









/*
 *
 *   obj590: Event Load
 *
 */
setTimeout(function () {
if (window.obj590_onLoad_activeActionGroupIndex != -1) return;
var obj590_onLoad_runningActionsCount = 0;
var obj590_onLoad_loopCount = 0;
obj590_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj594: Event Load
 *
 */
setTimeout(function () {
if (window.obj594_onLoad_activeActionGroupIndex != -1) return;
var obj594_onLoad_runningActionsCount = 0;
var obj594_onLoad_loopCount = 0;
obj594_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj598: Event Load
 *
 */
setTimeout(function () {
if (window.obj598_onLoad_activeActionGroupIndex != -1) return;
var obj598_onLoad_runningActionsCount = 0;
var obj598_onLoad_loopCount = 0;
obj598_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj602: Event Load
 *
 */
setTimeout(function () {
if (window.obj602_onLoad_activeActionGroupIndex != -1) return;
var obj602_onLoad_runningActionsCount = 0;
var obj602_onLoad_loopCount = 0;
obj602_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj606: Event Load
 *
 */
setTimeout(function () {
if (window.obj606_onLoad_activeActionGroupIndex != -1) return;
var obj606_onLoad_runningActionsCount = 0;
var obj606_onLoad_loopCount = 0;
obj606_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj610: Event Load
 *
 */
setTimeout(function () {
if (window.obj610_onLoad_activeActionGroupIndex != -1) return;
var obj610_onLoad_runningActionsCount = 0;
var obj610_onLoad_loopCount = 0;
obj610_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj614: Event Load
 *
 */
setTimeout(function () {
if (window.obj614_onLoad_activeActionGroupIndex != -1) return;
var obj614_onLoad_runningActionsCount = 0;
var obj614_onLoad_loopCount = 0;
obj614_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj618: Event Load
 *
 */
setTimeout(function () {
if (window.obj618_onLoad_activeActionGroupIndex != -1) return;
var obj618_onLoad_runningActionsCount = 0;
var obj618_onLoad_loopCount = 0;
obj618_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj622: Event Load
 *
 */
setTimeout(function () {
if (window.obj622_onLoad_activeActionGroupIndex != -1) return;
var obj622_onLoad_runningActionsCount = 0;
var obj622_onLoad_loopCount = 0;
obj622_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj675: Event Touch Down
 *
 */
 
$("#obj675").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj675_onTap_activeActionGroupIndex != -1) return;
var obj675_onTap_runningActionsCount = 0;
var obj675_onTap_loopCount = 0;
obj675_onTap_actionGroup0();
});







/*
 *
 *   obj95: Event Touch Down
 *
 */
 
$("#obj95").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj95_onTap_activeActionGroupIndex != -1) return;
var obj95_onTap_runningActionsCount = 0;
var obj95_onTap_loopCount = 0;
obj95_onTap_actionGroup0();
});







/*
 *
 *   obj728: Event Touch Down
 *
 */
 
$("#obj728").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj728_onTap_activeActionGroupIndex != -1) return;
var obj728_onTap_runningActionsCount = 0;
var obj728_onTap_loopCount = 0;
obj728_onTap_actionGroup0();
});







/*
 *
 *   obj747: Event Touch Down
 *
 */
 
$("#obj747").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj747_onTap_activeActionGroupIndex != -1) return;
var obj747_onTap_runningActionsCount = 0;
var obj747_onTap_loopCount = 0;
obj747_onTap_actionGroup0();
});







/*
 *
 *   obj760: Event Touch Down
 *
 */
 
$("#obj760").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj760_onTap_activeActionGroupIndex != -1) return;
var obj760_onTap_runningActionsCount = 0;
var obj760_onTap_loopCount = 0;
obj760_onTap_actionGroup0();
});







/*
 *
 *   obj779: Event Touch Down
 *
 */
 
$("#obj779").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj779_onTap_activeActionGroupIndex != -1) return;
var obj779_onTap_runningActionsCount = 0;
var obj779_onTap_loopCount = 0;
obj779_onTap_actionGroup0();
});







/*
 *
 *   obj786: Event Touch Down
 *
 */
 
$("#obj786").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj786_onTap_activeActionGroupIndex != -1) return;
var obj786_onTap_runningActionsCount = 0;
var obj786_onTap_loopCount = 0;
obj786_onTap_actionGroup0();
});







/*
 *
 *   obj793: Event Touch Down
 *
 */
 
$("#obj793").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj793_onTap_activeActionGroupIndex != -1) return;
var obj793_onTap_runningActionsCount = 0;
var obj793_onTap_loopCount = 0;
obj793_onTap_actionGroup0();
});







/*
 *
 *   obj800: Event Touch Down
 *
 */
 
$("#obj800").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj800_onTap_activeActionGroupIndex != -1) return;
var obj800_onTap_runningActionsCount = 0;
var obj800_onTap_loopCount = 0;
obj800_onTap_actionGroup0();
});









/*
 *
 *   obj817: Event Load
 *
 */
setTimeout(function () {
if (window.obj817_onLoad_activeActionGroupIndex != -1) return;
var obj817_onLoad_runningActionsCount = 0;
var obj817_onLoad_loopCount = 0;
obj817_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj821: Event Touch Down
 *
 */
 
$("#obj821").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj821_onTap_activeActionGroupIndex != -1) return;
var obj821_onTap_runningActionsCount = 0;
var obj821_onTap_loopCount = 0;
obj821_onTap_actionGroup0();
});







/*
 *
 *   obj846: Event Touch Down
 *
 */
 
$("#obj846").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj846_onTap_activeActionGroupIndex != -1) return;
var obj846_onTap_runningActionsCount = 0;
var obj846_onTap_loopCount = 0;
obj846_onTap_actionGroup0();
});







/*
 *
 *   obj861: Event Touch Down
 *
 */
 
$("#obj861").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj861_onTap_activeActionGroupIndex != -1) return;
var obj861_onTap_runningActionsCount = 0;
var obj861_onTap_loopCount = 0;
obj861_onTap_actionGroup0();
});









/*
 *
 *   obj868: Event Load
 *
 */
setTimeout(function () {
if (window.obj868_onLoad_activeActionGroupIndex != -1) return;
var obj868_onLoad_runningActionsCount = 0;
var obj868_onLoad_loopCount = 0;
obj868_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj872: Event Load
 *
 */
setTimeout(function () {
if (window.obj872_onLoad_activeActionGroupIndex != -1) return;
var obj872_onLoad_runningActionsCount = 0;
var obj872_onLoad_loopCount = 0;
obj872_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj878: Event Touch Down
 *
 */
 
$("#obj878").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj878_onTap_activeActionGroupIndex != -1) return;
var obj878_onTap_runningActionsCount = 0;
var obj878_onTap_loopCount = 0;
obj878_onTap_actionGroup0();
});







/*
 *
 *   obj1058: Event Touch Down
 *
 */
 
$("#obj1058").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1058_onTap_activeActionGroupIndex != -1) return;
var obj1058_onTap_runningActionsCount = 0;
var obj1058_onTap_loopCount = 0;
obj1058_onTap_actionGroup0();
});









/*
 *
 *   obj1068: Event Load
 *
 */
setTimeout(function () {
if (window.obj1068_onLoad_activeActionGroupIndex != -1) return;
var obj1068_onLoad_runningActionsCount = 0;
var obj1068_onLoad_loopCount = 0;
obj1068_onLoad_actionGroup0();
}, 200);







/*
 *
 *   obj2353: Event Load
 *
 */
setTimeout(function () {
if (window.obj2353_onLoad_activeActionGroupIndex != -1) return;
var obj2353_onLoad_runningActionsCount = 0;
var obj2353_onLoad_loopCount = 0;
obj2353_onLoad_actionGroup0();
}, 200);





/*
 *
 *   obj2725: Event Touch Down
 *
 */
 
$("#obj2725").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2725_onTap_activeActionGroupIndex != -1) return;
var obj2725_onTap_runningActionsCount = 0;
var obj2725_onTap_loopCount = 0;
obj2725_onTap_actionGroup0();
});









/*
 *
 *   obj2755: Event Load
 *
 */
setTimeout(function () {
if (window.obj2755_onLoad_activeActionGroupIndex != -1) return;
var obj2755_onLoad_runningActionsCount = 0;
var obj2755_onLoad_loopCount = 0;
obj2755_onLoad_actionGroup0();
}, 200);


		
		/*
		 *
	 	 *   Trigger onShow events for objects already shown on stage
	 	 *
	 	 */
	 	setTimeout(function() {
		
$("#obj45").trigger('SCEventShow');
$("#obj77").trigger('SCEventShow');
$("#obj327").trigger('SCEventShow');
$("#obj335").trigger('SCEventShow');
$("#obj465").trigger('SCEventShow');
$("#obj332").trigger('SCEventShow');
$("#obj675").trigger('SCEventShow');
$("#obj95").trigger('SCEventShow');
$("#obj728").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
$("#obj760").trigger('SCEventShow');
$("#obj779").trigger('SCEventShow');
$("#obj786").trigger('SCEventShow');
$("#obj793").trigger('SCEventShow');
$("#obj800").trigger('SCEventShow');
$("#obj821").trigger('SCEventShow');
$("#obj846").trigger('SCEventShow');
$("#obj861").trigger('SCEventShow');
$("#obj878").trigger('SCEventShow');
$("#obj1058").trigger('SCEventShow');
$("#obj2725").trigger('SCEventShow');
		$(window).trigger('SCEventPageReady');
		}, 200);
	 }
});
$(window).on(PubCoder.Events.PageReady, function() {
	
$(".SCButton")
});