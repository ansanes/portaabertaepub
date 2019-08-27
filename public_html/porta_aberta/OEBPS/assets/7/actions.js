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

/*
 * 
 * Init SCCounter
 *
 * 
 */

$(window).load(function () {
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

    $("#obj903").SCWidget().init();


    if (!navigator.userAgent.match(/PubCoderHelper/i)) {
        /*
         *
         *   Action Groups
         *
         */


        /*
         *
         *  Events
         *
         */


        /*
         *
         *   Trigger onShow events for objects already shown on stage
         *
         */
        setTimeout(function () {

            $("#obj3194").trigger('SCEventShow');
            $("#obj1076").trigger('SCEventShow');
            $("#obj903").trigger('SCEventShow');
            $("#obj905").trigger('SCEventShow');
            $("#obj2394").trigger('SCEventShow');
            $("#obj2995").trigger('SCEventShow');
            $("#obj961").trigger('SCEventShow');
            $(window).trigger('SCEventPageReady');
        }, 200);
    }
});
$(window).on(PubCoder.Events.PageReady, function () {

});