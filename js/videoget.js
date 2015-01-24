/* real time video processing !*/
var videoElement;
var canvas;
function ImprocStream(videoId,canvasz,video,audio){
    videoElement = videoId;
    canvas = canvasz;
   
    this.video = video;
    this.audio = audio;
    
    this.constrains = {video: video, audio: audio};

}

ImprocStream.prototype = {
    constructor: ImprocStream,
    getStream: function(){
      navigator.getUserMedia =  navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
         
        navigator.getUserMedia(this.constrains,ImprocStream.prototype.success,ImprocStream.prototype.failed);
       
    },
    success: function(stream){
        
        var localVideo = document.getElementById(videoElement);
        
        if(window.URL)
        {
            localVideo.src= URL.createObjectURL(stream);
        }
        else{
            localVideo.src = stream;
        }
        
    },
    failed: function(){
        console.log("failed!");
    },
    draw:function(){
        var localVideo = document.getElementById(videoElement);
        var can = document.getElementById(canvas);
        var ctx = can.getContext('2d');
        window.setInterval(function(){ctx.drawImage(localVideo,5,5,640,480);
                                     
			var dataobj = ctx.getImageData(0,0,640,480);
			for(var i=0;i<dataobj.data.length;i+=4)
			{
				dataobj.data[i]=0;
				dataobj.data[i+2]=0;
			}
			ctx.putImageData(dataobj,0,0);
                                     
                                     
                                     
                                     },20);
    }
    
    
    
    
    
}

 stream_obj = new ImprocStream( "camera_video","mydrawable",true,false);
stream_obj.getStream();
stream_obj.draw();



