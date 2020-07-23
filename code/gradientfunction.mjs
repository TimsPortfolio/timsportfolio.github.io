var gradient = function(type,x,y,width,height,startR,startG,startB,endR,endG,endB){
    if(type === "vertical"){
        var currentR = startR;
        var currentG = startG;
        var currentB = startB;
        var currentLine = 0;
        noStroke();
        for (var i = 0; i < height; i++){
            fill(currentR,currentG,currentB);
            rect(x,y+currentLine,width,1);
            currentLine++;
            currentR = startR+((endR-startR)/height)*currentLine;
            currentG = startG+((endG-startG)/height)*currentLine;
            currentB = startB+((endB-startB)/height)*currentLine;
        }
    } else if(type === "horizontal"){
        var currentR = startR;
        var currentG = startG;
        var currentB = startB;
        var currentLine = 0;
        noStroke();
        for (var i = 0; i < width; i++){
            fill(currentR,currentG,currentB);
            rect(x+currentLine,y,1,height);
            currentLine++;
            currentR = startR+((endR-startR)/width)*currentLine;
            currentG = startG+((endG-startG)/width)*currentLine;
            currentB = startB+((endB-startB)/width)*currentLine;
        }
    } else if (type === "central"){
        var currentR = startR;
        var currentG = startG;
        var currentB = startB;
        var currentLine = 0;
        var circleWidth = width;
        var circleHeight = height;
        noStroke();
        fill(currentR,currentG,currentB);
        rect(x,y,width,height);
        for (var i = 0; i < ((width+height)/2); i++){
            fill(currentR,currentG,currentB);
            ellipse(x+width/2,y+height/2,circleWidth,circleHeight);
            currentLine++;
            circleWidth -= (width+height)/2/height;
            circleHeight -= (width+height)/2/width;
            currentR = (startR+((endR-startR))/width*currentLine);
            currentG = (startG+((endG-startG))/width*currentLine);
            currentB = (startB+((endB-startB))/width*currentLine);
        }
    } else if (type === "ellipse"){
        var currentR = startR;
        var currentG = startG;
        var currentB = startB;
        var currentLine = 0;
        var circleWidth = width;
        var circleHeight = height;
        noStroke();
        fill(currentR,currentG,currentB);
        for (var i = 0; i < ((width+height)/2); i++){
            fill(currentR,currentG,currentB);
            ellipse(x+width/2,y+height/2,circleWidth,circleHeight);
            currentLine++;
            circleWidth -= (width+height)/2/height;
            circleHeight -= (width+height)/2/width;
            currentR = (startR+((endR-startR))/width*currentLine);
            currentG = (startG+((endG-startG))/width*currentLine);
            currentB = (startB+((endB-startB))/width*currentLine);
        }
    }
};