var grid = function(x,y,width,height,xSpace,ySpace){
    rect(x,y,width,height);
    for(var i = 0 ; i<width; i+=xSpace){
        line(x+i,y,x+i,y+height);
    }
    for(var i = 0 ; i<height; i+=ySpace){
        line(x,y+i,x+width,y+i);
    }
};