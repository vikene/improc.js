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
    
    
    
    
    
    
}

 stream_obj = new ImprocStream( "camera_video","mydraw",true,false);
stream_obj.getStream();



