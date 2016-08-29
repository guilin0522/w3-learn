function picCarousel(config){
    this.bPic = config.bPic || null;
    this.sPic = config.sPic || null;
    this.currentPic = config.currentPic || 0;
    this.interTime = config.interTime || 4000;
    this.delayTime = config.delayTime || 800;
    this.min_picNum = config.min_picNum || 5;
    this.bPicData = config.bPicData || null;
    this.sPicData = config.sPicData || null;
    this.picRender();
    picTime = setInterval(this.picAnimation.bind(this),this.interTime);
}

var bWidth = $(this.bPic).find("li").width();
var sWidth = $(this.sPic).find("li").width();
picCarousel.prototype.picRender = function(){
    var sPicShow = this.sPicData.slice(this.currentPic,this.min_picNum);
    for(var i = this.currentPic; i < this.min_picNum;i++){
        $(this.sPic).append('<li><a href="javascript:;"><img src="' +sPicShow[i]+'" alt=""></a></li>')
            .find("li").eq(this.currentPic).addClass("on");
    }
    $(this.bPic).append('<li><a href="javascript:;"><img src="'+this.bPicData[this.currentPic]+'" alt=""></a></li>');
    this.currentPic+=1;
};

picCarousel.prototype.picAnimation = function(){
    if(this.currentPic <this.min_picNum ){
        $(this.sPic).find('li').eq(this.currentPic).addClass("on");
        $(this.sPic).find('li').eq(this.currentPic-1).removeClass("on");
    }else{
        $(this.sPic).append('<li><a href="javascript:;"><img src="'+this.sPicData[this.currentPic]+'" alt=""></a></li>');
        $(this.sPic).find('li').eq(-1).addClass("on");
        $(this.sPic).find('li').eq(-2).removeClass("on");
        $(this.sPic).animate({'left':sWidth},this.delayTime);
        $(this.sPic).find('li').eq(0).remove()
    }
    $(this.bPic).append('<li><a href="javascript:;"><img src="'+this.bPicData[this.currentPic]+'" alt=""></a></li>')
        .animate({'left':bWidth},this.delayTime)
        .find('li').eq(0).remove();
    if(this.currentPic < this.sPicData.length-1){
        this.currentPic += 1;
    }else{
        clearInterval(picTime);
    }

};

