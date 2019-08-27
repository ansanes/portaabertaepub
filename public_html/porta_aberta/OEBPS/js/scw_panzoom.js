var SCWPanZoom = function (element) {
    //window.PointerEvent = undefined;
    
    var self = this;
    
    self.widgetElement = $(element);
    self.widgetElementId = '#'+this.widgetElement.attr('id');

    self.externalLibElement = self.widgetElement.children(); // Reference to the jQuery.panzoom plugin

    self.contain = 'invert';
    self.maxZoom = 3;
    self.minZoom = 1;
    self.zoomStep = 0.3; // used in zoomIn/zoomOut functions
    self.zoomWheelStep = 0.1; // used on wheel event
    self.disablePan = false;
    self.disableZoom = false;
    self.startZoom = undefined;
    self.startPanX = 0;
    self.startPany = 0;
        
    self.editorMode = false;
    
    //
    // initialize the widget
    //
    this.init = function (editorMode) {
        
        if (editorMode !== undefined ){
            self.editorMode = editorMode;
        }
        
        self.widgetElement.trigger('OnPanZoomInitBefore');
        
        // retrive configuration data from the HTML element
        
        if (self.widgetElement.data('contain') !== undefined && self.widgetElement.data('contain') !== "") {
            self.contain = self.widgetElement.data('contain');
        }
        
        if (self.widgetElement.data('max-zoom')!== undefined && self.widgetElement.data('max-zoom') !== "") {
            self.maxZoom = parseFloat(self.widgetElement.data('max-zoom'));
        }
        
        if (self.widgetElement.data('min-zoom')!== undefined  && self.widgetElement.data('min-zoom') !== "") {
            self.minZoom = parseFloat(self.widgetElement.data('min-zoom'));
        }
        
        if (self.widgetElement.data('zoom-step')!== undefined  && self.widgetElement.data('zoom-step') !== "") {
            self.zoomStep = parseFloat(self.widgetElement.data('zoom-step'));
        }
        
        if (self.widgetElement.data('zoom-wheel-step')!== undefined  && self.widgetElement.data('zoom-wheel-step') !== "") {
            self.zoomWheelStep = parseFloat(self.widgetElement.data('zoom-wheel-step'));
        }
        
        if (self.widgetElement.data('disable-zoom')!== undefined && self.widgetElement.data('disable-zoom') !== "") {
            self.disableZoom = self.widgetElement.data('disable-zoom');
        }

        if (self.widgetElement.data('disable-pan')!== undefined && self.widgetElement.data('disable-pan') !== "") {
            self.disablePan = self.widgetElement.data('disable-pan');
        }
        
        if (self.widgetElement.data('initial-pan-x')!== undefined && self.widgetElement.data('initial-pan-x') !== "") {
            self.startPanX = parseFloat(self.widgetElement.data('initial-pan-x'));
        }
        if (self.widgetElement.data('initial-pan-y')!== undefined && self.widgetElement.data('initial-pan-y') !== "") {
            self.startPanY = parseFloat(self.widgetElement.data('initial-pan-y'));
        }
        
        var startZoom;
        if (self.widgetElement.data('initial-zoom')!== undefined && self.widgetElement.data('initial-zoom') !== "") {
            self.startZoom = parseFloat(self.widgetElement.data('initial-zoom'));
        }
        
        // Fix max/min zoom to grant startZoom value
        if (self.startZoom === undefined ) {
            self.startZoom = self.minZoom;
        }
        if (self.startZoom < self.minZoom) {
            self.minZoom = self.startZoom;
        } 
        if (self.startZoom > self.maxZoom) {
            self.maxZoom = self.startZoom;
        }
        
        self.externalLibElement.panzoom({
            // Should always be non-empty
            // Used to bind jQuery events without collisions
            // A guid is not added here as different instantiations/versions of Panzoom
            // on the same element is not supported.
            //eventNamespace: self.widgetElementId+' .panzoom',

            // Whether or not to transition the scale
            transition: true,

            // Default cursor style for the element
            cursor: "move",

            // There may be some use cases for zooming without panning or vice versa
            // NOTE: disablePan also disables focal point zooming
            disablePan: false, 
            disableZoom: false, 

            // The increment at which to zoom
            // adds/subtracts to the scale each time zoomIn/Out is called
            increment: self.zoomStep,

            minScale: self.minZoom,
            maxScale: self.maxZoom,

            // The default step for the range input
            // Precendence: default < HTML attribute < option setting
            rangeStep: 0.05,

            // Animation duration (ms)
            duration: 200,
            // CSS easing used for scale transition
            easing: "ease-in-out",

            // Indicate that the element should be contained within it's parent when panning
            // Note: this does not affect zooming outside of the parent
            // Set this value to 'invert' to only allow panning outside of the parent element (the opposite of the normal use of contain)
            // 'invert' is useful for a large Panzoom element where you don't want to show anything behind it
            contain: self.contain,

            // Transform value to which to always reset (string)
            // Defaults to the original transform on the element when Panzoom is initialized
            //startTransform: undefined,

            // This optional jQuery collection can be set to specify all of the elements
            // on which the transform should always be set.
            // It should have at least one element.
            // This is mainly used for delegating the pan and zoom transform settings
            // to another element or multiple elements.
            // The default is the Panzoom element wrapped in jQuery
            // See the [demo](http://timmywil.github.io/jquery.panzoom/demo/#set) for an example.
            // Note: only one Panzoom element will still handle events for a Panzoom instance.
            // Use multiple Panzoom instances for that use case.
            //$set: $elem,

            // Zoom buttons/links collection (you can also bind these yourself - e.g. `$button.on("click", function( e ) { e.preventDefault(); $elem.panzoom("zoomIn"); });` )
            //$zoomIn: $(),
            //$zoomOut: $(),
            // Range input on which to bind zooming functionality
            //$zoomRange: $(),
            // Reset buttons/links collection on which to bind the reset method
            //$reset: $(),

            // For convenience, these options will be bound to Panzoom events
            // These can all be bound normally on the Panzoom element
            // e.g. `$elem.on("panzoomend", function( e, panzoom ) { console.log( panzoom.getMatrix() ); });`
            onStart: function(e){
                self.widgetElement.trigger('OnPanZoomStart');                    
            },
            onChange: function(e){
                self.widgetElement.trigger('OnPanZoomChange');                  
            },
            onZoom: function(e){
                self.widgetElement.trigger('OnPanZoomZoom');
            },
            onPan: function(e){
                self.widgetElement.trigger('OnPanZoomPan');
            },
            onEnd: function(e){
                self.widgetElement.trigger('OnPanZoomEnd');
            },
            onReset: function(e){
                self.widgetElement.trigger('OnPanZoomReset');
            }

        });
        
        // Patch: SVG scale results in a pixelate effects
        self.externalLibElement.on('panzoomzoom', debounce(function () {
            this.style.display='none';
            this.offsetHeight;
            this.style.display='';
        }, 200));
        
        
        // console.log('contain: '+self.contain);
        // console.log('maxZoom: '+self.maxZoom);
        // console.log('minZoom: '+self.minZoom);
        // console.log('zoomStep: '+self.zoomStep);
        // console.log('zoomWheelStep: '+self.zoomWheelStep);
        // console.log('disableZoom: '+self.disableZoom);
        // console.log('disablePan: '+self.disablePan);
        // console.log('start x: '+self.startPanX);
        // console.log('start y: '+self.startPanY);
        // console.log('start zoom: '+self.startZoom);
        
        // Initial status
        //self.widgetElement.css('transform-origin','50% 50% 0px');
        this.reset();
        
        // Disable zoom or pan after the initial position
        self.externalLibElement.panzoom('option','disablePan', (self.disablePan || self.editorMode) );
        self.externalLibElement.panzoom('option','disableZoom', (self.disableZoom || self.editorMode) );        
        
        
        if (self.disablePan && !self.disableZoom) {
            self.widgetElement.addClass("zoomInCursor");
        }    
        
        // Bind mouse event
        if ( !self.editorMode) {
            
            self.widgetElement.hover(
                function (e) {
                    if (window.addEventListener) // older FF
                        window.addEventListener('DOMMouseScroll', self.preventDefault, false);
                    window.onwheel = self.preventDefault; // modern standard
                    window.onmousewheel = document.onmousewheel = self.preventDefault; // older browsers, IE
                },
                function (e) {
                    if (window.removeEventListener) // older FF
                        window.removeEventListener('DOMMouseScroll', self.preventDefault, false);
                    window.onmousewheel = document.onmousewheel = null;
                    window.onwheel = null;
                }
            
            );
            
            
            self.widgetElement.dblclick(this._dblclickEventHandler);
            
            //alert(  window.PointerEvent );
            //self.externalLibElement.on("pointerdown", alert("pointerdown"));
            //self.externalLibElement.on('MSPointerDown', alert("MSPointerDown"));
            //self.widgetElement.on('wheel', self.preventDefault);
            //self.widgetElement.on('mousewheel', self.preventDefault);
            //self.widgetElement.on('DOMMouseScroll', self.preventDefault);   
            //self.widgetElement.on('contextmenu', self.preventDefault) 
            self.widgetElement.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
            
        }
        
        // Fix problem on page resizing  
        $(window).on('resize', function() {
          self.widgetElement.panzoom('resetDimensions');
        });
        
        setTimeout(function(){ 
            self.widgetElement.show();
        }, 0);
        self.widgetElement.trigger('OnPanZoomInitAfter');
        
        return self;
    },
    
    this.preventDefault= function(e) {
                e = e || window.event;
                if (e.preventDefault)
                    e.preventDefault();
                e.returnValue = false;
            },
            
    this._dblclickEventHandler = function(event) {
        self.preventDefault(event);
     
        console.log(event);
        if (event.altKey || event.shiftKey) {
            self.zoomOut(event);
        } else {
            self.zoomIn(event);            
        }
        
    },
    
    
    this._wheelEventHandler = function(event) {
        // cross-browser wheel delta
        //event.preventDefault();
    	var e = window.event || e; // old IE support
    	var delta = (e.wheelDelta || -e.detail);
        self.incrementZoom(delta*self.zoomWheelStep);
    }
    
    this._resetZoom = function() {
        self.externalLibElement.panzoom("resetZoom");
    }
    
    
    this._resetPan = function() {
        self.externalLibElement.panzoom("resetPan");
    }
    
    this._reset = function(){
        self.externalLibElement.panzoom("reset");
    }
    
    //
    // Zoom functions
    //
    this.zoomIn = function(focal) {
        self.setZoom(self.getZoom()*(1+self.zoomStep), true, focal);
        
    }
    this.zoomOut = function(focal) {
        var ratio = self.zoomStep < 1 ? (1-self.zoomStep) : (1-1/self.zoomStep);
        self.setZoom(self.getZoom()*ratio, true, focal);
    }
    
    this.incrementZoom = function(level,anim,focal) {
        if (focal === undefined){
            focal = null;
        }
        if (anim === undefined){
            anim = false;
        }
        
        if (focal) {
            self.externalLibElement.panzoom('zoom', level+self.getZoom(), {animate: anim, focal: focal});
        } else {
            self.externalLibElement.panzoom('zoom', level+self.getZoom(), {animate: anim});       
        }

    }
    
    this.getZoom = function() {
        var matrix = self.externalLibElement.panzoom('getMatrix');
        var zoomLevel = matrix[0];
        return parseFloat(zoomLevel);
    }
    
    this.setZoom = function(level, anim, focal) {
        if (focal === undefined){
            focal = null;
        }
        
        if (anim === undefined){
            anim = true;
        }
        if (level > self.maxZoom) { level = self.maxZoom }
        if (level < self.minZoom) { level = self.minZoom }    
        if (focal) {
            self.externalLibElement.panzoom('zoom', level, {animate: anim, focal: focal});
        } else {
            self.externalLibElement.panzoom('zoom', level, {animate: anim});
        }
        
    }
    
    this.resetZoom = function(anim) {
        if (anim === undefined){
            anim = false;
        }
        self.setZoom(self.startZoom,anim);
    }
    
    //
    // Pan funtions
    //
    this.incrementPan = function(x,y) {
        self.externalLibElement.panzoom('pan', x, y, {relative: true});
    }
    
    this.setPan = function(x,y) {
        self.externalLibElement.panzoom('pan', x, y, {relative: false});
    }
    
    this.resetPan = function() {
        
        if (self.contain=='invert') {
            /* Invert condition has a differet origin 
               image (0,0) = image (left,top)
            */
            var boxSizeW = self.widgetElement.width();
            var boxSizeH = self.widgetElement.height();
            var imageSizeW = self.externalLibElement.width();
            var imageSizeH = self.externalLibElement.height();
            
            var deltaNewX = -(imageSizeW - boxSizeW)/2;
            var deltaNewY = -(imageSizeH - boxSizeH)/2;

            console.log(boxSizeW);            
            console.log(boxSizeH);
            console.log(imageSizeW);
            console.log(imageSizeH);
            console.log(deltaNewX);
            console.log(deltaNewY);
            self.externalLibElement.panzoom('pan', deltaNewX, deltaNewY, {relative: false});
        } 
        self.externalLibElement.panzoom('pan', self.startPanX, self.startPanY, {relative: true});
    }
    
    this.getPan = function() {
        var matrix = self.externalLibElement.panzoom('getMatrix');
        return {x: matrix[4], y:matrix[5]};
    }
    
    this.reset = function() {
        self.resetZoom(false);
        self.resetPan();
    }
}
