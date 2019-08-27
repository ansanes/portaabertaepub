// Core 
var __SC_Widget = function () {
    var self = this;
    
    // This is a global array that it contains all SCWidgets instantiated in the current page
    window.__SCWidgetList = window.__SCWidgetList || Array();
    
    // retrive the element id to attach the wiget to
    var widget_id = self.attr('id');
    
    // Create a new widget and return it
    this.newInstance = function () {
        var widget_class = self.data('widget');
        var widget_id = self.attr('id');
        window.__SCWidgetList[widget_id] = new window[widget_class](self);
        return window.__SCWidgetList[widget_id];
    }
    
    // Let's go!
    this.init = function() {
        if (window.__SCWidgetList[widget_id] !== undefined ) {
            return window.__SCWidgetList[widget_id];
        } else {
            return this.newInstance();        
        }
    }
    
    return this.init();
}

// map core object to jQuery
jQuery.fn.SCWidget = __SC_Widget;
