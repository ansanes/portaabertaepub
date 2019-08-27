// REF: http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/

var SimpleFloodFill = function (canvasElement,touchCanvasElement, bgcolor) {
    var self = this;
    
    //
    // Setter/Getter
    
    this.setFillColor = function (r,g,b,a) {
        if (typeof(a)==='undefined') a = 255;
        self.fillColor = [r,g,b,a];
    }
    
    this.setIgnoreAlpha = function(val) {
        self.ignoreAlphaFlag = val;
    }
    
    this.setTolerance = function(r,g,b,a) {
        self.colorTolerance = [r,g,b,a];
    }
    
    this.setBackgroundImageByID = function(bgImageID) {
        self.backgroundImage   = document.getElementById(bgImageID);
        self.canvas.style.background = self.bgcolor;
        self.setBackgroundImage(self.backgroundImage,0,0);
    }
    
    this.setBackgroundImage = function (img, leftMargin, topMargin, imgWidth, imgHeight) {
        self.backgroundImage=img;
        self.canvas.style.background = self.bgcolor;
        // return;
        
        if (typeof imgWidth === 'undefined' || typeof imgHeight === 'undefined' ){
            self.touchContext.drawImage(img, leftMargin, topMargin);
            self.context.drawImage(img, leftMargin, topMargin);
        } else {
            self.touchContext.drawImage(img, leftMargin, topMargin, imgWidth, imgHeight);
            self.context.drawImage(img, leftMargin, topMargin, imgWidth, imgHeight);
        }
        
    }
    
    this.fromCoordToArrayPos = function (x,y) {
        return (y*self.canvasWidth + x) * 4;
    }
    
    
    
    //
    // Main filling algorithm
    
    this.fill = function (mouseX,mouseY) {
        mouseX = self.truncateFloat(mouseX); // iBooks return float values so... truncate!
        mouseY = self.truncateFloat(mouseY); // iBooks return float values so... truncate!
        
        self.updateContext();
        this.initImageData();
        var newPos, x, y, pixelPos, leftFlag, rightFlag;
        
        // Init loop
        self.pixelStack.push([mouseX,mouseY]);
        self.setStartColor([mouseX,mouseY]);
        
        var initialColor = self.getPixelColor(mouseX,mouseY);
        
        if (self.ignoreAlphaFlag ) {
            if ( initialColor[0] == self.fillColor[0] && initialColor[1] == self.fillColor[1] && initialColor[2] == self.fillColor[2] ) {
                console.log('End right now! Set startColor == fillColor');
                return;
            }
        } else {
            if ( initialColor[0] == self.fillColor[0] && initialColor[1] == self.fillColor[1] && initialColor[2] == self.fillColor[2] && initialColor[3] == self.fillColor[3] ) {
                console.log('End right now! Set startColor == fillColor');
                return;
            }
        }
        
        // for each pixel in the stack
        while(self.pixelStack.length)
        {
            // pop a new start point
            newPos = self.pixelStack.pop();
            x = newPos[0];
            y = newPos[1];
  
            // evaluate position in imageData Array (c style)
            pixelPos = self.fromCoordToArrayPos(x,y);
            
            // loop vertically until image ends or color boundary is reached
            while(y-- >= 0 && self.isMatchingStartColor(pixelPos))
            {
              pixelPos -= self.canvasWidth * 4;
            }
            
            // loop backwards, set color and populate the stack
            pixelPos += self.canvasWidth * 4;
            ++y;
            leftFlag = false;
            rightFlag = false;
            while(y++ < self.canvasHeight-1 && self.isMatchingStartColor(pixelPos))
            {
              self.colorPixel(pixelPos);

              if(x > 0) {
                  
                if(self.isMatchingStartColor(pixelPos - 4)) {
                  if(!leftFlag) {
                    self.pixelStack.push([x - 1, y]);
                    leftFlag = true;
                  }
                } else if(leftFlag) {
                  leftFlag = false;
                }
                
              }
	
              if(x < self.canvasWidth-1) {
                  
                if(self.isMatchingStartColor(pixelPos + 4)) {
                  if(!rightFlag) {
                    self.pixelStack.push([x + 1, y]);
                    rightFlag = true;
                  }
                } else if(rightFlag) {
                  rightFlag = false;
                }
                
              }
			
              pixelPos += self.canvasWidth * 4;
            }
              
              
        }
        
        
        var imageDataSrc = self.tmpTouchImageData.data;
        var imageDataDest = self.imageData.data;
        
        self.imageData.data = self.blendImage (imageDataSrc, imageDataDest, self.canvasWidth, self.canvasHeight);
        self.context.putImageData(self.imageData, 0, 0);
        
    }
    
    
    //
    // Merge to image data
    
    this.removeNoise = function (imageDataSrc, imageDataDest, width, height, alphaThresold) {
        var pixels = 4 * width * height;
         while (pixels-- >=0) {
             if (pixels%4==3 && imageDataSrc[pixels] <= alphaThresold) {
                 // a
                 imageDataDest[pixels] = 0;
                 //// b
                 //pixels--;
                 //imageDataDest[pixels] = 0;
                 //// g
                 //pixels--;
                 //imageDataDest[pixels] = 0;
                 //// r
                 //pixels--;
                 //imageDataDest[pixels] = 0;
             }
         }
    }
    
    this.blendImage = function (imageDataSrc, imageDataDest, width, height, alpha) {
        
        alpha = typeof alpha !== 'undefined' ? alpha : true;
        var pixels = 4 * width * height;
        
        while (pixels-- >=0) {
            if (pixels%4==3 && imageDataSrc[pixels] <= self.colorTolerance[3]) {
                
                if (!alpha) {
                    // a
                    imageDataDest[pixels] = 255;
                    // b
                    pixels--;
                    imageDataDest[pixels] = 255;
                    // b
                    pixels--;
                    imageDataDest[pixels] = 255;
                    // r
                    pixels--;
                    imageDataDest[pixels] = 255;
                    
                } else {
                    pixels-=3;
                }
                
                continue;
            } else {
                
                // alpha
                var alphaSrcPerc = parseFloat(imageDataSrc[pixels])/255.0;
                var alphaDestPerc = 1.0-alphaSrcPerc;
                
                imageDataDest[pixels] = Math.round(255.0*alphaSrcPerc+255.0*alphaDestPerc);
                // B
                pixels--;
                imageDataDest[pixels] = Math.round(imageDataSrc[pixels]*alphaSrcPerc+imageDataDest[pixels]*alphaDestPerc);
                // G
                pixels--;
                imageDataDest[pixels] = Math.round(imageDataSrc[pixels]*alphaSrcPerc+imageDataDest[pixels]*alphaDestPerc);
                
                // R
                pixels--;
                imageDataDest[pixels] = Math.round(imageDataSrc[pixels]*alphaSrcPerc+imageDataDest[pixels]*alphaDestPerc);
                
            }
        }
        
        return imageDataDest;
    }
    
    
    //
    // Algorithm support functions
    
    this.getPixelColor = function (x,y) {
        var pixelPos = self.fromCoordToArrayPos(x,y);
        var r = self.tmpTouchImageData.data[pixelPos];	
        var g = self.tmpTouchImageData.data[pixelPos+1];	
        var b = self.tmpTouchImageData.data[pixelPos+2];
        var a = self.tmpTouchImageData.data[pixelPos+3];
        
        return [r,g,b,a]
    }
    
    this.colorPixel = function (pixelPos) {
      self.tmpTouchImageData.data[pixelPos]     = self.fillColor[0];
      self.tmpTouchImageData.data[pixelPos+1]   = self.fillColor[1];
      self.tmpTouchImageData.data[pixelPos+2]   = self.fillColor[2];
      self.tmpTouchImageData.data[pixelPos+3]   = self.fillColor[3];
    }
    
    this.isMatchingStartColor = function(pixelPos) {
      var r = self.tmpTouchImageData.data[pixelPos];	
      var g = self.tmpTouchImageData.data[pixelPos+1];	
      var b = self.tmpTouchImageData.data[pixelPos+2];
      var a = self.tmpTouchImageData.data[pixelPos+3];
      
      var dR = Math.abs(r - self.startColor[0]);
      var dG = Math.abs(g - self.startColor[1]);
      var dB = Math.abs(b - self.startColor[2]);
      var dA = Math.abs(a - self.startColor[3]);
      
      
      if (self.ignoreAlphaFlag) {
          return ( dR <= self.colorTolerance[0] &&
                   dG <= self.colorTolerance[1] &&
                   dB <= self.colorTolerance[2] );
          
      } else {
          return ( dR <= self.colorTolerance[0] &&
                   dG <= self.colorTolerance[1] &&
                   dB <= self.colorTolerance[2] &&
                   dA <= self.colorTolerance[3] );
          
      }
      
    }
    this.clear = function(event){
        if(event)
            event.preventDefault();
        self.touchContext.clearRect( 0, 0, self.canvasWidth, self.canvasHeight );
        self.context.clearRect( 0, 0, self.canvasWidth, self.canvasHeight  );  
        
        var fillStyle = self.context.fillStyle;
        self.context.fillStyle = self.bgcolor;
        self.context.fillRect( 0, 0, self.canvasWidth, self.canvasHeight );
        self.context.fillStyle = fillStyle;  
        
    }
    
    this.updateContext = function() {
        self.canvas         = $(self.canvasTag).get()[0];
        self.touchCanvas    = $(self.touchCanvasTag).get()[0];
        self.tmpTouchCanvas = $(self.tmpTouchCanvasTag).get()[0];
        self.canvasWidth    = self.canvas.clientWidth
        self.canvasHeight   = self.canvas.clientHeight;
        self.context        = self.canvas.getContext('2d');
        self.touchContext   = self.touchCanvas.getContext('2d');
        
        
        
    }

    this.initImageData = function() {
        self.imageData         = self.context.getImageData(0,0, self.canvasWidth, self.canvasHeight);
        self.touchImageData    = self.touchContext.getImageData(0,0, self.canvasWidth, self.canvasHeight);
        
        self.removeNoise(self.imageData, self.imageData, self.canvasWidth, self.canvasHeight, self.noiseAlphaThresold);
        self.removeNoise(self.touchImageData, self.touchImageData, self.canvasWidth, self.canvasHeight, self.noiseAlphaThresold);
        
        if ($('#__touchTempClone').length) { $('#__touchTempClone').remove(); }
        var newCanvas = document.createElement('canvas');
        newCanvas.id='__touchTempClone';
        newCanvas.style="display:none";
        newCanvas.width  = self.canvasWidth;
        newCanvas.height = self.canvasHeight;
        self.tmpTouchContext= newCanvas.getContext('2d');
        self.tmpTouchContext.drawImage(self.touchCanvas,0,0);
        self.tmpTouchImageData = self.tmpTouchContext.getImageData(0,0, self.canvasWidth, self.canvasHeight);
        self.removeNoise(self.tmpTouchImageData, self.tmpTouchImageData, self.canvasWidth, self.canvasHeight, self.noiseAlphaThresold);
    
    }
    
    this.setStartColor = function (pos) {
        var pixelPos = (pos[1]*self.canvasWidth + pos[0]) * 4;
        self.startColor[0] = self.tmpTouchImageData.data[pixelPos]  ;
        self.startColor[1] = self.tmpTouchImageData.data[pixelPos+1];
        self.startColor[2] = self.tmpTouchImageData.data[pixelPos+2];
        self.startColor[3] = self.tmpTouchImageData.data[pixelPos+3];
    }
    
    this.truncateFloat = function (val) {
        return val | 0;
    }
    
    
    //
    // Constructor
    
    this.pixelStack     = [];
    this.canvasTag      = canvasElement;
    this.touchCanvasTag = touchCanvasElement;
    this.bgcolor        = bgcolor;
    this.backgroundImage = new Image();
    
    this.fillColor      = [0,0,0,255];
    this.startColor     = [0,0,0,255];
    
    this.ignoreAlphaFlag = false; // Ignore alpha value during color match
    this.colorTolerance  = [0,0,0,125];
    this.noiseAlphaThresold = 250;
    
    
    this.updateContext();
    this.initImageData();
    
    
    
    
}

